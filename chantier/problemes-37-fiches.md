# Problèmes : L'informatique d'État, le cimetière des milliards

> BROUILLON non validé : les fiascos documentés et la méthode pour ne plus jamais les reproduire.

---

### P1. Louvois : La paie des militaires programmée n'importe comment

**Le fiasco**

Lancé en 1996, le logiciel Louvois était censé unifier le calcul des salaires militaires. Déployé à partir d'avril 2011, il a versé des soldes absurdes et imprévisibles. En 2012 seulement, les erreurs de calcul atteignaient 465 millions d'euros. Plus de 60 000 militaires ont reçu des surpaiements totalisant 106 millions d'euros une année; d'autres se sont retrouvés en découvert bancaire lors de déploiements opérationnels au Mali. Louvois a été abandonné le 1er janvier 2021, après presque une décennie de chaos. Coût brut: près d'un milliard d'euros.

**Pourquoi**

Gouvernance faible, maîtrise insuffisante du projet par le ministère, équipe interne trop réduite, sous estimation de la complexité. Pas de suivi rigoureux du logiciel une fois mis en production. Les militaires ont servi de cobayes en direct: la paie d'une nation est trop critique pour déployer sans filet.

**Pistes**

* Pour (alternative propriétaire): Source Solde, qui gère aujourd'hui 250 000 militaires, prouve que le problème n'était pas insoluble ; l'acquérir plus tôt aurait coûté moins cher.
* Contre (rester interne): concevoir en interne un système de paie centralisé exige une stabilité de gouvernance, une équipe pérenne, et des tests massivement dimensionnés avant tout déploiement: c'est long et coûteux.

**Simulation (ordres de grandeur)**

* Coût du fiasco: 900 millions (développement + surpaiements + indemnisations).
* Alternative (évaluation, migration Source Solde dès 2015): 150 millions.
* Économies: 750 millions.

**⚖️ Faisabilité juridique**

Possible. Louvois aurait pu être arrêté par arrêté ministériel dès les premières anomalies massives (2012). Recours aux fournisseurs alternatifs: marché ouvert.

**⚖️ À trancher**

Le gouverneur du ministère doit pouvoir déclarer un projet informatique en faillite opérationnelle dans les 6 premiers mois d'exploitation, sans pénalité contractuelle, si l'erreur dépasse 1 % du nombre de bénéficiaires.

**Statut** ⬜ Fermé (2021) ; coût jamais remboursé aux militaires.

---

### P2. SIRHEN : Éducation nationale engloutit 400 millions dans un logiciel inutilisable

**Le fiasco**

