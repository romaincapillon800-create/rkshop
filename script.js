// Catalogue de produits
const products = [
    // SNEAKERS
    { name: 'Kayano 14', category: 'sneakers', description: 'ASICS Kayano 14 au design rétro et confortable. Sneakers de running performance combinant tech avancée et style intemporel.' },
    { name: 'B30', category: 'sneakers', description: 'Sneakers Dior B30 au design sportif et moderne. Modèle premium de la maison Dior, reconnu pour son confort et son style luxueux.' },
    { name: 'Balenciaga Runner', category: 'sneakers', description: 'Sneakers Balenciaga Runner au design usé et futuriste. Un modèle iconique de la marque avec un style streetwear très recherché.' },
    { name: 'Balenciaga Track', category: 'sneakers', description: 'Balenciaga Track avec son design technique complexe et sa semelle épaisse. Sneakers emblématiques de la marque dans le monde du streetwear.' },
    { name: 'B22', category: 'sneakers', description: 'Sneakers Dior B22 avec silhouette chunky et look sportif. Modèle très populaire de Dior dans la mode urbaine de luxe.' },
    { name: 'LV Skate', category: 'sneakers', description: 'Louis Vuitton Skate inspirées de l\'univers skate et streetwear. Sneakers premium avec matériaux de qualité et design unique.' },
    { name: 'Nocta Hotstep 2', category: 'sneakers', description: 'Nike Nocta Hotstep 2 issue de la collaboration entre Drake et Nike. Modèle rare combinant performance sportive et style urbain.' },
    { name: 'LV Trainers', category: 'sneakers', description: 'Louis Vuitton Trainer inspirées du basket-ball vintage. Sneakers luxueuses avec finitions haut de gamme et design iconique.' },
    { name: 'TN', category: 'sneakers', description: 'Nike Air Max Plus (TN), modèle emblématique de Nike avec technologie Air et style agressif très populaire dans le streetwear.' },
    { name: 'Louboutin', category: 'sneakers', description: 'Sneakers Louboutin avec la signature semelle rouge. Chaussures de luxe premium reconnaissables au design distinctif et élégant.' },
    { name: 'Converse CDG', category: 'sneakers', description: 'Converse x Comme des Garçons au design exclusif. Collaboration iconique de streetwear avec détails premium et style unique.' },
    { name: 'Saucony Omni 9', category: 'sneakers', description: 'Saucony Omni 9 au design rétro et sportif. Modèle emblématique de running avec amorti confortable, maintien stable et style polyvalent.' },
    { name: 'On Running Cloud', category: 'sneakers', description: 'On Running Cloud au design épuré et contemporain. Silhouette emblématique avec détails techniques et style minimaliste, parfaite pour une allure sportive et tendance.'},
    { name: 'Prada Cup', category: 'sneakers', description: 'Prada Cup au design élégant et contemporain. Silhouette emblématique aux finitions premium, mêlant inspiration nautique et style sophistiqué pour une allure raffinée.'},

    // VESTES / MANTEAUX
    { name: 'Moncler Maya', category: 'vestes', description: 'Doudoune Moncler Maya légendaire et élégante. Modèle phare de la marque avec design sophistiqué et performance thermique.' },
    { name: 'Doudoune Burberry', category: 'vestes', description: 'Doudoune Burberry élégante et chaude avec finitions premium. Parfaite pour l\'hiver avec le style classique de la maison Burberry.' },
    { name: 'Doudoune CP Company', category: 'vestes', description: 'Doudoune CP Company technique et moderne, connue pour ses matériaux innovants et son style urbain.' },
    { name: 'Coupe-vent Moncler', category: 'vestes', description: 'Coupe-vent Moncler léger et stylé. Une pièce pratique et élégante conçue par la célèbre marque de luxe spécialisée dans les vêtements d\'extérieur.' },

    // VÊTEMENTS
    { name: 'T-shirt & Short Denim Tears', category: 'vetements', description: 'T-shirt et short Denim Tears avec design avant-gardiste. Collection premium combinant confort et style urbain.' },
    { name: 'Chaussettes Ralph Lauren', category: 'vetements', description: 'Chaussettes Polo Ralph Lauren confortables et durables. Essentiels de luxe pour compléter votre garde-robe.' },
    { name: 'T-shirt CDG', category: 'vetements', description: 'T-shirt Comme des Garçons avec design iconique. Basique premium avec les détails signature de la marque.' },
    { name: 'Polo Ralph Lauren', category: 'vetements', description: 'Polo Polo Ralph Lauren classique avec logo brodé. Vêtement intemporel symbole du style preppy.' },
    { name: 'Jogging Ralph Lauren', category: 'vetements', description: 'Jogging Polo Ralph Lauren confortable et élégant. Vêtement streetwear de luxe pour le casual chic.' },
    { name: 'Hoodie Ralph Lauren', category: 'vetements', description: 'Hoodie Polo Ralph Lauren avec logo signature. Vêtement chaud et stylé pour les jours frais.' },
    { name: 'Hoodie Stone Island', category: 'vetements', description: 'Hoodie Stone Island technique avec badge. Vêtement urbain reconnu pour sa qualité et son design.' },
    { name: 'Patch Stone Island', category: 'vetements', description: 'Patch Stone Island authentique avec logo compass. Accessoire à customiser vos vêtements préférés.' },
    { name: 'Pull Ami', category: 'vetements', description: 'Pull Ami Paris avec design minimaliste et élégant. Vêtement streetwear premium de la maison parisienne.' },
    { name: 'Pull Stone Island', category: 'vetements', description: 'Pull Stone Island technique et durable. Vêtement reconnu pour sa qualité et son camo iconic.' },
    { name: 'Pull CDG', category: 'vetements', description: 'Pull Comme des Garçons avec design avant-gardiste. Vêtement premium avec logo signature distinctif.' },
    { name: 'Pull Margiela', category: 'vetements', description: 'Pull Maison Margiela aux finitions exceptionnelles. Vêtement haut de gamme avec design minimaliste et raffiné.' },
    { name: 'Pull Essentials', category: 'vetements', description: 'Pull Fear of God Essentials confortable et tendance. Vêtement streetwear casual avec qualité premium.' },
    { name: 'Jogging Essentials', category: 'vetements', description: 'Jogging Fear of God Essentials confortable. Vêtement essentiel pour le style streetwear décontracté.' },
    { name: 'T-shirt YSL', category: 'vetements', description: 'T-shirt Yves Saint Laurent avec logo brodé. Basique de luxe incontournable avec style sophistiqué.' },
    { name: 'Veste Arcteryx', category: 'vetements', description: 'Veste Arc\'teryx technique et performante. Vêtement outdoor premium avec technologies innovantes.' },
    { name: 'Zip CP Company', category: 'vetements', description: 'Coupe-vent zippé CP Company technique. Vêtement urbain avec design épuré et matériaux de qualité.' },
    { name: 'Pull CP Company', category: 'vetements', description: 'Pull CP Company avec finitions premium. Vêtement streetwear reconnu pour son design et sa durabilité.' },
    { name: 'Pull Ralph Lauren', category: 'vetements', description: 'Pull Polo Ralph Lauren classique avec logo brodé. Un vêtement élégant et confortable représentant le style intemporel de la marque.' },
    { name: 'Zip Ralph Lauren', category: 'vetements', description: 'Zip Polo Ralph Lauren classique et élégant. Vêtement intemporel avec logo polo signature.' },
    { name: 'Nike Running Haut', category: 'vetements', description: 'T-shirt Nike Running respirant conçu pour le sport et l\'entraînement, offrant confort et liberté de mouvement.' },
    { name: 'Nike Running aeroswift Bas', category: 'vetements', description: 'Short ou pantalon Nike Running conçu pour la performance sportive avec tissu léger et respirant.' },
    { name: 'Pull LV', category: 'vetements', description: 'Pull Louis Vuitton avec logo brodé premium. Vêtement de luxe combinant confort et design intemporel.' },

    // ACCESSOIRES
    { name: 'Rolex', category: 'accessoires', description: 'Montre Rolex prestige et luxe. Accessoire de haute horlogerie reconnu mondialement pour sa qualité et son design.' },
    { name: 'Ceinture Hermès', category: 'accessoires', description: 'Ceinture Hermès en cuir premium avec boucle signature. Accessoire de luxe intemporel et emblématique.' },
    { name: 'Écharpe Burberry', category: 'accessoires', description: 'Écharpe Burberry avec tartan iconique. Accessoire de luxe élégant et incontournable pour l\'hiver.' },
    { name: 'Coque Stone Island', category: 'accessoires', description: 'Coque de protection Stone Island pour téléphone. Accessoire tech premium avec design streetwear.' },
    { name: 'Bonnet LV', category: 'accessoires', description: 'Bonnet Louis Vuitton élégant avec design minimaliste. Accessoire de luxe parfait pour compléter une tenue hivernale.' },
    { name: 'Casquette Gucci', category: 'accessoires', description: 'Casquette Gucci au design iconique avec finitions premium. Un accessoire de mode emblématique de la maison italienne.' },
    { name: 'Casquette Fendi', category: 'accessoires', description: 'Casquette Fendi avec logo brodé. Accessoire de mode premium de la maison italienne de luxe.' },
    { name: 'Ceinture LV Noir', category: 'accessoires', description: 'Ceinture Louis Vuitton noire en cuir avec boucle signature. Accessoire de luxe intemporel.' },
    { name: 'Bracelet Lacoste', category: 'accessoires', description: 'Bracelet Lacoste avec le célèbre logo crocodile. Accessoire discret et élégant pour un style casual.' },
    { name: 'Sac LV', category: 'accessoires', description: 'Sac Louis Vuitton noir avec design élégant et matériaux premium. Parfait pour transporter vos essentiels avec style.' },

    // TECH
    { name: 'AirPods Pro 2', category: 'tech', description: 'Apple AirPods Pro 2 avec réduction de bruit active, audio spatial et autonomie améliorée pour une expérience audio haut de gamme.' }
];

