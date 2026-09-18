const currentUser = readCurrentUser();
const notice = document.getElementById('dashboardNotice');
const adminWorkspace = document.getElementById('adminWorkspace');
const memberWorkspace = document.getElementById('memberWorkspace');
let adminUsers = [];
const API_BASE_URL = window.RKSHOP_API_URL || '';

if (!currentUser) {
    window.location.href = '/';
} else {
    document.getElementById('dashboardIdentity').textContent = currentUser.email;
    document.getElementById('memberName').textContent = currentUser.name;
    document.getElementById('memberEmail').textContent = currentUser.email;
    document.getElementById('logoutButton').addEventListener('click', logout);

    if (currentUser.role === 'admin') {
        document.getElementById('dashboardHeading').textContent = 'Administration';
        document.getElementById('dashboardDescription').textContent = 'Ajoutez des items et consultez les comptes de RK SHOP.';
        adminWorkspace.hidden = false;
        memberWorkspace.hidden = true;
        setupAdminTabs();
        document.getElementById('productForm').addEventListener('submit', addProduct);
        document.getElementById('userSearch').addEventListener('input', filterUsers);
        document.getElementById('loyaltyForm').addEventListener('submit', giveLoyaltyPoints);
        if (!currentUser.token) {
            showNotice('Session expirée. Reconnecte-toi depuis http://localhost:3000.');
        } else {
            loadAdminData();
        }
    }
}

function readCurrentUser() {
    try { return JSON.parse(localStorage.getItem('rkshop_current_user') || 'null'); }
    catch { return null; }
}

function logout() {
    localStorage.removeItem('rkshop_current_user');
    window.location.href = '/';
}

async function apiRequest(url, options = {}) {
    const apiUrl = API_BASE_URL
        ? `${API_BASE_URL}${url}`
        : (window.location.protocol === 'file:' ? `http://localhost:3000${url}` : url);
    const headers = { ...(options.headers || {}), 'x-auth-token': currentUser.token };
    const response = await fetch(apiUrl, { ...options, headers });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'Une erreur est survenue.');
    return data;
}

async function loadAdminData() {
    try {
        const [products, users] = await Promise.all([apiRequest('/api/products'), apiRequest('/api/users')]);
        renderProducts(products);
        renderUsers(users);
        renderLoyaltyUsers(users);
    } catch (error) {
        showNotice(error.message);
    }
}

async function addProduct(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
        await apiRequest('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        });
        form.reset();
        showNotice('Item ajouté au catalogue.');
        await loadAdminData();
    } catch (error) {
        showNotice(error.message);
    } finally {
        button.disabled = false;
    }
}

function renderProducts(products) {
    document.getElementById('productCount').textContent = products.length;
    document.getElementById('overviewProductCount').textContent = products.length;
    document.getElementById('productList').innerHTML = products.length
        ? products.map(product => `<li><div><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.category)}</span></div><em>${new Date(product.createdAt).toLocaleDateString('fr-FR')}</em></li>`).join('')
        : '<li>Aucun item ajouté.</li>';
}

function renderUsers(users) {
    adminUsers = users;
    document.getElementById('userCount').textContent = users.length;
    document.getElementById('overviewUserCount').textContent = users.length;
    document.getElementById('userList').innerHTML = users.map(user => `<li><div><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.email)}</span></div><em>${escapeHtml(user.role || 'user')}</em></li>`).join('');
}

function renderLoyaltyUsers(users) {
    const userSelect = document.getElementById('loyaltyUser');
    userSelect.innerHTML = '<option value="">Choisir un utilisateur</option>' + users
        .filter(user => user.role !== 'admin')
        .map(user => `<option value="${escapeHtml(user.id)}">${escapeHtml(user.name)} - ${escapeHtml(user.email)}</option>`)
        .join('');

    document.getElementById('loyaltyList').innerHTML = users.length
        ? users.map(user => `<li><div><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.email)}</span></div><em>${Number(user.points) || 0} points</em></li>`).join('')
        : '<li>Aucun utilisateur.</li>';
}

async function giveLoyaltyPoints(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const userId = document.getElementById('loyaltyUser').value;
    const points = Number(document.getElementById('loyaltyPoints').value);
    const button = form.querySelector('button[type="submit"]');
    if (!userId || !Number.isInteger(points) || points <= 0) {
        showNotice('Choisis un utilisateur et indique un nombre de points valide.');
        return;
    }

    button.disabled = true;
    try {
        await apiRequest(`/api/users/${encodeURIComponent(userId)}/points`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ points })
        });
        form.reset();
        showNotice(`${points} points ajoutés avec succès.`);
        await loadAdminData();
    } catch (error) {
        showNotice(error.message);
    } finally {
        button.disabled = false;
    }
}

function filterUsers(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const filteredUsers = adminUsers.filter((user) => {
        const searchableText = `${user.name} ${user.email} ${user.role || 'user'}`.toLowerCase();
        return searchableText.includes(searchTerm);
    });
    document.getElementById('userCount').textContent = filteredUsers.length;
    document.getElementById('userList').innerHTML = filteredUsers.length
        ? filteredUsers.map(user => `<li><div><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.email)}</span></div><em>${escapeHtml(user.role || 'user')}</em></li>`).join('')
        : '<li>Aucun utilisateur trouvé.</li>';
}

function setupAdminTabs() {
    const title = document.getElementById('adminPanelTitle');
    const labels = {
        overview: "Vue d'ensemble",
        add: 'Ajouter un item',
        products: 'Catalogue',
        users: 'Utilisateurs',
        loyalty: 'Points fidélité',
        settings: 'Paramètres'
    };

    document.querySelectorAll('[data-admin-tab]').forEach((tab) => {
        tab.addEventListener('click', () => {
            const selectedPanel = tab.dataset.adminTab;
            document.querySelectorAll('[data-admin-tab]').forEach((item) => item.classList.toggle('active', item === tab));
            document.querySelectorAll('[data-admin-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.adminPanel === selectedPanel));
            title.textContent = labels[selectedPanel];
        });
    });
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function showNotice(message) {
    notice.textContent = message;
}
