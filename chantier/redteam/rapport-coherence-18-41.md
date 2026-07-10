# Rapport Red Team: Cohérence des fichiers problemes-18 à 41

## Synthèse générale

Analyse des 24 fichiers de problèmes (18 à 41) pour détecter doublons thématiques et contradictions de fond/chiffres.

**Résultats:**
- Doublons à fusionner: 0
- Cas tolérable (angles différents): 1
- Contradictions majeures de chiffres: 0
- Connexions complémentaires: 3

---

## Doublons : Paires thématiques suspectes

### Analyse approfondie des cas suspects

#### F39 P1 + F41 P5 : TOLÉRABLE, ANGLES DIFFÉRENTS

**F39 P1: Tableau de bord constitutionnel des promesses électorales**
- Thème: Suivi des 20-30 engagements clés du gouvernement/ministres avec bilan trimestriel (Polimètre Canada en modèle)
- Piste A: Dashboard officiel obligatoire avec API ouverte
- Piste B: Audit Cour des comptes à mi-mandat
- Piste C: Obligation cahier des charges chiffré avant scrutin

**F41 P5: Le budget de l'État sur une page**
- Thème: Explication simple du budget 2025 (666 Md EUR dépenses, répartition par missions)
- Contenu: Réduire les 500+ pages du budget à une synthèse citoyenne
- Précédents: South Africa, New Zealand publient citizens budgets ; UK publie tax receipt personnel

**Similarité identifiée:**
Tous deux proposent une synthèse publique lisible (tableau de bord ou page unique) pour que les citoyens comprennent un sujet complexe.

**Différence substantielle:**
- F39 P1 = suivi PROMESSES ÉLECTORALES (engagement vs réalisation)
- F41 P5 = explication BUDGET D'ÉTAT (où va l'argent public)

**Verdict: TOLÉRABLE, ANGLES DIFFÉRENTS**

Raison: L'esprit (synthèse, transparence, lisibilité) est similaire mais la matière traitée (promesses vs dépenses) est suffisamment distincte pour justifier deux fiches. Fusionner réduirait la profondeur sur chaque sujet. Conseil: garder distinct mais noter la connexion de pattern dans les pistes.

---

#### F20 + F41 (P2-P3) : COMPLÉMENTAIRES, PAS DOUBLON

**F20: Budget traçable et blockchain souveraine (P1-P10)**
- Thème: Traçabilité TECHNIQUE du budget français (chaque euro public traçable)
- Focus: Infrastructure blockchain/open data, traçabilité engagement→mandatement→paiement
- Précédent: Estonie (KSI blockchain), ProZorro Ukraine (open contracting)

**F41 P2-P3: Opacité budgétaire (communication/compréhension)**
- F41 P2: Députés votent PLF sans comprendre (70 jours, 4000 amendements)
- F41 P3: Tours de passe-passe budgétaires (où disparaissent les milliards)

**Relation:**
F20 = solution technique au problème que F41 identifie. F20 est le « comment » (blockchain), F41 est le « pourquoi » (inintelligibilité). Pas de redondance, complémentarité directe.

**Verdict: COMPLÉMENTAIRES, AUCUNE ACTION**

---

#### F26 vs F27 : ANGLES DISTINCTS

**F26: Contradictions d'État (l'hypocrisie active)**
- Exemple P1: État encaisse 13 Md EUR taxes tabac, paie les cancers du tabac
- Exemple P2: Radars dits "sécurité" repositionnés sur zones rentables
- Pattern: État dit une chose en droit, en fait une autre en pratique

