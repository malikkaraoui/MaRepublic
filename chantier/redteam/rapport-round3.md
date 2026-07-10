# Red team : ROUND 3 - Vérification des 14 corrections appliquées (11/07/2026)

## Verdict global
**ENCORE FRAGILE** : 11 nouveaux points critiques identifiés (2 bloquants, 9 sérieux), aucune amélioration substantielle sur les obstacles CC du round 2. Les corrections appliquées sont partielles et introduisent de nouveaux risques.

Les 14 corrections affichées ont bien été intégrées TEXTUELLEMENT, mais plusieurs restent COSMÉTIQUES (reformulations sans résoudre le fond) et DEUX BLOQUANTS majeurs demeurent non-résolus. Au-delà, 9 failles SÉRIEUSES émergent des corrections elles-mêmes.

---

## Vérification des 14 corrections appliquées : RÉEL vs COSMÉTIQUE

### Point 1 : Vote blanc délai (100j -> 150j)
**Texte appliqué ?** Oui, ligne 32 et 41.
**État** : COSMÉTIQUE / INCOHÉRENT

- Ligne 32 : « 150j minimum pour débat parlementaire + consultation CC »
- Ligne 41 (Loi 1 vote blanc) : « examen Conseil constitutionnel préalable obligatoire (au moins 100 jours) »

**Faille identifiée (BLOQUANT)** : Contradiction directe 150j vs 100j. Délai examen CC réaliste = 1-2 mois seul. Si débat parlementaire 2-4 semaines + CC 1-2 mois = 90-120j minimum, pas 100j garanti. Ligne 41 est regression.

**Correction proposée** : Unifier à 150j minimum dans TOUS les tableaux. Ligne 41 doit harmoniser.

---

### Point 2 : RIC seuil territorial (clarification AND/OR)
**Texte appliqué ?** Oui, ligne 65.
**État** : PARTIELLEMENT APPLIQUÉ / TOUJOURS AMBIGU

- Ligne 65 : « RIC lancé si majorité dans 50% des départements ET signatures nationales seuil, OU (alternative si majorité 50% dépt non atteinte) plafond strict 2 RIC par an si participation nationale >= 30 % »

**Faille identifiée (BLOQUANT)** : Hiérarchie AND/OR toujours non-clarifiée.
- Scénario : deux RIC lancés simultanément
- RIC1 : 1M signatures (50% national), 40% département coverage (<50%)
- RIC2 : 600k signatures (42% national), 45% département coverage (<50%)
- Ensemble : 71% participation nationale (>30%)

Question litigieuse : Les deux RIC passent-ils ou non ? Texte reste muet = procédure vulnérable au contentieux dès premier RIC.

Tribunal pourrait censurer les deux au motif « ambiguïté procédurale ». Débâcle politique 2026-2027.

**Correction proposée** : Clarifier ordre de priorité explicite :
« RIC lancé si : (1) majorité 50% département ET signatures seuil = lancé immédiatement. (2) Si majorité 50% département ÉCHOUÉE = plafond 2 RIC/an si participation nationale >= 30%. Les deux conditions ne peuvent coexister dans même scrutin : si première RIC atteint 50% dépt, deuxième RIC attend cycle suivant. »

---

### Point 3 : RIC risque CC (clause reformulation obligatoire)
**Texte appliqué ?** Oui, ligne 65.
**État** : APPLIQUÉ mais INCOMPLET

- Ligne 65 : « Si CC émet réserves en consultation préalable, débat parlementaire sur reformulation IMPOSÉ avant référendum »

**Faille identifiée (SÉRIEUX)** : Clause « imposé » ≠ contraignant juridiquement.
- Parlement peut refuser reformulation, révoquer clause, maintenir projet original
- Absence de délai minimum pour débat parlementaire = peut boucler en 24h = contournement
- Risque : reformulation cosmétique, CC censure post-vote quand même

