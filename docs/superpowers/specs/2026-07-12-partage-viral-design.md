# Partage viral (« faire connaître ») — niveaux 0 et 1, gratuit

*Spec courte. Décision Malik 12/07 : gratuit, pas de Blaze. Impossible retenu : publier
une story WhatsApp par API (verrou Meta) ; vignette de lien en temps réel = niveau 2, plus tard.*

## But

Renforcer le partage et lui donner un visage humain. Le débat n'a de poids que s'il
rassemble ; on outille chaque personne pour amener du monde au chantier.

## Niveau 0 (celui de ce lot) — 100 % navigateur, offline

1. **Pseudo / signature optionnel** (`src/lib/pseudoPartage.ts`, localStorage,
   `useSyncExternalStore` comme profil.ts). Jamais obligatoire. Ajouté au message et à l'image
   (« Partagé par X »).
2. **Générateur d'image de partage** (`src/lib/imagePartage.ts`) : dessine sur un canvas une
   carte format story 9:16 (1080x1920), fabriquée dans le navigateur donc **votes en direct**.
   Contenu : bandeau couleur de la famille, wordmark texte « marépublique », emoji + nom de
   famille, titre d'appel, jauge accords/rejets (pour + pistes vs contre) + nombre de votes,
   pastille de statut, QR (déjà généré par la page), « Partagé par X » si pseudo.
   Sortie : PNG dataURL. Boutons « Télécharger l'image » + « Partager l'image » (Web Share
   niveau 2 avec fichiers si dispo, sinon téléchargement).
3. **Données de vote** : agréger `compteurs.parFiche` sur les fiches de la famille
   (accords = pour + `piste-*`, rejets = `contre`). Si aucun vote, l'image montre l'appel
   sans jauge (dégradé propre).
4. **Couleur d'accent par famille** : champ `accent` ajouté à `Famille` (familles.ts).
   Valeurs = premier jet sobre, à affiner avec Malik (retouches prévues juste après).
5. **Canaux groupes** : ajouter **Reddit** (submit) et **Discord** (copier + note) aux 8 canaux.

## Niveau 1 (lot suivant) — build

- Vignettes Open Graph par famille, générées au build (compteurs figés au déploiement), pour
  que coller un lien nu dans Discord/Reddit/WhatsApp affiche une carte soignée.
- Bouton « Partager cette mesure » sur chaque fiche (image + lien par fiche).

## Hors périmètre

- Story WhatsApp automatique (impossible, API fermée).
- Vignette de lien en temps réel (niveau 2, Blaze payant).

## Validation

Playwright : image générée = PNG non vide, jauge cohérente avec les compteurs, pseudo repris,
Reddit/Discord présents. Gate 6/6, déploiement vert.
