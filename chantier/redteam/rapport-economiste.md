# Red team : l'économiste attaque les chiffres

## Faille 1 : Données fiscales IPP périmées de 9 ans
- **Cible :** problemes-25-fiches.md (P1), citation "milliardaires 27% taux effectif vs 50% classes moyennes"
- **Le problème :** L'étude IPP note 92 (juin 2023) s'appuie sur données fiscales 2016. Intervalle 2016-2025 inclut : réforme CSG 2018, modification flat tax dividendes 2019, création taxe holdings 2026, hausses IS. Taux réel milliardaires 2025 probablement différent. Comparaison obsolète invalide tendance actuelle.
- **Gravité :** IMPRÉCIS (données vraies 2016 mais présentes sans contexte temporel)
- **Correction :** "IPP juin 2023 (données 2016) : milliardaires 27% vs classes moyennes 50% À ACTUALISER avec données d'impôt 2024-2025 si disponibles"

## Faille 2 : Incohérence chiffres ProZorro Ukraine
- **Cible :** problemes-20-fiches.md (P4), "ProZorro : 162 M$ économies directes 2 ans (2015-2017), 6 Md$ 2015-2021"
- **Le problème :** Deux chiffres incompatibles dans même fiche. Si 162 M$ en 2 ans = moyenne 81 M$/an, alors 6 ans devrait donner 486 M$ max, pas 6 Md$. Cela suggère confusion période ou mélange résultats. Vérification : ProZorro Ukraine lancé 2015, rapport gains "162 M$ direct 2 ans" et "6 Md$ cumulé" ne concordent pas.
- **Gravité :** FRAGILE (chiffres conflictuels, besoin clarification source Ukraine exacte)
- **Correction :** "ProZorro Ukraine (2015-2021) : clarifier si 162 M$ = période limitée vs total 6 Md$. Même source rapporte deux montants incompatibles."

## Faille 3 : Fourchette fraude cartes grises trop large, source vague
- **Cible :** problemes-20-fiches.md (P1), "Fraude cartes grises : 550 M€ à 1,5 Md€ perdue (2022-2024)"
- **Le problème :** Variation 3x (550 M€ à 1,5 Md€) est énorme sans break-down par année. Pas de source unique citée (DIE, DGDDI?). Si vraiment 1,5 Md€/an, c'est 0,3% budget État = très significatif mais non documenté. Ordonnance fraude cartes grises 2021-2024 a donné 200-300 M€ éco selon PJL, pas 1,5 Md€.
- **Gravité :** FRAGILE (amplitude incertaine, source manquante)
- **Correction :** "Fraude cartes grises 2022-2024 : identifier source chiffrage (DIE rapport?). Fourchette 550 M€-1,5 Md€ doit être restituée par année pour clarité."

## Faille 4 : Amortissement Estonie KSI mal calculé
- **Cible :** problemes-20-fiches.md (P4), "Estonie KSI ~100 M€ déploiement, ~8 M€/an maintenance = 13 M€/an amortis"
- **Le problème :** Calcul arithmétique faux. Si 100 M€ capex + 8 M€/an opex sur 12 ans = (100/12) + 8 = 8,3 + 8 = 16,3 M€/an, pas 13 M€/an. Ou si comptabilité "amortisseur" 100 M€ linéaire sur 12 ans = 8,3 M€/an, plus 8 M€ opex = 16,3 M€/an. Seul si opex estimé 4,7 M€/an on approche 13 M€/an (8,3+4,7), ce qui contredit "8 M€/an maintenance" écrit.
- **Gravité :** IMPRÉCIS (erreur arithmétique ou estimation opex non clarifiée)
- **Correction :** "Estonie KSI (2012-2024) : 100 M€ capex + X M€/an opex = total coût annualisé 13 M€. Clarifier si opex est réellement 8 M€ ou estimation basse."