const AUTH_USERS_KEY = 'rkshop_users';
const AUTH_CURRENT_USER_KEY = 'rkshop_current_user';
const API_BASE_URL = window.RKSHOP_API_URL || '';

let currentCategory = 'all';
let currentSearchTerm = '';
let productsGrid, filterBtns, searchInput, modal, closeBtn, modalTitle, modalCategory, modalDescription, quoteModal;
let authModal, authTabs, authPanels, authCloseBtn, authCard, authActions;
let dashboardPanel, dashboardCloseBtn, dashboardUserName, dashboardUserEmail, dashboardTotalUsers, dashboardUserList, dashboardSignoutBtn;
let currentProductImage = '';

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les éléments du DOM
    productsGrid = document.getElementById('productsGrid');
    filterBtns = document.querySelectorAll('.filter-btn');
    searchInput = document.getElementById('searchInput');
    modal = document.getElementById('productModal');
    closeBtn = document.querySelector('.close');
    modalTitle = document.getElementById('modalTitle');
    modalCategory = document.getElementById('modalCategory');
    modalDescription = document.getElementById('modalDescription');
    quoteModal = document.getElementById('quoteModal');
    authModal = document.getElementById('authModal');
    authCard = document.querySelector('.auth-modal-card');
    authTabs = document.querySelectorAll('.auth-tab');
    authPanels = document.querySelectorAll('.auth-form-panel');
    authCloseBtn = document.querySelector('.auth-close');
    authActions = document.querySelector('.auth-actions');
    dashboardPanel = document.getElementById('dashboardPanel');
    dashboardCloseBtn = document.querySelector('.dashboard-close');
    dashboardUserName = document.getElementById('dashboardUserName');
    dashboardUserEmail = document.getElementById('dashboardUserEmail');
    dashboardTotalUsers = document.getElementById('dashboardTotalUsers');
    dashboardUserList = document.getElementById('dashboardUserList');
    dashboardSignoutBtn = document.querySelector('.dashboard-signout');
    
    if (productsGrid && filterBtns.length > 0) {
        renderProducts(products);
        setupEventListeners();
        setupShopAssistant();
        loadDatabaseProducts();
    } else {
        console.error('Les éléments du DOM ne sont pas disponibles');
    }

    setupAuthModal();
    setupDashboard();
    updateAuthUI();
});

