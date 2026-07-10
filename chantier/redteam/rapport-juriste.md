# Red team : le juriste constitutionnel attaque

## Faille 1 : RIC constitutionnel via article 89 (confusion art. 89 / RIP)

- **Cible :** Chantier 1 ligne 59-60 : "Citoyen : 500 000 signatures = question soumise à référendum (pas veto présidentiel). Ordre de marche : rédaction 2026-Q1, vote parlement 2026-Q2, référendum constitutionnel 2026-Q3."
- **Le problème juridique :** Article 89 ne crée PAS un droit de pétition citoyenne. L'article 89 énonce que "l'initiative de la révision de la Constitution appartient concurremment au Président de la République sur la proposition du Premier ministre et aux membres du Parlement". La révision est approuvée par référendum OU par une majorité de 3/5 au Congrès. Il n'existe aucun mécanisme constitutionnel permettant 500 000 citoyens de saisir le référendum via art. 89. Le seul équivalent actuel (RIP - référendum d'initiative partagée, art. 11) nécessite 1/5 des députés + 1/10 des électeurs inscrits, et porte exclusivement sur révisions constitutionnelles. La confusion entre art. 89 et un "RIC" fictif est majeure.
- **Gravité :** BLOQUANT
- **Correction :** Reformuler complètement. Option A : créer un vrai "RIC" exigerait une révision constitutionnelle de l'art. 11 (actuellement : "le Président peut soumettre au peuple tout projet de loi"). Option B : utiliser la RIP existante en réduisant les seuils par révision de l'art. 11 (ex: 200 000 signataires au lieu de 1/10 électeurs, 100 députés au lieu de 1/5). Rédaction précise : "Loi constitutionnelle modifiant l'article 11 pour réduire les seuils du RIP à [chiffres] et élargir le champ des questions référendaires" + référendum obligatoire. Délai réel : 6-12 mois minimum (révision + référendum).

## Faille 2 : Vote blanc "décisif" par décret (erreur de véhicule juridique)

- **Cible :** Jour 1, ligne 26 : "Vote blanc "decisif" | ... | Décret (adaptation électorale)". Également tableau ligne 103 et Loi 1 ligne 34-35.
- **Le problème juridique :** Le vote blanc existe depuis 1969 comme pratique, reconnu par loi n° 2014-172 du 21 février 2014 (LOI, pas décret). Rendre le vote blanc "décisif" (nouvelle élection en 90j si blanc > plus grand parti) est bien plus qu'une "adaptation électorale" : c'est une modification des modalités de scrutin, régies par l'article 3 de la Constitution ("la souveraineté nationale appartient au peuple"). Les modalités du scrutin sont définies par LOI ORDINAIRE (code électoral). Mais qui préside si le vote blanc déclenche une nouvelle élection ? L'article 8 (vacance Président), l'article 42 (vacance Assemblée) ? C'est potentiellement une question de révision constitutionnelle. Présenter cela en "Jour 1 par décret" est juridiquement faux.
- **Gravité :** BLOQUANT
- **Correction :** "Loi électorale modifiant le code électoral (articles L. 121 et seq.) pour reconnaître le vote blanc comme vote compté au scrutin présidentiel et législatif. Nouvelle élection si blanc > plus grand parti, dans délai 90j. Procédure : loi ordinaire (majorité simple), MAIS examen préalable au Conseil constitutionnel recommandé (QPC ou consultation préjudicielle) pour éviter censure post-adoption. Jour 1 : impossible. Horizon réel : 100-180 jours (débat parlementaire + contrôle CC)."

## Faille 3 : Abolition article 49.3 "par loi" (confusion loi / révision)