**Correction proposée** : Ajouter :
« Débat parlementaire sur reformulation dure minimum 10 jours (pour amendements publiés). Si reformulation refuse points CC, nouveau vote CC obligatoire avant référendum. Si CC maintient réserves, référendum suspendu 6 mois (révision impossible jusqu'à nouvelle consultation). »

---

### Point 4 : Fusion aides art.40 (consultation CC obligatoire)
**Texte appliqué ?** Oui, ligne 46-47.
**État** : APPLIQUÉ mais CRÉÉ AMBIGUÏTÉ NOUVELLE

- Ligne 46-47 : « Garantie : montant minimum jamais inférieur à (allocation logement + RSA) mesurés le 1er juillet 2026, indexé automatiquement chaque année sur inflation INSEE »

**Faille identifiée (SÉRIEUX)** : Ambiguïté « indexé automatiquement chaque année »
- Question : indexation appliquée AU-DELÀ du montant fusionné fixé débat citoyen, ou REMPLACE débat citoyen suivant ?
- Exemple : débat citoyen An II fixe 1200€ (minimum + 5%). Inflation +4% An II+1 = 1248€ automatique. Puis débat citoyen An III propose 1250€ ? Cumule ? Remplace 1248€ ?
- CC va demander clarification : « Montant fusionné = quoi exactement ? Fixe débat ou variable inflation ? »

Texte confond deux mécanismes : indexation automatique (technique) vs débat citoyen périodique (démocratie). L'un écrase l'autre = ambiguïté CCale = risque censure.

**Correction proposée** :
« Montant fusionné fixé débat citoyen An II (ex: 1200€). Indexation automatique inflation INSEE s'applique en PLUS du montant débat citoyen, ajustement par décret chaque janvier. Débat citoyen suivant (An III minimum) peut réviser montant de base (ne remplace pas indexation). Garantie : montant + indexation jamais descend sous (montant juillet 2026 + inflation cumulée). »

---

### Point 5 : Vote blanc 12 mois vacance (réduction 18 -> 12)
**Texte appliqué ?** Oui, ligne 32 et 41.
**État** : COSMÉTIQUE

Réduction 18 -> 12 mois marginal. Probabilité renouvellement < 3% n'est justifiée nulle part. Sur quel dénominateur ? Votes blancs > 10% ? > 50% participation ?

Autriche/Suisse ≠ France (électeurs, système, participation). Chiffre 3% peut varier x5 selon seuil blanc réel.

**Faille identifiée (SÉRIEUX)** : Statistique invérifiée.

**Correction proposée** : Publier méthodologie : « Probabilité calculée sur 100 scrutins comparables (Autriche 1995-2025, Suisse 1992-2025), dénominateur = blanc > 35% participation OU blanc > plus grand parti + 10 pts. Résultat : P < 3% observé. »

---

### Point 6 : Blockchain 200-300 M€ (coûts échelonnés)
**Texte appliqué ?** Oui, ligne 68-69.
**État** : APPLIQUÉ et HONNÊTE

- Ligne 68-69 : « Coûts réalistes : 200-300 M€ An I (pilote CAF), escalade probable 500 M€ à 1 Md€ An II »
- « Audit énergétique complet + compatibilité directives UE 2024 énergie/numérique AVANT vote parlement An I »

**Amélioration sérieuse** : expliciter escalade An I -> An II. Plutôt que cacher surcoûts, on les anticipe.

**Faille identifiée (SÉRIEUX)** : Double-estimation crée risque CC.
- Si audit energétique An I découvre inefficacité (ex: 1W/transaction réel vs 0.5W estimé), vote An II sur base 500M-1Md€ peut être jugé inconstitutionnel (incompétence budgétaire).
- Escalade 3-5x (200M -> 1000M) peut heurter art. 40 Constitution (disproportionnalité).

**Correction proposée** : « Audit énergétique An I inclut modèle escalade 500M-1Md€ comme SCÉNARIO RÉALISTE testé (pas optimiste). Si audit découvre surcoût, vote An I inclut plafond dépense (ex: max 2 Md€ cumulé An I + An II). Dépasse plafond = arrêt programme sans débat citoyen supplémentaire. »

---

### Point 7 : Commission audit 100j -> An II Q1
**Texte appliqué ?** Oui, ligne 46-47.
**État** : APPLIQUÉ mais CALENDRIER INCOHÉRENT

- Ligne 46-47 : « Jour 100 : création commission consultative mixte État/régions/CNAF pour audit complet de constitutionnalité (rapprochement en An II Q1, 6-9 mois réalistes) »

**Faille identifiée (SÉRIEUX)** : Délai mathématiquement interne contradictoire.
- Jour 100 = ~09/2026
- An II Q1 = 01-03/2027
- Délai = 4 mois, non 6-9 mois annoncés
- Ou confusion : création Jour 1 (+100j réunion = 140j = mai 2027) vs An II Q1 (janvier 2027) ?

Texte manque calendrier exact. Commission doit auditeur 800M€ CAF + 200M€ région + 100M€ parentale sur 4-9 mois ? Audit complet impossible < 6 mois.

**Correction proposée** : Clarifier horodatage exact :
« Création commission octobre 2026 (Jour 100). Audit intermédiaire janvier 2027 (An II Q1 : 3 mois délai, non audit final). Audit COMPLET mars 2027 (6 mois total). Débat citoyen avril-mai 2027 (2 mois). Vote parlement juin 2027 (An II Q2). »

---

### Point 8 : Contrats agricole notification UE
**Texte appliqué ?** Oui, ligne 81 + tableau ligne 123.
**État** : APPLIQUÉ mais RISQUE NON-MITIGATION

- Ligne 123 : « Contrats filière agricole : An I-II (notification oct 2027, avis jan 2028, vote fév) »

**Faille identifiée (SÉRIEUX)** : Risque ajournement sans réaction préalable.
- Si Commission soulève objections graves (ex: contrats ne respectent pas TFUE art. 34 libre circulation), délai 3 mois (oct-jan) insuffisant pour reformulation parlementaire.
- Vote février 2028 peut être annulé par CC / Commission UE contentieux.
- Texte dit « acceptation risque ajournement 2028 » (ligne 99 rond 2) = reconnaissance absence solution.

**Correction proposée** : « Calendrier serré mais avec clause réserve : si Commission émet objections cat. « graves » (mentionnées lettre), Parlement dispose 3 mois minimum supplémentaires pour reformulation (vote décalé mai 2028 An II Q2). Sinon vote février maintenu malgré objections. »

---

### Point 9 : X-Road résilience (décentralisation + cache)
**Texte appliqué ?** Oui, ligne 55-56.
**État** : APPLIQUÉ mais PROMESSE EXCESSIVE

- Ligne 55-56 : « Infrastructure décentralisée avec cache local (zero latency) + backup géographiquement séparé (redondance obligatoire) »
- « Pas de point unique défaillance = centralisation »

**Faille identifiée (SÉRIEUX)** : Promesse « pas de point unique défaillance » fausse techniquement.
- API centrale (X-Road core) = point unique défaillance même avec cache décentralisé
- Cache local peut être attaqué indépendamment
- Attaque DDoS coordinée API + cache = paralysie TOUS services
- Estonie 2007 : incidents de sécurité malgré architecture. Australie 2021 : attaque infrastructure gouvernementale.

Affirmation ligne 56 surpromesse = CC va questionner fondement promesse.

**Correction proposée** : « Infrastructure décentralisée réduit (non élimine) risque point unique défaillance. Risques résiduels : attaque coordinée API + cache = paralysie temporaire jusqu'à rétablissement (RTO 4h cible). Audit sécurité CNIL bianuel (pas annuel) validera conformité à norme résilience. »

---

### Point 10 : RIC exclusions (Constitution, traités, impôts)
**Texte appliqué ?** Oui, ligne 65-66.
**État** : APPLIQUÉ mais AMBIGUÏTÉ MINEURE

- Ligne 65-66 : « Exclusions non-négociables : Constitution, traités internationaux (UE/OTAN), impôts nationaux (débat Parlement d'abord) »

**Faille identifiée (MINEUR)** : « Débat Parlement d'abord » pour impôts ≠ clair.
- Débat parlementaire dure combien ? 1 mois ? 6 mois ? Puis RIC possible ?
- Ou « débat Parlement = exclusion de facto du RIC » ?

Texte implique RIC possible impôts APRÈS débat parlementaire. Mais délai pas explicité.

**Correction proposée** : « Impôts nationaux : RIC lancé seulement APRÈS débat parlementaire conclusif (vote Assemblée sur positionnement impôt). Débat minimum 20 jours (amendements). Puis RIC dès 30 jours après vote parlementaire. »

---

### Point 11 : Langage clair guide officiel pré-désigné
**Texte appliqué ?** Oui, ligne 29.
**État** : APPLIQUÉ mais MÉTRIQUE IRRÉALISTE

- Ligne 29 : « test lisibilité index Flesch 60+ »
- « guide officiel pré-désigné : Guide SNCF Simplicity 2020 ou équivalent État »

**Faille identifiée (SÉRIEUX)** : Index Flesch 60+ = très lisible (presse généraliste).
- Impossible pour textes juridiques (loi ordinaire)
- Loi fusion aides demande précision « art. 40 Constitution » = jargon juridique
- Flesch 60 demande phrases < 15 mots. Incompatible droit.

Exemple impossible :
- Actuellement : « Fusion allocations logement et RSA en allocation unique compensée indexée inflation INSEE »
- Flesch 60 : « Regrouper les aides. Une aide. Montant augmente chaque année avec prix. » (perd sens juridique)

**Correction proposée** : « Langage clair s'applique à circulaires + documents citoyens (formulaires, FAQ). Lois ordinaires exemptées de norme Flesch (rester accessibles sur vocabulaire, structure, zéro jargon inutile, mais accepter termes juridiques nécessaires). Index Flesch 60+ sur documents grand public, Flesch 40-50 sur textes loi. Critère additionnel : test de compréhension panel 20 citoyens < bac, 80% correctes. »

---

### Point 12 : Fusion aides date référence 1er juillet 2026
**Texte appliqué ?** Oui, ligne 46-47.
**État** : APPLIQUÉ et CLAIR

- Ligne 46-47 : « montant minimum jamais inférieur à (allocation logement + RSA) mesurés le 1er juillet 2026 »

**Pas de faille majeure**, mais question : si allocation logement baisse entre juillet 2026 et An II vote (ex: ajustement budgétaire septembre 2026), montant « minimum » reste basé juillet 2026 ou monte pour suivre baisse (paradoxal) ?

Réponse implicite : indexation inflation seule = montant juillet 2026 + inflation = plancher inviolable.

**Accessoire** : Clarifier dans arrêté : « Les montants juillet 2026 sont mesurés au dernier jour du mois (31 juillet 2026) pour éviter ajustements en cours de mois. »

---

### Point 13 : Contrats agricole compensation ménages (20-50€/an)
**Texte appliqué ?** Oui, ligne 81.
**État** : APPLIQUÉ mais CRÉE FAILLE TIMING

- Ligne 81 : « Impact consommateur : pain +2 cts, compensé par allocation spécifique pour ménages < 2000€/mois (débat citoyen fixe montant : 20-50€/an proposé) »

**Faille identifiée (SÉRIEUX)** : Risque chronologie inversion.
- Contrats agricole votés An I Q4 / An II Q1 (oct 2027 notification UE, fév 2028 vote)
- Allocation compensation votée An II Q2 (fusion aides)
- Entre contrats votés (fév 2028) et compensation versée (An II Q2, mai 2028), délai = 3-4 mois
- Ménages fragiles paient prix agricole +2cts AVANT compensation versée = risque électoral

Pain 0.5€/jour x 365j = 182€/an. +2cts = +7€/an réel. Allocation compensation 20-50€ couvre moitié à totalité.

Mais calendrier : ménages 2028-2029 supportent coût avant bénéfice = déception citoyenne, risque RIC opposition.

**Correction proposée** : « Allocation compensation versée en acompte dès jan 2028 (avant contrats fév 2028), chiffrage provisoire (15€/an). Débat citoyen An II affine montant définitif (20-50€). Allocation rétroactive de fév 2028 si débat valide montant > acompte. »

---

### Point 14 : IA débat souveraineté (Infrastructure France, pas US)
**Texte appliqué ?** Oui, ligne 28.
**État** : APPLIQUÉ mais DÉFINITION IMPRÉCISE

- Ligne 28 : « Infrastructure France (Inria/Mistral/Llama open-weights), jamais cloud US »

**Faille identifiée (SÉRIEUX)** : Llama = Meta (California), pas européen.
- « Llama open-weights » ≠ souveraineté UE
- Meta peut modifier licence, restrictions, suspension (modèle US de contrôle tech)
- Mistral (français) ou Llama (américain) = choix techniquement imprécis
- Audit CNIL « annuel rendu public » = risque donnée sensible révélée

Texte prétend souveraineté technologique mais utilise modèle Meta potentiellement bloqué.

**Correction proposée** : « Infrastructure France utilise Mistral (modèle français) OU Llama (Meta) AVEC clause exclusivité : si Meta restreint Llama en UE, migration forcée Mistral financée par État. Contrat acquisition Llama interdit transfert données vers serveurs Meta US. Audit sécurité CNIL annuel, publication non-données sensibles = résumé assurance sécurité. »

---

## Résumé : Failles introduites par corrections elles-mêmes

| Faille | Catégorie | Description | Gravité |
|--------|-----------|-------------|---------|
| **A** | Vote blanc | Incohérence 100j (ligne 41) vs 150j (ligne 32) dans même texte | BLOQUANT |
| **B** | Fusion aides | Indexation automatique ambiguë vs débat citoyen périodique | SÉRIEUX |
| **C** | RIC territorial | Hiérarchie AND/OR seuil 50% dépt / plafond 2 RIC toujours litigieuse | BLOQUANT |
| **D** | X-Road | Promesse « pas point défaillance unique » techniquement fausse | SÉRIEUX |
| **E** | Contrats agricole | Timing compensation (An II Q2) vs prix (An I Q4) = 3-4 mois attente ménages | SÉRIEUX |
| **F** | Commission audit | Calendrier 4 mois vs annoncé 6-9 mois = confusion horodatage | SÉRIEUX |
| **G** | RIC | Probabilité 3% sans dénominateur ni méthodologie = statistique vague | SÉRIEUX |
| **H** | Contrats UE | Risque objections Commission sans buffer temporel réaction (oct-jan trop serré) | SÉRIEUX |
| **I** | Langage clair | Flesch 60+ impossible pour loi ordinaire + jargon juridique nécessaire | SÉRIEUX |
| **J** | RIC impôts | « Débat Parlement d'abord » ne précise pas délai ni RIC après = ambigu | MINEUR |
| **K** | IA | Llama = Meta/US, prétention souveraineté bafouée par choix techno | SÉRIEUX |

---

## Double expertise : Risque CC + Économie

### Perspective juriste constitutionnel

Obstacles CC inchangés depuis round 2 :
1. **Art. 40 Constitution** (fusion aides) : ambiguïté indexation + débat citoyen = CC peut encore censurer sur imprécision compensation mathématique
2. **Art. 3 Constitution** (vote blanc) : instabilité gouvernance via blanc > parti + 50% participation peut heurter « souveraineté nationale » (CC a censuré norme électoral 4x depuis 1989)
3. **Révision constitutionnelle** (RIC, art.49.3) : CC juge « principes inhérents forme républicaine » = censure possible si RIC perçu dilution souveraineté parlementaire

Résultat : 3 censures potentielles CC 2027-2029 = débâcle politique, élections paralysées.

### Perspective économiste

Problèmes budgétaires :
1. **Blockchain escalade 200M -> 1Bd€** : audit An I peut révéler surcoûts = vote An II jugé inconstitutionnel (art. 40, disproportionnalité)
2. **Fusion aides 5-8 Bd€/an** : chiffrage d'État avant débat citoyen bon, mais si débat citoyen fixe montant PLUS HAUT que minimum indexé (ex: 1300€ vs min 1200€), dérive budgétaire +3-4 Md€/an possibles
3. **Contrats agricole 5-8 Bd€/an + allocation compensation** : surcoût non-budgétisé (où argent vient-il ?) = déficit ou recoupe autres chapitres (santé, défense). Risque crise budgétaire 2028-2029.

Résultat : déficit > 5 Md€/an sans source de financement explicite. Budget 2028 déjà tendu. Risque notation agences de rating = emprunt public plus cher.

---

## Lisibilité pour citoyen non-diplômé

**Section 1 (diagnostic)** : 7/10
- « 78 % Français ne font plus confiance » : chiffre sans source (journaliste demandera preuve)
- « fraude fiscale 35-40 Md€ » : bon repère
- « Chat Control au chiffrement » : demande explication (crypto pas au programme école)

**Section 2-3 (Jour 1, 100j)** : 7/10
- « Loi ordinaire (100j) » : pas clair (combine 100 jours parlement + consultation CC ?)
- « Vote blanc decisif » : concept accessible
- « Silence vaut accord » : clair

**Section 4-5 (An I, chantiers)** : 4/10
- « RIC constitutionnel via modification article 11 » : article quoi ?
- « Ethereum 2.0 (Proof of Stake) » : jargon technique, nécessite page dédiée
- « X-Road » : renvoi Estonie confus (citoyen ne connaît pas Estonie numérique)
- « TFUE art. 34 » : acronymes denses

**Globalement** : document est feuille de route POLITIQUE (experts), pas CITOYEN. Accessibilité < 50% pour non-diplômé.

---

## Conclusion

### Verdict détaillé

| Catégorie | Nombre | État |
|-----------|--------|------|
| BLOQUANTS | 2 | Incohérence vote blanc délai (A), ambiguïté RIC seuil territorial (C) |
| SÉRIEUX | 8 | Indexation aides (B), X-Road (D), timing agricole (E), audit calendrier (F), RIC stats (G), Commission UE (H), Flesch langage (I), IA Llama (K) |
| MINEURS | 1 | RIC impôts débat parlement (J) |

**Failles bloquantes PERSISTANTES depuis round 2** :
- RIC seuil territorial ambigüité toujours présente (reconnu round 2 comme BLOQUANT 2)
- Fusion aides CC consultation ne résout pas imprécision compensation art.40

**Nouvelles failles BLOQUANTES** :
- Incohérence vote blanc 100j vs 150j (regression)

**Risque CC toujours élevé** (2027-2029) : art.40 fusion, art.3 vote blanc, révision RIC = 3 vecteurs censure

**Déficit budgétaire non-mitigation** : contrats agricole + allocation compensation + blockchain escalade = +10+ Md€/an sans source = dérive budgétaire probable

### Verdict final

Feuille-de-route reste **ENCORE FRAGILE**.

Points bloquants ne sont PAS résolus (2 identifiés : vote blanc, RIC). Huit points sérieux émergent des corrections elles-mêmes. Risque CC demeure élevé. Calendrier agricole crée timing inversé (prix avant compensation). Budget non-bouclé.

**Nécessite round 4** : reséquençage calendrier agricole, clarification hiérarchie RIC, harmonisation vote blanc délais, budgétisation explicite contrats+allocation, évaluation ex-ante CC sur points sensibles (pas consultation seulement).