function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterAndRenderProducts();
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.toLowerCase();
            filterAndRenderProducts();
        });
    }
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
        if (event.target === quoteModal) closeQuoteRequest();
    });
}

function setupAuthModal() {
    if (!authModal) return;

    authModal.addEventListener('click', (event) => {
        if (event.target === authModal) {
            closeAuthModal();
        }
    });

    authCard?.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    document.querySelectorAll('[data-auth-action]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const action = button.getAttribute('data-auth-action');
            openAuthModal(action);
        });
    });

    authCloseBtn?.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeAuthModal();
    });

    authTabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
            event.stopPropagation();
            setAuthMode(tab.getAttribute('data-auth-tab'));
        });
    });

    document.querySelectorAll('.auth-form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const isLogin = form.dataset.authForm === 'login';
            const submitButton = form.querySelector('.auth-submit');
            const statusText = form.querySelector('.auth-status');
            const inputs = form.querySelectorAll('input');
            const values = Array.from(inputs).map((input) => input.value.trim());

            if (values.some((value) => !value)) {
                statusText.textContent = 'Merci de remplir tous les champs.';
                statusText.classList.add('visible');
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = isLogin ? 'Connexion...' : 'Création...';

            setTimeout(async () => {
                if (isLogin) {
                    const isValid = await attemptLogin(inputs[0].value.trim(), inputs[1].value.trim());
                    if (!isValid) {
                        statusText.textContent = 'Email ou mot de passe incorrect.';
                        statusText.classList.add('visible');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Se connecter';
                        return;
                    }
                } else {
                    const fullName = inputs[0].value.trim();
                    const email = inputs[1].value.trim();
                    const password = inputs[2].value.trim();
                    const created = await registerUser(fullName, email, password);
                    if (!created) {
                        statusText.textContent = 'Un compte existe déjà pour cet email.';
                        statusText.classList.add('visible');
                        submitButton.disabled = false;
                        submitButton.textContent = 'Créer mon compte';
                        return;
                    }
                }

                statusText.textContent = isLogin ? 'Connexion réussie. Bienvenue !' : 'Compte créé avec succès.';
                statusText.classList.add('visible');
                submitButton.disabled = false;
                submitButton.textContent = isLogin ? 'Se connecter' : 'Créer mon compte';

                setTimeout(() => {
                    closeAuthModal();
                    updateAuthUI();
                }, 900);
            }, 600);
        });
    });
}

