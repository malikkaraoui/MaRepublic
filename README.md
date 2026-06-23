# Ma République

Site du mouvement **Ma République** — un mouvement politique sans étiquette,
*fondé sur les actes, pas sur les promesses*.

Site statique **React + Vite + TypeScript**, déployé sur **Firebase Hosting**
via **GitHub Actions** à chaque push sur `main`. Design minimaliste,
typographique, noir & blanc, sans logo ni couleur de marque — seule concession
républicaine : une fine hairline tricolore en haut de page.

---

## Sommaire

- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Démarrage local](#démarrage-local)
- [Variables d'environnement](#variables-denvironnement)
- [Contenu éditorial](#contenu-éditorial)
- [Déploiement](#déploiement)
- [Étapes manuelles à réaliser une fois](#étapes-manuelles-à-réaliser-une-fois)
- [Scripts npm](#scripts-npm)

---

## Stack technique

| Élément        | Choix                                                |
| -------------- | ---------------------------------------------------- |
| Framework      | React 19                                             |
| Build          | Vite 6                                               |
| Langage        | TypeScript (strict)                                  |
| Routage        | react-router-dom 7 (`BrowserRouter`)                 |
| Contenu        | Markdown importé en `?raw` + react-markdown          |
| Markdown       | remark-gfm, rehype-slug, rehype-autolink-headings    |
| Hébergement    | Firebase Hosting (SPA rewrite vers `/index.html`)    |
| CI/CD          | GitHub Actions → `FirebaseExtended/action-hosting-deploy` |
| Polices        | Inter (interface) + Newsreader (lecture)             |

---

## Structure du projet

```
.
├── index.html                  # Point d'entrée HTML (polices, méta, OG)
├── firebase.json               # Config Hosting (public: dist, rewrites SPA)
├── .firebaserc                 # Projet par défaut : marepublique-7ecfc
├── .env.example                # Modèle de configuration Firebase Web
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── favicon.svg             # Favicon (monogramme sobre + tricolore)
├── .github/workflows/
│   └── firebase-deploy.yml     # Pipeline de déploiement
└── src/
    ├── main.tsx                # Bootstrap React + BrowserRouter
    ├── App.tsx                 # Définition des routes
    ├── vite-env.d.ts           # Typage des variables VITE_FIREBASE_*
    ├── content/
    │   ├── index.ts            # Registre des .md importés en ?raw
    │   ├── document-fondateur.md
    │   └── axe-1-institutions.md
    ├── data/
    │   └── axes.ts             # Les 5 axes du programme (données)
    ├── lib/
    │   └── firebase.ts         # Init paresseuse du SDK Firebase Web
    ├── components/
    │   ├── Layout.tsx          # Hairline + Header + Outlet + Footer
    │   ├── Header.tsx          # Navigation responsive (menu mobile)
    │   ├── Footer.tsx
    │   ├── Markdown.tsx        # Rendu Markdown (GFM + ancres de titres)
    │   └── ScrollToTop.tsx     # Remonte en haut à chaque navigation
    ├── pages/
    │   ├── Home.tsx            # Hero + principes + axes + méthode
    │   ├── Fondateur.tsx       # Rend document-fondateur.md
    │   ├── Programme.tsx       # Liste des axes
    │   ├── AxeDetail.tsx       # Fiche d'axe (doc détaillé ou propositions)
    │   └── NotFound.tsx        # 404
    └── styles/
        └── global.css          # Design system complet
```

### Routes

| URL                   | Page                                         |
| --------------------- | -------------------------------------------- |
| `/`                   | Accueil                                      |
| `/fondateur`          | Document fondateur (Markdown intégral)       |
| `/programme`          | Liste des cinq axes                          |
| `/programme/:slug`    | Détail d'un axe                              |
| (toute autre URL)     | 404                                          |

Slugs des axes : `institutions`, `services-publics`, `fiscalite`,
`souverainete`, `ecologie`.

---

## Démarrage local

Prérequis : **Node.js 20+** et npm.

```bash
npm install        # installe les dépendances
npm run dev        # serveur de développement (http://localhost:5173)
```

Build de production et prévisualisation :

```bash
npm run build      # génère dist/
npm run preview    # sert dist/ localement
```

---

## Variables d'environnement

La configuration Firebase Web vit dans des variables `VITE_FIREBASE_*`.

> **Ces clés ne sont pas secrètes.** Le SDK Web Firebase est conçu pour
> tourner dans le navigateur : elles sont visibles dans le bundle. La sécurité
> repose sur les *règles* Firebase, pas sur leur confidentialité. Le **seul
> vrai secret** est le compte de service utilisé par la CI (voir plus bas).

Pour le développement local :

```bash
cp .env.example .env
# puis complétez au minimum VITE_FIREBASE_API_KEY et VITE_FIREBASE_APP_ID
# (Console Firebase > ⚙️ Paramètres du projet > Vos applications > Web > Config)
```

Le site est **purement statique aujourd'hui** : il se build et fonctionne sans
`.env`. `src/lib/firebase.ts` n'initialise le SDK que si la configuration
minimale est présente (`isFirebaseConfigured`), prêt pour des fonctionnalités
futures (mesure d'audience, formulaires…).

---

## Contenu éditorial

Le contenu long est rédigé en **Markdown** dans `src/content/` et importé en
texte brut grâce au suffixe `?raw` de Vite. Le registre `src/content/index.ts`
centralise ces imports.

**Ajouter / modifier un document :**

1. Éditez ou créez le fichier `.md` dans `src/content/`.
2. Si c'est un nouveau fichier, ajoutez-le à `src/content/index.ts` :
   ```ts
   import axe2Services from './axe-2-services.md?raw'
   export const content = { /* … */ axe2Services } as const
   ```
3. Pour rattacher un document à un axe, renseignez `contentKey` dans
   `src/data/axes.ts`. Sans `contentKey`, la fiche de l'axe affiche
   automatiquement son accroche et ses propositions.

Markdown supporté : titres (avec ancres cliquables auto-générées), listes,
**tableaux GFM**, citations, gras/italique, liens, règles horizontales, code.

---

## Déploiement

Le déploiement est **automatique** : tout push sur `main` déclenche le workflow
[`.github/workflows/firebase-deploy.yml`](.github/workflows/firebase-deploy.yml) :

1. `npm ci`
2. `npm run build`
3. déploiement sur le canal **live** via
   `FirebaseExtended/action-hosting-deploy`
   (projet `marepublique-7ecfc`).

Déploiement manuel possible depuis une machine authentifiée (`firebase login`) :

```bash
npm run deploy     # = npm run build && firebase deploy --only hosting
```

---

## Étapes manuelles à réaliser une fois

Le workflow s'appuie sur un **secret GitHub** contenant la clé d'un compte de
service Firebase. La façon la plus simple de le créer est l'assistant officiel,
qui génère la clé, l'enregistre comme secret de dépôt et configure les droits :

```bash
# Depuis la racine du projet, sur une machine authentifiée :
firebase login
firebase init hosting:github
```

Pendant l'assistant :

- choisissez le dépôt GitHub `…/MaRepublique` ;
- laissez-le créer le secret de compte de service. **Renommez-le** (ou
  vérifiez qu'il s'appelle) exactement :

  ```
  FIREBASE_SERVICE_ACCOUNT_MAREPUBLIQUE_7ECFC
  ```

  C'est le nom attendu par
  [`firebase-deploy.yml`](.github/workflows/firebase-deploy.yml).
- quand il propose d'écrire des workflows YAML, **refusez** (ou écrasez-les) :
  le workflow de ce dépôt est déjà fourni et fait foi.

> Vérification : `Settings → Secrets and variables → Actions` du dépôt doit
> lister `FIREBASE_SERVICE_ACCOUNT_MAREPUBLIQUE_7ECFC`.

### (Optionnel) Secrets de configuration Web

Si vous activez des fonctionnalités du SDK Firebase, ajoutez les mêmes secrets
de dépôt pour que le build CI les injecte (ils sont déjà câblés dans le
workflow) :

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
```

Tant qu'ils sont absents, le build réussit : le site reste statique.

### Premier déploiement

Une fois le secret en place :

```bash
git push origin main
```

et suivez l'exécution dans l'onglet **Actions** du dépôt GitHub.

---

## Scripts npm

| Script              | Effet                                         |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Serveur de développement Vite                 |
| `npm run build`     | Build de production dans `dist/`              |
| `npm run preview`   | Sert le build de production localement        |
| `npm run typecheck` | Vérifie les types (`tsc --noEmit`)            |
| `npm run deploy`    | Build + déploiement Firebase manuel           |

---

*Ce site est un document de travail. Tout est évaluable, tout est améliorable.
On ne demande pas aux Français de nous croire : on leur demande de nous juger
sur pièces.*
