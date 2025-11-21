# 🚀 Freelance Marketplace

> Une plateforme moderne de mise en relation entre freelances et clients, avec système d'authentification JWT, dashboards personnalisés et architecture scalable.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)

---

## 📋 Table des Matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Stack Technique](#-stack-technique)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du Projet](#-structure-du-projet)
- [API Endpoints](#-api-endpoints)
- [Comptes de Test](#-comptes-de-test)
- [Roadmap](#-roadmap)
- [Captures d'écran](#-captures-décran)

---

## 🎯 Aperçu

Freelance Marketplace est une plateforme full-stack qui connecte les freelances avec des clients à la recherche de talents. Le projet met l'accent sur l'expérience utilisateur, la sécurité et l'architecture scalable.

### Objectifs du Projet

- Créer une alternative moderne aux plateformes existantes (Upwork, Malt)
- Implémenter un système d'authentification robuste avec JWT
- Offrir des interfaces différenciées selon le rôle (Freelance/Client)
- Préparer l'architecture pour des fonctionnalités avancées (IA, paiements)

---

## ✨ Fonctionnalités

### ✅ Fonctionnalités Actuelles

#### Authentification & Sécurité
- 🔐 Inscription avec choix de rôle (Freelance/Client)
- 🔑 Connexion sécurisée avec JWT tokens
- 🛡️ Protection des routes avec middleware d'authentification
- 👤 Profils utilisateurs différenciés selon le rôle
- 🚪 Déconnexion et gestion de session

#### Interface Utilisateur
- 🎨 Design moderne et responsive avec TailwindCSS
- 📱 Navigation fluide avec React Router
- 🎭 Dashboards personnalisés pour Freelances et Clients
- 📊 Statistiques et métriques en temps réel
- 💫 Animations et transitions soignées

#### Backend & Base de Données
- 🗄️ Base de données SQLite avec Prisma ORM
- 🔄 Modèles de données complets (Users, Projects, Proposals, Reviews)
- 🌱 Seed automatique pour données de test
- 📡 API RESTful bien structurée
- ⚡ Architecture scalable et maintenable

---

## 🛠 Stack Technique

### Frontend
- **React 18** - Interface utilisateur moderne
- **TypeScript** - Typage statique pour moins d'erreurs
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Styling utility-first
- **React Router DOM** - Routing côté client
- **Zustand** - State management léger
- **Axios** - Client HTTP pour les appels API
- **Lucide React** - Icônes modernes
- **React Hook Form + Zod** - Gestion et validation de formulaires

### Backend
- **Node.js 22** - Runtime JavaScript
- **Express** - Framework web minimaliste
- **TypeScript** - Typage côté serveur
- **Prisma ORM** - Accès base de données type-safe
- **SQLite** - Base de données embarquée (dev)
- **JWT (jsonwebtoken)** - Authentification stateless
- **bcryptjs** - Hashing de mots de passe
- **CORS** - Gestion des origines croisées
- **dotenv** - Variables d'environnement

### DevOps & Outils
- **nodemon** - Hot reload en développement
- **ts-node** - Exécution TypeScript directe
- **Git** - Contrôle de version

---

## 🚀 Installation

### Prérequis

- Node.js 18+ et npm
- Git

### 1. Cloner le Repository

```bash
git clone https://github.com/votre-username/freelance-marketplace.git
cd freelance-marketplace
```

### 2. Installation du Backend

```bash
cd server
npm install
```

Créez un fichier `.env` dans `server/` :

```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3000
NODE_ENV=development
JWT_SECRET=votre_secret_super_securise_changez_moi_en_production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

Initialisez la base de données :

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

Lancez le serveur :

```bash
npm run dev
```

Le backend tourne sur `http://localhost:3000` ✅

### 3. Installation du Frontend

Ouvrez un nouveau terminal :

```bash
cd client
npm install
npm run dev
```

Le frontend tourne sur `http://localhost:5173` ✅

---

## 🎮 Utilisation

### Accéder à l'Application

1. Ouvrez votre navigateur sur `http://localhost:5173`
2. Cliquez sur "Commencer Maintenant"
3. Choisissez "S'inscrire" ou utilisez un compte de test

### Comptes de Test

#### 👨‍💻 Freelance
- **Email:** `freelance@test.com`
- **Mot de passe:** `password123`
- **Profil:** Développeuse Full Stack avec 5 ans d'expérience

#### 👔 Client
- **Email:** `client@test.com`
- **Mot de passe:** `password123`
- **Profil:** Représentant de StartupXYZ

### Tester l'API avec cURL

#### Inscription
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "nouveau@test.com",
    "password": "test123",
    "name": "Nouveau User",
    "role": "freelance"
  }'
```

#### Connexion
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "freelance@test.com",
    "password": "password123"
  }'
```

---

## 📁 Structure du Projet

```
freelance-marketplace/
├── client/                      # Frontend React
│   ├── src/
│   │   ├── components/          # Composants réutilisables
│   │   │   └── Navbar.tsx
│   │   ├── pages/               # Pages de l'application
│   │   │   ├── HomePage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── FreelanceDashboard.tsx
│   │   │   └── ClientDashboard.tsx
│   │   ├── services/            # Services API
│   │   │   ├── api.ts
│   │   │   └── authService.ts
│   │   ├── store/               # State management
│   │   │   └── authStore.ts
│   │   ├── types/               # Types TypeScript
│   │   │   └── index.ts
│   │   ├── utils/               # Fonctions utilitaires
│   │   │   └── helpers.ts
│   │   ├── config/              # Configuration
│   │   │   └── api.ts
│   │   ├── App.tsx              # Composant racine
│   │   └── main.tsx             # Point d'entrée
│   ├── package.json
│   └── tsconfig.json
│
└── server/                      # Backend Node.js
    ├── prisma/
    │   ├── schema.prisma        # Schéma de base de données
    │   ├── seed.ts              # Données de test
    │   └── dev.db               # Base SQLite
    ├── src/
    │   ├── controllers/         # Logique métier
    │   │   └── authController.ts
    │   ├── middleware/          # Middleware Express
    │   │   └── auth.ts
    │   ├── routes/              # Routes API
    │   │   └── authRoutes.ts
    │   ├── config/              # Configuration
    │   │   └── database.ts
    │   └── index.ts             # Point d'entrée serveur
    ├── .env                     # Variables d'environnement
    ├── package.json
    └── tsconfig.json
```

---

## 🔌 API Endpoints

### Authentification

| Méthode | Endpoint | Description | Auth Required |
|---------|----------|-------------|---------------|
| POST | `/api/auth/register` | Créer un nouveau compte | ❌ |
| POST | `/api/auth/login` | Se connecter | ❌ |
| GET | `/api/auth/me` | Récupérer l'utilisateur connecté | ✅ |

### Health Check

| Méthode | Endpoint | Description | Auth Required |
|---------|----------|-------------|---------------|
| GET | `/api/health` | Vérifier le statut du serveur | ❌ |
| GET | `/api/users` | Liste des utilisateurs (dev) | ❌ |

### Format de Réponse

```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "freelance"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

## 🧪 Comptes de Test

La base de données est pré-remplie avec 2 utilisateurs :

### Freelance - Marie Dupont
- **Email:** freelance@test.com
- **Password:** password123
- **Rôle:** Freelance
- **Titre:** Développeuse Full Stack React/Node.js
- **Taux horaire:** 65€/h
- **Rating:** 4.8/5
- **Projets complétés:** 18

### Client - Thomas Martin
- **Email:** client@test.com
- **Password:** password123
- **Rôle:** Client
- **Entreprise:** StartupXYZ

---

## 🗺️ Roadmap

### 🚧 À Venir (V2)

#### Backend
- [ ] Routes CRUD complètes pour les projets
- [ ] Système de propositions avec acceptation/refus
- [ ] API de matching IA avec OpenAI
- [ ] Intégration Stripe pour paiements escrow
- [ ] System de milestones et livrables
- [ ] Système de reviews et notations
- [ ] Upload de fichiers (portfolios, livrables)
- [ ] Notifications en temps réel (WebSockets)

#### Frontend
- [ ] Page de création de projet (Client)
- [ ] Page de listing des projets avec filtres
- [ ] Page de détail de projet
- [ ] Interface de soumission de proposition
- [ ] Dashboard de gestion des propositions
- [ ] Profils utilisateurs éditables
- [ ] Système de messagerie intégré
- [ ] Gestion des paiements et factures
- [ ] Dark mode

#### Infrastructure
- [ ] Tests unitaires et d'intégration
- [ ] CI/CD avec GitHub Actions
- [ ] Migration PostgreSQL (production)
- [ ] Déploiement Vercel (frontend)
- [ ] Déploiement Railway/Render (backend)
- [ ] Monitoring avec Sentry
- [ ] Documentation API avec Swagger

### 💡 Fonctionnalités Avancées (V3+)

- [ ] Algorithme de matching IA avancé avec embeddings
- [ ] Analyse prédictive des délais de projet
- [ ] Recommandations personnalisées
- [ ] Système de badges et gamification
- [ ] Intégration calendrier (Google Calendar)
- [ ] Export de rapports PDF
- [ ] Multi-langue (i18n)
- [ ] Application mobile (React Native)

---

## 📸 Captures d'Écran

### Page d'Accueil
![Home Page](screenshots/home.png)

### Connexion
![Login](screenshots/login.png)

### Dashboard Freelance
![Freelance Dashboard](screenshots/dashboard-freelance.png)

### Dashboard Client
![Client Dashboard](screenshots/dashboard-client.png)

---

## 🔧 Développement

### Commandes Utiles

```bash
# Backend
cd server
npm run dev          # Lancer le serveur en mode dev
npm run build        # Compiler TypeScript
npm start            # Lancer en production
npx prisma studio    # Interface graphique DB
npx prisma migrate   # Créer une migration

# Frontend
cd client
npm run dev          # Lancer Vite dev server
npm run build        # Build pour production
npm run preview      # Preview du build
```

### Conventions de Code

- **TypeScript strict mode** activé
- **ESLint** pour la qualité du code
- **Prettier** pour le formatage (recommandé)
- **Commits conventionnels** (feat, fix, docs, etc.)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👨‍💻 Auteur

**Brieuc Gontier**
- GitHub: [@brieucgontier](https://github.com/brieucgontier)
- LinkedIn: [Votre LinkedIn]

---

## 🙏 Remerciements

- [Prisma](https://www.prisma.io/) pour l'excellent ORM
- [TailwindCSS](https://tailwindcss.com/) pour le framework CSS
- [Lucide](https://lucide.dev/) pour les icônes
- Communauté React & Node.js

---

## 📞 Support

Si vous avez des questions ou rencontrez des problèmes :

1. Consultez la [documentation](#)
2. Ouvrez une [issue](https://github.com/brieucgontier/freelance-marketplace/issues)
3. Contactez-moi directement

---

<div align="center">

**⭐ N'oubliez pas de mettre une étoile si ce projet vous a aidé ! ⭐**

Made with ❤️ and TypeScript

</div>