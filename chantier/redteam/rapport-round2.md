# Red team : ROUND 2 - Vérification des corrections (11/07/2026)

## Verdict global
**ENCORE FRAGILE** : 14 points identifiés (4 bloquants, 5 sérieux, 5 mineurs).

Les 18 corrections du journal appliquent bien les failles juriste MAJEURES (RIC art.89 -> art.11, vote blanc décret -> loi, art.49.3 révision), mais plusieurs sont cosmétiques (repoussent sans résoudre) et des failles NOUVELLES ont été introduites par les corrections elles-mêmes.

---

## Failles juriste corrigées mais INSUFFISAMMENT

### BLOQUANT 1 : Vote blanc en 100j : délai trop court pour examen CC préalable
- **Correction appliquée (n°4):** « Loi électorale + examen Conseil constitutionnel préalable (100j, pas Jour 1) »
- **Le problème reste:** 100 jours = 14 semaines pour débat parlementaire + examen CC + vote = IMPOSSIBLE
  - Débat parlementaire seul : 2-4 semaines minimum
  - Examen CC préalable : 1-2 mois de délai régulier
  - Total réaliste : 180-200 jours, pas 100
- **Risque:** Vote blanc décisif ne sera prêt qu'à An I minimum, pas Jour 100
- **Correction proposée:** Reclasser dans tableau marche vers « An I Q1 » (6-12 mois) pour réalisme juridique. Ou reconnaître délai 150j minimum (5 mois).
- **Gravité:** BLOQUANT

### BLOQUANT 2 : RIC seuil territorial crée ambiguïté logique
- **Correction appliquée (n°11):** « Seuil minimum territoriale obligatoire : majorité dans 50% des départements OU plafond 2 RIC par an »
- **Le problème reste:** Deux conditions alternatives (OU) sans clarification de leur articulation
  - Si 1001 citadins + 1000 ruraux lancent RIC simultanément = 2 RIC lancés (plafond atteint)
  - Mais qu'en-est-il de la majorité 50% départements pour chacun ?
  - Un RIC urbain peut ne pas avoir majorité 50% départements (concentration villes)
  - L'autre peut être bloqué bien que remplissant 50% départements
- **Résultat:** Système incohérent, litigieux dès premier RIC
- **Correction proposée:** Clarifier : « RIC lancé si (1) majorité 50% départements ET signatures seuil, OU (2) plafond 2 par an si majorité 50% dept échouée mais 30% particip national ». Expliciter ordre de priorité.
- **Gravité:** BLOQUANT

### BLOQUANT 3 : RIC révision art.11 : risque Conseil constitutionnel toujours présent
- **Correction appliquée (n°11):** « Consultation Conseil constitutionnel préalable »
- **Le problème reste:** Consultation préalable ≠ garantie d'aval
  - CC a censuré 46 lois depuis 1959, notamment révisions touchant « principes inhérents forme républicaine »
  - Feuille-de-route reconnaît ce risque (ligne 66) mais propose « consultation » comme parade
  - Consultation préalable est facultative (art. 61 al.2), pas obligatoire
  - Même favorable, CC peut censurer post-vote (si contexte politique change)
- **Risque:** Mobilisation massive pour référendum RIC (6-12 mois, 50 M€), puis CC censure en 2027 = débâcle électorale
- **Correction proposée:** Ajouter clause : « Si CC émet réserves en consultation préalable, débat parlementaire sur reformulation obligatoire avant référendum ». Ou accepter le risque explicitement.
- **Gravité:** BLOQUANT

### BLOQUANT 4 : Fusion aides art.40 : vérification « fortement recommandée » insuffisante
- **Correction appliquée (n°8):** « Garantie montant minimum jamais < allocation + logement actuels, débat citoyen préalable »
- **Le problème reste:** 
  - Conseil constitutionnel (avis n°2001-448 DC) exige compensation mathématique ligne par ligne
  - Feuille-de-route dit « à fixer par débat citoyen » = report décision aux citoyens, pas engagement chiffré
  - Si débat citoyen fixe montant à 1100€ (juste compensation RSA+logement 2026), et inflation +5% avant 2028, fusion risque non-compensation
  - CC censure si montants ne s'additionnent pas à chaque étape