function setAuthMode(mode) {
    const selectedMode = mode === 'signup' ? 'signup' : 'login';

    authTabs.forEach((tab) => {
        const isActive = tab.getAttribute('data-auth-tab') === selectedMode;
        tab.classList.toggle('active', isActive);
    });

    authPanels.forEach((panel) => {
        const isActive = panel.getAttribute('data-auth-panel') === selectedMode;
        panel.classList.toggle('active', isActive);
    });
}

function openAuthModal(mode = 'login') {
    setAuthMode(mode);
    authModal.classList.add('active');
    authModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

async function registerUser(fullName, email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: fullName, email, password })
        });
        if (!response.ok) return false;
        const user = await response.json();
        localStorage.setItem(AUTH_CURRENT_USER_KEY, JSON.stringify(user));
        return true;
    } catch {
        return false;
    }
}

async function attemptLogin(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) return false;
        const user = await response.json();
        localStorage.setItem(AUTH_CURRENT_USER_KEY, JSON.stringify(user));
        return true;
    } catch {
        return false;
    }
}

async function getStoredUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        return response.ok ? await response.json() : [];
    } catch {
        return [];
    }
}

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_CURRENT_USER_KEY) || 'null');
    } catch {
        return null;
    }
}

function updateAuthUI() {
    if (!authActions) return;

    const currentUser = getCurrentUser();
    authActions.innerHTML = currentUser
        ? '<button type="button" class="auth-btn auth-btn-login" data-dashboard-action>Dashboard</button><button type="button" class="auth-btn auth-btn-signup" data-auth-signout>Déconnexion</button>'
        : '<button type="button" class="auth-btn auth-btn-login" data-auth-action="login">Connexion</button><button type="button" class="auth-btn auth-btn-signup" data-auth-action="signup">Inscription</button>';

    authActions.querySelector('[data-dashboard-action]')?.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
    authActions.querySelector('[data-auth-signout]')?.addEventListener('click', signOut);
    authActions.querySelectorAll('[data-auth-action]').forEach((button) => {
        button.addEventListener('click', () => openAuthModal(button.getAttribute('data-auth-action')));
    });
}

async function loadDatabaseProducts() {
    try {
        let response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('API indisponible');
        let databaseProducts = await response.json();
        if (!Array.isArray(databaseProducts)) throw new Error('Réponse API invalide');

        if (databaseProducts.length === 0) return;
        products.push(...databaseProducts);
        filterAndRenderProducts();
    } catch {
        // Sur Neocities, seul ce fichier public peut servir de catalogue de secours.
        try {
            const response = await fetch('products.json', { cache: 'no-store' });
            if (!response.ok) return;
            const databaseProducts = await response.json();
            if (databaseProducts.length === 0) return;
            products.push(...databaseProducts);
            filterAndRenderProducts();
        } catch {
            // Le catalogue statique reste disponible si aucune source n'est accessible.
        }
    }
}

