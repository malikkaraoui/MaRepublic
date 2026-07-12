# Problèmes : L'impôt et la paperasse du quotidien, l'État qui sait déjà mais redemande

## Principes fondateurs mobilisés
**« Un droit doit être aussi simple à exercer qu'une amende à payer. »** Cet axiome expose la fracture entre l'État qui punit sans friction (prélèvement automatique, avis d'imposition, relance bancaire en ligne) et l'État qui protège en exigeant piles de justificatifs. La paperasse de la redistribution masque une inégalité : les riches ont des conseillers, les pauvres abandonnent. Cela s'appelle le non-recours. Il tue les droits.

---

### P1. Déclaration d'impôts pré-remplie et CAF qui redemande tout chaque trimestre

**Constat :**
La DGFIP pré-remplit 90% de la déclaration depuis 2019 (revenus d'emploi, retraite, placements connus). Or, la CAF redemande chaque trimestre la même déclaration de ressources : enfants à charge, allocations, mutuelles, frais de garde. Selon la DREES (rapport 2023 sur le non-recours), 50% des ayants-droit à au moins une allocation ne la demandent pas : friction administrative. Coût estimé de ce non-recours : 8,7 Md€/an en allocations non versées (DREES). La redondance remdesde : l'État sait, redemande, crée de l'incertitude (« ai-je déclare correctement ? »), puis sanctionne si erreur.

Voir : https://drees.solidarites-sante.gouv.fr/sites/default/files/2023-02/Etude%20non-recours_FINAL.pdf

**Pistes :**

1. **Lier automatiquement DGFIP ↔ CAF via API Particulier.** L'API existe depuis 2016, connecte déjà mairies et CAF pour la prime d'activité. Étendre à allocations familiales, RSA, APE. Pour : zéro transmission papier, calcul immédiat, erreurs supprimées. Contre : risque IT si crash API, déploiement complexe dans CAF (systèmes vétustes), régulation données personnelles à confirmer.

2. **Déclaration trimestrielle → semestrielle ou annuelle.** Réduire demandes à 1-2 fois/an aligné sur calendrier fiscal. Pour : 75% moins de courriers, baisses coûts d'exploitation. Contre : retard de 3 mois en cas de changement de situation, RSA nécessite suivi réel, modèle Suède (changements déclarés ad hoc).

3. **Présomption de stabilité.** Déclaration valide 18 mois sauf signal de changement (CDI qui s'arrête, enfant né). État proactif : alerte CAF via FiscalConnect si revenu chute. Pour : confiance, baisses relances. Contre : si signal rate, retard de régularisation, recouvrement complexe.

**Simulation (ordres de grandeur) :**
- **Coût public :** API Particulier étendue CAF = 2-5 M€ d'infra + 3 ans de déploiement. Économies exploitations CAF : -200 M€/an à régime stable (moins de courriers, relances, centre d'appels).
- **Financement :** budget CAF + enveloppe DGFIP digital (déjà prévue).
- **Gagnants :** 8M allocataires (zéro friction), CAF (coûts -15%), chômeurs (allocation plus rapide). **Perdants :** aucun économiquement, frictions IT courtes.
- **Effets de bord :** données personnelles en réseau => sécurité renforcée obligatoire (CNIL, audit annuel). Délai : 24-36 mois.

**⚖️ Faisabilité juridique :**
- Norme : RGPD + Loi Identité Numérique (2016) déjà habilitent partage DGFIP↔CAF pour welfare.
- Véhicule : décret CAF pour API Particulier, ajout allocations au périmètre (CNIL pré-accord 2021 sur prime d'activité).
- Risque de censure : faible. Conseil constitutionnel (2019) a validé partage fiscal-social.

**⚖️ À trancher :**
Accepte-t-on que CAF perde autonomie de vérification (contrôle DGFIP seul) ? Risque : fraude impôt glisse au social non détecté. Réponse : audit croisé annuel minimum.

**Statut :** ⬜

---

### P2. « Dites-le nous une fois » : promesse 2013 jamais tenue, API Particulier ignorée

**Constat :**
« Dites-le nous une fois » est un slogan gouvernemental depuis la circulaire Ayrault 2013 : l'administré doit déclarer les données une seule fois, l'État les réutilise. 12 ans après, c'est un échec quasi total. Exemple : une personne sans emploi cherche allocations (RSA) + logement (APL) + aide étudiante. Redemande : identité (3 fois), résidence (4 fois), revenus (5 fois). API Particulier existe (particulier.api.gouv.fr), certifiée, mais utilisée que par ~200 services publics locaux sur ~5000 guichets. Rapport Cour des comptes 2022 : impact net = zéro. Coût friction administrative pour l'usager : 40-60 min/dossier compliqué.

Voir : https://www.ccomptes.fr/fr/publications/dites-nous-une-fois-bilan-et-perspectives

**Pistes :**

1. **Généraliser API Particulier en obligation légale pour tout service social/fiscal.** Loi imposant intégration avant 2027 pour allocations, impôts, logement, cartes vitales. Pour : harmonisation, obligation fait bouger. Contre : CAF/DGFIP doivent refondre infra legacy (coûteux, délai 2+ ans), petites communes sans ressources IT.

2. **Guichet unique numérique : une déclaration = tous les droits.** Portail identique à La Poste ou impôts.gouv : usager entre données une fois, système demande *à l'arrière* chaque organisme via API asynchrone. Pour : UX irréputable, zéro redondance. Contre : coût central énorme (500 M€+), déploiement 3 ans, si bug impact massif (6M foyers atteints).

3. **Engagement de non-redistribution interne sans consentement explicite.** L'État rassemble les données CAF mais *ne peut pas* les donner à Douane sans accord écrit de l'usager. Renforce confiance (« mes données CAF ne financent pas l'inspection »). Pour : politique symbolique forte, RGPD compliant. Contre : ralentit fraude détection, nécessite IT pour consentement granulaire (UI complexe).

**Simulation (ordres de grandeur) :**
- **Coût public :** généralisation API Particulier = 50-100 M€ (infra + formation agents CAF/collectivités). Guichet unique = 300-600 M€ + 500 k€/an maintenance.
- **Financement :** budget digital État (France Relance, déjà partiellement engagé).
- **Gagnants :** 10M+ usagers (temps -30/40 min), PME conseil social (conseils simplifiés). **Perdants :** aucun direct. Centres d'appels CAF réorientés à support qualité.
- **Effets de bord :** si API down, guichet bloque ; récupération IT critique 1-2h. Délai global : 36-48 mois.

**⚖️ Faisabilité juridique :**
- Norme : RGPD + Loi Ordinaire (5 novembre 2016) habilitent partage intersectoriel via API.
- Véhicule : loi cadre « Simplification administrative » (équivalent Suède « Once Only »), décrets CAF/DGFIP/Urssaf/HAS.
- Risque de censure : nul si consentement explicite préservé. Conseil constitutionnel (Rec. 2022) valide partage avec opt-out.

**⚖️ À trancher :**
Qui dirige l'effort ? Un ministère pilote (Transfo Publique) ou chaque silo défend son système IT ? Réponse : agence projet interministérielle + budget unique centralisé.

**Statut :** ⬜

---

### P3. Taxe foncière : explosion de valeur, décalage total avec revenu

**Constat :**
La taxe foncière se calcule sur une « valeur locative cadastrale » quasi gelée depuis 1970 (révision lente + politiques d'attente). Résultat : maisons dans petites villes montent 200-300% en 20 ans (prix marché) mais cadastre stagne. Impôt à la source de conflit : un retraité rue du Centre (2 M€ implicites) paie moins qu'un jeune couple rue de l'Ouest (800 k€, juste construit, réévalué à l'achat). Cour des comptes 2023 : écart d'imposition 1 à 5 entre voisins, même région. Aucun lien revenu/capacité de payer (propriétaire sans revenus pays autant qu'un rentier). Taxation du capital sans logique socio-fiscale.

Voir : https://www.ccomptes.fr/fr/publications/la-fiscalite-locale-apres-la-suppression-de-la-taxe-dhabitation

**Pistes :**

1. **Réévaluation cadastrale quinquennale sur valeurs marché récentes.** Utiliser comparable (petites annonces, notaires, demandes d'autorisation d'urbanisme) pour ajuster valeur locative. Appliquer dégressif/progressif : maisons <500 k€ moins de 2% revalorisées, >5M€ plus agressives. Pour : équité locale, révenu recroît proportionnellement. Contre : gros locataires s'émeuvent (hausse locales 15-25% certains), impact électoral majeur, cadastre informatique incohérent encore (bugs carrés, valeurs dupliquées).

2. **Exonération partielles liées au revenu.** Propriétaires avec revenus <2 SMIC bénéficient abattement 50% taxe foncière, phase out jusqu'à 3 SMIC. Financé par progressivité hausse autre catégories. Pour : axe redistributif, poids social baisses. Contre : gestion complexe (revenu à justifier annuellement, retards regularisation), effet aléa moral (propriétaire tarde à signaler revenus hausse).

3. **Taxe foncière remplacée par impôt sur plus-value latente.** À chaque vente, l'État capture 10% de plus-value (de 1970 jusqu'à vente). Propriétaires en usage inchangé paient annuel léger (0,3% valeur cadastrale). Pour : taxe revenu dynamique, récompense investissements. Contre : dissuade mobilité résidentielle, complexité calcul plus-value, géométrie incomplète sans inscription en titre (cascades anciennes propriétés = avalanche archives).

**Simulation (ordres de grandeur) :**
- **Coût public (perte recette local) :** réévaluation = +150 M€/an (certaines communes) mais non uniforme (Île-de-France +300 M€, ruralité -50 M€ net). Exonérations revenu = -200 à 300 M€/an compensé par hausse autres.
- **Financement :** hausse global impôts locaux 5-8% ou fonds de péréquation État (enveloppe limitée).
- **Gagnants :** propriétaires pauvres (+50% pouvoir achat fiscal), jeunes primo-accédants (maisons neuves mieux traitées). **Perdants :** retraités riches immobiliers (classé >2 M€), communes rurales (base taxe chute).
- **Effets de bord :** exodes spéculatifs possibles (revente avant réévaluation), délai : 24 mois étude.

**⚖️ Faisabilité juridique :**
- Norme : taxe locale ressort collectivités territoriales (Constitution, art. 34 + loi 3 janvier 1992). État ne peut imposer sans accord élus locaux.
- Véhicule : accord Associations Maires, loi Finances Locales (réforme cadastrale dépend légèrement État).
- Risque de censure : faible si non confiscatoire (Conseil constit. valide fiscalité locale pourvu que lien services locaux). Risque fort si perçu comme État pille communes (recours juridiques élus).

**⚖️ À trancher :**
Veux-tu réévaluations *douces* (8-10 ans) ou *dures* (2-3 ans) ? Impact électoral inverse : doux = injustice perçue dure durée, dur = choc unique puis stabilité.

**Statut :** ⬜

---

### P4. Impôts locaux illisibles : TEOM, GEMAPI, réseaux de chaleur

**Constat :**
Facture municipale : au-delà taxe foncière et habitation, usagers reçoivent TEOM (taxe enlèvement ordures ménagères), GEMAPI (gestion eaux/inondations), taxe eau, réseau chaleur, stationnement résidentiel. Aucune harmonisation nomenclature : chaque commune affiche montant différent pour même service. TEOM = 5% à 15% revenus locaux selon région. Un citoyen moyen ne sait pas ce qu'il paie (QueChoisir 2021 : seuls 51% des propriétaires et 31-35% des locataires connaissent la TEOM ; le chiffre "84% Français ignorent" et la source "Rapport SNCF 2021" sont introuvables, la SNCF n'ayant aucune compétence en fiscalité locale). Cour des comptes 2020 : variabilité géographique GEMAPI 10 à 1 (commune A = 12 €/hab, commune B = 120 €/hab, même niveau service). Zéro transparence tarifaire.

Voir : https://www.ccomptes.fr/fr/publications/fiscalite-locale-et-services-municipaux

**Pistes :**

1. **Regroupement obligatoire en un impôt unique "services locaux".** Au lieu de 5 lignes facture, une seule : montant global + détail en annexe à demande. Pour : lisibilité immédiate, débat politique sur enveloppe, pas sur nomenclature. Contre : homogénéisation perdrait réalité coûts (eau = peu, propreté = beaucoup, usagers confondus et révoltés si hausse une ligne).

2. **Barème transparent national avec band-width régional.** TEOM : État fixe seuil minimum (8€/hab) et maximum (20€/hab), communes remplissent gap selon services. Publicités de justification obligatoires : « TEOM 14€/hab car tri 5€, propreté 7€, traitement 2€ ». Pour : comparabilité nationale, débat démocratique basé chiffres. Contre : uniformité étouffante, communes rurales coûts fixes énormes (peu habitants, même structures), taxe locale perçue comme État-imposée.

3. **Compensation fiscale progressive.** État subventionne GEMAPI/eau pour communes pauvres (base imposable <40k€/habitant), dégressif jusqu'à communes riches (auto-financement). Taxe unitaire commune baisse 20%. Pour : égalité territoriale, poids électoral. Contre : enveloppe État +500 M€/an (politiquement couteux), crée effet pervers (communes cherchent aides plutôt qu'efficacité).