- **Risque:** Loi votée An II, CC la censure début 2028 = élection bloquée ou débâcle politique
- **Correction proposée:** « Chiffrage précis AVANT débat citoyen (simulation financière État publiée d'abord). Garantie : montant fusionné indexé automatiquement chaque année sur inflation. Consultation CC OBLIGATOIRE avant vote parlementaire (pas « fortement recommandée »).
- **Gravité:** BLOQUANT

---

## Failles NOUVELLES introduites par les corrections

### SÉRIEUX 5 : Vote blanc 18 mois délai : crée vacance de légitimité
- **Risque introduit par correction n°4:** « Délai minimum 18 mois entre deux renouvellements »
- **Problème:** Chronologie
  - Élection 1 décembre 2026 : blanc wins, renouvellement lancé
  - Renouvellement 90 jours = 30 mars 2027
  - Prochain scrutin autorisé au plus tôt 30 septembre 2028 (18 mois + 90j)
  - Gouvernement provisoire 18 mois = vacance de légitimité renforcée
- **Comparaison Autriche/Suisse:** Données disent « probabilité renouvellement < 3% » mais sur quelle population ? Si probabilité calculée sur vote blanc ≤ 10%, elle s'écroule si seuil réel (blanc > 50% participation) s'abaisse
- **Correction proposée:** Réduire délai minimum à 12 mois ou ajouter seuil plus exigeant (blanc > 60% participation OU > plus grand parti + 15 points).
- **Gravité:** SÉRIEUX

### SÉRIEUX 6 : Blockchain 200-300 M€ : sous-estimation budgétaire chronique
- **Correction appliquée (n°12):** « Coûts réalistes : 200-300 M€ sur 5 ans »
- **Le problème reste:**
  - Estonie X-Road : ~200 M€ sur 20 ans (10 M€/an) pour 1,3M citoyens
  - France : 70M citoyens = 540x plus d'infrastructure
  - Ajout blockchain (immutabilité, audit annuel, hébergement 100% ER certifiées) = multiplier coût de 2-3x
  - Chiffre réaliste probable : 1-2 Md€ sur 5 ans (200-400 M€/an), pas 40-60 M€/an
- **Risque:** Loi votée avec devis 200-300 M€, réalité 1 Md€ = audit comptes publiques 2027-28 découvre écart = crise gouvernementale
- **Correction proposée:** « Coûts estimés 200-300 M€ AN I (pilote CAF), escalade probable 500 M€-1 Md€ An II (déploiement national). Audit énergétique + coûts infrastructure France AVANT vote parlement An I. »
- **Gravité:** SÉRIEUX

### SÉRIEUX 7 : Fusion aides commission 100j : délai non-réaliste
- **Correction appliquée (n°8):** « Création commission consultative État/régions/CNAF pour audit complet Jour 100 »
- **Le problème reste:**
  - Audit complet doublons aides = examen 800M€ CAF + 200M€ régions + 100M€ allocations parentales
  - Consultations obligatoires : régions (quorums régionaux), syndicats (risque grève), CNIL (données)
  - 100 jours = 14 semaines pour audit + consensus = impossible
  - Délai réaliste : 6-9 mois minimum
- **Risque:** Commission accouche rapport inachevé, debat citoyen lancé sur données obsolètes, vote An II sur fondations fragiles = CC censure
- **Correction proposée:** « Commission d'audit : Jour 100 création, remise rapport intermédiaire Jour 180, audit complet An II Q1 ». Ou repousser débat citoyen à An II Q2.
- **Gravité:** SÉRIEUX

### SÉRIEUX 8 : Faille 10 juriste (Prix plancher agricole) : notification Commission UE pas intégrée au calendrier
- **Correction appliquée (n°15):** « Contrats filière... Notification Commission UE AVANT vote »
- **Le problème reste:** Délai notification + consultation Commission = 3-6 mois
  - Feuille-de-route tableau (ligne 123) classe « Contrats filière : An I-II »
  - MAIS chronologie non-clarifiée : si notification octobre 2027, avis Commission janvier 2028, vote février = toujours An II Q1
  - Si Commission soulève objections = renégociation requise = peut glisser à An II Q3
- **Risque:** Calendrier optimiste masque dépendance politique européenne
- **Correction proposée:** Ajouter note tableau : « Contrats agricole : notification Commission 3-6 mois avant vote anticipé ». Ou accepter risque d'ajournement 2028.
- **Gravité:** SÉRIEUX

### SÉRIEUX 9 : X-Road « souveraineté infrastructure » sans mention résilience sécurité
- **Correction appliquée (n°10):** « Infrastructure locale France, pas cloud US »
- **Le problème reste:**
  - API chiffré hébergé France = souveraineté lieu, pas sécurité architecture
  - X-Road centralise données santé + impôts + emploi = point unique de défaillance
  - Si serveur X-Road attaqué = tous les services publics paralysés simultanément
  - Estonie a connu incidents (2007 cyber-attaque, 2013 Snowden révélations)
  - Aucune mention redondance, backup, résilience
- **Risque:** Attaque DDoS ou compromission X-Road = paralysie totale administration 2027-2028 = crise gouvernementale
- **Correction proposée:** Ajouter : « Infrastructure décentralisée avec cache local (zero latency) + backup géographiquement séparé ». Ou reconnaître risque dans fiche axe4-C2.
- **Gravité:** SÉRIEUX

---

## Failles mineures : flous logiques restants

### MINEUR 10 : RIC exclusions non-clarifiées
- **Manquement:** Fiche axe1-I1 ne mentionne pas exclusions (Constitution, impôts nationaux, accords UE)
- **Risque:** RIC lancé pour sortie UE = débat constitutionnel sans fin
- **Correction:** Ajouter ligne fiche : « Exclusions : Constitution, engagements internationaux UE/OTAN, impôts nationaux (débat Parlement d'abord) ».
- **Gravité:** MINEUR

### MINEUR 11 : Langage clair : norme de remplacement après abandon CECRL non-spécifiée
- **Correction appliquée (n°2):** « Abandon CECRL A2, référence guide officiel »
- **Le problème:** « Guide officiel » c'est lequel ? SNCF ? Urssaf ? Agence numérique ?
  - Circulaire jour 1 dit « recommandant simplification » (non-contraignant)
  - Loi 100j dit « obligation graduelle » mais sur quelle métrique ?
- **Risque:** Administrations réclament clarification norme = délai 6-12 mois supplémentaires avant applicabilité
- **Correction:** Pré-désigner guide officiel avant circulaire Jour 1 (ex: « Guide SNCF simplicité 2020 »).
- **Gravité:** MINEUR

### MINEUR 12 : Fusion aides : date de référence allocation + logement pas spécifiée
- **Manquement:** Ligne 47 dit « montant minimum = JAMAIS < allocation + logement d'aujourd'hui »
- **Quel « aujourd'hui » ?** Juin 2026 ? Septembre 2026 (décret fusion) ?
- **Risque:** Si allocation logement baisse avant septembre 2026 (ajustement année n), montant « minimum » change = litige art. 40
- **Correction:** « Date de référence : 1er juillet 2026. Montant fusionné indexé annuellement sur inflation (INSEE) ».
- **Gravité:** MINEUR

### MINEUR 13 : Contrats agricole compensation ménages fragiles non-intégrée
- **Manquement:** Correction n°15 reformule prix plancher en contrats filière, mais omet compensation fiscale ménages < 2000€/mois (rapport opposants recommandation n°2)
- **Risque:** Fiche axe4-B2 reste muette sur redistribution, laisse pour débat citoyen = mesure présente risque électoral (pain +2 cts = populaire / inflation = crise politique)
- **Correction:** Ajouter fiche axe4-B2 : « Impact consommateur : pain +2 cts, compensé par allocation spécifique pour ménages < 2000€/mois (débat citoyen sur montant : 20-50€/an proposé) ».
- **Gravité:** MINEUR

### MINEUR 14 : IA débat citoyen : souveraineté technologique non-explicite
- **Manquement:** Ligne 28 dit « Plateforme sécurisée » pour débat, n'explicite pas le modèle IA (Mistral/Llama/Claude/Opensource)
- **Risque:** Rapport opposants (gauche radicale) dénonce « GAFAM décident du consensus ». Feuille-de-route mute.
- **Correction:** Ajouter fiche axe4-C4 : « Infrastructure France (Inria/Mistral/Llama open-weights), audit CNIL annuel rendu public. Pas de cloud US. »
- **Gravité:** MINEUR

---

## Failles COSMÉTIQUES : appliquées partiellement

### COSMÉTIQUE 15 : Lisibilité acronymes : toujours présents
- **Correction appliquée (n°18):** « Suppression des tirets longs, remplacés par virgules et deux-points »
- **Manquement:** Acronymes juridiques restent : art. 89, art. 34, TFUE, RIP, art. 40, etc.
- **Impact:** Pour citoyen sans formation juridique, document reste impénétrable
- **Note:** Feuille-de-route n'est pas document citoyen, c'est feuille de route politique. Peut être acceptable.
- **Gravité:** COSMÉTIQUE (hors scope feuille-de-route pour experts, mais pose problème communication publique)

---

## Résumé des corrections qui TIENNENT

Corrections appliquées CORRECTEMENT (au-delà du cosmétique) :

1. ✓ RIC art.89 -> art.11 (BLOQUANT juriste faille 1) : Révision constitutionnelle reconnue
2. ✓ Vote blanc décret -> loi électorale (BLOQUANT juriste faille 2) : Véhicule correct
3. ✓ Art.49.3 révision constitutionnelle + nouveau mécanisme (BLOQUANT juriste faille 3) : Complet
4. ✓ Silence vaut accord : exclusions urbanisme + domaines non-financiers (RISQUÉ juriste faille 5) : Clair
5. ✓ Chat Control note -> circulaire interministérielle (RISQUÉ juriste faille 6) : Procédure correcte
6. ✓ Prix plancher -> contrats filière + subvention (BLOQUANT UE juriste faille 10) : Majeur
7. ✓ Fusion aides reséquençage An II (RISQUÉ juriste faille 4) : Accepte délai
8. ✓ Blockchain Ethereum PoS + coûts 200-300 M€ (COSMÉTIQUE juriste faille 9) : Technologie spécifiée
9. ✓ Langage clair circulaire + loi (RISQUÉ juriste faille 7) : Abandon CECRL

Corrections partiellement appliquées (restent fragiles) : 1, 2, 3, 4, 5, 6, 7, 9.

---

## Synthèse : Points critiques à adresser avant implémentation

| Point | Catégorie | Urgence | Action |
|-------|-----------|---------|--------|
| Vote blanc 100j délai court | BLOQUANT | IMMÉDIATE | Repousser horizon 150j minimum ou accepter retard An I Q1 |
| RIC double majorité ambiguë | BLOQUANT | IMMÉDIATE | Clarifier articulation « majorité 50% OU plafond 2 » (AND vs OR) |
| RIC CC censure possible | BLOQUANT | IMMÉDIATE | Ajouter clause « reformulation parlementaire si CC émet réserves » |
| Fusion aides art.40 vérification | BLOQUANT | IMMÉDIATE | Rendre consultation CC OBLIGATOIRE, pas « recommandée » |
| Vote blanc 18 mois vacance | SÉRIEUX | HAUTE | Réduire délai à 12 mois OU augmenter seuil blanc |
| Blockchain 200-300 M€ sous-estimé | SÉRIEUX | HAUTE | Réviser devis 500M€-1Md€ An II, audit avant vote |
| Commission audit 100j | SÉRIEUX | HAUTE | Repousser audit An II Q1 (6-9 mois réaliste) |
| Contrats agricole notification UE | SÉRIEUX | MOYENNE | Intégrer délai 3-6 mois au calendrier tableau |
| X-Road résilience | SÉRIEUX | MOYENNE | Ajouter clause redondance/backup géographique |
| RIC exclusions explicites | MINEUR | MOYENNE | Ajouter fiche axe1-I1 clause « exclusions : Const., traités, impôts » |
| Langage clair norme guide | MINEUR | BASSE | Pré-désigner guide officiel (ex: SNCF) avant Jour 1 |
| Fusion aides date référence | MINEUR | BASSE | Fixer date référence 1er juillet 2026 + indexation inflation |
| Agricole compensation ménages | MINEUR | BASSE | Ajouter fiche axe4-B2 allocation compensation 20-50€/an |
| IA débat souveraineté tech | MINEUR | BASSE | Ajouter fiche axe4-C4 « Infrastructure France, pas US » |

---

## Conclusion

Les corrections du round 1 TIENNENT sur les obstacles constitutionnels majeurs (RIC, vote blanc, 49.3, art.40, prix agricole). MAIS 4 bloquants restent non-résolus (délai vote blanc, ambiguïté RIC, risque CC, art.40 vérification insuffisante) et 5 sérieux ont été INTRODUITS par les corrections elles-mêmes (vacance 18 mois, blockchain sous-budgétée, commission 100j impossible, etc.).

**Feuille-de-route reste défendable face à opposition juridique / économique si ces 4 bloquants sont adressés.** Sinon, risque 2-3 censures CC (RIC, vote blanc, fusion aides) entre 2027-2029 = débâcle électorale et crise institutionnelle.

Les failles de lisibilité restent (acronymes, structure inchangée pour citoyens), mais hors scope de cette feuille-de-route (document politique, non citoyen-friendly).