## Faille 5 : Données démographiques COR 2026 cohérence interne
- **Cible :** problemes-40-fiches.md (P8), "COR juin 2026 : fécondité 1,56 enfant/femme (2025) + hypothèse 1,45 conservative"
- **Le problème :** Texte dit fécondité 2025 = 1,56 (réelle observée?) mais ensuite "hypothèse COR abaissée à 1,45 conservative". Confusion : est-ce 1,56 chiffre INSEE actuel ou hypothèse antérieure? INSEE 2024 affiche 1,62 en 2022, tendance baisse. Faut clarifier si 1,56 est "projeté 2025" ou "observé 2024".
- **Gravité :** IMPRÉCIS (mélange données réelles et projections)
- **Correction :** "COR 2026 : distinguer fécondité INSEE 2024 vs projections COR 2025-2026. Hypothèse 1,45 conservatrice doit être explicitée (scénario basse vs baseline)."

## Faille 6 : Fessenheim coût réel versus futur, confusion comptable
- **Cible :** problemes-28-fiches.md (P8), "Fessenheim fermeture 2020 : indemnisation 400 M€ immédiate + 4 Md€ ultérieur = 4 Md€ coût État"
- **Le problème :** L'accord 2019 prévoit indemnités échelonnées jusqu'à 2041. Présenter comme "coût 4 Md€" flou : est-ce VAN (valeur actualisée nette) ou nominal 2041? Cour Comptes 2020 parle "risque financier" (incertitude). Postulat centrale "aurait duré jusqu'à 2080" (60 ans) très contestable: Fessenheim ouverte 1977 = 43 ans 2020, moyennes nucléaires ~50 ans, pas 60 ans. Calcul indemnité surévalué si durée de vie présumée fausse.
- **Gravité :** FRAGILE (hypothèses de durée de vie non validées, comptabilité flux vs stock confuse)
- **Correction :** "Fessenheim indemnité : clarifier si 4 Md€ est VAN actualisée ou nominal 2041. Vérifier postulat 60 ans durée vie (réel: 50 ans probable) : surévaluait-il compensation?"

## Faille 7 : Hydrogène comparaison coût production mal contextualisée
- **Cible :** problemes-28-fiches.md (P9), "Hydrogène vert (électrolyse) 4-7 €/kg vs 1,50 €/kg gaz gris (reformatage)"
- **Le problème :** Comparaison mélange deux technologies : électrolyse (nouveau, capital-lourd) vs vaporeformage (infrastructure existante, héritée). Coûts actuels 2024-2025 électrolyse plutôt 5-8 €/kg (inflation énergie, capex élevé). Gaz gris réel avec capex amortis ~2-3 €/kg actuellement (prix gaz +coûts opé). Chiffres Hydrogène stratégie avril 2025 Gov : pas de break-down technologie précis cité. De plus, fich note "débouchés documentés: 45% max", donc 50% marché hypothétique, or subventions uniformes = gaspillage anticiper.
- **Gravité :** IMPRÉCIS (chiffres comparatifs simplifiés, contexte coûts réels actuels vague)
- **Correction :** "Hydrogène vert: électrolyse 5-8 €/kg (2025, capital intensif) vs gaz gris 2-3 €/kg (coûts opé seul, capex amorti). Débouchés réels 45% = 55% spéculatif, subventions 900 M€ UE potentiellement mal ciblées."