- **Cible :** Mesures abolition, section 6 ligne 88 : "Article 49.3 (vote de confiance bloquant) | Permet gouvernement imposer texte sans débat. (...) Remplacer par débat écrit + votes fréquents citoyen." Tableau ligne 109 : "Ancrage anti-recyclage | Loi constitutionnelle".
- **Le problème juridique :** L'article 49.3 est un article de la Constitution (Titre VII, gouvernement). Le supprimer requiert une révision constitutionnelle via article 89, pas une "loi constitutionnelle" ordinaire. Une "loi constitutionnelle" est le VÉHICULE (projet de révision), mais le processus complet est : (1) vote des deux chambres en termes identiques, (2) référendum OU Congrès 3/5. L'article 49.3 touche à l'équilibre des pouvoirs exécutif-législatif en coeur de la Constitution. Le Conseil constitutionnel pourrait rejeter la révision si elle viole des "principes inhérents à la forme républicaine du gouvernement" (art. 89, al. 5). De plus, supprimer 49.3 sans remplacer le mécanisme crée un vide procédural dangereux : comment le gouvernement engage-t-il sa responsabilité ? La feuille de route parle de "débat écrit + votes fréquents citoyen" - c'est un mécanisme nouveau qu'il faudrait constitutionnaliser, pas juste supprimer 49.3.
- **Gravité :** BLOQUANT
- **Correction :** "Loi constitutionnelle modifiant l'article 49 : suppression du 3e alinéa (49.3) et remplacement par : 'Le gouvernement peut demander un vote de confiance sur un texte après débat écrit de durée minimale X jours. Tout vote défavorable entraîne cessation du gouvernement.' ET créer article L. XXX du Code électoral pour 'votes fréquents citoyen' (décret ou loi ordinaire, pas constitutionnel). Référendum constitutionnel obligatoire, délai 6-12 mois."

## Faille 4 : Article 40 et mesures budgétaires (restriction et compensation)

- **Cible :** Loi 2 (ligne 37-38), Loi 3 (ligne 40-41), Loi 5 (ligne 46-47). Notamment ligne 38 : "Obstacle : art. 40 Constitution (gouvernement ne propose pas votations budgétaires restrictives) = approche par efficacité, pas austérité."
- **Le problème juridique :** L'article 40 de la Constitution dit : les amendements parlementaires ne sont pas admissibles "quand leur adoption aurait pour conséquence soit une diminution des ressources publiques, soit la création ou l'aggravation d'une charge publique". La jurisprudence du Conseil constitutionnel (notamment 2001-448 DC du 25 juillet 2001) précise que toute diminution de recettes doit être compensée. "Traçabilité budgétaire v1" (registre public engagement-paiement) risque de révéler des aberrations budgétaires = pression pour réduction de dépenses. "Fusion aides sociales" en "revenu de base socle unique" : si le montant total est INFÉRIEUR aux allocations actuelles (logement + RSA + parentales), c'est une "aggravation de charge" au sens inverse. Si les fiches axe4-D1 quantifient mal, risque de censure. La note ligne 38 reconnaît le problème mais propose une contournement ("approche par efficacité, pas austérité") : juridiquement flou. L'article 40 n'interdit pas les restructurations si elles ne RÉDUISENT PAS le total des allocations.
- **Gravité :** RISQUÉ (censure probable si les montants ne compensent pas)
- **Correction :** "Lois 2 et 3 doivent inclure : (1) chiffrage précis de chaque allocation avant/après, (2) compensation mathématique ligne par ligne (si fusionner RSA 600e + alloc-log 500e en revenu socle unique, montant = minimum 1100e pour chacun des bénéficiaires), (3) impact budgétaire annuel/pluriannuel chiffré. Soumettre lois 2 et 3 à Conseil constitutionnel AVANT vote (consultation facultative art. 61, al. 2) pour éviter censure post-vote. Redéfinir 'efficacité' comme 'réduction des doublons tout en maintenant ou augmentant les montants versés'."

## Faille 5 : Silence vaut accord - exceptions insuffisamment traitées

