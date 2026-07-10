# Red team : ROUND 4 - Vérification des corrections du round 3 (11/07/2026)

## Verdict global

**ENCORE FRAGILE** : 14 nouveaux points critiques identifiés (2 bloquants, 11 sérieux, 1 mineur). Les corrections du round 3 ont bien été INTÉGRÉES TEXTUELLEMENT mais plusieurs restent COSMÉTIQUES ou créent de NOUVELLES AMBIGUÏTÉS. Bloquants du round 2-3 partiellement résolus, risques CC et économiques demeurent aigus.

Amélioration : les corrections du round 3 ont transformé certains bloquants en "très sérieux", mais en créant de nouvelles failles par les imprécisions résiduelles des "clarifications".

---

## Vérification des corrections du round 3 : appliquées vs résurgences

### 1. Vote blanc harmonisé 150j (BLOQUANT ROUND 3)
**Texte appliqué ?** Oui, ligne 32 + 41 + tableau ligne 109.
**État** : APPLIQUÉ mais AMBIGUÏTÉ RÉSIDUELLE

Vérification :
- Ligne 41 : « Examen Conseil constitutionnel préalable obligatoire (minimum 150 jours : débat parlementaire 2-4 semaines + examen CC 1-2 mois, total 90-120 jours réaliste, majoré pour réserves potentielles) »
- Tableau ligne 109 : « 150j (débat 2-4 sem + CC 1-2 mois) »

**Faille identifiée (BLOQUANT)** : Deux délais incompatibles dans MÊME TEXTE.
- « Minimum 150 jours » affirme obligation.
- « Total 90-120 jours réaliste » contredit le minimum.
- « Majoré pour réserves » = indéterminé (majoré combien ? +10j ? +50j ?).

Question litigieuse : CC exige délai de 150j garantis ou accepte 90-120j en réalité ? Texte muet = procédure vulnérable au contentieux. CC peut censurer pour « flou sur délai minimum garanti ».

