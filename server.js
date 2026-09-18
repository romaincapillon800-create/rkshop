const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATABASE_FILE = path.join(ROOT, 'database.json');
const sessions = new Map();

function readDatabase() {
    try {
        const database = JSON.parse(fs.readFileSync(DATABASE_FILE, 'utf8'));
        database.users = Array.isArray(database.users) ? database.users : [];
        database.products = Array.isArray(database.products) ? database.products : [];
        return database;
    } catch {
        return { users: [], products: [] };
    }
}

function writeDatabase(database) {
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(database, null, 2));
}

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

function sendJson(response, statusCode, data) {
    response.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
    });
    response.end(JSON.stringify(data));
}

function publicUser(user) {
    return { id: user.id, name: user.name, email: user.email, role: user.role || 'user', points: Number(user.points) || 0, createdAt: user.createdAt };
}

function createSession(user) {
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, user.email);
    return token;
}

function ensureAdminAccount() {
    const database = readDatabase();
    const adminEmail = 'admin@rkshop.local';
    if (!database.users.some(user => user.email === adminEmail)) {
        database.users.push({
            id: crypto.randomUUID(),
            name: 'Administrateur RK SHOP',
            email: adminEmail,
            passwordHash: hashPassword('Admin123!'),
            role: 'admin',
            createdAt: new Date().toISOString()
        });
        writeDatabase(database);
    }
}

function getAdminFromRequest(request, database) {
    const token = String(request.headers['x-auth-token'] || '');
    const email = sessions.get(token);
    if (!email) return null;
    return database.users.find(user => user.email === email && user.role === 'admin');
}

function readRequestBody(request) {
    return new Promise((resolve, reject) => {
        let body = '';
        request.on('data', chunk => { body += chunk; });
        request.on('end', () => {
            try { resolve(JSON.parse(body || '{}')); } catch { reject(new Error('JSON invalide')); }
        });
        request.on('error', reject);
    });
}

function serveStatic(request, response) {
    const requestedPath = decodeURIComponent(request.url.split('?')[0]);
    const relativePath = requestedPath === '/' ? '/index.html' : requestedPath;
    const filePath = path.normalize(path.join(ROOT, relativePath));
    const protectedFiles = new Set(['database.json', 'server.js', 'package.json']);
    if (protectedFiles.has(path.basename(filePath).toLowerCase())) {
        response.writeHead(404);
        response.end('Not found');
        return;
    }
    if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        response.writeHead(404);
        response.end('Not found');
        return;
    }
    const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
    response.writeHead(200, { 'Content-Type': `${types[path.extname(filePath)] || 'application/octet-stream'}; charset=utf-8` });
    fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
    try {
        if (request.method === 'OPTIONS') {
            response.writeHead(204, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, x-auth-token',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            });
            response.end();
            return;
        }
        if (request.method === 'GET' && request.url === '/api/users') {
            const database = readDatabase();
            if (!getAdminFromRequest(request, database)) {
                sendJson(response, 403, { error: 'Accès administrateur requis.' });
                return;
            }
            sendJson(response, 200, database.users.map(publicUser));
            return;
        }

        if (request.method === 'POST' && request.url.startsWith('/api/users/') && request.url.endsWith('/points')) {
            const database = readDatabase();
            if (!getAdminFromRequest(request, database)) {
                sendJson(response, 403, { error: 'Accès administrateur requis.' });
                return;
            }

            const userId = request.url.split('/')[3];
            const body = await readRequestBody(request);
            const pointsToAdd = Number(body.points);
            const user = database.users.find(item => item.id === userId);
            if (!user) {
                sendJson(response, 404, { error: 'Utilisateur introuvable.' });
                return;
            }
            if (!Number.isInteger(pointsToAdd) || pointsToAdd <= 0 || pointsToAdd > 100000) {
                sendJson(response, 400, { error: 'Le nombre de points doit être un entier positif.' });
                return;
            }

            user.points = (Number(user.points) || 0) + pointsToAdd;
            writeDatabase(database);
            sendJson(response, 200, publicUser(user));
            return;
        }

        if (request.method === 'GET' && request.url === '/api/products') {
            sendJson(response, 200, readDatabase().products);
            return;
        }

        if (request.method === 'POST' && request.url === '/api/products') {
            const database = readDatabase();
            if (!getAdminFromRequest(request, database)) {
                sendJson(response, 403, { error: 'Accès administrateur requis.' });
                return;
            }

            const body = await readRequestBody(request);
            const name = String(body.name || '').trim();
            const category = String(body.category || '').trim();
            const description = String(body.description || '').trim();
            const image = String(body.image || '').trim();
            if (!name || !category || !description) {
                sendJson(response, 400, { error: 'Nom, catégorie et description sont obligatoires.' });
                return;
            }

            const product = {
                id: crypto.randomUUID(),
                name,
                category,
                description,
                image,
                createdAt: new Date().toISOString()
            };
            database.products.push(product);
            writeDatabase(database);
            sendJson(response, 201, product);
            return;
        }

        if (request.method === 'POST' && ['/api/register', '/api/login'].includes(request.url)) {
            const body = await readRequestBody(request);
            const database = readDatabase();
            const email = String(body.email || '').trim().toLowerCase();
            const password = String(body.password || '');
            if (!email || password.length < 4) {
                sendJson(response, 400, { error: 'Email ou mot de passe invalide.' });
                return;
            }

            if (request.url === '/api/register') {
                if (database.users.some(user => user.email === email)) {
                    sendJson(response, 409, { error: 'Ce compte existe déjà.' });
                    return;
                }
                const user = {
                    id: crypto.randomUUID(),
                    name: String(body.name || 'Utilisateur').trim(),
                    email,
                    passwordHash: hashPassword(password),
                    role: 'user',
                    points: 0,
                    createdAt: new Date().toISOString()
                };
                database.users.push(user);
                writeDatabase(database);
                sendJson(response, 201, { ...publicUser(user), token: createSession(user) });
                return;
            }

            const user = database.users.find(item => item.email === email && item.passwordHash === hashPassword(password));
            if (!user) {
                sendJson(response, 401, { error: 'Email ou mot de passe incorrect.' });
                return;
            }
            sendJson(response, 200, { ...publicUser(user), token: createSession(user) });
            return;
        }

        if (request.method === 'GET') serveStatic(request, response);
        else sendJson(response, 405, { error: 'Méthode non autorisée.' });
    } catch (error) {
        sendJson(response, 500, { error: error.message });
    }
});

ensureAdminAccount();
server.listen(PORT, () => console.log(`RK SHOP est disponible sur http://localhost:${PORT}`));