Lancé en 2007, SIRHEN (Système d'Information de gestion des Ressources Humaines et des moyens) devait rénover la gestion RH de l'Éducation nationale. Ses coûts ont été quintuplés. Fin 2017, après une décennie, seulement 1,8 % du personnel l'utilisait. Le logiciel s'est révélé inadapté et trop complexe. Abandonné en juillet 2018, SIRHEN aura coûté 400 millions d'euros pour un outil gérant 2 % des personnels de l'Éducation nationale, utilisable par seulement 200 gestionnaires RH.

**Pourquoi**

Complexité sous estimée au démarrage. Équipe interne squelettique, ampleur des prestations externalisées (fournisseurs = maîtrise perdue). Zéro dispositif de pilotage. Les prestataires externes ont capturé la connaissance; le ministère ne pouvait plus décider.

**Pistes**

* Pour (réduction de scope): déployer d'abord 10 % des académies, valider avant d'escalader. Garder une équipe interne forte, ne jamais externaliser le pilotage métier.
* Contre (tout en interne): un ministère de 1 million de personnes exige un logiciel SIRH massif et générique; on ne peut pas le construire artisanalement.

**Simulation (ordres de grandeur)**

* Coût du fiasco: 400 millions.
* Alternative (acquisition progiciel, intégration interne, 200 personnes sur 5 ans): 80 millions.
* Économies: 320 millions.

**⚖️ Faisabilité juridique**

Possible. Les contrats avec les prestataires prévoyaient des jalons et des conditions de paiement; le ministère aurait pu les invoquer pour suspendre les versements et réorienter le projet. Aucun blocker légal.

**⚖️ À trancher**

Tout ministère doit nommer un directeur IT interne, non prestataire, avec autorité budgétaire. Cette personne signe les décisions critiques de stop/pivot du projet. Pas de dérogation.

**Statut** ⬜ Fermé (2018) ; manuels de paie archaïques toujours en usage dans certaines académies.

---

### P3. ONP : 346 millions pour un logiciel de paie qui n'a jamais fonctionné

**Le fiasco**

Lancé en 2007, l'ONP (Opérateur National de Paie) visait l'automatisation complète de la paie de 2,7 millions de fonctionnaires. Abandonné en mars 2014, il n'a jamais été mis en production par aucun ministère pilote. Coût total: 346 millions d'euros. La Cour des comptes a jugé la valeur d'usage nulle. Aucune des démonstrations n'a convaincu. Gouvernance affaiblie par une vacance de 25 mois au poste de secrétaire général; la direction IT a changé quatre fois en cinq ans.

**Pourquoi**

Ambition excessive du projet d'emblée. Zéro discipline de porte d'entrée: personne n'a demandé à chaque ministère pilote « êtes vous prêt ? ». Instabilité chronique de la direction. Pas de prototype fonctionnel avant d'engager les gros budgets.

**Pistes**

* Pour (agile, itératif): démarrer avec un seul ministère, un seul scénario de paie, déployer en 6 mois, valider la valeur, puis répliquer. Budget initial: 20 millions, pas 346.
* Contre (refonte massive): la paie d'État est un monstre juridique, fiscal, conventionnel; un petit pilot risque de ne pas révéler les vraies complexités.

**Simulation (ordres de grandeur)**

* Coût du fiasco: 346 millions.
* Alternative (pilot 1 ministère, 2 ans, puis réplication progressive): 70 millions sur 5 ans.
* Économies: 276 millions.

**⚖️ Faisabilité juridique**

Possible. Le projet n'a contracté aucune obligation envers les ministères (pas de déploiement signé). Arrêt simple par arrêté.

**⚖️ À trancher**

Tout projet d'État estimé > 100 millions euros doit justifier (ex ante, tous les ans) son ROI sur 3 ans. Si le ROI n'est pas atteint, un comité d'audit indépendant décide stop/pivot. Pas de survivance par inertie.

**Statut** ⬜ Fermé (2014) ; ministères revenus à leurs anciens systèmes de paie, plus coûteux et fragiles.

---

### P4. Dossier Médical Partagé : 20 ans, 400+ millions, toujours un serpent de mer

**Le fiasco**

Démarré en 2005, le DMP devait centraliser les dossiers médicaux de tous les Français. Études préalables (2005 à 2009): 210 millions. Lancement difficile en 2011: seuls 500 000 utilisateurs actifs sur 20 millions créés. Version 1 abandonnée après débâcle technique. ASIP Santé a dépensé 210 millions supplémentaires (2009 à ~2020) pour opération et nouvelle version. Coût unitaire: 1 000 euros par Français théorique. En 2026, le DMP n'a jamais atteint l'adoption de masse. C'est le plus long projet de l'État français sans résultat.

**Pourquoi**

Complexité de l'échange de données médicales sous estimée. Réticence des médecins et des assurances maladie (perte de contrôle des données). Pas de mandat réglementaire clair forçant l'adoption (contrainte fournisseur = adoption = utilité). Instabilité technologique à chaque pivot (plusieurs architectures évaluées, jamais validées avant le pivot).

**Pistes**

* Pour (obligation réglementaire): une loi imposant aux médecins et aux pharmacies de consulter le DMP pour chaque acte, du jour au jour, changerait la courbe d'adoption du jour au lendemain.
* Contre (approche volontaire): les acteurs de santé (médecins, pharmas, mutuelles) veulent garder leurs données propriétaires; forcer est politiquement explosif.

**Simulation (ordres de grandeur)**

* Coût cumulé du fiasco (20 ans, version 1 + version 2 + opération): 420 millions.
* Alternative (imposer légalement, payer de vrais incitatifs aux prescripteurs pour intégration): 150 millions sur 3 ans.
* Économies: 270 millions (épargnés sur les 20 prochaines années de maintenance).

**⚖️ Faisabilité juridique**

Complexe. Une obligation réglementaire de consultation exige une loi (RGPD compatible, droit du patient clarifié). Faisable mais lent (6 à 12 mois de navette parlementaire).

**⚖️ À trancher**

Qui (médecins, Sécu, patients, État) contrôle le DMP ? Tant que ce n'est pas tranché, tout projet est orphelin. Décision: DMP = propriété du patient, lui seul consente les consultations, Sécu n'a accès qu'en cas d'urgence. Imprimer cette règle en droit.

**Statut** ⬜ Toujours en cours ; version 3 en préparation (2026) ; budget nouveau non communiqué.

---

### P5. SI-SAMU : Une architecture d'urgence qui reste en urgence

**Le fiasco**

Le système d'information mutualisé des SAMU (SI-SAMU) a trainé en longueur sur deux décennies. Chaque région a sa propre variante, incompatibles entre elles. Un patient en urgence dans un département différent génère des redondances de diagnostics, pertes de dossiers. Coûts de maintenance: environ 50 millions par an pour une fragmentation qui tue. Raison officielle: « manque de budget pour la convergence ». Réalité: chaque SAMU régional a protégé son système (« c'est le nôtre »), bloquant toute standardisation.

