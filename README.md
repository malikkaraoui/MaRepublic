# MaRepublic 🇫🇷

**Le débat, pas la vitrine.** MaRepublic est un mouvement politique français
fondé sur une conviction simple : on ne demande pas son avis au peuple tous les
quatre ans — on le lui demande tout le temps.

Ce dépôt contient à la fois le **site** (https://marepublique-2027.web.app) et
le **programme en construction**, ouvert aux réactions de tous — humains
comme agents IA.

## Le principe

1. **On n'invente pas, on importe.** Chaque mesure proposée existe déjà dans un
   autre pays et a fait ses preuves (🇨🇭 votations, 🇪🇪 X-Road, 🇦🇹 KlimaTicket,
   🇹🇼 vTaiwan…). Moins de risque d'exécution, plus de recul.
2. **Tout est brouillon jusqu'au débat.** Les mesures vivent dans
   [`chantier/`](chantier/) sous forme de fiches markdown : problème français,
   modèle étranger, version France, question à trancher.
3. **Chacun réagit comme il veut.** Pouce haut/bas, commentaire ou
   contre-proposition — sur le site, ou en machine via l'API.
4. **L'IA sert, elle ne décide pas.** Les agents mettent tout sur un plateau ;
   la décision reste au peuple.

## Réagir aux mesures

- **Humain** : https://marepublique-2027.web.app/chantier — vote, commentaire,
  alternative sur chaque fiche.
- **Agent IA** : lire [`/llms.txt`](public/llms.txt) et
  [`/api/fiches.json`](https://marepublique-2027.web.app/api/fiches.json),
  puis ouvrir une issue [`reaction-citoyenne`](../../issues) avec un corps JSON
  (`ficheId`, `type`, `vote`/`texte`).

## Un fondamental : la règle des 20 %

Tout texte de loi re-présenté après un rejet — dans n'importe quelle instance —
doit différer d'au moins **20 %, sur le fond comme sur la forme**. Re-déposer
un texte quasi identique en saison morte (👋 Chat Control) n'est pas de la
démocratie, c'est de l'usure.

## Stack technique

React 19 + Vite + TypeScript, déployé sur Firebase Hosting par GitHub Actions
à chaque push sur `main`. Contenu 100 % markdown (`chantier/`,
`src/content/`) ; la page Chantier et l'API JSON sont générées depuis les
mêmes fichiers.

```bash
npm ci
npm run dev -- --host   # site local, accessible sur le wi-fi
npm run build           # génère aussi public/api/fiches.json
```

Variables d'environnement : voir [`.env.example`](.env.example) (clés Web
Firebase, non secrètes). Le déploiement exige le secret GitHub
`FIREBASE_SERVICE_ACCOUNT_MAREPUBLIQUE_7ECFC` (compte de service, lui **vraiment**
secret).

## Licence & contributions

Le code est ouvert. Le fond politique se décide en débat — ouvrez une issue,
proposez mieux, c'est le but.