**F27: Promesses jamais tenues (l'irresponsabilité)**
- Exemple P1: "Plus personne à la rue d'ici fin 2017" (Macron)
- Exemple P3: DALO 2007 promesse de logement opposable, 130 M EUR astreintes non payées
- Pattern: État promet une action X, ne la réalise pas

**Verdict: ANGLES DISTINCTS, AUCUNE ACTION**

Raison: F26 identifie l'hypocrisie (contradiction État vs lui-même), F27 identifie l'irresponsabilité (promesse non tenue). Complémentaires mais thématiquement distincts.

---

#### F25 vs F40 : THÈMES CONNEXES, PAS DOUBLON

**F25: Fiscalité (taux régressifs milliardaires, optimisations)**
- P1: Taux effectif d'imposition régressif (milliardaires payent moins % que classe moyenne)
- P2-P9: Holdings patrimoniales, Dutreil, CumEx, assurance-vie, exit tax, management packages, prix de transfert

**F40: Superprofits et retraites (secteur énergie, fonds souverain)**
- P1-P2: Taxation superprofits TotalEnergies (contre-modèle UK/IT/ES qui taxe)
- P3-P4: Fonds souverain à la norvégienne, FRR sabotage
- P5-P9: Capitalisation collective, buybacks, superdividendes, retraites dorées

**Relation:**
F25 = problème fiscal GÉNÉRAL (milliardaires, optimisation) ; F40 = redistribution via superprofits SECTORIELS (énergie) + retraites. Complémentaires mais cibles différentes.

**Verdict: COMPLÉMENTAIRES, AUCUNE ACTION**

---

## Contradictions de fond/chiffres

### Vérifications effectuées

#### Chiffre CAF sur fraude/erreur

**F20 P1 cite:**
- "CAF seule: 104 Md EUR/an distribués, 6,3 Md EUR payés en erreur/fraude (6%, Cour des comptes 2024-2025)"

**Autres fichiers (18, 19):**
- Aucune citation contradictoire trouvée sur CAF

**Verdict: PAS DE CONTRADICTION**

---

#### Micro-taxes : "243" vs "438"

**F19 P3 cite:**
- "438 taxes françaises" (total tous secteurs)
- "243 micro-taxes (< 0.1% revenus)" (sous-ensemble des 438)

**Interprétation:** 438 est la totalité ; 243 est un sous-ensemble par critère de rendement. Classification, pas contradiction.

**Verdict: PAS DE CONTRADICTION**

---

#### Prix électricité ARENH

**F28 P1 cite:**
- "EDF contraint vendre 100 TWh/an à 42 EUR/MWh, coût production 60-70 EUR/MWh"
- "Perte structurelle 1,8-2,8 Md EUR/an 2024-2025"

**F41 (ou autres):**
- Aucune contradiction détectée sur ces chiffres

**Verdict: PAS DE CONTRADICTION**

---

## Connexions complémentaires identifiées (non-doublons)

### 1. Cluster « Transparence budgétaire »

F20, F39, F41 forment un système cohérent mais distinct:
- F20: Infra technique (blockchain/open data) pour tracer euros
- F39 P1: Dashboard promesses (engagement politique)
- F41 P2-P5: Communication/compréhension (budgets lisibles)

**Verdict:** Trois angles d'un même problème (opacité État), pas doublons, approches complémentaires.

---

### 2. Cluster « Retraites et redevabilité »

F35 P6 (retraites agricoles), F38 (pantoufle/corruption), F39 (promesses/audit), F40 (superprofits/retraites) :
- F35 P6: Retraite agricole indigne (903 EUR min, impossible vivre)
- F38: Corruption système (portes tournantes, lobbyisme)
- F39: Redevabilité (promesses, audit mid-term)
- F40: Superprofits vers fonds retraite (Norvège vs France)

**Verdict:** Thèmes connectés (système retraite + responsabilité) mais matières distinctes. Aucun doublon.

---

### 3. Cluster « Aides sociales et bureaucratie »

F18 (pièges RSA/AAH), F19 (aberrations administratives/micro-taxes), F30 (contrats et résiliation):
- F18: Plafonds/seuils qui punissent le travail (RSA, AAH)
- F19: Micro-taxes, seuil 49 salariés, normes contradictoires
- F30: Contrats captifs (résiliation difficile, frais disproportionnés)

**Verdict:** Connexion par thème (piège administratif), mais domaines distincts (aides vs PME vs contrats). Pas doublons.

---

## Conclusion

**Doublons graves (à FUSIONNER):** 0

**Cas tolérable (angles différents, à surveiller):** 1
- F39 P1 + F41 P5: pattern similaire (synthèse/dashboard) mais sujets distincts (promesses vs budget)

**Contradictions de chiffres:** 0 majeures détectées

**Recommandation:**
- Conserver la structure actuelle (24 fiches distinctes)
- Noter F39 P1 et F41 P5 comme connexes mais complémentaires
- Possibilité de reference croisée dans les fiches pour signaler pattern similaire

---

## Méthodologie

1. Cartographie des titres (grep sur tous les P1-P10 de 18-41)
2. Lecture approfondie de 8 fichiers clés (18, 19, 20, 26, 27, 39, 40, 41)
3. Lecture partielle de F28
4. Vérification croisée des chiffres cités (CAF, taxes, électricité)
5. Évaluation de similarité par thème et approche

---

**Rapport généré:** 2026-07-11 (red team cohérence 18-41)
