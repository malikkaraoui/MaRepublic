# Axe 3 : Fiscalité · Fiches-mesures

> BROUILLON non validé. Tri : ✅ garde · ✂️ jette · ✏️ modifie. Chiffres à sourcer au moment de figer.

### F1. Déclaration d'impôt : de la case au dialogue
- **Problème :** la complexité n'est pas dans le calcul, déjà largement automatisé, elle est dans le placement : savoir dans quelle case range chaque situation de vie (divorce en cours, naissance à venir, perte d'emploi, crédit d'impôt recherche, fermeture de société, achat d'œuvre d'art, actions détenues à l'étranger, crypto-actifs).
- **Ça existe déjà :** France, déclaration automatique (tacite) depuis 2020 pour les foyers aux revenus déjà connus (DSN, pensions) ; agents publics (fonctionnaires, notamment hospitaliers) bénéficient d'un pré-remplissage employeur plus poussé. 🇪🇪 Estonie, dialogue quasi inexistant : le système précalcule, le citoyen valide en quelques minutes.
- **Version France :** ne pas simplifier le formulaire (moins de cases), connecter chaque case à un agent IA spécialisé (API/MCP) formé au droit fiscal. Le citoyen décrit sa situation en langage naturel dès qu'il bute, l'agent identifie la bonne case et pré-remplit avec justification affichée. Le citoyen valide ou corrige avant transmission : la responsabilité finale reste toujours au citoyen.
- ⚖️ **Faisabilité juridique :** Loi ordinaire (code général impôts) pour le principe ; le fait que l'agent propose et le citoyen valide évite la question de responsabilité déléguée à l'IA.
- **Simulation (ordres de grandeur) :** à refaire, l'estimation 10-20 M€ infra Bercy sous-estimait probablement le coût d'un agent conversationnel entraîné au droit fiscal face à un simple moteur de pré-remplissage.
- ⚖️ **À trancher :** qui entraîne/héberge l'agent (Bercy en interne vs prestataire) ; niveau d'automatisation par défaut (silence = validation tacite comme aujourd'hui, ou validation active requise) ; couverture des niches à garder.
- **Statut :** ⬜
- **Mis à jour :** 2026-07-12

### F2. Taxe carbone intégralement redistribuée (dividende citoyen)
- **Problème :** la fiscalité écolo est vécue comme punitive (gilets jaunes).
- **Ça existe déjà :** 🇨🇦 Canada a fait fonctionner de 2019 à avril 2025 une taxe carbone fédérale intégralement **reversée aux ménages** en dividende (majorité des foyers gagnants net) ; le gouvernement Carney l'a supprimée le 1er avril 2025 pour raisons politiques, pas parce que le mécanisme de redistribution avait échoué.
- **Version France :** taxe carbone dont **100 %** revient aux citoyens (chèque égal par tête).
- ⚖️ **Faisabilité juridique :** Loi ordinaire (fiscalité environnementale) ; obstacle potentiel UE (directive énergie) mais dividende carbone compatible.
- **Simulation (ordres de grandeur) :** Taxe carbone 50€/tonne CO2 = 50-80 B€/an revenue. Dividende 100 % ~800€/an/citoyen (54 B€ redistribué). Perte compétitivité indus (à confirmer). Gagnants : 60 % ménages (gain net), environnement. Mise en place 12-18 mois.
- ⚖️ **À trancher :** périmètre ; montant ; frontières (mécanisme d'ajustement carbone) ; l'abandon canadien montre que la lisibilité politique du dividende doit être entretenue dans la durée.
- **Statut :** ⬜
- **Mis à jour :** 2026-07-12

### F3. Impôt minimum réellement appliqué aux multinationales
- **Problème :** optimisation fiscale des grands groupes ; PME qui paient plein pot.
- **Ça existe déjà :** 🇪🇺/OCDE, impôt minimum mondial de **15 %** adopté ; application inégale.
- **Version France :** appliquer strictement les 15 %, taxer le chiffre d'affaires numérique, exit tax renforcée.
- ⚖️ **Faisabilité juridique :** Loi ordinaire appliquant accord OCDE/UE (pilier 2, 15 % minimum) ; France peut exiger plus ; accord octobre 2021.
- **Simulation (ordres de grandeur) :** Impôt minimum 15 % = 5-8 B€/an revenus (multinationales). Taxe CA numérique = 1-2 B€/an. Exit tax renforcée = 500 M-1 B€/an. Gagnants : PME équité, trésor public. Perte : compétitivité multinationales (débat). Mise en place 12 mois.
- ⚖️ **À trancher :** aller au-delà de 15 % ? risque de compétitivité.
- **Statut :** ⬜

### F4. Contribution des très hauts patrimoines
- **Problème :** concentration du patrimoine ; débat post-ISF.
- **Ça existe déjà :** 🇪🇸 Espagne, impôt temporaire sur les grandes fortunes ; 🇳🇴 Norvège, impôt sur la fortune assumé.
- **Version France :** contribution ciblée sur les très hauts patrimoines, anti-évasion.
- ⚖️ **Faisabilité juridique :** Loi ordinaire (fiscalité) ; obstacle majeur : jurisprudence Const. vigilante (égalité, liberté entreprendre), précédent ISF.
- **Simulation (ordres de grandeur) :** Contribution >5M€ patrimoine, 1-2 % = 2-3 B€/an revenue. Exil fiscal risque (débat), anti-évasion +30 % efficacité collecte. Gagnants : état, patrimoine moyen préservé. Perte : ultra-riches compétitivité (-20 % capital mobile). Mise en place 12-18 mois.
- ⚖️ **À trancher :** seuil ; taux ; risque d'exil fiscal (comment le prévenir).
- **Statut :** ⬜

### F5. Transparence : « où va mon impôt »
- **Problème :** défiance ; sentiment que l'argent est mal utilisé.
- **Ça existe déjà :** 🇫🇮 Finlande et pays nordiques, budgets publics très transparents.
- **Version France :** relevé annuel personnalisé « voici où sont allés vos impôts » + portail open-budget.
- ⚖️ **Faisabilité juridique :** Loi ordinaire ou décret (transparence budgétaire) ; pas d'obstacle majeur ; CNIL/RGPD respectables.
- **Simulation (ordres de grandeur) :** Portail open-budget national = 10-20 M€ infra. Relevés personnalisés annuels = 5-10 M€ (courrier/digital). Défiance baisse -20 % (transparence accrue). Gagnants : 40M citoyens comprendre fiscalité. Mise en place 12 mois.
- ⚖️ **À trancher :** niveau de détail ; national et local ?
- **Statut :** ⬜

### F6. Fiscalité qui favorise le circuit court / production locale
- **Problème :** l'importation lointaine est souvent moins taxée que le local.
- **Ça existe déjà :** TVA différenciée dans plusieurs pays ; ajustement carbone aux frontières UE.
- **Version France :** TVA réduite sur produits locaux/réparés, alourdie sur l'ultra-importé polluant.
- ⚖️ **Faisabilité juridique :** Loi ordinaire mais compétence UE ; obstacle majeur : directive TVA UE (non-discrimination) et TFUE.
- **Simulation (ordres de grandeur) :** TVA local -5 % = subvention 1-2 B€/an local. TVA import lointain +2-3 % = 1-1,5 B€/an (pas décision). Coûts compliance UE (débat) = risque contentieux élevé. Gagnants : PME circuit court (+15-20 % CA). Mise en place 18-24 mois (appro UE).
- ⚖️ **À trancher :** compatibilité UE ; risque d'usine à gaz.
- **Statut :** ⬜

### F7. Transmission / héritage repensé
- **Problème :** débat sur l'égalité des chances vs transmission familiale.
- **Ça existe déjà :** modèles variés (abattements ciblés, taxation des très gros héritages).
- **Version France :** alléger les petites/moyennes successions, cibler les très grosses.
- ⚖️ **Faisabilité juridique :** Loi ordinaire (code civil/fiscal) ; obstacle potentiel : jurisprudence Const. (égalité héréditaire, liberté disposer) mais débat légitime.
- **Simulation (ordres de grandeur) :** Alléger petites successions (<100k€) = -1-2 B€ revenu. Taxer >5M€ +10 % = +2-3 B€. Impact égalité chances +20 % (à confirmer). Gagnants : PME/agriculteurs héritage, état égalité. Perte : ultra-riches patrimoine mobilité. Mise en place 12 mois.
- ⚖️ **À trancher :** seuils ; position politique délicate → à cadrer ensemble.
- **Statut :** ⬜
