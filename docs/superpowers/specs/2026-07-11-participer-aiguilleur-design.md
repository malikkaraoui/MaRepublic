# Spec : `/participer`, l'aiguilleur citoyen

*Rédigé le 2026-07-11. Statut : conception validée, en attente de relecture avant plan d'implémentation.*

## 1. Objectif

Faciliter la « brique que chacun met à l'édifice ». Aujourd'hui, un citoyen qui
veut aider tombe sur 843 fiches à plat et ne sait pas par où commencer. On pose
3 questions courtes (temps, sujet, motivation) et on l'oriente vers **la** façon
d'aider qui lui correspond, plutôt que de le laisser se perdre.

Principe directeur : test de l'amende / zéro friction. Contribuer doit être aussi
simple que de trouver quoi faire. L'aiguilleur ne collecte aucune identité.

## 2. Périmètre

**Dans le périmètre (MVP) :**
- Une page `/participer` : un wizard de 3 questions + un écran de résultat.
- Une table de correspondance **onglet → famille thématique** (6 familles).
- Un **filtre par famille** sur le chantier (`/chantier?famille=<slug>`).
- Un **profil local** (localStorage) : réponses + familles d'atelier qui
  intéressent, pour ne pas re-questionner au retour.
- L'entrée : bouton « Participer » sur l'accueil + lien « Participer » dans
  l'en-tête.

**Hors périmètre (étapes suivantes, non couvertes ici) :**
- Le vrai système d'**ateliers / groupes de travail** (ici : simple teaser
  « bientôt », l'intérêt est mémorisé en local).
- Un **tableau des « questions à trancher »** comme surface dédiée.
- Toute **statistique agrégée** « qui participe » (impliquerait une identité).
- La refonte digeste complète du chantier (mais la table des familles la prépare).

## 3. Les 6 familles thématiques

Elles servent l'aiguilleur ET amorcent la refonte digeste. Chacun des 88 onglets
(5 axes programme + 83 problèmes) est rattaché à **une** famille.

| slug | Libellé | Emoji |
|---|---|---|
| `argent-public` | Argent public | 💰 |
| `sante-social` | Santé & social | 🏥 |
| `justice-securite` | Justice & sécurité | ⚖️ |
| `territoires-ecologie` | Territoires & écologie | 🌿 |
| `democratie-institutions` | Démocratie & institutions | 🏛️ |
| `travail-quotidien` | Travail & quotidien | 🛠️ |