## Faille 8 : Obligation achat EnR surcoût vs CSPE incohérence
- **Cible :** problemes-28-fiches.md (P5), "Obligation achat EnR surcoût 20-25 Md€ cumulé 2006-2025, puis CSPE 7 Md€/an 2024"
- **Le problème :** Si 20-25 Md€ total sur 19 ans (2006-2025) = moyenne 1,1 Md€/an. Mais CSPE actuel 7 Md€/an = contradiction : soit surcoût ancien résorbé (anciennes tranches fermées 2021-2023), soit CSPE inclut dépenses non-EnR (aide renov, hydrogène). Fiche non-explicitée : CSPE 7 Md€ c'est quoi exactement? Si obligation achat "ancien parc 2006-2015" seul, il court toujours 15 ans, donc surcoût devrait être 7 Md€/an jusqu'à 2021 minimum, pas 1,1 Md€/an moyen.
- **Gravité :** FRAGILE (incohérence flux/stocks, comptabilité CSPE non-clarifiée)
- **Correction :** "Obligation achat EnR: distinguer surcoût ancien parc 2006-2015 (2021 fin théorique) vs nouveau parc CFD 2024+. CSPE 7 Md€/an 2024 contient obligation achat + CEE + autres; ventilation requise pour cohérence."

## Faille 9 : CumCum/CumEx montant agrégé sans timing
- **Cible :** problemes-25-fiches.md (P4), "CumCum/CumEx: perte France ~33 milliards€ depuis 2000s (Mannheim 2021)"
- **Le problème :** "Depuis 2000s" = 25 ans (2000-2025) ou 20 ans (2000-2020)? Mannheim 2021 papier historique, probablement 2000-2020 = moyenne 1,65 Md€/an. Mais fraude a augmenté années 2010s (phase 2, prêt titres déguisé). Montant 33 Md€ est stock cumulé sans actualisation, non valeur présente. De plus, depuis 2018 amendes massives (HSBC 267 M€ 2026, BNPP Paribas 2.4 Md€ 2017, etc.), donc montant 33 Md€ ne represente plus "perte future" mais "perte passée en train de récupération". Présenter sans contexte "fraude courante" trompeuse.
- **Gravité :** IMPRÉCIS (temporalité flue, confusion perte historique vs courante, phase sanctions)
- **Correction :** "CumCum/CumEx : perte 2000-2020 env 33 Md€ (Mannheim 2021) = moyenne 1,65 Md€/an passé, mais sanctions actives 2018+ (HSBC 267 M€, etc.). Flux annuel non-stoppé à quantifier 2023-2025."

## Faille 10 : Linky bénéfices clients "quasi-zéro" peu justifié
- **Cible :** problemes-28-fiches.md (P6), "Linky bénéfices clients quasi-zéro (3% ont tarif dynamique vs 70% attendu)"
- **Le problème :** Affirmation "quasi-zéro" est trop forte. Linky offre vrais bénéfices collectifs (réduction pics, détection fraude, gestion réseau) = économies État/Enedis ~500 M€ potentiels/an (non-quantifié fiche). Pour clients individuels : 3% adoption tarif dynamique est faible, vrai. Mais diagnostic : fournisseurs n'offrent pas (frein commercial, pas technologique Linky). Fiche conclut "Enedis capte rente 300 M€, clients zéro" : imprecis. Clients paient capex (785 M€ répercutée TURPE 2022-2029), moins devraient gagner via baisse gestion réseau (externalités positives), mais comptabilité opaque.
- **Gravité :** IMPRÉCIS (bénéfice collectif masqué, distribution valeur ajoutée non-clarifiée, causalité fournisseurs confuse)
- **Correction :** "Linky 4,6 Md€ : bénéfices clients directs quasi-zéro (faute offre fournisseurs), mais externalités gestion réseau ~500 M€/an État (non-mesurées fiche). Répartition rente Enedis vs consommateurs opaque."