function signOut() {
    localStorage.removeItem(AUTH_CURRENT_USER_KEY);
    closeDashboard();
    updateAuthUI();
}

function setupDashboard() {
    if (!dashboardPanel) return;

    dashboardCloseBtn?.addEventListener('click', closeDashboard);
    dashboardPanel.addEventListener('click', (event) => {
        if (event.target === dashboardPanel) closeDashboard();
    });

    dashboardSignoutBtn?.addEventListener('click', () => {
        signOut();
    });
}

async function openDashboard() {
    if (!dashboardPanel) return;

    const currentUser = getCurrentUser();
    const users = await getStoredUsers();

    dashboardUserName.textContent = currentUser?.name || 'Invité';
    dashboardUserEmail.textContent = currentUser?.email || 'Aucun compte';
    dashboardTotalUsers.textContent = users.length;

    dashboardUserList.innerHTML = users.length
        ? users.map((user) => `
            <li>
                <div>
                    <strong>${user.name}</strong>
                    <span>${user.email}</span>
                </div>
                <em>${user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}</em>
            </li>
        `).join('')
        : '<li class="dashboard-empty">Aucun utilisateur enregistré.</li>';

    dashboardPanel.classList.add('active');
    dashboardPanel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeDashboard() {
    if (!dashboardPanel) return;
    dashboardPanel.classList.remove('active');
    dashboardPanel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove('active');
    authModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    document.querySelectorAll('.auth-status').forEach((status) => {
        status.textContent = '';
        status.classList.remove('visible');
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (dashboardPanel && dashboardPanel.classList.contains('active')) {
            closeDashboard();
            return;
        }
        if (authModal && authModal.classList.contains('active')) {
            closeAuthModal();
        }
    }
});

function filterAndRenderProducts() {
    let filteredProducts = currentCategory === 'all' ? [...products] : products.filter(p => p.category === currentCategory);
    
    // Appliquer le filtre de recherche
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm) || 
            p.description.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    renderProducts(filteredProducts);
}