**Livrable de données :** un module `src/lib/familles.ts` exposant la liste des
familles et une fonction `familleDeFiche(fiche)` (via une table
`familleParOnglet: Record<numeroOnglet, slugFamille>`, renseignée à la main en
lisant les intitulés d'onglets). Toute fiche hérite de la famille de son onglet.
Une fiche sans famille explicite tombe dans un défaut `travail-quotidien`
(jamais d'orphelin, à corriger au cas par cas).

## 4. Le wizard : 3 questions

Une question par écran, progression claire (« 1 / 3 »), navigable au clavier,
retour arrière possible. Chaque réponse est un choix unique.

**Q1 — Combien de temps aujourd'hui ?** (décide la *profondeur* de l'action)
- `⚡ 5 minutes` (`rapide`)
- `🔧 ~30 minutes` (`approfondi`)
- `🌱 Sur la durée` (`engage`)

**Q2 — Quel sujet vous parle ?** (décide *quelles* fiches)
- Choix d'une des 6 familles.
- Puis sous-choix du rapport au sujet :
  `Je m'y connais` (`expert`) · `Je suis concerné·e` (`concerne`) ·
  `Je découvre` (`curieux`).

**Q3 — Vous préférez…** (décide le *type* d'action)
- `✓ Juger, trancher` (`juger`)
- `🔧 Repérer les failles` (`ameliorer`)
- `💡 Proposer, apporter mon terrain` (`proposer`)
- `📣 Faire connaître` (`diffuser`)

## 5. La matrice de routage

Déterministe : une table de correspondance, aucune IA. L'action principale se
calcule ainsi :

1. **La motivation (Q3) choisit le verbe** de l'action principale.
2. **La famille (Q2) cible** l'ensemble de fiches concernées.
3. **Le temps (Q1) dose** la formulation et l'ordre des secondaires.
4. **Le niveau (Q2) ajuste** le ton et l'ordre des **secondaires** (il ne change
   jamais le verbe principal, toujours dicté par la motivation) : chez un
   `expert`, « Proposer » passe en 1re action secondaire ; chez un `curieux`,
   « Juger/Découvrir » passe en 1re secondaire.

| Motivation | Action principale | Cible concrète | Dose selon le temps |
|---|---|---|---|
| `juger` | Voter sur les N fiches [famille] en débat | `/chantier?famille=X` (statut débat) | `rapide` : « votez en 5 min » · `engage` : « votez puis suivez » |
| `ameliorer` | Repérer les failles et commenter les fiches [famille] | `/chantier?famille=X` | idéal `approfondi` ; si `rapide` : « un commentaire éclair suffit » |
| `proposer` | Proposer une alternative / apporter votre terrain sur [famille] | `/chantier?famille=X` (mode alternative) | — |
| `diffuser` | Confier les fiches [famille] à votre IA + partager | fiche → « Confier à mon IA » | — |

**Actions secondaires (2)** : les deux autres verbes les plus pertinents pour le
profil, formulés en une ligne, moins visibles que la principale.

**Teaser atelier** : si le temps = `engage`, on ajoute une carte
`🌱 Atelier [famille] — bientôt` avec un bouton « Ça m'intéresse » qui
**mémorise la famille en localStorage** (`ateliersInteresse: string[]`). Aucun
email, aucune requête réseau. À l'ouverture réelle des ateliers (hors périmètre),
cette liste locale permettra de mettre l'atelier en avant pour cet usager.

**Cas limite** : si la famille × statut ne contient aucune fiche (ex. 0 fiche en
débat), l'action principale bascule sur la variante disponible la plus proche
(voter → lire/commenter) et le compteur affiche « toutes les fiches [famille] »
plutôt qu'un « 0 » décourageant.

## 6. L'écran de résultat

- En-tête récap du profil : « Vous : {niveau} en {famille}, {temps}, envie de
  {motivation} ».
- **1 action principale** : gros bouton, verbe + cible + compte dynamique.
- **2 actions secondaires** : liens discrets.
- **Teaser atelier** (si `engage`).
- Lien « Refaire le questionnaire » (efface le profil local).

Au retour sur `/participer` avec un profil en localStorage : on saute le wizard
et on affiche directement l'écran de résultat, avec « Rebonjour, voici où vous
en étiez » et l'option de tout recommencer.

## 7. Modèle de données

**Profil local** (`localStorage`, clé `marep-profil-participation-v1`) :
```ts
interface ProfilParticipation {
  temps: 'rapide' | 'approfondi' | 'engage'
  famille: string        // slug d'une des 6 familles
  niveau: 'expert' | 'concerne' | 'curieux'
  motivation: 'juger' | 'ameliorer' | 'proposer' | 'diffuser'
  ateliersInteresse: string[]  // slugs de familles cochées « ça m'intéresse »
  date: string           // ISO, pour info
}
```
Rien ne part en base. Pas d'identité. Effaçable via « Refaire le questionnaire ».

**Comptes dynamiques** : « N fiches [famille] en débat » se calcule depuis
`axesFiches` (src/lib/fiches.ts) filtré par `familleDeFiche` + statut, à la volée.
Pas de valeur en dur (cf. le compteur de fiches de l'accueil déjà rendu dynamique).

## 8. Dépendances techniques

1. **`src/lib/familles.ts`** : familles + `familleParOnglet` + `familleDeFiche`.
2. **Filtre famille sur le chantier** : le chantier filtre aujourd'hui par statut
   et texte (`src/pages/Chantier.tsx`). Ajouter la lecture d'un paramètre d'URL
   `?famille=X` qui pré-filtre la liste. À concevoir pour cohabiter avec les
   filtres existants (statut + recherche) sans les casser.
3. **`src/pages/Participer.tsx`** + route dans `src/App.tsx` (`/participer`).
4. **`src/lib/profil.ts`** : lecture/écriture du profil local (même esprit que
   `src/lib/reactions.ts`).
5. **Entrées** : bouton accueil (la section mobilisation pointe vers `/participer`
   au lieu de `/chantier`) + lien « Participer » dans l'en-tête
   (`src/components/Header` ou équivalent).

## 9. Accessibilité (WCAG 2.2 AA, non négociable)

- Wizard entièrement navigable au clavier ; focus déplacé proprement à chaque
  étape ; `aria-current`/annonce de la progression « étape 1 sur 3 ».
- Choix = vrais `button`/`radio` étiquetés, jamais couleur seule (emoji + texte).
- Écran de résultat : hiérarchie de titres correcte, l'action principale est un
  lien/bouton explicite (« Voter sur 12 fiches Santé en débat »), pas un « cliquez
  ici ».
- Cibles tactiles ≥ 44 px (déjà la norme du projet).

## 10. Critères de succès (done-when)

- [ ] Depuis l'accueil et l'en-tête, on atteint `/participer` en un clic.
- [ ] Les 3 questions s'enchaînent, retour arrière possible, clavier OK.
- [ ] L'écran de résultat propose 1 action principale cohérente + 2 secondaires,
      avec un compte de fiches réel (non figé).
- [ ] « Voter sur les fiches [famille] » atterrit sur le chantier filtré par cette
      famille.
- [ ] Le profil est mémorisé en local ; au retour, pas de re-questionnement.
- [ ] Le teaser atelier mémorise l'intérêt en local, sans email ni réseau.
- [ ] Aucune identité demandée ; rien n'est écrit en base.
- [ ] Gate pré-push verte, typecheck propre, WCAG vérifié.

## 11. Ce qu'on saura mesurer plus tard

Hors périmètre mais préparé : la table des familles rendra possible, quand les
compteurs le permettront, de voir quelles familles mobilisent le plus, et la
liste `ateliersInteresse` locale amorcera le futur système d'ateliers.