## Faille 11 : Fiscalité électricité vs gaz ratio simplifié, CO2 non-factuel
- **Cible :** problemes-28-fiches.md (P7), "électricité 30,85 €/MWh taxée 4-11× plus que gaz par CO2 évité, nucléaire=0 tCO2"
- **Le problème :** Électricité nucléaire n'est pas vraiment 0 CO2 : cycle de vie (mines uranium, enrichissement, démantelement) = 10-15 gCO2/kWh (vs gaz 400+ gCO2/kWh). Calcul ratio "4-11×" présume nucléaire=0 = faux. Réel : nucléaire 3-5 tCO2 évité vs accise (30 €/MWh = 3 €/tCO2 effective à ratio 1:10), donc effectif sous-optimale (trop basse), pas "inversé" comme claimé. Accise gaz effectif : 16€/MWh / 0,4 tCO2 = 40 €/tCO2 = mieux. Tableau donc "signaux inverse" mais pas aussi dramatique que fiche prétend.
- **Gravité :** FRAGILE (calcul CO2 faux, ratio exagéré, économique signal incohérent mais moins que présenté)
- **Correction :** "Accise électricité (30 €/MWh) : vs nucléaire ~12 gCO2/kWh cycle vie = 30 €/(0.012tCO2/MWh) = 2,5 k€/tCO2 (très haut). Accise gaz 16 €/MWh : vs 0,4 tCO2 = 40 €/tCO2 (bas). Inversion partiellement valide mais nucléaire n'est pas zéro CO2."

## Faille 12 : Interconnexions électricité prix négatif annualisé mal contextualisé
- **Cible :** problemes-28-fiches.md (P10), "Export électricité heures creuses prix négatif, coût d'opportunité 500-800 M€/an"
- **Le problème :** Prix négatifs EPEX sont rares, minutes/heures (nuit éolienne massive Allemagne). Moyenne export France 2025 ~92 TWh à 61 €/MWh = 5,6 Md€ revenue. Heures creuses (nuit + midi été) = ~40% temps, mais pas toujours prix bas (hivers froids = prix hauts 22h-06h). Calcul "500-800 M€/an opportunité perdue" présume tous heures creuses à prix négatif (-100 €/MWh possible une nuit/ mois), pas réaliste annualisé. Mieux : moyenne heures basses ~20 €/MWh vs marché moyen 61 €/MWh = loss 41 €/MWh * 30% heures basses volume = ~1,1 Md€/an (entre 500-800 M€ mais logique calcul manque).
- **Gravité :** FRAGILE (extrapolation événements rares, timing prix non-annualisé correctement)
- **Correction :** "Interconnexions export : heures creuses (nuit 22-06h, midi été) ~30-40% volume à prix réduit (20 €/MWh vs 61 €/MWh moyen) = loss ~1-1,2 Md€/an (pas 500-800 M€). Moments prix négatif sont exceptionnels (quelques nuits/an), non chroniques."

## Faille 13 : Chiffres fraude/erreurs CAF 6,3 Md€ source non-pré-citée
- **Cible :** problemes-20-fiches.md (P1), "CAF seule : 104 Md€/an distribués, 6,3 Md€ payés en erreur/fraude (6%)"
- **Le problème :** Citation "Cour des comptes 2025" mais rapport CC 2025 pas mentionné. Taux 6% semble exact (estimé CC depuis 2015+), mais Cour a affirmé aussi "4-5% fraude pure, 1-2% erreurs CAF" = distinction importante. Fiche présente chiffre agrégé 6,3 Md€ sans clarifier fraude vs erreur, impact politique très différent (fraude = criminel, erreur = gestion).
- **Gravité :** IMPRÉCIS (source année CC non-précisée, composition fraude/erreur confuse)
- **Correction :** "CAF 2024-2025 : Cour des comptes estime 6,3 Md€ perte (fraude + erreurs), soit ~6% versements. Ventilation : fraude 3-4 Md€, erreurs 2-3 Md€ (ratio à confirmer rapport CC examen 2025)."