- **Cible :** Jour 1, ligne 24 : "Silence vaut accord (expansion) | Extension du silence vaut accord aux demandes de dossier médical, de données personnelles, d'autorisation urbanisme second œuvre (...) | Décret + circulaires."
- **Le problème juridique :** La loi de 2013 (11 novembre) et ses décrets d'application (2014-1286, 2014-1288, 2014-1292, etc.) ont codifié "silence vaut acceptation" dans le code des relations public-administration (articles L. 231-1 et seq.). MAIS des exceptions existent : silence vaut REJET quand (1) la demande ne vise pas une décision individuelle, (2) elle ne relève pas d'une procédure législative/réglementaire, (3) elle a un caractère financier (SAUF sécurité sociale par décret), (4) la décision contrevient aux engagements internationaux/UE. Dossier médical = OK. Données personnelles = OK (RGPD demande réponse aussi). Autorisation urbanisme second œuvre = PROBLÈME : c'est une décision de l'administration. Si l'urbanisme touche à la fiscalité locale (contribution foncière), ça a "caractère financier" = EXCEPTION. La feuille de route ne dit pas comment elle contourne l'exception "caractère financier". Imposer silence vaut accord pour l'urbanisme par simple "circulaire" n'aura pas force de loi si le cadre légal exclut l'urbanisme.
- **Gravité :** RISQUÉ (rejet administratif probable si dépassement de champ légal)
- **Correction :** "Limiter expansion aux domaines non-financiers : (1) dossier médical, (2) données personnelles, (3) demandes administratives complexes (copie documents). EXCLURE autorisation urbanisme ou préciser : 'silence vaut accord uniquement pour demandes de 2nd œuvre non-soumises à taxe d'aménagement'. Ou modifier la loi 2000-321 (art. 21) pour ajouter 'urbanisme' à liste d'exceptions conditionnelles. Loi ordinaire nécessaire, pas décret seul."

## Faille 6 : Chat Control par note présidentielle (procédure insuffisante)