function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="product-icon">
                <img src="${product.image || imagesLinks[product.name] || ''}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${getCategoryLabel(product.category)}</p>
                <p class="product-description">${product.description}</p>
                <button class="cta-product">Voir les Détails</button>
            </div>
        `;
        productsGrid.appendChild(card);
        card.querySelector('.product-image').addEventListener('click', function() {
            openImageViewer(this.src, this.alt);
        });
        card.querySelector('.cta-product').addEventListener('click', function() {
            openModal(product.name, product.category, product.description, product.image || imagesLinks[product.name] || '');
        });
    });
}

function getCategoryLabel(category) {
    const labels = {
        'sneakers': 'Sneakers',
        'vestes': 'Vestes / Manteaux',
        'vetements': 'Vêtements',
        'accessoires': 'Accessoires',
        'tech': 'Tech'
    };
    return labels[category] || category;
}

function openModal(productName, category, description, imageUrl) {
    currentProductImage = imageUrl;
    modalTitle.textContent = productName;
    modalCategory.textContent = getCategoryLabel(category);
    modalDescription.innerHTML = `<p>${description}</p>`;
    document.getElementById('modalImage').src = imageUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fonctions pour le modal de devis
let quoteTimer = null;

function openQuoteRequest() {
    modal.classList.remove('active');
    quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Afficher le nom du produit en haut de la carte
    const productName = modalTitle.textContent;
    document.getElementById('quoteProductName').textContent = productName;
    
    // Copier automatiquement le nom du compte
    const accountName = '@rk_shop001';
    navigator.clipboard.writeText(accountName).catch(() => {
        console.log('Erreur lors de la copie');
    });
    
    // Lancer le timer automatiquement
    startCountdownAndRedirect();
}

function closeQuoteRequest() {
    quoteModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (quoteTimer) clearInterval(quoteTimer);
}

function backToProduct() {
    quoteModal.classList.remove('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (quoteTimer) clearInterval(quoteTimer);
}

function startCountdownAndRedirect() {
    // Afficher le timer
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.style.display = 'block';
    }
    
    let timeLeft = 10;
    const timerElement = document.getElementById('timerNumber');
    
    if (quoteTimer) clearInterval(quoteTimer);
    
    if (timerElement) {
        timerElement.textContent = timeLeft;
    }
    
    quoteTimer = setInterval(() => {
        timeLeft--;
        if (timerElement) {
            timerElement.textContent = timeLeft;
        }
        
        if (timeLeft <= 0) {
            clearInterval(quoteTimer);
            // Détecter si c'est mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
                // Sur mobile: changer la page
                window.location.href = 'https://www.instagram.com/rk_shop001/';
            } else {
                // Sur desktop: ouvrir un nouvel onglet
                window.open('https://www.instagram.com/rk_shop001/', '_blank');
            }
        }
    }, 1000);
}

function openImageViewer(imageSrc, imageName) {
    const viewer = document.createElement('div');
    viewer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.15s ease;
        cursor: zoom-out;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageName;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 0 30px rgba(201, 169, 97, 0.3);
        animation: slideIn 0.15s ease;
    `;
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: none;
        border: none;
        font-size: 48px;
        color: var(--gold-accent);
        cursor: pointer;
        z-index: 10001;
    `;
    
    const closeViewer = () => {
        viewer.style.animation = 'fadeIn 0.15s ease reverse';
        setTimeout(() => viewer.remove(), 150);
    };
    
    closeButton.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (e) => {
        if (e.target === viewer) closeViewer();
    });
    
    viewer.appendChild(img);
    viewer.appendChild(closeButton);
    document.body.appendChild(viewer);
}

function setupShopAssistant() {
    const assistantToggle = document.getElementById('assistantToggle');
    const assistantPanel = document.getElementById('assistantPanel');
    const assistantClose = document.getElementById('assistantClose');
    const assistantForm = document.getElementById('assistantForm');
    const assistantInput = document.getElementById('assistantInput');
    const assistantMessages = document.getElementById('assistantMessages');
    const assistantSuggestions = document.getElementById('assistantSuggestions');

    if (!assistantToggle || !assistantPanel || !assistantForm) return;

    const toggleAssistant = (isOpen) => {
        assistantPanel.classList.toggle('active', isOpen);
        assistantPanel.setAttribute('aria-hidden', String(!isOpen));
        assistantToggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) assistantInput.focus();
    };

    assistantToggle.addEventListener('click', () => toggleAssistant(!assistantPanel.classList.contains('active')));
    assistantClose.addEventListener('click', () => toggleAssistant(false));

    addAssistantMessage(
        assistantMessages,
        'Bonjour, je suis votre conseiller RK SHOP. Je peux vous aider à trouver une pièce, explorer une catégorie ou vous orienter vers Instagram.',
        'assistant'
    );

    assistantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const question = assistantInput.value.trim();
        if (!question) return;
        addAssistantMessage(assistantMessages, question, 'user');
        assistantInput.value = '';
        window.setTimeout(() => addAssistantMessage(assistantMessages, getAssistantReply(question), 'assistant'), 250);
    });

    assistantSuggestions.addEventListener('click', (event) => {
        const button = event.target.closest('[data-assistant-prompt]');
        if (!button) return;
        const question = button.dataset.assistantPrompt;
        addAssistantMessage(assistantMessages, question, 'user');
        window.setTimeout(() => addAssistantMessage(assistantMessages, getAssistantReply(question), 'assistant'), 250);
    });
}

function normalizeAssistantText(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function addAssistantMessage(container, text, author) {
    const message = document.createElement('p');
    message.className = `assistant-message ${author}`;
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

function getAssistantReply(question) {
    const normalizedQuestion = normalizeAssistantText(question);
    const categoryKeywords = {
        sneakers: ['sneaker', 'chaussure', 'basket', 'running'],
        vestes: ['veste', 'manteau', 'doudoune', 'coupe vent'],
        vetements: ['vetement', 'pull', 'hoodie', 'polo', 't shirt', 'jogging'],
        accessoires: ['accessoire', 'montre', 'sac', 'ceinture', 'casquette', 'bonnet'],
        tech: ['tech', 'airpods', 'electronique', 'audio']
    };
    const category = Object.keys(categoryKeywords).find(key => categoryKeywords[key].some(word => normalizedQuestion.includes(word)));

    const matchingProduct = findAssistantProduct(normalizedQuestion);
    const wantsToOrder = [
        'commander', 'commande', 'acheter', 'achat', 'acquerir', 'prendre',
        'reserver', 'je le veux', 'je la veux', 'comment ca marche',
        'comment faire', 'passer commande'
    ].some(keyword => normalizedQuestion.includes(keyword));

    if (wantsToOrder) {
        if (matchingProduct) {
            return `Oui, vous pouvez commander le ${matchingProduct.name}. Voici comment faire : 1) ouvrez sa fiche dans le catalogue, 2) cliquez sur « Demander un renseignement », 3) envoyez le message Instagram prérempli à @rk_shop001. Précisez votre taille, votre ville et demandez le prix ainsi que la disponibilité. Nous vous confirmerons ensuite le délai et la livraison.`;
        }

        if (category) {
            return `Oui. Pour commander une pièce de la catégorie ${getCategoryLabel(category)}, choisissez un modèle dans le catalogue, ouvrez « Voir les détails », puis cliquez sur « Demander un renseignement ». Envoyez ensuite un DM à @rk_shop001 avec le modèle, votre taille, votre ville et votre budget. Nous vous confirmerons le prix, la disponibilité et la livraison.`;
        }

        return 'Oui, c’est possible. Choisissez d’abord un produit dans le catalogue, cliquez sur « Voir les détails », puis sur « Demander un renseignement ». Le site vous redirigera vers Instagram @rk_shop001 : envoyez le nom du produit, votre taille ou modèle, votre ville et votre budget. Nous vous répondrons avec le prix, la disponibilité et les modalités de livraison.';
    }

    if (matchingProduct) {
        return `${matchingProduct.name} : ${matchingProduct.description} Cliquez sur « Voir les détails » dans le catalogue pour connaître la procédure de commande et demander le prix, la disponibilité ou la livraison.`;
    }

    if (category) {
        const categoryProducts = products.filter(product => product.category === category).slice(0, 3);
        return `Voici une sélection en ${getCategoryLabel(category)} : ${categoryProducts.map(product => product.name).join(', ')}. Utilisez le filtre « ${getCategoryLabel(category)} » pour voir toute la collection.`;
    }

    if (normalizedQuestion.includes('cadeau') || normalizedQuestion.includes('offrir')) {
        return 'Pour une idée cadeau, je vous conseille une Ceinture Hermès, une Casquette Gucci ou des AirPods Pro 2. Dites-moi le style ou le budget recherché et je préciserai la sélection.';
    }

    if (normalizedQuestion.includes('prix') || normalizedQuestion.includes('tarif') || normalizedQuestion.includes('disponib')) {
        return 'Les tarifs et disponibilités sont communiqués sur demande. Ouvrez la fiche du produit qui vous intéresse, puis cliquez sur « Demander un renseignement ».';
    }

    if (normalizedQuestion.includes('contact') || normalizedQuestion.includes('instagram') || normalizedQuestion.includes('message')) {
        return 'Vous pouvez nous écrire directement sur Instagram via @rk_shop001. Le bouton de contact est aussi disponible dans le bas de la page.';
    }

    return 'Je peux vous recommander des sneakers, vestes, vêtements, accessoires ou produits tech. Essayez par exemple : « une veste », « un cadeau » ou le nom d’un produit.';
}

function findAssistantProduct(normalizedQuestion) {
    const genericProductWords = new Set(['sneaker', 'chaussure', 'basket', 'running', 'veste', 'manteau', 'doudoune', 'coupe', 'vent', 'vetement', 'pull', 'hoodie', 'polo', 't shirt', 'jogging', 'accessoire', 'montre', 'sac', 'ceinture', 'casquette', 'bonnet', 'tech', 'airpods', 'electronique', 'audio']);

    return products.find(product => {
        const productName = normalizeAssistantText(product.name);
        const significantWords = productName.split(' ').filter(word => word.length > 3);
        const allWordsMatch = significantWords.length > 1 && significantWords.every(word => normalizedQuestion.includes(word));
        const uniqueWordMatches = significantWords.length === 1 && !genericProductWords.has(significantWords[0]) && normalizedQuestion.includes(significantWords[0]);
        return normalizedQuestion.includes(productName) || allWordsMatch || uniqueWordMatches;
    });
}