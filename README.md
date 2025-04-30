
# Mini-projet 2 : Authentification avec JWT (JSON Web Token)

## Auteurs
- Floryan BORNET
- Corentin BRENDLE

## Description du projet
Ce deuxième mini-projet vise à implémenter une authentification basée sur JSON Web Token (JWT), où le client (Vue.js) est responsable de la gestion du token.

## Fonctionnalités principales
- Inscription des utilisateurs.
- Connexion avec génération et validation de JWT.
- Page d'accueil sécurisée avec vérification du JWT.
- Stockage du token dans le `LocalStorage`.

## Organisation du projet
Le projet est organisé en deux parties :

- **Backend** : Contient le code serveur (API REST, gestion des tokens JWT, etc.).
- **Frontend** : Contient l'interface utilisateur développée avec Vue.js.

## Structure des dossiers
```
Authentification-avec-JWT/
├── backend/
│   ├── config/       # Configuration de la base de données et des clés JWT
│   ├── controllers/  # Logique métier (authentification, inscription, etc.)
│   ├── models/       # Modèles Sequelize
│   ├── routes/       # Routes API
│   ├── app.js        # Point d'entrée du serveur
│   └── package.json  # Dépendances backend
├── frontend/
│   ├── src/
│   │   ├── components/  # Composants Vue.js
│   │   ├── views/       # Pages Vue.js
│   │   ├── router/      # Configuration des routes
│   │   ├── store/       # Gestion de l'état global
│   │   └── main.js      # Point d'entrée du frontend
│   └── package.json     # Dépendances frontend
└── README.md
```

## Instructions pour exécuter le projet

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn
- PostgreSQL

### Étapes

#### Cloner le dépôt GitHub :
```bash
git clone https://github.com/BornetFloryan/Authentification-avec-JWT-JSON-Web-Token-
cd Authentification-avec-JWT
```

### Configuration du fichier `.env`

Créez un fichier `.env` à la racine du dossier `backend/` avec le contenu suivant :

```env
DB_HOST=localhost
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_PORT=5432
AUTH_SECRET=your_auth_secret
```

Chaque variable a une fonction spécifique :

- `DB_HOST` : l'adresse de votre serveur PostgreSQL (généralement `localhost` en local).
- `DB_USERNAME` : le nom d'utilisateur PostgreSQL.
- `DB_PASSWORD` : le mot de passe associé à l'utilisateur.
- `DB_DATABASE` : le nom de la base de données à utiliser.
- `DB_PORT` : le port sur lequel PostgreSQL écoute (par défaut `5432`).
- `AUTH_SECRET` : la clé secrète utilisée pour signer les tokens JWT.


#### Configurer le backend :
```bash
cd backend
npm install
```
- Lancer le serveur :
```bash
npm start
```

#### Configurer le frontend :
```bash
cd ../frontend
npm install
npm run serve
```

### Accéder à l'application :
Ouvrez votre navigateur et accédez à [http://localhost:8080](http://localhost:8080).