- **Cible :** Jour 1, ligne 28 : "Anti-Chat Control préventif | France et alliés bloquent dans les votes UE tout texte de surveillance cryptographique ou de scan côté client. Positionnement diplomatique clair. | Note présidentielle."
- **Le problème juridique :** Une "note présidentielle" est un acte interne de pilotage du gouvernement. Elle ne lie pas la France au sein des institutions UE (Conseil, Parlement européen, Commission). La position de la France aux votes du Conseil (directive CSAM/Chat Control) est définie par : (1) instruction du ministre des affaires étrangères et du ministre sectoriel (intérieur/numérique), (2) coordination en COREPER (comité des représentants permanents). Une simple note présidentielle ne suffit pas à garantir un "blocage". De plus, la directive Chat Control (ou sa variante 2025) est en cours de finalisation : imposer une position française "préventive" via note risque de surprendre les alliés et affaiblir la négociation. La vraie procédure : Conseil informé par gouvernement via ministères; débat parlementaire français sur mandat UE. Mentionner "note présidentielle" comme véhicule juridique pour une position diplomatique est un malentendu institutionnel.
- **Gravité :** RISQUÉ (procédure défaillante; risque d'isolement UE non maîtrisé)
- **Correction :** "Remplacer par : (1) Circulaire interministérielle (PM + affaires étrangères + numérique) donnant mandat au représentant permanent UE pour bloquer tout texte contenant client-side scanning, (2) Débat parlementaire (Assemblée/Sénat) fixant position française sur chiffrement avant vote conseil, (3) Si vote imminent, projet de loi ratifiant position française pour asseoir légitimité démocratique. Jour 1 : faisable par circulaire. Long terme : débat parlementaire 100-180 jours."

## Faille 7 : Langage clair obligatoire par décret (flou normatif et procédure)

- **Cible :** Jour 1, ligne 23 : "Langage clair obligatoire | Tous les textes administratifs finançables publiquement doivent être rédigés en langage clair certifié (A2 niveau CECRL). Contrôle par tierce partie. | Décret."
- **Le problème juridique :** (1) Il n'existe pas de norme juridique française fixant un niveau CECRL A2 pour textes administratifs. Le CECRL (Cadre européen commun de référence) est un outil pédagogique pour langues étrangères, non une norme d'administration française. Imposer A2 sans définir légalement ce que c'est = risque de contestation (imprécision). (2) "Contrôle par tierce partie" : qui ? Quelle agence ? Avec quel pouvoir sanction ? Un décret seul ne peut pas créer une autorité de contrôle; nécessite une loi. (3) "Tous les textes administratifs finançables publiquement" = portée énorme. Coût de conformité (traduction/révision de milliers de textes) = charge substantielle = risque article 40 inverse (créer "aggravation de charge publique" = dépenses de conformité). Imposer cela par "décret" sans loi votée = contestable juridiquement.
- **Gravité :** RISQUÉ (norme imprécise, procédure insuffisante, risque article 40)
- **Correction :** "Remplacer par : (1) Loi ordinaire fixant principe 'Tous les textes administratifs et circulaires doivent être rédigés en langage simplifié conforme au standard ISO 15301 ou guide EASYREAD', (2) Définir 'langage simplifié' par référence à guide officiel (Agence SNCF, Urssaf, etc., déjà existants), (3) Phase 1 (Jour 1) : circulaire recommandant simplification pour nouveaux textes, (4) Phase 2 (100j) : loi établissant obligation graduelle (2026 nouveaux textes, 2027 fonds). Abandonner référence CECRL A2 = flue vague. Auditer coût avant jour 1."

## Faille 8 : RIC constitutionnel - quorum et légitimité référendaire

- **Cible :** Chantier 1, ligne 60 : "Risque : RIC = plébiscite autoritaire si majorités volatiles ? Parade : seuil 20 % (20 % citoyens = raison d'être)."
- **Le problème juridique :** Réduire le seuil à 20 % de citoyens (12-13 millions environ) pour saisir le référendum via art. 11 modifié soulève deux risques constitutionnels : (1) Risque de saturation référendaire = instabilité institutionnelle. Le Conseil constitutionnel, en contrôle de révision, peut rejeter si la révision rompt "les principes inhérents à la forme républicaine du gouvernement" (art. 89, al. 5). Introduire instabilité chronique pourrait être jugé contraire à la République. (2) Le seuil 20 % créerait une inégalité implicite : 20 % en zone urbaine (forte participation) vs 20 % en zone rurale (plus facile). Comment organise-t-on un référendum citoyen sans double majorité territoriale (ex: majorité dans 3/4 régions) ? La Constitution impose-t-elle l'égalité électorale (art. 3) aux initiatives ? Flou juridique.
- **Gravité :** RISQUÉ (risque censure révision + inégalité territoriale)
- **Correction :** "Fixer seuil à minimum 1/5 des électeurs inscrits (2,5-3 millions aujourd'hui) avec condition de majorité dans au moins 50 % des départements pour légitimité territoriale. Ou maintenir 1/10 (1,25-1,5M) si double majorité territorial. Soumettre révision art. 11 au Conseil constitutionnel préalablement (consultation facultative). Reconnaître risque instabilité dans texte loi constitutionnelle, proposer 'plafond 2 référendums par an' pour limitation."

## Faille 9 : Blockchain budget et directive UE énergie (flou sur compensation)

- **Cible :** Chantier 2, ligne 62-63 : "Blockchain souveraine du budget (...) Risque : gourmandise électrique (blockchain) = compensation énergie verte obligatoire."
- **Le problème juridique :** (1) Une blockchain pour tracer tous les flux d'aide (RSA, allocations familiales, investissements publics) en "chaîne immutable" assume que chaque transaction coûte X électricité. Or le coût énergétique dépend de la technologie (Proof of Work vs Proof of Stake). Si technologie PoW (très énergivore), la feuille de route propose "compensation énergie verte obligatoire" - pour qui ? L'État paie les énergies renouvelables ? Qui fixe le prix de compensation ? Juridiquement flou. (2) Directive UE 2024/1619 (énergie) demande à chaque État d'augmenter capacité renouvelable. "Compensation obligatoire" pour blockchain peut être INCOMPATIBLE avec directive : chaque euro "compensation blockchain" est un euro détourné des objectifs UE de décarbonisation générale. Risque contentieux UE. (3) Budget informatique : "50-100 M€" affiché (ligne 62) mais blockchain avec garantie immutabilité + consultes citoyen = coût probablement sous-estimé (200-500 M€).
- **Gravité :** COSMÉTIQUE (risque financier/UE, moins critique que bloquants constitutionnels)
- **Correction :** "Spécifier technologie blockchain : Ethereum 2.0 (Proof of Stake, ~0.5W par transaction) plutôt que Bitcoin. Estimer coût énergétique réel et l'inclure dans bilan 'Chiffre thermique' du site. Abandonner 'compensation énergie verte obligatoire' = flou. Remplacer par : 'Infrastructure blockchain hébergée sur serveurs 100 % énergies renouvelables certifiées'. Budgéter réalistement : 200-300 M€ sur 5 ans. Vérifier compatibilité directives UE 2024 énergie/numérique avant implémentation."

## Faille 10 : Prix plancher agricole - obstacle UE concurrence non résolu

- **Cible :** Chantier 5, ligne 74-75 : "Prix plancher agricole + accompagnement (...) Coût : 10-15 Md€/an en soutien prix (...) Risque : UE droit concurrence, réaction GMS."
- **Le problème juridique :** Fixer un prix plancher (ex: lait 40c/L, volaille 3€/kg) est un prix minimum légal. Or, le traité de Rome (article 101-102 TFUE) interdit ententes sur les prix entre entreprises. Seul l'État peut imposer des prix (ex: médicaments). Mais prix plancher français veut dire : interdire toute vente dessous, y compris importations UE. C'est une entrave à la libre circulation des marchandises (article 34 TFUE). La Commission UE a censuré des prix plancher similaires (Belgique lait, 2009). "Accompagnement : contrats filière" est l'esquive : si on passe par contrats volontaires (État + coopératives lait), ça n'est PAS un prix plancher légal = contournement. Mais feuille de route dit "prix plancher garantis + clawback sur surmarges" = intervention d'État direct = incompatible UE. "Réaction GMS" = hypermarchés contesteront en justice. Les 10-15 Md€/an suppose financement public massif, qui suppose loi budgétaire, qui suppose vote parlementaire = risque 100 % de débat UE/droit concurrence.
- **Gravité :** RISQUÉ (contentieux UE probable, loi requise, coûts massifs incertains)
- **Correction :** "Remplacer 'prix plancher' par 'contrats de filière État-coopératives' sans intervention prix minimum légal. Modèle Danemark (organisations producteurs négocient prix collectivement + État subventionne écart si nécessaire). Coût : 5-8 Md€/an plus transparent et moins entaché de droit concurrence UE. Loi budgétaire requise (art. 40 appliqué au sens inverse : création charge publique = dépenses compensation). Consultation préalable Commission UE recommandée. Horizon : 100-180 jours (loi + notification UE)."

## Faille 11 : Séparation des rôles État-payeur / État-régalien en santé (flou juridique)

- **Cible :** Abolitions section 6, ligne 91 : "Double rôle État-payeur / État-régalien en santé | Sécurité sociale = rôle 1, inspection du bien commun = rôle 2. Séparation des pouvoirs administrative = efficacité."
- **Le problème juridique :** Actuellement, l'État finance santé via Sécurité sociale (affiliation cotisations) + impôts. "Séparation" proposée est floue : qui fait quoi ? Si rôle 1 = "Sécurité sociale paie" et rôle 2 = "État inspecte", c'est déjà le cas (HAS, ANSM, DGSP). Créer deux organismes distincts (ex: Agence Assurance-Maladie + Agence Santé Publique) ne crée PAS automatiquement "efficacité" - il y a risque de DUPLICATION et surcoûts. Juridiquement : la Constitution (Préambule 1946) garantit "un système de sécurité sociale". Réorganiser la Sécurité sociale doit respecter ce principe. Pas de base constitutionnelle pour "séparation pouvoirs administrative" en santé. C'est une prétention politique, pas une obligation juridique.
- **Gravité :** COSMÉTIQUE (pas d'obstacle constitutionnel clair, mais logique floue)
- **Correction :** "Préciser la proposition : (1) Créer 'Agence Santé Qualité' chargée inspection (DGSP) ou (2) Fusionner HAS + ANSM en une autorité unique et indépendante, ou (3) Clarifier qui décide quoi (choix thérapeutiques = médecins, accès public = État-payeur, régulation tarifs = autorité indépendante). Rédiger avec clarté : 'Les missions d'assurance-maladie (paiement des soins) et de régulation de qualité (normes cliniques, tarification) sont séparées pour éviter conflits d'intérêts.' Loi ordinaire suffisante pour réorganisation administrative (pas révision constitutionnelle). Auditer coûts internes avant implémentation."

## Synthèse : corrections par ordre de gravité

### Bloquants (3 failles - révisions constitutionnelles requises, risque censure majeur)

1. **RIC constitutionnel via art. 89 (Faille 1)** : Confusion fondamentale entre art. 89 (révision) et RIC inventé. Requiert révision RÉELLE de l'art. 11 pour créer droit de pétition citoyen sur référendum. Délai 6-12 mois minimum + référendum. Coût politique : débat sur légitimité démocratique.

2. **Vote blanc décisif par décret (Faille 2)** : Véhicule juridique faux. Requiert loi électorale + examen Conseil constitutionnel. Horizon réel : 100-180 jours, pas "Jour 1". Risque : CC rejette si destabilise article 3 (modalités scrutin).

3. **Abolition article 49.3 par loi (Faille 3)** : Requiert révision constitutionnelle complète (art. 89) + nouveau mécanisme gouvernement. Délai 6-12 mois. Conseil constitutionnel peut rejeter si viole "forme républicaine". Vide procédural dangereux si 49.3 supprimé sans remplacement.

### Risqués (5 failles - censure possible ou procédure défaillante, requièrent corrections)

4. **Article 40 et mesures budgétaires (Faille 4)** : Traçabilité + fusion aides risquent censure si montants ne compensent pas compensation. Requiert chiffrage précis + consultation CC préalable.

5. **Silence vaut accord urbanisme (Faille 5)** : Exception "caractère financier" du code relations public-admin exclut probablement urbanisme. Requiert modification loi 2000-321 + décret, pas décret seul. Limiter à domaines non-financiers.

6. **Chat Control par note présidentielle (Faille 6)** : Note interne insuffisante pour fixer position diplomatique UE. Requiert circulaire interministérielle + débat parlementaire. Risque isolement UE.

7. **Langage clair par décret (Faille 7)** : Norme CECRL A2 imprécise, "contrôle tierce partie" flou, coût massif = article 40 inverse. Requiert loi ordinaire + guide officiel + phase graduelle. Abandonner CECRL.

8. **Seuil RIC 20 % (Faille 8)** : Inégalité territoriale possible + instabilité institutionnelle. Requiert double majorité territoriale ou réduction seuil + plafond 2 référendums/an.

### Cosmétiques (2 failles - flous logiques, coûts/UE mal estimés, corrections mineures)

9. **Blockchain et compensation énergétique (Faille 9)** : Technologie PoW énergivore, coûts sous-estimés, "compensation obligatoire" floue. Spécifier Ethereum PoS + 200-300 M€ réaliste + abandon "compensation verte".

10. **Double rôle santé (Faille 11)** : Flou conceptuel, pas d'obstacle constitutionnel. Clarifier qui fait quoi, auditer coûts internes.

### Obstacle majeur non constitutionnel mais légal

11. **Prix plancher agricole UE (Faille 10)** : Entrave à libre circulation marchés (article 34 TFUE) + droit concurrence (101-102 TFUE). Requiert modèle "contrats de filière" non-prix-minimum, notification Commission UE, 5-8 Md€/an. Contentieux probable.

---

## Tableau de risques prioritaires

| Faille | Catégorie | Urgence | Action requise |
|--------|-----------|---------|----------------|
| RIC art.89 | BLOQUANT | IMMÉDIATE | Réviser propre art. 11 via révision CC. |
| Vote blanc décret | BLOQUANT | IMMÉDIATE | Loi électorale + avis CC. Décaler Jour 1 -> Jour 100. |
| 49.3 abolition | BLOQUANT | IMMÉDIATE | Révision constitutionnelle COMPLÈTE avec nouveau mécanisme gouvernement. |
| Art. 40 budgets | RISQUÉ | HAUTE | Chiffrage précis + consultation CC avant vote. |
| Chat Control note | RISQUÉ | HAUTE | Circulaire interministérielle + débat Parlement. |
| Silence accord urbanisme | RISQUÉ | MOYENNE | Loi ordinaire pour modifier 2000-321. |
| Langage clair décret | RISQUÉ | MOYENNE | Loi ordinaire + guide officiel + phase graduelle. |
| RIC 20 % quorum | RISQUÉ | MOYENNE | Double majorité territoriale ou plafond référendums. |
| Blockchain énergie | COSMÉTIQUE | BASSE | Spécifier technologie + coûts réalistes. |
| Prix plancher agricole | BLOQUANT (UE) | IMMÉDIATE | Contrats filière + notification Commission. Coûts révisés. |
| Double rôle santé | COSMÉTIQUE | BASSE | Clarifier organisation administrative. |

---

## Recommandations stratégiques finales

1. **Jour 1 insoutenable juridiquement** : Réaliser que les décrets du "Jour 1" soit nécessitent loi préalable (vote blanc, langage clair, silence accord), soit sont des promesses vides (Chat Control note). Redéfinir "Jour 1" comme "annonces + circulaires de bonnes intentions" seulement.

2. **Horizon 100 jours = révisions constitutionnelles impossibles** : RIC, abolition 49.3, vote blanc décisif requièrent 6-12 mois minimum. Repousser dans "An I Q2-Q3".

3. **Article 40 = piège constant** : Toute mesure touchant dépenses publiques (aides sociales, prix agricole, traçabilité budgétaire) risque censure si compensation mal articulée. Systématiser audit art. 40 avant chaque loi.

4. **Directives UE = contrainte incontournable** : Chat Control, prix plancher agricole, blockchain, harmonisation fiscalité. Chaque mesure risque contentieux Cour justice UE. Consulter Commission et alliés diplomatie AVANT vote parlementaire.

5. **Conseil constitutionnel = arbitre réel** : CC a censuré 46 lois depuis 1959. Soumettre révisions + lois majeures à consultation préalable (facultative art. 61, al. 2) pour éviter surprise post-adoption.

6. **"Experts juridiques" implicites manquent** : La feuille de route reconnaît obstacles (art. 40, CC, UE) mais propose contournements sans détail légal. Intégrer équipe droit constitutionnel + droit UE AVANT saisine Parlement.

---

**Conclusion** : La feuille de route est politiquement ambitieuse mais juridiquement fragile sur 3 points BLOQUANTS (RIC, vote blanc, 49.3) et 5 points RISQUÉS (budgets, Chat Control, langage clair, seuil RIC, prix agricole). Sans corrections, le programme courtise 8-12 ans de contentieux constitutionnel et européen. La stratégie doit être repensée : privilégier décrets/ lois ordinaires (80 jours faisables), repousser révisions (200+ jours), auditer art. 40 et compatibilité UE systématiquement.