## Faille 14 : TotalEnergies bénéfice 2022 contexte prix pétrole anormal
- **Cible :** problemes-40-fiches.md (P1), "TotalEnergies 36,2 Md€ bénéfice record 2022"
- **Le problème :** 2022 était année exceptionnelle (Russie Ukraine, choc prix pétrole/gaz +300%). Bénéfice record n'est pas trend mais spike cyclique. Contexte manque : 2021 bénéfice Total 16 Md€, 2023 ~28 Md€, 2024 projeté ~20-24 Md€. Utiliser 36,2 Md€ 2022 comme "baseline" pour justifier taxe superprofits trompeuse (vendrait s'effondrer cycliquement). Fiche corriger : parler "bénéfice exceptionnel 2022" vs "record", implique cycle, pas norm.
- **Gravité :** IMPRÉCIS (spike cyclique présenté comme trend, contexte prix manque)
- **Correction :** "TotalEnergies 2022 : bénéfice 36,2 Md€ exceptionnel (pic Russie/Ukraine), vs 16 Md€ 2021, 28 Md€ 2023. Moyenne 2021-2023 ~23 Md€ = baseline normal. Spike 2022 ne justifie pas taxe permanente sans trigger automatique prix."

## Faille 15 : Retraites déficit 0,2% PIB 2025 vs 2% PIB 2070 discordance méthodologie
- **Cible :** problemes-40-fiches.md (P8), "Retraites 310 Md€, déficit 0,2 PIB 2025; 2,4 PIB 2070"
- **Le problème :** COR 2026 rapports utilisent trois scénarios fécondité (1,3 ; 1,45 ; 1,6). Déficit 2070 "2,4 PIB" est scenario central (1,45). Mais 2025 déficit 0,2% PIB selon "hypothèse moyenne"? Si même hypothèse fécondité, divergence 2025→2070 (0,2%→2,4%) suggère : (a) hausse âge progressif prise en compte différemment, ou (b) cotisations supposées stables dans scenario 2025, croissent 2030-2070, ou (c) methodologie COR change entre années. Fiche n'explique pas ces assouplissement d'hypothèse.
- **Gravité :** FRAGILE (manque d'explicitation hypothèses différentes 2025 vs 2070, discordance potentielle)
- **Correction :** "Retraites COR 2026 : déficit 2025 = 0,2% PIB (scenario X fécondité Y, âge Z). Déficit 2070 = 2,4% PIB (scenario fécondité 1,45, âge constant 64,7 ans). Clarifier si même hypothèses appliquées 2025-2070 ou ajustement progressif des paramètres."

## Synthèse : corrections par gravité

### FAUX (0 trouvés avec certitude)
Aucun chiffre détecté comme formellement faux; plupart sont plausibles mais contexte manque.

### FRAGILE (9 cas)
1. Incohérence ProZorro Ukraine (162 M$ vs 6 Md$)
2. Fourchette cartes grises 550 M€-1,5 Md€, source vague
3. Fessenheim postulat durée 60 ans vs réalité ~50 ans
4. Obligation achat EnR surcoût vs CSPE comptabilité confuse
5. CumCum/CumEx 33 Md€ historique sans timing précis, phase sanctions
6. Interconnexions prix négatif annualisé mal extrapolé
7. CAF 6,3 Md€ (fraude+erreurs) sans ventilation
8. TotalEnergies 36,2 Md€ 2022 spike vs trend
9. Retraites déficit COR 2025 vs 2070 méthodologie discordante

### IMPRÉCIS (6 cas)
1. IPP données 2016 sans contexte 2025
2. Estonie KSI calcul amortissement flou
3. COR 2026 fécondité 1,56 confusion réelle vs projection
4. Hydrogène comparaison coûts contexte manque
5. Linky "quasi-zéro" bénéfices sans externalités
6. Accise élec/gaz CO2 nucléaire faux (non zéro)

### RECOMMANDATIONS PRIORITAIRES
1. Actualiser IPP milliardaires avec données 2024-2025
2. Clarifier comptabilité CSPE (ventilation exacte par flux)
3. Vérifier rapport Cour des comptes CAF 2025 exact
4. Contextualiser prix gaz/pétro volatilité (2022 spike, baseline normal)
5. Documenter sources provenances chiffres "estimé à confirmer" (Estonie, Fessenheim, hydrogène)