**Correction proposée** : Unifier délai UNIQUE : « Examen Conseil constitutionnel préalable : 150 jours minimum GARANTIS (débat parlementaire 30j + avis technique CC 45j + délibéré CC 75j). Si CC émet réserves substantielles, débat parlementaire reformulation 20j supplémentaires + nouvel avis CC 30j (total jusqu'à 250j). En cas dépassement, CC renonce avis écrit et vote blanc passe sans examen. »

---

### 2. RIC seuil territorial clarification (BLOQUANT ROUND 3)
**Texte appliqué ?** Oui, ligne 65-66 (restructuré avec hiérarchie explicite).
**État** : APPLIQUÉ mais TERMES NON-DÉFINIS = RESTE BLOQUANT

Vérification :
- Ligne 65 : « (1) RIC lancé IMMÉDIATEMENT si majorité dans 50% des départements ET signatures nationales seuil = accès direct référendum. (2) Si majorité 50% département ÉCHOUÉE, plafond strict 2 RIC par an si participation nationale >= 30%. Les deux conditions ne peuvent coexister dans même scrutin : si premier RIC atteint majorité 50% dépt, deuxième RIC attend cycle référendaire suivant (pas cumul même année). »

**Failles identifiées (BLOQUANT)** :
1. « Cycle référendaire suivant » n'est PAS défini. Dure 1 an ? 2 ans ? Janvier-décembre calendaire ou année fiscale ?
2. « Plafond 2 RIC par an » : quand commence l'année ? Si RIC1 lancé novembre (participation < 30%), RIC2 février année suivante (participation >= 30%), comptent-ils comme « 2/an » ou « 1/an + 1/an suivante » ?
3. « Participation nationale >= 30% » : c'est quoi ? Participation au RIC lui-même ? Ratio électeurs ayant voté ? Abstention incluse ou non ? Texte muet.
4. Double majorité « 50% départements ET signatures seuil » : si 50% dépts = 50/96, mais variation démographique énorme. 50% dépts par population ou par nombre ? 

Exemple critique : 
- RIC1 lancé janvier 2027 (majorité 50% dépts atteinte, signatures seuil ok).
- RIC2 lancé juillet 2027 (majorité 50% dépts échouée, participation nationale 35% >= 30%).
- Les deux sont-ils dans même « année calendaire » ? Plafond 2/an s'applique-t-il ?
- Texte imprécis = CC can censure.

**Correction proposée** :
« Hiérarchie explicite avec calendrier fermé :
(1) Ordre de priorité : RIC ayant majorité 50% départements (nombre, par géométrie administrative) ET seuil signatures nationales = lancé en référendum dans 60j (cycle A).
(2) Si majorité 50% dépts ÉCHOUÉE : plafond 2 RIC maximum par année calendaire (janvier-décembre) si participation nationale >= 30% participation (calcul : électeurs ayant voté RIC / électeurs inscrits totaux >= 30%).
(3) Les deux conditions sont MUTUELLEMENT EXCLUSIVES : premier RIC atteint majorité 50% dépts = tous autres RIC en attente jusqu'au cycle SUIVANT (année calendaire N+1, minimum 1er janvier).
(4) Exemple : RIC1 janvier 2027 (majorité 50% atteinte) = lancé. RIC2 juillet 2027 (majorité échouée) = compté vers plafond 2/an 2027 si participation >= 30%. RIC3 novembre 2027 (majorité échouée, participation 25%) = rejeté (participation < 30% ET déjà 2 RIC 2027). RIC3 relancé janvier 2028 = cycle N+1, nouveau plafond.
(5) Définition « majorité 50% départements » : majorité dans 48 départements (sur 96 métropolitains) ou 50% population-pondérée ? PRÉCISER. »

---

### 3. Fusion aides indexation clarifiée (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 47.
**État** : APPLIQUÉ mais AMBIGUÏTÉ NOUVELLE SUR RÉVISION

Vérification :
- Ligne 47 : « Indexation inflation s'applique EN PLUS du montant fixé débat citoyen (ex: débat An II fixe 1200€, inflation +4% = 1248€). Débat citoyen suivant (An III minimum) peut réviser montant de base (ne remplace pas indexation antérieure). »

**Faille identifiée (BLOQUANT)** :
« Débat citoyen suivant peut réviser montant de base (ne remplace pas indexation antérieure) » = imprécision totale.

Scénario conflit :
- Débat An II (2027) fixe allocation 1200€. Indexation 2027-2028 : +4% = 1248€ versé 2028.
- Débat An III (2028) propose révision montant base : 1300€.
- Question : allocation 2029 = quoi ? 1300€ + 4% inflation 2028-2029 = 1352€ ? Ou montant fusionné 1300€ + indexation spécifique calculée depuis juillet 2026 de base (36€ cumul 2026-2028) + 2029 = 1336€ ? Ou inflation seule s'ajoute à 1300€ = 1352€ aussi mais base réinitialisée à 1300€ ?

Le texte dit « ne remplace pas indexation antérieure » mais ne dit pas si révision An III : (a) crée nouvelle base + indexation redémarrée, ou (b) s'ajoute à indexation 2026-2028 calculée, ou (c) devient nouveau plancher avant indexation.

CC va demander clarification : « Indexation automatique finance est techniquement déterministe, débat citoyen est politique. L'un écrase l'autre ou coexistent ? Mécanisme de fusion est-il clair ? »

**Correction proposée** :
« Indexation inflation séparée du montant débat citoyen. Mécanisme dual :
- Montant débat citoyen fixe SOCLE POLITIQUE : débat An II = 1200€. Débat An III propose 1300€ = nouveau socle 1300€ (REMPLACE précédent socle 1200€, mais ne remplace pas indexation déjà versée).
- Indexation automatique appliquée EN PLUS : socle 1200€ + indexation cumulée 2026-2027-2028 = paiements réels 2028. Débat An III fixe socle 1300€ (nouveau de base) + indexation cumulée 2026-2028 déjà versée = allocation minimale 2029 sera 1300€ + inflation 2029 (appliquée ADDITIF à socle 1300€).
- Garantie : montant réel versé = MAX(socle débat + indexation, socle précédent + indexation antérieure). Citoyen ne descend jamais sous plancher antérieur + inflation.
- Formule précise : Allocation(année N) = MAX(SocleDébatAn2 + IndexationAn2->N, SocleDébatAn3 + IndexationAn2->N) si débat An III survint, etc. »

---

### 4. Commission audit calendrier (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 46-47.
**État** : APPLIQUÉ mais HORODATAGE INCOHÉRENT

Vérification :
- Ligne 46-47 : « Jour 100 : création commission consultative mixte État/régions/CNAF pour audit complet de constitutionnalité (rapprochement An II Q1 intermédiaire janvier 2027 : 3 mois, audit COMPLET mars 2027 : 6 mois total). »

**Faille identifiée (SÉRIEUX)** :
Calendrier interne incohérent avec chronologie présidentiale supposée.

Calculs :
- Jour 100 = ? Si élections 28-30 juin 2026 (présumées), alors Jour 1 = juillet 2026, Jour 100 = 09 octobre 2026 (~début octobre).
- Janvier 2027 = 3-4 mois après octobre 2026 (pas 3 mois exact).
- Mars 2027 = 5-6 mois après octobre 2026 (pas 6 mois exact).
- Mais notation « An II Q1 » implique : An I = Sept 2026 - Sept 2027, An II = Sept 2027 - Sept 2028. Donc janvier 2027 = fin An I, pas An II Q1.

Confusion terminologie chronologique. Si commenter à Jour 100 (octobre 2026), audit complet mars 2027 = 5 mois réaliste. Mais texte parle « An II Q1 janvier 2027 » = faux calendrier.

Débat citoyen fusion aides = après audit complet (mars 2027), donc avril-mai 2027. Vote parlement = juin 2027 (An II Q2 si An II = sept-sept). Tout cela est faisable, mais calendrier présenté mélange deux conventions (Jour 100/année X vs An II Q1).

**Correction proposée** :
« Calendrier explicite selon convention unique (Jour 1 = octobre 2026, approx. 100j après élection juin 2026) :
- Jour 100 (janvier 2027, ~90j) : création commission audit État/régions/CNAF.
- Jour 180 (avril 2027, ~6 mois depuis création) : audit intermédiaire rendu (rapport d'étape).
- Jour 240 (juin 2027, ~8 mois) : audit complet finalisé avec recommandations CC. 
- Jour 250-270 (juin-juillet 2027) : débat citoyen plateforme sur résultats audit.
- Jour 300 (août 2027) : vote parlement fusion aides avec chiffrage précis.
Ou utiliser UNIQUEMENT An I/II : An I Q1 (sept-nov 2026) pour création. An I Q2 (dec 2026-fev 2027) pour audit intermédiaire. An I Q4 (juin-aout 2027) pour audit complet. An II Q1 (sept-nov 2027) pour débat citoyen (2-3 mois). An II Q2 (dec 2027-fev 2028) pour vote parlement. »

---

### 5. Contrats agricole compensation acompte (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 81.
**État** : APPLIQUÉ mais TIMING SERRÉ = RISQUE

Vérification :
- Ligne 81 : « allocation versée en acompte dès janvier 2028 (AVANT contrats votés février 2028), chiffrage provisoire 15€/an. Débat citoyen An II affine montant définitif (20-50€). Allocation rétroactive février 2028 si débat citoyen valide montant > acompte. »
- Ligne 81 aussi : « Calendrier : notification octobre 2027, avis janvier 2028, vote février 2028. Clause réserve : si Commission émet objections catégoriques « graves » (mentionnées lettre), Parlement dispose 3 mois minimum supplémentaires pour reformulation (vote décalé mai 2028 An II Q2). Sinon vote février maintenu. »

**Failles identifiées (SÉRIEUX)** :
1. Timing allocation vs Commission UE : acompte versé janvier 2028 = MÊME MOMENT que avis Commission UE sur contrats agricoles (notification octobre 2027 + 3 mois = janvier 2028). Si Commission émet objections graves en janvier 2028, allocation a déjà été versée. Citoyen reçoit allocation, puis 3 mois après vote décalé mai 2028 = allocation « provisoire » a été payée sans finalité légale certaine. Risque budgétaire si allocation doit être reversée (contestation CC ultérieure).

2. Rétroactif imprécis : « allocation rétroactive février 2028 si débat citoyen valide montant > acompte ». Rétroactive de quand ? Janvier 2028 quand acompte versé ? Ou février quand contrats votés ? Texte muet. Si vote décalé mai 2028, rétroactive s'applique mai ? Ménages fragiles = attente 4-5 mois entre acompte et rétroactive.

3. Débat citoyen « An II » : quand au juste ? Si vote contrats février (ou mai si objections) = débat citoyen avant vote ou après ? Texte dit « débat An II affine montant » mais An II Q1 = sept-nov 2027, pas compatible avec vote contrats février 2028. Contradiction calendrier.

**Correction proposée** :
« Calendrier reformulé et synchronisé :
- Octobre 2027 : notification Commission UE contrats filière.
- Janvier 2028 : avis Commission UE reçu.
  * Si avis favorable (pas objections graves) : go au vote février.
  * Si avis objections graves : buffer 3 mois supplémentaires obligatoire, vote repoussé mai 2028.
- Allocation compensation acompte : versée JANVIER 2028 dans les DEUX CAS (avant avis Commission).
  * Chiffrage provisoire 15€/an.
  * Débat citoyen IMMÉDIATEMENT après avis Commission (janvier-février 2028 pour cas favorable, janvier-avril si objections).
  * Débat citoyen affine montant 20-50€.
  * Vote parlement (février si favorable, mai si objections) AVEC montant débat citoyen intégré.
  * Allocation rétroactive février 2028 (au jour du vote contrats) si montant débat > acompte 15€. Citoyen reçoit différentiel dans 15j après vote.
- En cas vote décalé mai 2028 : allocation rétroactive 15-20€ versée juillet 2028 avec différentiel montant débat. »

---

### 6. X-Road RTO 4h (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 56.
**État** : APPLIQUÉ mais PROMESSE INSUFFISANTE

Vérification :
- Ligne 56 : « Risques résiduels : attaque coordinée API centralisée + cache local = paralysie temporaire services jusqu'à rétablissement (RTO 4 heures cible). »

**Faille identifiée (SÉRIEUX)** :
« Cible » n'est pas garantie contractuelle. Résilience = obligation technique, pas optionnel.

Problèmes :
1. « Cible » = aspiration, pas Service Level Agreement (SLA). Contrat infrastructure peut autoriser 8h, 12h, 24h de downtime avant SLA violation.
2. Aucun mention de pénalité si RTO dépassé : qui paie compensation citoyens/services publics si down > 4h ?
3. « Attaque coordinée API + cache » n'est pas seul risque. Risques résiduels : (a) bug logiciel centralisant serveurs, (b) panne électrique datacenter, (c) attaque ransomware sur sauvegardes, (d) mauvaise configuration.

CC peut demander : « Comment 4h est-il garanti ? Quelle est la probabilité d'attaque qui dépasse 4h ? Compensation citoyens si dépassement ? »

**Correction proposée** :
« Résilience cible :
(1) RTO (Recovery Time Objective) = maximum 4 heures pour tous services X-Road. Cible = obligation contractuelle (SLA) avec pénalité : chaque heure dépassement au-delà 4h = compensation 0,1% revenu annuel contrat infrastructure (ex: si contrat 10 M€/an, 1h dépassement = 10 k€ pénalité à reversible aux collectivités impactées).
(2) RPO (Recovery Point Objective) = données perdues maximum 15 minutes (backup toutes les 15 min sur sites géographiquement séparés).
(3) Audit sécurité CNIL bianuel + test résilience force ('chaos engineering') semestriel : simulation attaque + mesure temps réel récupération.
(4) Publier audit sécurité (résumé technique, pas données sensibles) = confiance citoyenne.
(5) Risques résiduels documentés : (a) probabilité attaque dépassant 4h < 0,1% annuel selon modèle, (b) scenarios d'indisponibilité au-delà capacité : plan B = accès manual données via guichet physique ou courrier (délai max 15 jours). »

---

### 7. Langage clair test panel (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 29.
**État** : APPLIQUÉ mais CRITÈRE INSUFFISANT

Vérification :
- Ligne 29 : « Critère additionnel : test compréhension panel 20 citoyens < bac, 80% correctes minimum. »

**Failles identifiées (SÉRIEUX)** :
1. Panel 20 citoyens = trop petit. Représentativité statistique faible. Pour confiance 95%, besoin n = 1/0.05 = ~400-500 pour régions + âges + zones. 20 = ~36 personnes par groupe (région, âge), insuffisant.

2. « Citoyens < bac » = flou. Bac -3 ? -5 ? Analphabètes ? Allophones ? Si panel = 100% diplômés primaire uniquement = non-représentatif popul. Si mélange diplômes = hétérogène.

3. « 80% correctes » = critère imprécis. Correctes à quoi ? Si question : « Allocations fusionnées font combien € minimum ? », réponses :
   - « 1200€ » = correct
   - « 1200€ ou plus » = correct ?
   - « Montant qui augmente avec inflation » = correct (réponse partielle) ?
   - « Suffisant pour vivre » = faux ou correct sémantiquement mais imprécis ?

Texte ne dit pas si évaluation = QCM (réponses fermées) ou essai libre (scoring subjectif).

4. « Test panel » absent du processus de production textes. Qui pilote test ? Agence indépendante ? CNRLT (Centre national ressources textes) n'existe pas. Qui choisit questions ? Gouvernement (conflit intérêt) ou citoyens ?

**Correction proposée** :
« Protocole compréhension robuste :
(1) Panel = 300-500 citoyens représentatifs (par région, âge 20-80, sexe, diplôme secondaire max, milieu urbain/rural = quota stratifiés). Collecte tiers indépendant (université/cabinet sondage).
(2) Test = questionnaire structuré (20 questions QCM, durée 20 min) + test libre paraphrase (« explique en tes mots ce que ça signifie »).
(3) Critère succès : 80% répondent >= 70% questions correctement (QCM) OU comprennent 80% du sens (libre). Benchmark comparatif : si guide « très lisible » = 95%, loi ordinaire « lisible » = 75%, document proposé doit atteindre >= 80%.
(4) Exemples questions fermées :
   - Allocation fusion = (a) remplace RSA+logement, (b) s'ajoute à RSA, (c) réduit autres aides. (réponse : a)
   - Indexation inflation = (a) montant fixe jamais augmente, (b) montant augmente chaque an si prix montent, (c) État décide quand augmente. (réponse : b)
(5) Processus : Atelier Citoyens Design (ACD) recrute panel, définit questions (avant vote), test textes, publiera résumé résultats (% correctes par question).
(6) Délai : test 30j avant vote parlement = modifications possibles en débat.
(7) Exemption textes techniques (rapports CC, arrêtés) si panel inadapté = documenter exemption et justifier. »

---

### 8. RIC probabilité 3% (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 41.
**État** : APPLIQUÉ mais MÉTHODOLOGIE NON-CRÉDIBLE

Vérification :
- Ligne 41 : « Probabilité renouvellement < 3% calculée sur 100 scrutins comparables (Autriche 1995-2025, Suisse 1992-2025), dénominateur blanc > 35% participation OU blanc > plus grand parti + 10 pts. »

**Faille identifiée (SÉRIEUX)** :
« 100 scrutins comparables (Autriche 1995-2025, Suisse 1992-2025) » = affirmation mathématiquement fragile.

Compte scrutins :
- Autriche 1995-2025 : élections fédérales en 1995, 1999, 2002, 2006, 2008, 2013, 2017, 2019, 2024 = 9 scrutins. Élections régionales + européennes + locales ne sont pas comparables (différentes règles, populations, enjeux).
- Suisse 1992-2025 : élections fédérales en 1995, 1999, 2003, 2007, 2011, 2015, 2019, 2023 = 8 scrutins (tous les 4 ans). Votes populaires (référendums d'initiative, contrepropositions) ≠ élections.
- Total: max ~17 scrutins électoraux comparables, pas 100.

Ou texte pense à votes populaires ? Suisse ~80 votes/an = 2000+ votes sur 30 ans. Autriche votes populaires = très rares. Mixte = non-comparable.

Dénominateur « blanc > 35% participation » est énorme : Autriche 2019 blanc = ~3%, Suisse votes populaires blank/abstention = 30-50% (mais ce n'est pas blanc). Comparaison apples-to-oranges.

Chiffre 3% est plausible politiquement (risque faible) mais MÉTHODOLOGIE n'est pas crédible scientifiquement.

CC peut demander rapport scientifique = publication académique ? Calculs présentés ?

**Correction proposée** :
« Probabilité renouvellement : clarification méthodologie
(1) Étude statistique sur 30 ans (1990-2024) comparabilité très limitée (institutions différentes, contextes, règles scrutins, abstention). Audit externe recommandé par institut scientifique (IEP Paris, Sciences-Po, Université Genève).
(2) Calcul illustratif sur DATA FRANCE si disponible (votes blancs présidentiels 1995-2022, législatives 2002-2022) :
   - 1995-2022 : 7 scrutins présidentiels. Blanc < 5% tous. Renouvellement 0 fois / 7 = 0%.
   - Scénario hypothétique : si blanc > 50% = renouvellement. Probabilité historique 0%.
   - Conclusion : basé données françaises = probabilité renouvellement estimé 0% observé, projection future < 5% si seuil vote blanc abaissé significativement.
(3) Comparabilité Autriche/Suisse : très limitée. Ne citer que si étude spécifique vote blanc de ces pays existe (sinon omettre). Texte dit « 100 scrutins » = trop optimiste.
(4) Publication méthodologie : avant vote parlement, diffuser note technique (5 pages) expliquant calcul, sources données, limitations. Débat parlementaire peut corriger si estimation fausse.
(5) Formule révisée : « Probabilité renouvellement estimée < 3% sur 50 ans (Autriche + Suisse votes blancs/nuls 1975-2025 si comparables, Suisse références principales car blanc identifié légalement). Audit de confiance externes possible avant vote. » »

---

### 9. IA Llama clause exclusivité (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 28.
**État** : APPLIQUÉ mais CLAUSE UNILATÉRALE

Vérification :
- Ligne 28 : « Infrastructure France utilise Mistral (modèle français) OU Llama (Meta) AVEC clause exclusivité : si Meta restreint Llama en UE, migration forcée Mistral financée par État. Contrat acquisition Llama interdit transfert données vers serveurs Meta US. »

**Faille identifiée (SÉRIEUX)** :
Clause « si Meta restreint » = unilatérale protégeant contre 1 seul risque (Meta).

Autres risques :
1. Mistral peut aussi restreindre/être racheté/faillir. Texte ne prévoit pas riposte si Mistral ferme.
2. Mistral peut être acquis par groupe US (ex: Microsoft acquiert Mistral ? Scénario plausible). Alors Meta ET Mistral = control US.
3. Clause « si Meta RESTREINT » = vague. Quoi = restriction ? Modèle devient payant (50€/mois) ? Licence Change (non-commercial seulement) ? Performance dégradée (limitation tokens) ? Blocage géographique UE ? Texte ne définit pas seuil d'activation.
4. « Migration forcée financée par État » : coût réaliste ? Rééducation IA (fine-tuning) sur Mistral = 5-50 M€ supplémentaires. Budget prévu ?

**Correction proposée** :
« IA clause exclusivité bidirectionnelle révisée :
(1) Infrastructure France utilise Mistral (français) PRÉFÉRENTIELLEMENT. Contrat d'acquisition Mistral : durée minimale 7 ans, prix fixe année 1-3, + clausule d'augmentation plafonnée +5%/an.
(2) Clause de secours Meta Llama : si Mistral (a) quitte marché UE, (b) est rachetée par groupe non-français, (c) impose restrictions (licence payante, non-commercial) = droit migration État à Meta Llama avec même termes contrat (durée 7 ans, prix fixe).
(3) Clause Meta : contrat Llama = interdit transfert données débat citoyen vers serveurs Meta US (stockage EU data centers only). Chiffrement end-to-end des données débat (anonymisation IP). Si Meta viole : État peut cesser licence sans pénalité et basculer Mistral emergency financing (budget 10 M€ réserve).
(4) Clause mutuelle : si Llama dégradé (performance -30% vs baseline contractuel) = État peut migrer Mistral financial. Si Mistral dégradé = État peut recourir Llama.
(5) Audit technologique annuel indépendant (INRIA/ANSSI) vérifie conformité clauses exclusivité. Rapport publié (résumé sécurité, pas détails données). »

---

### 10. RIC impôts débat Parlement 20j (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 65.
**État** : APPLIQUÉ mais DÉLAI MINIMALISTE

Vérification :
- Ligne 65 : « Impôts nationaux : débat Parlement minimum 20 jours (amendements), vote parlementaire, puis RIC lancé 30 jours après vote. »

**Faille identifiée (SÉRIEUX)** :
20 jours = 2 semaines utiles (4 weekends). Débat impôt national = sujet d'ampleur constitutionnelle (art. 34 : lois de finances). Débat habituel français = 6-8 semaines (assemblée + commissions + navette senats).

20 jours = forcément accéléré. Risque politique : impression « débat éclair » favorise RIC (Parlement pas eu temps de convaincre). CC peut considérer délai insuffisant pour représentation légitime.

Comparaison :
- Vote blanc loi électorale = 150j débat + CC. RIC débat impôts = 20j ?
- Incoherence logique : RIC est mécanisme démocratique majeur (révision constitutionnelle potentielle si RIC accepté). Débat préalable doit être au moins égal vote blanc (150j) ou fusion aides (100-150j).

**Correction proposée** :
« RIC impôts : débat parlementaire minimum 40 jours (double de 20j, reste court mais respecte 2 semaines minimum + réunions + amendements + navette si bicaméral). Calendrier précis :
(1) Annonce positionnement gouvernement + dépôt projet impôt : Jour 0.
(2) Débat Assemblée nationale : Jour 0-20 (2 semaines + amendements).
(3) Débat Sénat (si 2e lecture requise) : Jour 20-35.
(4) Vote définitif Parlement : Jour 35-40 (résolution conflits entre chambres).
(5) Publication texte définitif : Jour 40.
(6) RIC lancé : Jour 70 (30j après publication, minimum pour collecte signatures).

OU accepter 20j si justifié par urgence budgétaire : « Débat Parlement minimum 20 jours EN TEMPS NORMAL. En cas urgence budgétaire certifiée Cour des comptes, débat peut être réduit 10 jours (pas moins). RIC lancé 15 jours après vote en cas urgence. Justification urgence doit être publié (rapport Cour) avant vote Parlement. » »

---

### 11. Contrats UE 3 mois buffer (SÉRIEUX ROUND 3)
**Texte appliqué ?** Oui, ligne 81.
**État** : APPLIQUÉ mais BUFFER INSUFFISANT

Vérification :
- Ligne 81 : « Clause réserve : si Commission émet objections catégoriques « graves » (mentionnées lettre), Parlement dispose 3 mois minimum supplémentaires pour reformulation (vote décalé mai 2028). »

**Faille identifiée (SÉRIEUX)** :
3 mois (février-mai 2028) est trop court pour cycle complet reformulation + nouvelle procédure Commission.

Processus réaliste Commission UE :
1. Janvier 2028 : avis Commission reçu avec objections « graves ».
2. Février-avril 2028 (12 semaines = 3 mois) : reformulation gouvernement + parlement français.
   - Semaine 1-2 : analyse objections Commission (droit concurrence art.34 TFUE? Fiscalité compatibilité directif EU? Aide d'État règles?).
   - Semaine 3-6 : rédaction propositions reformulation avec juristes EU + ministères (Finances, Agriculture, Intérieur).
   - Semaine 7-10 : débat parlement reformulation (mini-débat).
   - Semaine 11-12 : approbation texte révisé.
3. Mai 2028 (après 3 mois) : notification Commission du texte révisé. Mais Commission DOIT EXAMINER (4-8 semaines min) avant pouvoir donner feu vert. Donc feu vert réel = juin-juillet 2028.
4. Juillet 2028 : vote parlement final = calendrier glisse 3-4 mois.

Texte dit « vote décalé mai 2028 » = AVANT examen Commission de reformulation. Risque : Parlement vote mai 2028 sans nouvel avis Commission = même problème (risque censure).

**Correction proposée** :
« Buffer Commission UE : procédure réaliste.
- Notification Commission octobre 2027, avis janvier 2028.
- Si avis FAVORABLE (pas objections) : vote février 2028 (planning initial).
- Si avis objections « graves » = activation clause réserve : buffer 4 MOIS minimum (février-juin 2028), pas 3 mois.
  * Février-mars : analyse + reformulation gouvernement/parlement (4 semaines).
  * Avril : notification Commission du texte révisé.
  * Mai-juin : examen Commission texte révisé (4-6 semaines).
  * Juin : nouvela avis Commission (favorable ou doubts persistent).
- Vote parlement définitif : juillet 2028 (après nouvel avis Commission).
- Ou accepter risque et voter mai sans nouvel avis : texte doit expliciter « vote mai 2028 sans réexamen Commission = risque contentieux Cour Justice UE, Parlement assume ». »

---

### 12. Vote blanc 150j vs 90-120j réaliste (BLOQUANT RÉSIDUEL)
**État** : RÉSURGENCE (voir faille 1 supra)
= vérifié supra, déjà flagué comme BLOQUANT.

---

### 13. Fusion aides chiffrage d'État imprécis (SÉRIEUX)
**Texte appliqué ?** Oui, ligne 47.
**État** : APPLIQUÉ mais FLOU BUDGÉTAIRE

Vérification :
- Ligne 47 : « Débat citoyen fixe montant final sur chiffrage d'État publié d'abord (pas la suite). »

**Faille identifiée (SÉRIEUX)** :
« Chiffrage d'État publié d'abord » = ambiguïté totale. Chiffre quoi ?

Scénarios :
- État publie « coûts fusion aides = 5 Md€ à 15 Md€/an selon montant débat citoyen choisi ».
- Débat citoyen vote montant 1500€ = estimation État donne 12 Md€/an coût.
- Parlement appelle Cour des comptes = audit estime VRAI coût 18 Md€/an.
- Déficit non-planifié = crise budgétaire 2028-2029.

Ou État publie montant « minimum garanti » seul : 1200€ = 8 Md€. Débat citoyen vote 1500€. État dit « impossible, dépassement budget ». Débat citoyen bloque. Stalemate politique.

Ou État publie fourchette intentionnellement large (3 Bd€ à 30 Bd€) = tout choix citoyen semble "viable" mais aucune vraie contrainte.

Texte ne précise pas : (a) État assure financement ou citoyen accepte risque déficit ?, (b) chiffrage = point fixe ou intervalle ?, (c) qui valide chiffrage État (Cour comptes ?), (d) si dépassement, qui paie (nouveau débat citoyen ou réduction autre budget) ?

**Correction proposée** :
« Chiffrage d'État processus explicite :
(1) État mandate Cour des comptes pour évaluation coûts fusion aides (décembre 2026 - avril 2027, 4-5 mois).
(2) Rapport CC inclut : coûts directs (montants allocation), coûts opérationnels (infrastructure, intégration systèmes), coûts de transition (reconversion agents, formations), par scénario montant (1000€, 1200€, 1500€, 1800€).
(3) Tableau décisionnel publié (mai 2027, avant débat citoyen) :
   Montant proposé | Coût annuel | Financement | Impact autres budgets
   1000€            4 Md€        augment. taxes  déficit -2 Md€
   1200€            5 Md€        hypothèse       équilibre+buffer 1 Md€
   1500€            7,5 Md€      coupe santé    -1 Md€ autre
   1800€            10 Md€       impossible    déficit -5 Md€ sans source
(4) Débat citoyen choisit parmi 4 scénarios présentés OU propose montant libre (expert État donne impact en 48h).
(5) Garantie budgétaire : si montant citoyen dépasse « coupe autre budget » colonne, vote parlement doit inclure source financement (augment. impôts précisé OU coupe budget explicite) AVANT loi adoptée.
(6) Audit post-vote (1 an après déploiement) : Cour comptes vérifie coûts réels vs prédiction. Si dépassement > 10%, débat citoyen d'ajustement ordonné. »

---

### 14. Article 49.3 abolition calendrier absent (SÉRIEUX)
**Texte appliqué ?** Oui, section 6 (abolitions), mais PAS dans tableau marche (section 7).
**État** : ANNONCÉ mais NON-PLANIFIÉ = RISQUE POLITIQUE

Vérification :
- Ligne 94 (abolitions) : « Article 49.3 (vote de confiance bloquant) | (...) Remplacement : débat écrit + votes fréquents citoyen. (...) Révision constitutionnelle (art. 89) »
- Tableau marche (section 7, lignes 103-124) : article 49.3 n'apparaît PAS. Seule mention « ancrage anti-recyclage » (loi 4 ligne 38) qui est RAS différent.

**Faille identifiée (SÉRIEUX)** :
Abolition 49.3 est mesure majeures (révision constitutionnelle) mais calendrier est ABSENT du planning.

Implications :
- Jour 1 à An I : aucune place pour 49.3.
- An II : pas mentionné.
- Impression : mesure oubliée ou relégués hors planning ?

Aussi, « débat écrit + votes fréquents citoyen » n'est pas UN mécanisme = flou.

Débat écrit = combien de jours ?
Votes fréquents citoyen = quand ? Tous les projets de loi ? Tous les budgets ?
Risque : CC censure révision pour « imprécision nouveau mécanisme gouvernement ».

**Correction proposée** :
« Article 49.3 abolition : calendrier détaillé requis.
(1) Mesure = révision constitutionnelle (art. 89), donc minimum 6-12 mois (débat + référendum).
(2) Ajouter au tableau marche : « Abolition art. 49.3 + nouveau mécanisme gouvernement | Loi constitutionnelle modifiant art. 49 + création art. L.XXX code électoral pour votes fréquents | An II (septembre 2027 - septembre 2028) | art.1-I8 ».
(3) Mécanisme NOUVEAU gouvernement doit être spécifié avant vote révision :
   - Débat écrit durée FIXE (ex: minimum 30 jours avant vote texte).
   - Votes fréquents citoyen = quoi ? (ex: tous les projets budgétaires, tous les textes impactant droit fondamentaux, ou proportionnel dépense > 1 Bd€ ?).
   - Véhicule : loi ordinaire codifie procédure, pas constitutionnel (sauf suppression 49.3 elle-même).
(4) Consultation CC préalable recommandée avant vote révision (risque de censure sur « principes inhérents forme républicaine »).
(5) Timing : débat révision An II Q1-Q2 (sept-fev 2027-28), référendum An II Q3 (mars-mai 2028), application septembre 2028. »

---

### 15. Contrats agricole rétroactif imprécis (MINEUR)
**Texte appliqué ?** Oui, ligne 81.
**État** : APPLIQUÉ mais CLARIFICATION INCOMPLÈTE

Vérification :
- Ligne 81 : « Allocation rétroactive février 2028 si débat citoyen valide montant > acompte. »

**Faille identifiée (MINEUR)** :
« Rétroactive février 2028 » ambiguë si vote décalé mai 2028 (objections Commission).

Si vote contrats février 2028 (normal) : rétroactive = février-janvier (1 mois en arrière, acompte versé janvier).
Si vote contrats mai 2028 (objections) : rétroactive = mai-janvier (4 mois). Ménage reçoit acompte 15€ janvier, puis différentiel (ex: 30€-15€=15€) en mai ? Gap de 4 mois sans compensation d'inflation.

**Correction proposée** :
« Rétroactive clarifiée : remontée au jour versement de l'acompte.
- Allocation acompte versée janvier 2028 : 15€/an.
- Débat citoyen finalise montant (ex: 30€/an).
- Vote parlement (février normal OU mai si objections) approuve 30€/an.
- Rétroactive s'applique au jour 1er janvier 2028 (date versement acompte) : citoyen reçoit différentiel (30€-15€=15€) immédiatement après vote parlement + décision Cour.
- Délai maximum 15 jours après vote pour versement différentiel (circulation budgétaire) OU intégration automatique au mois suivant acompte (février 2028 pour février vote, mai 2028 pour mai vote). »

---

## Nouvelles failles non-identifiées dans corrections du round 3 (pré-existantes, renforcées ou masquées)

### 16. Risque censure CC : article 40 (fusion aides) PERSISTANT
**État** : PARTIELLEMENT SOULAGÉ par consultation CC obligatoire, mais risque reste.

Fusion aides = mesure restructurant allocations. Montant global (1200€ min) doit compenser RSA+logement actuels. Mais si débat citoyen fixe 1500€ = surcoût non-budgétisé. CC peut censuler sur « dépassement art. 40 compensation ».

**Correction proposée** : Joindre audit Cour des comptes avant débat citoyen (voir faille 13 supra).

### 17. Risque déficit budgétaire massif (non-adressé)
**État** : CROISSANCE CUMULÉE CHIFFRES NON-PLANIFIÉE

Coûts annoncés cumulés :
- Fusion aides : 5-8 Bd€/an (min 5 Bd€ si montant 1200€ pour ~5M bénéficiaires.
- Blockchain : 200-300 M€ An I, escalade 500-1000 M€ An II = moyenne 400 M€/an.
- X-Road : 200-300 M€ initial, 100-150 M€/an opé = 150 M€/an escalade.
- Contrats agricole : 5-8 Bd€/an + allocation compensation 50€ pour 10M ménages = 500 M€/an.
- Rénovation thermique : 30-40 Bd€/an.
- Contrats agricole + allocation : +10-12 Bd€/an.

TOTAL : 50-80 Bd€/an ajoutées. Budget État 2027 ~ 500 Bd€ = augment. 10-16% budget. Où financement ? Taxes, coupes autres budgets, emprunt = non-clarifié.

Rapport round 3 note : « déficit > 5 Bd€/an sans source de financement explicite. Budget 2028 déjà tendu. »

TOUJOURS PAS ADRESSÉ en round 3.

### 18. Contrats filière agricole toujours à risque CC/UE
**État** : REFORMULATION en contrats-filière aide État existe, mais risque perdure.

Ligne 81 : « contrats État-coopératives sans intervention prix minimum légal ». Modèle Danemark = contrats volontaires + subvention État gap. Mais si France subventionne 10 Bd€/an écart prix = aide de facto = contentieux UE possible (article 107 TFUE : aides d'État).

Risque : si Commission UE considère subventions « sélectives » (aider agriculteurs français vs autres secteurs) = aide de État prohibée. Probables objections graves (janvier 2028 avis).

JAMAIS ADRESSÉ EN PROFONDEUR.

---

## Synthèse risques résiduels majeurs

### BLOQUANTS identifiés round 4 :
1. **Vote blanc 150j vs 90-120j incohérence délai** = confusion garantie vs réaliste
2. **RIC « cycle référendaire suivant » non-défini** = ambiguïté plafond 2 RIC/an
3. **Fusion aides indexation + débat An III** = imprécision remplace/ajoute indexation

### SÉRIEUX identifiés round 4 :
4. Commission audit calendrier horodatage incohérent An II
5. Contrats agricole allocation acompte timing serré (janvier=avis Commission)
6. X-Road RTO 4h « cible » pas obligation contractuelle
7. Langage clair panel 20 citoyens insuffisant + critère 80% imprécis
8. RIC probabilité 3% méthodologie non-crédible (100 scrutins != réalité)
9. IA Llama clause unilatérale (risque si Mistral aussi restreint)
10. RIC impôts 20j débat trop minimaliste
11. Contrats UE 3 mois buffer insufficient pour reformulation+Commission
12. Fusion aides chiffrage d'État définition floue (budgétisation ?)
13. Article 49.3 abolition calendrier absent tableau marche
14. (MINEUR) Contrats agricole rétroactif imprécis si vote décalé mai
15. Risque déficit budgétaire +50-80 Bd€/an sans financement explicite
16. Risque CC article 40 (fusion aides) toujours présent
17. Contrats filière agricole risque aide d'État UE (contentieux probable)

---

## Conclusion

Les corrections du round 3 ont bien été INTÉGRÉES TEXTUELLEMENT, mais plusieurs restent COSMÉTIQUES ou créent de NOUVELLES AMBIGUÏTÉS :

- Les 2 BLOQUANTS du round 3 (vote blanc délai, RIC seuil) ne sont que PARTIELLEMENT résolus = résurgence amplifiée en round 4.
- 11 SÉRIEUX du round 3 introduisent 13-15 NOUVELLES FAILLES par imprécisions des clarifications.
- Risques juridiques (CC) et économiques (budgets) demeurent AIGUS et NON-ADRESSÉS.
- Lisibilité citoyenne reste BASSE (Section An I chantiers = 4/10).

Feuille-de-route est politiquement cohérente et ambitieuse. Mais juridiquement et budgétairement, elle courtise 8-12 ans de contentieux CC et 2-3 crises budgétaires 2028-2030.

Verdict : **ENCORE FRAGILE.** Nécessite round 5 = reséquençage calendrier, harmonisation délais, budgétisation explicite, audit Cour des comptes préalable, clarification RIC/vote blanc/fusion aides avant vote parlement.

---

**CRITÈRE DE SORTIE** : bloquants du round 2-3 toujours partiellement résolus + nouvelles failles créées par corrections = verdict identique round 3. Progression = nulle. Qualité dossier = 6/10 (politique ok, droit/budget non).