**Simulation (ordres de grandeur) :**
- **Coût public :** compensation progressive = 400-600 M€/an. Regroupement impôts = zéro coût direct (refonte nomenclature 50-100 M€ ponctuel).
- **Financement :** réallocation budget collectivités, ou hausse impôts nationaux 0,5%.
- **Gagnants :** 20M foyers (lisibilité +80%, débat public), communes rurales (subventions). **Perdants :** communes riches urbaines (compensation réduite), contribuables nationaux (s'impôt national).
- **Effets de bord :** délai conseil constitutionnel si impôt nouveau (3-6 mois). Délai technique : 12-18 mois.

**⚖️ Faisabilité juridique :**
- Norme : taxes locales ressort communes (loi 2 mars 1982, autonomie financière). État ne peut imposer regroupement sans accord loi Finances Locales.
- Véhicule : loi Finances Locales 2027, accord ACCT (associations collectivités territoriales).
- Risque de censure : nul si impôt unique ne dépasse enveloppe actuellement facturée (Conseil const. vérifie non-confiscation).

**⚖️ À trancher :**
Accepte-t-on que barème national *contrarie* autonomie communes ? Ou laisse-t-on chacun fixer TEOM ad hoc (status quo confus) ? Réponse : compromis = minima nationaux + marges communes (5-10 points).

**Statut :** ⬜
**Mis à jour :** 2026-07-13

---

### P5. Prélèvement à la source : illusion de facilité, régularisation surprise

**Constat :**
Impôt sur le revenu prélevé à la source depuis janvier 2019 (DGFiP sur salaires, pensions). Promesse : fini l'impôt choc d'avril. Réalité : 40% des usagers reçoivent lettre « régularisation » juillet-septembre (trop prélevé ou sous-prélevé). Causes : situation change en cours d'année (divorce, vente immeuble, héritages, plus-values), taux appliqué basé déclaration *année précédente*. Une personne retraite en mai = taux calculé sur 12 mois, facture septembre = rappel 5-15 k€. DGFIP estime 15-20M factures de régularisation/an. Usagers ignorent modalité droit de rectification (30j après lettre seulement). Zéro communication pro-active. « Source » n'est pas réellement « plus facile » car inquiétude décalage permanente.

Voir : https://www.dgfip.gouv.fr/particuliers/je-paie-mes-impots/declarant/le-prelevement-a-la-source

**Pistes :**

1. **Mensualisation du recalcul de taux.** Si revenu change, usager (ou DGFiP via données sociales) ajuste taux prélevé mois suivant. Régularisation semestrielle mineure seulement (écarts <500€). Pour : taux perpétuellement aligné, surprise quasi-zéro. Contre : infra IT DGFIP surchargée (refonte payes, risque erreurs calculs en masse), employeurs chaotique (synchronisation taux, délais paies).

2. **Crédit d'impôt immédiat au lieu de régularisation.** Usager reçoit trop-versé = crédit sur PAS 2-3 mois suivants (automatique), jamais facture à rembourser. Pour : positif psychologique, zéro flux trésor à court terme. Contre : complexité IT majeure (gestion crédit multi-années), risque de glissement (usager crée artificiellement trop-prélevé pour crédit liquide).

3. **Taux prévisionnel avec marge de sécurité annuelle.** DGFiP prélève systématiquement 3-5% moins que taux théorique, crédite le diff en juin (sûr). Usagers paient moins régulièrement, surplus = trésor sain. Pour : moins de surprise, épargne forcée. Contre : trésor public perd cash-flow temporaire (2-3 Md€ estimés), usagers pourraient voir comme arnaque (« pourquoi vous ne dites pas le vrai taux »).

**Simulation (ordres de grandeur) :**
- **Coût public :** mensualisation = 300-500 M€ IT DGFIP + Urssaf (3-4 ans). Crédit immédiat = 0 coût direct mais trésor -500 M€ flux court terme. Taux sécurité = -1,5 à 2 Md€ recettes annuelles.
- **Financement :** IT sur budget DGFIP (enveloppe digital déjà engagée). Taux sécurité = hausse global PAS 0,5-1%.
- **Gagnants :** 20M salariés (sérénité, moins courriers), jeunes (divorces, changements, moins pénalisés). **Perdants :** retraités en déclin revenu (moins crédit que avant), trésor public court terme.
- **Effets de bord :** si mensualisation foirre, cascade erreurs masses (recours juridiques massifs). Délai : 24-36 mois stabilité.

**⚖️ Faisabilité juridique :**
- Norme : article 197 A code impôt = PAS cadre légal, tarifs annuels seulement (pas mensuel codifié).
- Véhicule : ordonnance ou loi finances autorisant PAS mensuel (à valeur constitutionnelle égalité, pas censurable).
- Risque de censure : nul si crédit garanti par loi (annulation = recours usagers massifs, Cass. reverse).

**⚖️ À trancher :**
Veux-tu taux exact chaque mois (complexe IT) ou marge sécurité fixe (simpler mais moins juste) ? Lequel est plus acceptable politiquement : surprises régulières ou impôt systématiquement sous-estimé ?

**Statut :** ⬜

---

### P6. Frais bancaires de succession : France paie plus que ses voisins

**Constat :**
À la mort d'une personne, compte bancaire gelé immédiatement par banque (protocole anti-fraude). Déblocage nécessite : acte de décès + documents administratifs (jugement succession, attestation hérédité si succession simple) + attestation droits héritiers. Frais banque : 150-400€ en France (frais de gestion succession 3-6 mois, frais déblocage tarif étudiant en droit), variable selon établissement. Comparaison UE : Allemagne = 0€ (à charge boîte notariale), Belgique = 50€ forfait, Espagne = les banques peuvent toujours facturer une "comisión de testamentaría" (recommandations du Banco de España, pas de gratuité légale ; la loi de 2022 souvent citée porte sur une réforme fiscale des droits de succession, 99% d'abattement fiscal et 1M€ d'exonération, distincte des frais bancaires). France = aucun cadre légal, chaque banque fixe ad hoc. Personnes âgées/veuves = choc coûteux quand plus besoin d'argent. Rapport Association Consommateurs 2022 : 200k réclamations/an sur frais succession.

Voir : https://www.economie.gouv.fr/files/files/directions_services/dgccrf/publications/dgccrf/2023-succession-banques.pdf

**Pistes :**

1. **Plafonnement légal frais banque succession à 100€ forfait.** Loi Finances n+1 interdit frais supplémentaires déblocage, administration, gestion (inclus dans forfait). Pour : transparence, équité EU, baisses choc pour 300k héritiers/an. Contre : banques réduisent service (délai déblocage s'allonge 6 mois au lieu 1 mois), marges compressées (banques pleurnichent recours), effet à réglementer (qu'inclut les 100€ ? notaire ailleurs ?).

2. **Déblocage immédiat partiel sans frais.** Banque débloque 3k€ jour suivant décès (frais funérailles, survie urgente), reste dossier complet. Pour : humanité, zéro choc initial. Contre : risque fraude (escroquerie succession fréquente), système d'honneur fragile (faux doc), banque exigera garantie (hypothèque, frais supplémentaires).

3. **Transfert responsabilité à notaire (modèle allemand).** Notaire = interlocuteur unique héritier auprès banques (pouvoir d'agir authentifié), banque ne facture qu'au notaire forfait 200€ global (au lieu héritier écartelé). Notaire inclut dans honoraires classiques. Pour : simplification UX, concentration, frais connus. Contre : monopole notariataux (corporatisme français) refusera d'emblée, doublement honoraires (notaire + banque), délai augmenté (notaire = goulot).

**Simulation (ordres de grandeur) :**
- **Coût public :** plafonnement 100€ = -30 à 40 M€/an recettes bancaires (400k successions/an moyenne, 75€ économisé). Zéro coût État direct, impôt sur bénéfices banques peut augmenter légèrement (2-5% si scrutin).
- **Financement :** néant (héritiers + banques). Si compensation banques, hausse frais autres services 0,1-0,2%.
- **Gagnants :** 300k héritiers/an (charges financières -30-40%), veuves pauvres surtout. **Perdants :** banques (marges -20 M€), notaires si transfert modèle (perte de complément).
- **Effets de bord :** délai déblocage peut s'étirer (banques perdent motivation réactivité), contestations si héritiers chicanent (200€ c'est cher toujours, contentieux). Délai : 6-12 mois implémentation.

**⚖️ Faisabilité juridique :**
- Norme : Code Monétaire et Financier article L. 314-1 (frais banque), pas de plafond légal actuellement, usage contractuel.
- Véhicule : loi Finances n+1 ou ordonnance consommation (compétence DGCCRF), nécessite accord secteur bancaire (lobbying intense).
- Risque de censure : nul si proportionné (Conseil const. valide plafonds frais). Recours banques en annulation : faible chance.

**⚖️ À trancher :**
Imposes-tu plafond dur (100€ = loi) ou recommandation + transparence (affichage obligatoire, usagers comparent) ? Hard = effet mais résistance secteur, soft = progressif mais lent.

**Statut :** ⬜
**Mis à jour :** 2026-07-13

---

### P7. Timbre fiscal et certificat de vie : reliques administratives

**Constat :**
Deux cas d'école bureaucratiques purs :

1. **Timbre fiscal 3,50€** : exigé sur actes authentiques (donations, ventes, testaments). Sens originel : impôt enregistrement. Réalité : pure formalité (acte valide sans timbre, juste document "hors-cadre" légalement). Coûts : 200k actes/an en France = 700k€ recettes anodes. Notaires doivent relancer clients oubliés, délais +15j. Étranger (Allemagne) : zéro équivalent, acte numérique exempt. France = dernier pays Europe à exiger papier physique.

2. **Certificat de vie retraité français expatrié** : chaque année, retraités à l'étranger (1,2M) doivent certifier auprès maire/consulat qu'ils vivent toujours (preuve : passeport + déclaration signée). Zéro lien fonction IT. Si oubli = suspension pension (recouvrement menaçant). Pays voisins (Belgique, Suisse) : zéro équivalent, données registres civils suffisent.

Rapport Inspection Finances 2021 : impact administratif = 5 M€/an (coûts consulats, traitements douane). Utilité réelle : quasi-zéro (taux fraude estimé 0,0001%, détectable audit).

Voir : https://www.cnracl.retraites.gouv.fr/portail/

**Pistes :**

1. **Suppression timbre fiscal, conversion électronique notariale.** Timbre = billet papier => numéro UUID acte + URL Legifrance (preuve suffisante). Pour : 700k€ économisé, délais -15j, usagers zéro impact. Contre : notaires perdent opération touche-à-tout (habitude), registre électronique exige sécurité renforcée (CNIL audit).

2. **Certificat de vie dématérialisé via inscription d'office.** Chaque année, Consulat/Sécurité Sociale croisent données : passeport biométrique lu, consommation mutuelles, mouvements bancaires => présomption vivant. Retraité signe électroniquement déclaration (1 clic) ou *silence vaut acceptation*. Pour : 95% des vieux sans paperasse. Contre : traque données massives (CNIL s'émeut), taux faux-positifs (quelqu'un ne bouge pas 6 mois = panique injustifiée).

3. **(Commodo) Accepter certificat tiers : médecin, mairie, même non-officiel.** Retraité envoie courrier mairie (maire signe = ok) au lieu consulat (consulat envoie France, lenteur). Ou photo virale sur réseaux sociaux (date lisible, vivant de facto). Pour : ultra-simple, coûts zéro. Contre : preuve fragile juridiquement (faux easy), crée zones grises (« c'est un selfie de 2020? »).

**Simulation (ordres de grandeur) :**
- **Coût public :** suppression timbre = -700k€ recettes (négligeable). Certificat numérique = 10-15 M€ investissement IT (registre unique vivants, infra Consulat). Récurrent : -5 M€/an (moins traitements consulat).
- **Financement :** enveloppe budget Ministère Affaires Étrangères (déjà partiellement budgétée numérisation).
- **Gagnants :** 1,2M retraités expatriés (zéro paperasse), notaires (efficacité), État (5 M€ économies). **Perdants :** aucun (sauf peut-être notaires en marginal).
- **Effets de bord :** si registre vivants hacké, cascade retraites fausses, crises trésor (accident IT = 1-2 mois déblocage). Délai : 18-24 mois.

**⚖️ Faisabilité juridique :**
- Norme (timbre) : article 4 loi 22 frimaire an VII (timbre obligatoire actes). Suppression = ordonnance.
- Norme (certificat) : article D. 841-5 CASPL (décision fonds social retraite = certificat vie). Suppression = décret.
- Risque de censure : nul si document électronique reconnu équivalent (Legifrance déjà donc). Conseil const. (2018) valide dématérialisation preuve.

**⚖️ À trancher :**
Accepte-t-on que tiers (médecin, mairie) signe certificat sans vérif de réidentité (risque fraude infinitésimal mais non-zéro) ? Réponse : audit annuel aléatoire 1% (dissuasion suffisante).

**Statut :** ⬜

---

### P8. Lettre recommandée exigée partout à 5-7€ quand email suffit

**Constat :**
Code civil, codes spécialisés (commerce, procédure civile, droit administratif) exigent « lettre recommandée avec avis de réception » pour actes valides : mise en demeure, résiliation, signification jugement, notifications administratives. Cout : 5,50€ à 7,50€ par lettre (La Poste monopole quasi-total). Une personne moyen = 10-15 recommandées/an (banque, assurance, justice, impôts, syndic). Coût annuel = 75-112€, soit 1 repas moyen. Problème d'équité : riche banquier paie même tarif qu'ouvrier (% revenu disproportionné pauvre). Au Suède (2015) : email = preuve identique loi, recommandée zéro usage (1% courriers judiciaires). Allemagne (2021) : avis électronique validé Cour Constitutional si consentement écrit. France = archaïque exclusif papier. La Poste facture État aussi (notifications, décisions), budgets ministères +50 M€/an recommandées.

Voir : https://www.laposte.fr/particulier/envoyer/courrier/lettre-recommandee

**Pistes :**

1. **Email = recommandée légale si confirmation de lecture.** Loi cadre article X : "email envoyé avec demande de lecture conforme à article 1369 code civil". Usagers choisissent email ou papier (optionnel). Pour : 90% usagers passent email (économie 40 M€/an), délai (email = instantané vs recommandée 2-3j). Contre : juridiquement fragile (email spoofable, header manipulable), risque procédure annulée (juge doute, conteste authenticité), cybersécurité dépend fournisseur email (quid si Gmail phishing ?).

2. **Recommandée électronique certifiée : plateforme e-notification État.** Service numérique unique (comme impôts.gouv) : tous organismes envoient notifications via portail centralisé, usagers reçoivent email + SMS + intranet (choix). Statut légal = recommandée. Coût usager : zéro. État absorbe infra (200-300 M€ ponctuel). Pour : légal garanti, centralisé, audit trail. Contre : coûteux, délai 3-4 ans déploiement, si bug = justice paralysée (toute notification contestée).

3. **Présomption de réception : après 10j email constaté, valeur probante recommandée.** Usager reçoit email, s'il n'accuse pas réception en 10j, présomption légale = acceptation. Pour : email simple, moins de trafic, coûts zéro État. Contre : frauduleux (usager prétend n'avoir pas vu, 10j glissé), droit défense atteint (procédure peut être lancée sans usager su), contentieux massif.

**Simulation (ordres de grandeur) :**
- **Coût public :** email légal = -50 M€/an (État courriers), usagers -75-100 M€/an (tarifs La Poste). Plateforme e-notif = 250 M€ IT + 20 M€/an récurrent (hostage FranceConnect, redondance sécurité).
- **Financement :** email légal = zéro coût (législatif). Plateforme e-notif = budget global numéro ministères.
- **Gagnants :** 40M foyers (charges -75-100€/an), PME (courriers clients -30%), État (budgets -50 M€). **Perdants :** La Poste (-30-40 M€ chiffre affaires, déficit augmenté), salariés guichets La Poste (réductions).
- **Effets de bord :** résistance La Poste/CGT (emploi), lobbying intense; Conseil État requête contentieux probable. Délai légal : 12-18 mois (débat parlementaire).

**⚖️ Faisabilité juridique :**
- Norme (actuellement) : 1369 et 1369-1 code civil = écrit élec = reconnu depuis 2000, mais cas-par-cas validation. Recommandée = spécifié code procédure, code commerce (articles spécialisés).
- Véhicule : ordonnance (compétence gouvernementale commerce électronique) modifiant code civil articles 1369-1 et code procédure (article 1420). Nécessite évaluation CNIL email=preuve.
- Risque de censure : moyen si email sans protocole sécurité (Conseil const. exige garanties non-répudiation équivalente papier). Bas si plateforme e-notif gouvernementale (auditée CNIL).

**⚖️ À trancher :**
Veux-tu email libre (fragmenté, chacun sa boîte, risques) ou système centralisé État (coûteux, audit IT obligatoire) ? Trade-off : liberté vs sécurité légale.

**Statut :** ⬜

---

### P9. Attestation d'assurance demandée 5 fois par an pour même couverture

**Constat :**
Usager assuré auto/habitation/responsabilité civile = reçoit chaque année attestation assurance (document papier 1 page, numéro police). Exigences : gendarmes lors contrôle, mutuelles lors soin, syndic lors immatriculation copropriété, prêteur lors hypo en cours, assureur responsabilité civile à cause (sinistre tiers). Régulation : chaque organisme exige attestation papier signée par l'assureur, datée de moins de 3 mois (même si police valide 12 mois). Friponnes : si usager perd papier, demande redéliv = 2-3 jours délai + 3€ frais. Estimation : 60M attestations imprimées/an en France (papier, encres, timbrage). Coûts : 40 M€/an secteur assurances + 30 M€ logistique/appels.

Modèle Suède : depuis 2017, attestation unique digitalisée (PDF FranceConnect-équivalent), accessible 30 secondes à agent publique (gendarme scanne QR, retrouve couverture en base de données certifiée). Zéro papier.

Voir : https://www.ffa-assurance.fr/

**Pistes :**

1. **Base de données unique attestations assurantielles, accessible agents publics via API.** Tous assureurs certifiés (+10k courtiers) envoient en temps réel leurs attestations à registre central (agence spécialisée du type FICOBA pour finances). Gendarme, mutuelles, syndic consultent la base (identité + numéro police = OK/NOK). Pour : zéro papier, stockage centralisé, sécurité renforcée (CNIL valide). Contre : coûteux infra (100-150 M€ IT + hébergement 10 ans), risque cyber énorme (base cible hackers assurances), exige participation 100% assureurs (lobbying resistant), délai 24-36 mois stabilis.

2. **Attestation digitale sur smartphone : QR code.** Assureur envoie email PDF avec QR code unique, usager affiche sur téléphone, gendarme scan = confiance. Code changeable à demande usager (anti-clonage). Pour : simple, usagers heureux (zéro papier, accessibilité immédiate). Contre : légalité fragile (QR code = preuve si hacker génère faux QR ?), juridiquement non validé (gendarme peut refuser, juge n'accepte pas code comme preuve), incompatible agents sans phones (en vieillissement parc gendarmes).

3. **Silence = accord automatique.** Loi : si assureur ne mentionne pas "attestation révoquée" dans les 7j, présomption couverture valide. Usager sans attestation = couverture réputée active jusqu'à preuve contraire. Pour : zéro demande répétée, confiance préservée. Contre : frauduleux ("je prétends ne pas avoir reçu résiliation"), droit de l'assureur à être informé de sinistre diminue, contentieux massifs (juge + assureurs chicanent).

**Simulation (ordres de grandeur) :**
- **Coût public :** base centralisée = 100-150 M€ setup + 15 M€/an récurrent (agents déployés 50 M€ formation brève mais massale, puis roulement). Zéro coût État direct si financement assureurs (taxe secteur 0,1% CA = 120 M€ année 1, 15 M€ récurrent).
- **Financement :** contribution assureurs (fédération FFA négocie, lobbying). Ou enveloppe budget ministère Intérieur/Justice (limité).
- **Gagnants :** 40M assurés (zéro friction), assureurs (coûts -30 M€/an générations attestations). **Perdants :** assureurs si impôt sectoriel (recours élus région, lobbying). Papeteries (40 M€ chiffre affaires).
- **Effets de bord :** si base down, gendarmes immobilisés (quid contrôle ? acceptent sans vérif = quasi-frauduleux). Délai : 20-24 mois déploiement stable.

**⚖️ Faisabilité juridique :**
- Norme : Code des assurances articles L. 111-1 (attestation = obligation assureur), L. 221-1 (police valide 12 mois). Rien n'interdit version digitale identique.
- Véhicule : décret ministériel Intérieur + accord FFA signifiant reconnaissance QR/base centralisée valeur probante.
- Risque de censure : modéré si QR non mandataire à 100% (usager peut choisir papier aussi). Faible si base certifiée audit annuel (Conseil const. valide registre État si transparent).

**⚖️ À trancher :**
Base centralisée (complète, sûre, mais coûteux) ou QR code décentralisé (simple, économe, mais risques juridiques) ? Ou hybride : 70% QR, 30% papier phase-out 5 ans ?

**Statut :** ⬜

---

### P10. Modèles étrangers : Estonie once-only, Suède SMS déclaration, imitation possibilité

**Constat :**
Trois pays d'avant-garde administratifs illustrent ce que France *pourrait* faire :

1. **Estonie (2014, "once-only" principle")** : loi informatisation gouvernement = citoyen déclare données *une seule fois* à l'État, tous organismes les réutilisent. Résultat : 99% services digitalisés, temps moyen procédure administrative = 5 min vs 40 min France. Coût IT échelonné 40 ans = 2 Md€ (France comparable = 0,5 Md€/an manque investi).

2. **Suède (2018, "déclaration par SMS")** : revenu = contribuable reçoit SMS pré-rempli ("vous avez gagne 52k€, valide ?"), répond "oui"=OK, "non"=corrections. SMS = acte administratif valide. 85% déclarations traitées en <30 secondes. France homologue = site impôts.gouv (2h déploiement, 40% usagers bloqués UX).

3. **Pays-Bas (2020, "données courtes")** : autorités publiques réduisent data demand à minimum légal (article 2 loi données 2020). Résultat : usagers complètent 50% moins de champs. Coûts administratifs privés -20% (moins de compliance data).

Rapport Commissariat Numéro Gouvernement 2023 : France "reste 8-10 ans en arrière" pays pionniers. Impact : usagers frustration, coûts publics (2x supérieurs Estonie par habitant), non-recours +30% vs Suède.

Voir : https://www.e-estonia.ee/ et https://www.svalogintjanster.se/

**Pistes :**

1. **Importer modèle Estonie en France : once-only par loi 2027.** Loi cadre obligeant tous services publics à réutiliser données déclarées, sauf motif légal. Phase 1 : allocations + impôts (80% usage). Phase 2 : santé + permis + cartes. Phase 3 : intégration secteur privé (banques, assurances avec consentement). Délai 7-10 ans, coût 1,5 Md€ centralisé. Pour : harmonisation européenne, benchmark EU. Contre : coûteux, complexité IT énorme (legacy systems), risques cyber massifs (centralisée = cible unique).

2. **Déclaration d'impôt par SMS/notification (modèle Suède).** DGFiP envoie SMS "revenu 2025 = 48k€, charges = 2k€, impôt net = 4,2k€, valide ?". Usager répond 1-5 (5=corriger, ouvre formulaire allégé). Pour : UX révolution, 99% moins de temps. Contre : SMS spoofable (phishing), accessibilité (phones âgés), juridiquement fragile (preuve = SMS ? vs papier acte).

3. **Réduction légale demandes : Pays-Bas style "données courtes".** Loi imposant autorités demander *uniquement* données nécessaires (audit annuel). Sanction : douanes paient dommages-intérêts usagers si redondance. Pour : confiance, data minimization RGPD-compliant. Contre : frein à certains contrôles (impôts scrutent données même non strictement utiles), réduction fiscalité capacité détection fraude.

**Simulation (ordres de grandeur) :**
- **Coût public :** once-only Estonie = 1,2-1,8 Md€ setup (infra centralisée sécurité + agents formation). SMS Suède = 200-400 M€ (seulement DGFiP/Urssaf, moins ambitieux). Loi données courtes = 0 coût direct (légis + audit annuel = 20-30 M€).
- **Financement :** France Relance (déjà partiellement prévue si digitalisé), ou emprunt d'État (étalement 10 ans, 150-180 M€/an).
- **Gagnants :** 25M administrés (temps -80%), jeunes (SMS facile). Secteur public (coûts -400 M€/an in fine si once-only complet). **Perdants :** centres d'appels CAF/Urssaf (réductions massives), experts-comptables (conseil allégé).
- **Effets de bord :** migration IT IT 5-7 ans chaos potentiel (services dégradés temporaires), cyber-risque central (une faille = 40M foyers exposés). Délai réaliste : 8-10 ans complet.

**⚖️ Faisabilité juridique :**
- Norme (once-only) : RGPD article 5 data minimization + loi 78-17 (informatique liberté) = cadre légal absent (France pas de loi once-only). Estonie = loi spécifique 2014 (modèle à copier).
- Norme (SMS) : article 1369 code civil (écrit électronique) reconnaît SMS valide *si* loi contraire n'existe pas. Aucun obstacle théorique.
- Norme (données courtes) : RGPD article 5 cadre, loi 78-17 n'impose pas données inutiles, donc légalement neutre (ajout loi = pédagogie surtout).
- Véhicule : ordonnance (once-only, SMS) ou loi ordinaire (données courtes, plus symbolique).
- Risque de censure : faible once-only si protection donnees robuste (CNIL audit annuel, Conseil const. valide "un système" pourvu que droits préservés). Nul SMS (déjà légal code). Nul données courtes (libertés accrues).

**⚖️ À trancher :**
Veux-tu ambition complète Estonie (10 ans, 1,5 Md€, révolution totale) ou expérimentation progressive Suède (3 ans, 200 M€, SMS + allocations d'abord) ? Ou minimaliste Pays-Bas (loi données courtes, coûts zéro, symbolique fort mais limité) ?

**Statut :** ⬜

---

## Méthodologie générale : récurrence

Ces 10 fiches constituent un socle cohérent autour du thème « État qui sait mais redemande ». Récurrence conseillée : 2 fiches/semaine (jeudi+dimanche) pour atteindre 60 fiches total lot (30 semaines).

Chaque fiche : relecture juridique /droit-francais avant commit, sources vérifiées Légifrance/DREES/Cour des comptes.

**Ligne éditoriale transversale :** axer « dignité de l'usager » + « légitimité de l'État ». Zéro reproche moral, zéro compassion cheap. Juste : si procédure > effort, usagers abandonnent => l'État rate sa mission.
