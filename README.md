# RK SHOP - Base de test

## Lancer le projet

Node.js est necessaire.

```bash
npm start
```

Puis ouvrir : http://localhost:3000

Compte administrateur de test : `admin@rkshop.local` / `Admin123!`

Le dashboard est accessible depuis le bouton `Dashboard` après connexion. Le compte admin peut ajouter des items depuis `dashboard.html`.

## Base de donnees

Les comptes sont enregistres dans `database.json`.

- `POST /api/register` cree un compte
- `POST /api/login` connecte un compte
- `GET /api/users` alimente le dashboard

Les mots de passe ne sont pas sauvegardes en clair : le serveur conserve un hash SHA-256 pour ce prototype local.

Cette base est prevue pour les tests locaux, pas pour une mise en production.

Le fichier `database.json` n'est pas servi par le serveur HTTP. Il reste toutefois visible par une personne qui a accès au dossier de l'ordinateur. Pour une mise en production, il faudra utiliser une vraie base externe et des variables d'environnement pour les secrets.

## Deploiement sur Neocities

Neocities heberge uniquement les fichiers statiques : il ne lance pas `server.js` et ne peut pas modifier `database.json`.

- Le catalogue public utilise `products.json` si l'API n'est pas disponible.
- Les inscriptions, connexions, ajouts d'items et points fidelite necessitent le backend Node.js.
- Hebergez `server.js` sur un service Node.js, puis indiquez son URL dans `config.js` avec `window.RKSHOP_API_URL`.
- Ne mettez jamais `database.json` sur Neocities : il contient les comptes et les hashes de mots de passe.