**Pourquoi**

Gouvernance nationale inexistante. La santé d'urgence est de compétence régionale (ARS); pas de contrat maître d'ouvrage national. Chaque achat local de logiciel a créé une variante. Pas de norme SAMU imposée ex ante. Les éditeurs ont vendu des briques; pas d'architecture pensée.

**Pistes**

* Pour (norme nationale): mandater un standard (ex: HL7 FHIR pour les urgences), acheter une implémentation de référence, et conditionner les financements régionaux à la conformité.
* Contre (respect de l'autonomie régionale): forcer une norme killed sa flexibilité locale; un SAMU rural a des besoins différents d'un SAMU urbain.

**Simulation (ordres de grandeur)**

* Coût du fiasco (maintenance fragmentée, perte d'efficience annuelle, surmortalité estimée faible): 50 millions/an sur 20 ans = 1 milliard cumulé.
* Alternative (convergence sur 5 ans, norme nationale, 1 socle logiciel): 200 millions investissement, 20 millions/an maintenance (vs 50 millions/an).
* Économies: 150 millions/an après convergence.

**⚖️ Faisabilité juridique**

Possible avec accord des ARS. Une circulaire ministérielle peut imposer un standard HL7; les financements régionaux peuvent être conditionnés à la conformité.

**⚖️ À trancher**

Le ministre de la Santé doit nommer un responsable national de SI-SAMU, avec budget et autorité pour réclamer la conformité. Pas de contournement régional sans aval ministériel écrit.

**Statut** ⬜ Fragmenté ; convergence programmée 2027 (réalisme: 2029).

---

### P6. Scribe : La police a payé 13 millions pour un logiciel que personne n'utilisait

**Le fiasco**

Lancé en 2016 par la Police nationale avec le prestataire Capgemini, Scribe devait dématérialiser la rédaction des procédures pénales et des plaintes. Présenté comme révolutionnaire, il a été décrit par ses propres utilisateurs comme lent (30 à 45 minutes perdues par enquêteur chaque jour), peu ergonomique, bugué. Entre 2016 et 2022, 13,28 millions d'euros engloutis (8,66 millions en services externes Capgemini, 4,62 millions en ressources internes). Abandonné au printemps 2021 après 5 ans d'échec. Des estimations portent le dégât à 250 millions si on compte les heures perdues du personnel.

**Pourquoi**

Projet de gestion déficiente selon la Cour des comptes: « succession de dysfonctionnements organisationnels, techniques et juridiques ». Capgemini a livré une boîte noire; la police ne maîtrisait pas le source ni les évolutions. Aucun test utilisateur avant le lancement massif. Les enquêteurs ont été les cobayes. Absence de recette (acceptation) projet avant paiement.

**Pistes**

* Pour (internalisation progressive): que la Police forme des développeurs internes, reprenne du code Capgemini (ou demande l'open source), itère vite avec de vrais enquêteurs de terrain.
* Contre (temps perdu): pendant que la police développe, elle perd des années sans outil modern; Capgemini aurait pu livrer un minimum viable en 6 mois.

**Simulation (ordres de grandeur)**

* Coût du fiasco (5 ans, Capgemini + interne + heures perdues estimées): 13 millions versés + 50 millions en productive loss = 63 millions.
* Alternative (acquisition d'un progiciel justice + intégration interne, 2 ans): 15 millions.
* Économies: 48 millions + retrouver 2 ans d'efficacité des enquêteurs.

**⚖️ Faisabilité juridique**

Possible. La police aurait pu invoquer un manquement contractuel Capgemini et résilier le marché dès 2018. Les contrats publics incluent des conditions de performance. Aucun blocker.

**⚖️ À trancher**

Pour tout marché informatique > 5 millions, un responsable IT interne signe les PV de recette. Pas de paiement sans recette signée. Capgemini = prestataire, jamais décideur.

**Statut** ⬜ Fermé (2021) ; police revenue au papier et aux vieux systèmes pour les procédures.

---

### P7. ASTREA et Cassiopée : La justice numérique qui coûte mais ne marche pas

**Le fiasco**

Cassiopée, le système d'information criminel lancé au début des années 2000, coûta 4 millions initialement, puis 21 millions (multiplication par 5). ASTREA, le logiciel de gestion des dossiers judiciaires, coûta 19,7 millions, puis 59,6 millions (multiplication par 3). Fin 2022, magistrats et greffiers contournaient volontairement Cassiopée, le jugeaient obsolète malgré son coût, et revenaient aux anciens outils. Dysfonctionnements: procédures enregistrées deux fois, déconnexions inattendues, anomalies légales. La PNIJ (National Judicial Interoperability Platform) globale atteint 182 millions d'euros de coût en 2018, fiasco reconnu. Aucune justice numérique cohérente n'a émergé.

**Pourquoi**

Portée du projet trop large, risques proportionnels à la taille. Aucune stratégie IT nationale de la justice définie avant les marchés. Architecture écrite à l'envers: contrat d'abord, design ensuite. Instabilité politique (changements de ministres de la Justice tous les 2 ans en France) = changements de priorités du projet.

**Pistes**

* Pour (refonte par paliers): justice pénale d'abord (10 % du problème), puis administrative, puis civile. Chaque étape: 2 ans, validée avant suite.
* Contre (patchwork): la justice a besoin de cohésion; diviser crée des ilôts incompatibles.

**Simulation (ordres de grandeur)**

* Coût cumulé du fiasco (Cassiopée + ASTREA + PNIJ, infrastructure, opération): 182 millions + dérive estimée = 250 millions.
* Alternative (refonte par métier, 4 étapes de 40 millions chacune, soit 160 millions sur 8 ans, livraison progressive): 160 millions.
* Économies: 90 millions + service réel au lieu de contournement.

**⚖️ Faisabilité juridique**

Possible. La justice est sous tutelle du ministre de la Justice; un arrêté peut réorienter les appels d'offres et arrêter les marchés sous performance.

**⚖️ À trancher**

Créer un « Chief Digital Officer » du ministère de la Justice, nommé 5 ans minimum (impossible à virer avant), avec veto sur tout marché informatique > 10 millions. Cette personne signe aussi les recettes.

**Statut** ⬜ Partiellement fonctionnel ; Cassiopée toujours en production malgré son impopularité ; ASTREA encore en déploiement.

---

### P8. ANEF : Administration des étrangers bridée par les bugs d'un logiciel de 100 millions

**Le fiasco**

ANEF (Administration Numérique pour les Étrangers en France) est le portail des étrangers en France pour les visas, titres de séjour, naturalisations. Lancé avec ambitions de dématérialisation, il s'est avéré truffé de dysfonctionnements: validations aléatoires, refus inexpliqués, perte de dossiers. Les étrangers perdaient leurs droits de séjour par impossibilité technique d'utiliser le service. En juin 2022, le Conseil d'État a partiellement annulé le décret fondateur, jugeant qu'aucune alternative n'était offerte aux citoyens face aux bugs. En mai 2026, le Conseil d'État ordonne au gouvernement de corriger 4 dysfonctionnements structurels: livraison automatique des certificats de prolongation, modification du dossier après soumission, fin des refus basés sur un document antérieur non retourné, accès garanti via alternatives numériques. Coût estimé du projet et sa maintenance: 100 millions (à confirmer) sur 15 ans. Valeur rendue aux usagers: quasi nulle; bilan humain: milliers de migrants en situation irrégulière de facto par bug informatique.

**Pourquoi**

Pas de test usager avant lancement. La plateforme a été construite en « boîte noire » par des prestataires sans implication des agents d'Immigrations ou des étrangers. Aucune obligation de résultat contractuelle. Zéro clause pénale en cas d'indisponibilité du service (c'est un service public; personne n'a osé imaginer qu'il serait inaccessible).

**Pistes**

* Pour (prototype itératif): tester ANEF avec 100 étrangers vrais sur 3 mois, corriger massivo avant élargissement. Coût: 2 millions de plus, gain: 50 millions économisés sur le versioning chaotique.
* Contre (urgence politique): le gouvernement voulait montrer la dématérialisation asile avant les élections; les tests ont été sacrifiés à la vitesse.

**Simulation (ordres de grandeur)**

* Coût du fiasco (développement, opération, impact légal, indemnisations estimées): 100 millions.
* Alternative (pilot 3 mois, correction, puis déploiement prudent, 18 mois total): 25 millions.
* Économies: 75 millions + éviter les déboires légaux.

**⚖️ Faisabilité juridique**

Complexe mais possible. Les étrangers dont les droits ont été niés par le bug peuvent engager des recours (administrative, civile). L'État peut être condamné en inaction fautive. Le Conseil d'État a déjà joué ce rôle partiellement (2022, 2026). Cadre légal existe.

**⚖️ À trancher**

Pour tout service public dématérisé, une obligation de SLA (Service Level Agreement) minimum 99,5 %; en cas de non respect, l'État rembourse 1 euro par usager par jour de downtime à un fonds de compensations. Pressionne les prestataires et protège les citoyens.

**Statut** ⬜ En correction ; Conseil d'État impose réformes (mai 2026) ; nouvelle version prévue 2027.

---

### P9. La dépendance aux ESN et aux cabinets de conseil : McKinsey-gate informatique

**Le fiasco**

Entre 2018 et 2022, l'État français a dépensé plus d'un milliard d'euros en cabinets de conseil externes (McKinsey, BCG, Deloitte, Capgemini, TCS, et autres ESN). La part de McKinsey seule: environ 247 millions d'euros sur cette période. Ces cabinets s'implantent dans les ministères, forment les cadres à leurs méthodes, conçoivent les réformes informatiques, puis disparaissent en emportant la connaissance. Le résultat: l'État ne sait plus moderniser seul; il achète des services de conseil qui lui vendent ses propres réformes, créant une dépendance structurelle. Chaque ministère maintenant panique à l'idée de perdre son contrat McKinsey; c'est devenu un symptôme du malaise, pas une cure.

**Pourquoi**

Atrophie des compétences IT interne État depuis 20 ans (fuite cerveau vers le privé, postes peu attractifs, salaires bas). Les ministères n'osent plus embaucher; ils achètent du conseil. Les cabinets = porte d'entrée = pensée unique. Aucune obligation de transfert de connaissance dans les contrats; les cadres formés par McKinsey partent au privé après; le cycle recommence.

**Pistes**

* Pour (réinternalisation IT État): embaucher 500 développeurs, architectes, testeurs directement État, les payer comme le privé (80 k à 150 k euros), arrêter les contrats McKinsey, et diriger les projets IT en interne. Coût 1ère année: 50 millions (masse), économies 5 ans: 500 millions.
* Contre (complexité): l'État n'a jamais su attirer talents tech; pourquoi maintenant ? Les ministères préfèrent l'externalisation = zéro culpabilité si ça tombe.

**Simulation (ordres de grandeur)**

* Coût du fiasco (dépendance aux cabinets, prix gonflés, perte de compétence interne, 5 ans): 1 milliard + 500 millions d'opportunité perdue = 1,5 milliard.
* Alternative (réinternalisation progressive, 5 ans, 500 talents internes, freiner les appels d'offre externes): 300 millions (masses) + 200 millions (équipement) = 500 millions.
* Économies: 1 milliard, plus retrouver l'autonomie stratégique.

**⚖️ Faisabilité juridique**

Possible. L'État peut embaucher directement (CDI, statut public ou contractuel). Arrêter les contrats McKinsey: aucun blocker (contrats à durée déterminée). Possible mais politiquement sensitif (McKinsey has friends in ministries).

**⚖️ À trancher**

Cap obligatoire: pour chaque ministère, min 30 % de l'enveloppe IT doit aller à des développeurs/IT interne (CDI ou stagiaires). Chaque année, le cap monte de 5 %. En 5 ans, 50 % interne minimum. Obligation de transfert de connaissance dans tout contrat externes > 1 million.

**Statut** ⬜ En crise (2025-2026) ; le gouvernement a plafonné les contrats de conseil à 2 millions (juillet 2024) ; mesure fragmentaire, pas encore impactée.

---

### P10. Pourquoi l'État rate là où le privé rate aussi (mais paie de sa poche) : le problème n'est pas le secteur, c'est la méthode

**Le fiasco**

L'État français a dépensé environ 3 à 4 milliards d'euros en fiascos informatiques majeures les 20 dernières années (Louvois, SIRHEN, ONP, DMP, Scribe, ASTREA, ANEF, SI-SAMU, et dizaines d'autres fiascos mineurs). Or le privé aussi échoue: Apple Maps, Windows Vista, Facebook Metaverse, Google Glass. La différence: Apple/Microsoft/Meta ont limité les dégâts (arrêts rapides, pivots, budget interne), tandis que l'État a laissé les projets pourrir pendant des années. Le problème n'est pas le secteur public vs privé. C'est la méthode d'acquisition, de pilotage et de recette.

**Pourquoi**

Quatre défauts systémiques de l'État:

1. Acquisitions: l'État achète via appels d'offre massifs, contrats de 5+ ans figés. Le privé negocie contrats agiles, pivot trimestriel. L'État signe un contrat pour 346 millions upfront (ONP); le privé aurait signé 10 millions pour un sprint de 6 mois.

2. Pilotage: pas de responsable IT unique avec pouvoir de stop. Le ministère delegate au prestataire; les problèmes remontent lentement. McKinsey vient "moderniser" mais aucune accountability si ça échoue. Le privé: CEO signe, CEO assume si produit flop.

3. Recette: pas de tests massifs utilisateurs avant lancement. L'État déploie en production (militaires, étudiants, patients = cobayes). Le privé teste béta auprès de vrais utilisateurs avant public launch.

4. Équipe stable: turnover ministre tous les 2 ans = redirection projet. L'État ne peut pas attacher un talent senior IT : postes non attractifs. Privé: même CTO pendant 10 ans = continuité.

**Les preuves : le succès à l'étranger**

Le Government Digital Service (UK, fondé 2011): budget environ 50 millions/an pour refondre tous les services publics numériques, zéro fiasco reconnu depuis 15 ans. Méthode: équipes interne (pas McKinsey), projets max 1 million livrable en 3 mois, tests utilisateur obligatoires, zéro contrat long terme figé.

Estonie (e-Government depuis 2001): 99,2 % des services publics en ligne, fiabilité quasi parfaite. Budget: 20 millions euros/an pour une nation de 1,3 million d'habitants. Méthode: CIO interne, équipes interne talentueuses, agile hardcore, API public réutilisable, open source quand possible.

La France a 67 millions d'habitants; devrait avoir 10x l'Estonie = 200 millions d'euros/an pour l'IT public interne. Elle en dépense 1 à 1,5 milliards mais en fiascos.

**Pistes**

* Pour (s'inspirer GDS/Estonie): créer une agence IT nationale (type GDS), embaucher 300 talents ingénieurs, budget fixe 200 millions/an, direction unique nommée 7 ans minimum (impossible à virer), gouvernance agile (sprint 2 semaines, déploiement continu), zéro contrat > 5 millions sans recette utilisateur.
* Contre (coûteux): 200 millions supplémentaires de budget; politiquement difficile alors qu'on coupe partout. Réponse: c'est 200 millions pour en économiser 1 milliard de fiascos.

**Simulation (ordres de grandeur)**

* Coût du statu quo (fiascos continus, 3 milliards tous les 20 ans, soit 150 millions/an): 3 milliards.
* Alternative (agence IT style GDS, 200 millions/an, 95 % taux de succès projet): 200 millions/an, évite 2,5 milliards de fiascos sur 20 ans.
* Bénéfice net: 2,5 milliards moins 200 millions=2,3 milliards économisés, plus 10 millions d'utilisateurs publics heureux.

**⚖️ Faisabilité juridique**

Complexe. Créer une agence IT nationale: possible par décret (ex: l'ANSSI existe pour la cybersécurité). Recruter talents informatiques : possible en statut contractuel (CDI droit privé dans structure publique). Imposer agile à tous les ministères: possible par circulaire. Aucun blocker légal majeur.

**⚖️ À trancher**

1. Nommer un Chief Digital Officer de France, dépendant du Premier ministre, non d'un ministère. Période 7 ans non révocable (sauf faute grave). Autorité: tout marché IT État > 5 millions doit passer par lui.

2. Créer une agence IT publique (type GDS UK), budget fixe 200 millions/an, 300 ingénieurs, gouvernance par sprint 2 semaines, recette utilisateur obligatoire.

3. Interdire tout contrat informatique ministériel > 5 millions. Au delà, passer par l'agence.

4. Obligation de transfert de connaissance dans tout sous traitance. Code source propriété l'État. Pas de black box.

**Statut** ⬜ Proposé (2026) ; aucune décision gouvernementale encore ; lobbying McKinsey/ESN bloque avancement.

---

## Sources utilisées pour cette documentation

- [Louvois : près d'un milliard d'euros engloutis](https://sciencepost.fr/pres-d-un-milliard-d-euros-engloutis-dans-ce-logiciel-cense-payer-les-soldats-selon-les-rapports-il-versait-des-sommes-absurdes-avant-d-etre-abandonne/)
- [Louvois : 470 millions d'euros versant des soldes impossibles](https://sciencepost.fr/en-engloutissant-pres-de-470-millions-d-euros-le-logiciel-cense-payer-les-soldats-francais-versait-des-soldes-que-personne-n-avait-jamais-calculees/)
- [Ministère des Armées tire un trait sur l'échec Louvois](https://acteurspublics.fr/articles/le-ministere-des-armees-tire-un-trait-definitif-sur-lechec-louvois/)
- [SIRHEN éducation nationale fiasco](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d'information_de_gestion_des_ressources_humaines_et_des_moyens)
- [SIRH Éducation nationale gabegie Cour des comptes](https://www.campusmatin.com/numerique/equipements-systemes-informations/education-nationale-la-cour-des-comptes-revient-sur-le-desastre-du-sirhen.html)
- [SIRHEN après naufrage selon Cour des comptes](https://www.lemondeinformatique.fr/actualites/lire-apres-le-naufrage-le-programme-sirhen-reste-a-la-derive-selon-la-cour-des-comptes-78219.html)
- [ONP fiasco 346 millions](https://www.europe1.fr/economie/Pour-faire-des-economies-l-Etat-a-gaspille-346-millions-770972)
- [ONP État scandale paie](https://acteurspublics.fr/articles/scandale-de-loperateur-national-de-paye-laffaire-classee-sans-suite/)
- [DMP fiasco MG France](https://www.mgfrance.org/actualites/publication/dmp-un-fiasco-et-des-couts-qui-perdurent)
- [Scribe logiciel police fiasco](https://www.usine-digitale.fr/article/pourquoi-le-logiciel-scribe-de-redaction-de-plaintes-pour-la-police-a-ete-un-veritable-fiasco.N2023562)
- [Scribe police gaspillage 12 millions](https://contrepoints.org/fiasco-et-gaspillage-de-12-millions-d-euros-pour-le-logiciel-revolutionnaire-de-la-police-nationale/)
- [Cassiopée justice fiasco](https://cyberjustice.blog/2022/08/01/le-logiciel-cassiopee-la-desillusion-dun-projet-de-dematerialisation-prometteur/)
- [ANEF administration étrangers fiasco](https://www.village-justice.com/articles/anef-condamnation-etat-pour-dysfonctionnement-service-public-entrainant-des,58049.html)
- [McKinsey État externalisation informatique](https://lareleveetlapeste.fr/cabinets-de-conseil-quand-letat-depense-1-milliard-d-euros-pour-demanteler-le-service-public/)
- [McKinsey influence secrète France](https://www.franco-finance.com/mckinsey-influence-france-6968/)
