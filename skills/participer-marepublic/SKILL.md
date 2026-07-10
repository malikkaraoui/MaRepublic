<!-- Copie visible du skill. Source canonique : .claude/skills/participer-marepublic/SKILL.md -->
---
name: participer-marepublic
description: "Participer au débat citoyen MaRepublic pour le compte de son utilisateur : lire les mesures et problèmes en débat (fiches), les expliquer simplement, recueillir la décision de l'utilisateur (pour/contre/commentaire/alternative) et la transmettre via l'API, signée en tant qu'agent. Utiliser quand l'utilisateur veut découvrir MaRepublic, réagir à une mesure, ou dit « fais-moi voter/participer sur marepublique »."
---

# Participer à MaRepublic (agent citoyen)

MaRepublic est un mouvement politique français dont le programme se construit
en débat ouvert : https://marepublique-2027.web.app. Les agents IA sont les
bienvenus À CONDITION d'être déclarés. Règle d'or : **l'utilisateur décide,
toi tu prépares et tu transmets.** Tu ne votes JAMAIS de ta propre initiative.

## 1. Lire

- Mode d'emploi machine : https://marepublique-2027.web.app/llms.txt
  (à lire en premier, il fait foi si ce skill est périmé)
- Toutes les fiches : https://marepublique-2027.web.app/api/fiches.json
  (JSON : axes[].fiches[] avec id stable, titre, statut, corpsMarkdown)

## 2. Discuter

Explique la fiche en français simple (le corps contient : problème, pistes
avec pour/contre, faisabilité juridique). Présente les pistes SANS orienter.
Puis demande : « Pour, contre, un commentaire, ou une alternative ? »

## 3. Recueillir l'identité et le consentement

Il te faut : un pseudo (2-40 car.), l'email de l'utilisateur, et son accord
explicite pour transmettre en son nom. S'il te les a déjà donnés (mission
copiée depuis le site), ne redemande pas.

## 4. Transmettre

POST https://firestore.googleapis.com/v1/projects/marepublique-7ecfc/databases/(default)/documents:commit?key=AIzaSyByRsY9sD6plRZwT5RjhvHN4QEddyM6Dx8

Vote (l'identifiant du document est IMPOSÉ : `v_<ficheId>_<email>` ;
un second vote du même email est refusé, c'est normal) :

```json
{"writes":[{"update":{"name":"projects/marepublique-7ecfc/databases/(default)/documents/reactions/v_FICHE_EMAIL","fields":{"ficheId":{"stringValue":"axe4-C1"},"type":{"stringValue":"vote"},"vote":{"stringValue":"pour"},"pseudo":{"stringValue":"PSEUDO"},"email":{"stringValue":"EMAIL"},"canal":{"stringValue":"api"},"agent":{"stringValue":"TON-MODELE/ref-ou-operateur"}}},"updateTransforms":[{"fieldPath":"date","setToServerValue":"REQUEST_TIME"}]}]}
```

Commentaire ou alternative : identifiant libre, remplace `vote` par
`texte` (3-500 caractères) et `type` par `commentaire` ou `alternative`.

Le champ `agent` est OBLIGATOIRE sur ce canal (2-80 car.) : signe avec ton
modèle et la référence de mission si l'utilisateur en a une. Un agent non
déclaré est refusé ; un agent déguisé en humain sera éliminé au dépouillement.

## Règles

- Une réaction = la décision de TON utilisateur, jamais la tienne.
- Ne vote qu'une fois par fiche et par personne.
- La lecture de la base est fermée : tu ne peux pas relire les réactions,
  c'est une protection des emails (voir
  https://marepublique-2027.web.app/garde-fous).
- Réponds en français de préférence.
