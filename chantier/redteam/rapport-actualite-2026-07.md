# Rapport red team : audit d'actualite juillet 2026

> Genere par audit multi-agents (88 onglets challenges + verification independante). Chaque entree confirmee par un second agent sceptique avant d'atterrir ici.


**253 incoherences confirmees** sur 318 candidates brutes, 88 fichiers audites.


## chantier/axe-1-institutions-fiches.md

### I7 -- Budget participatif national

- **Citation en cause :** 🇵🇹 Portugal, budget participatif **national**

- **Probleme :** La fiche cite Portugal comme un exemple actuel de budget participatif national qui « existe déjà ». Or, le programme de budget participatif national du Portugal (Orçamento Participativo) a fonctionné en 2017 et 2018, puis a été arrêté. Bien que tout était prêt pour 2020, la crise sanitaire a mis fin au programme national. En 2026, ce dispositif n'est plus actif.

- **Verification independante :** Le programme national de budget participatif au Portugal a effectivement fonctionné en 2017-2018, puis a été suspendu en 2019 avant même la COVID-19 en 2020. En 2026, ce dispositif national n'est pas actif. La fiche cite ce programme comme exemple « existant déjà » ce qui est factuellement inexact. Seuls les budgets participatifs locaux/municipaux et les programmes jeunesse existent actuellement au Portugal.



## chantier/axe-2-services-publics-fiches.md

### S2 -- Forfait transport national unique

- **Citation en cause :** 🇦🇹 Autriche, **KlimaTicket** ~3 €/jour, tous transports publics du pays

- **Probleme :** Le prix du KlimaTicket cité comme ~3€/jour n'est plus actuel en 2026. Le KlimaTicket Ö Classic coûte €1,400/an au 1er janvier 2026, soit environ €3.83/jour (+27% par rapport au ~3€/jour cité). La fiche utilise ce dispositif comme modèle de référence en citant un prix qui n'est plus à jour.

- **Correction proposee :** Mettre à jour le prix à ~€3.80/jour ou €1,400/an pour le KlimaTicket autrichien en 2026.

- **Verification independante :** Le KlimaTicket Ö Classic coûte €1,400/an (€3.83/jour) depuis le 1er janvier 2026, soit +27% par rapport au ~3€/jour cité en ligne 16-19. La fiche utilise ce prix comme benchmark économique pour le programme français. Incoherence factuelle confirmée et chiffres périmés au moment de figer.



## chantier/axe-3-fiscalite-fiches.md

### F2 -- Taxe carbone intégralement redistribuée (dividende citoyen)

- **Citation en cause :** 🇨🇦 Canada, taxe carbone dont le produit est **reversé aux ménages** en dividende ; majorité des foyers y gagnent net.

- **Probleme :** Le Canada a supprimé sa taxe carbone fédérale le 1er avril 2025. Le gouvernement Carney (Premier ministre depuis mars 2025) a annulé à la fois la taxe carbone pour les consommateurs et l'obligation pour les provinces d'avoir un système de tarification du carbone. En juillet 2026, ce dispositif n'existe plus — la fiche cite un exemple disparu depuis 16 mois.

- **Verification independante :** La fiche F2 cite le Canada comme exemple actuel d'une "taxe carbone dont le produit est reversé aux ménages en dividende". Or, ce système de dividende carbone aux ménages (Canada Carbon Rebate) a été aboli le 1er avril 2025 par le gouvernement Carney. En juillet 2026, il n'existe plus depuis 15 mois. L'exemple est devenu historique alors que la fiche le présente au présent, suggérant un système contemporain qui n'est plus en vigueur.



## chantier/axe-4-souverainete-fiches.md

### C1 -- Position officielle contre Chat Control + règle des 20%

- **Citation en cause :** scan généralisé des messages (client-side scanning) qui casse le chiffrement de bout en bout

- **Probleme :** La version de Chat Control 1.0 adoptée le 9-10 juillet 2026 inclut des amendements excluant expressément les communications chiffrées de bout en bout du champ de la dérogation. Les services E2E (WhatsApp, Signal) ne sont donc pas soumis au scan, contrairement à ce que la fiche laisse entendre.

- **Correction proposee :** Mettre à jour la description : Chat Control 1.0 (juillet 2026) exclut le chiffrement de bout en bout ; seuls les services sans E2E sont soumis au scan volontaire.

- **Verification independante :** La fiche C1 (ligne 61) décrit Chat Control 1.0 comme un "scan généralisé qui casse le chiffrement de bout en bout". Or, la version adoptée le 9-10 juillet 2026 inclut un amendement adopté qui exclut formellement les communications chiffrées de bout en bout du champ de la dérogation. WhatsApp, Signal et Telegram sont explicitement exclus; seuls les services sans E2E natif (Gmail, Messenger, Snapchat) sont soumis au scan volontaire. L'affirmation que Chat Control "casse" le chiffrement E2E est donc factuellement inexacte pour la version légalement adoptée. La correction proposée est précise et fidèle aux amendements véritablement ratifiés.



## chantier/axe-5-ecologie-fiches.md

### E2 -- Consigne généralisée des emballages

- **Citation en cause :** Directive UE 2024/2863 (emballages) impose harmonisation minimale

- **Probleme :** La fiche cite 'Directive UE 2024/2863' mais le texte réglementaire exact est le Règlement (UE) 2025/40 (PPWR), pas une directive. Un règlement et une directive sont deux instruments juridiques distincts en droit européen. Le numéro de référence est également incorrect.

- **Verification independante :** Incohérence factuelle confirmée : la fiche cite "Directive UE 2024/2863" mais le texte réglementaire correct est le Règlement (UE) 2025/40 (PPWR). Double erreur : numéro incorrect ET type d'instrument faux (Directive vs Règlement). Vérification WebFetch confirme que 2025/40 est bien le règlement sur les emballages en vigueur.


### E3 -- Énergie citoyenne (coopératives locales)

- **Citation en cause :** Directive RED IV 2023/2001 (énergies renouvelables), marché intérieur UE limite discriminations locales

- **Probleme :** La fiche cite 'Directive RED IV 2023/2001' mais RED IV n'existe pas en 2026. RED IV n'a été que consultée en 2026 avec proposition prévue pour 2027. La directive actuellement applicable est RED III (Directive 2023/2413, adoptée octobre 2023, en vigueur mai 2025 en France). Le numéro '2023/2001' est également inexact.

- **Verification independante :** L'incoherence est CONFIRMEE et VERIFIEE. La fiche cite "Directive RED IV 2023/2001" ce qui cumule deux erreurs factuelles graves : (1) RED IV n'existe pas en 2026, seule RED III (2023/2413) est applicable depuis novembre 2023 ; (2) le numéro 2023/2001 n'existe pas — le numéro correct est 2023/2413. L'IA precedente a correctement identifie une incoherence factuelle majeure pour un document de programme politique.


### E5 -- Eau : réutilisation et anti-fuites

- **Citation en cause :** Directive UE 2023/2037 (eaux réutilisées) définit normes qualité, critères élligibilité

- **Probleme :** La fiche cite 'Directive UE 2023/2037' comme réglementant la réutilisation des eaux usées, mais ce numéro est inexact. La directive correcte sur le traitement des eaux urbaines résiduaires est la Directive (UE) 2024/3019 (novembre 2024). De plus, la réutilisation des eaux usées est réglementée par le Règlement (UE) 2020/741, pas une directive 2023/2037. La Directive 2024/3019 concerne le traitement des eaux urbaines, non leur réutilisation.

- **Verification independante :** La Directive UE 2023/2037 n'existe pas. La réutilisation des eaux usées est réglementée par le Règlement (UE) 2020/741 du 25 mai 2020 (applicable depuis 26 juin 2023), qui définit effectivement les normes de qualité et critères d'éligibilité. La Directive 2024/3019 (novembre 2024) concerne le traitement, non la réutilisation. La fiche MaRepublique contient donc une erreur de référence — elle doit substituer "Directive UE 2023/2037" par "Règlement (UE) 2020/741".



## chantier/problemes-1-fiches.md

### P5 -- RIP (Référendum d'Initiative Partagée) jamais abouti

- **Citation en cause :** Deux tentatives abouties techniquement (scrutin organisé) mais rejetées : limite retraite 2023 (~55 % pour la retraite à 60), privatisation de l'eau 2023.

- **Probleme :** Les deux demandes de RIP sur les retraites en 2023 ont été rejetées par le Conseil constitutionnel en avril et mai 2023 AVANT même la mise au vote. Aucun scrutin n'a eu lieu, donc elles n'ont pas « abouti techniquement » et le chiffre « ~55% pour la retraite à 60 » n'existe pas — aucun vote citoyen n'a eu lieu sur ce sujet en 2023.

- **Correction proposee :** Retirer ou reformuler : les deux tentatives de RIP retraite ont échoué en phase constitutionnelle, sans jamais atteindre le stade du scrutin.

- **Verification independante :** Les deux tentatives de RIP retraite 2023 ont été rejetées par le Conseil constitutionnel en avril et mai 2023 AVANT tout scrutin. Aucun scrutin citoyen n'a eu lieu. Le chiffre ~55% n'existe pas. De plus, aucun RIP n'a jamais abouti à un scrutin en 18 ans en France. La fiche confond recevabilité constitutionnelle et organisation effective d'un vote.


### P6 -- Conventions citoyennes ignorées ou diluées

- **Citation en cause :** Gouvernement Macron en reprend ~60 % en substance, mais vide la substance

- **Probleme :** Le taux réel de reprise est bien inférieur : seules 18 des 149 propositions (12%) ont été pleinement adoptées. 78 (53%) ont été partiellement adoptées, et 50 (34%) n'ont pas été reprises. Le chiffre 60% est factuellement inexact ; les analyses post-hoc montrent que 90% des mesures n'ont pas été vraiment implémentées.

- **Correction proposee :** Remplacer ~60% par des chiffres vérifiés : 12% adoption complète, 53% adoption partielle.

- **Verification independante :** Le chiffre ~60% cité dans P6 est factuellement inexact. Bien que Macron ait déclaré reprendre 146/149 propositions, seules ~10% ont réellement été adoptées sans modification majeure (15 mesures). Le reste a subi des dilutions substantielles. Les chiffres réels (10-12% adoption complète, ~53% modifiée, ~34% non reprise) concordent avec l'allégation précédente et contredisent le ~60% du texte actuel. Correction justifiée.


### P6 -- Conventions citoyennes ignorées ou diluées

- **Citation en cause :** ex : 110 km/h réduit à 80 km/h, taxation des 4x4 supprimée

- **Probleme :** Emmanuel Macron a explicitement REJETÉ la mesure 110 km/h en juin 2020, la jugeant trop impopulaire. Aucune réduction à 80 km/h n'a suivi — la mesure a été abandonnée, non pas réduite ou transformée. L'exemple est donc factuellement faux.

- **Correction proposee :** Remplacer par des exemples vérifiés de dilution réelle, ou retirer cet exemple inexact.

- **Verification independante :** L'exemple "110 km/h réduit à 80 km/h" prétend illustrer une "dilution" d'une proposition de la Convention Citoyenne pour le Climat. Or Macron a explicitement REJETÉ cette mesure le 29 juin 2020 (l'une des "trois" propositions rejetées sur 149), sans aucune implémentation partielle. Il n'y a eu aucune réduction à 80 km/h : la mesure a été abandonnée pure et simple. L'exemple confond donc rejet et dilution, ce qui change fondamentalement le sens du problème illustré dans la fiche.



## chantier/problemes-10-fiches.md

### P2 -- Suicides et crises de santé mentale des agriculteurs

- **Citation en cause :** Taux de suicide des agriculteurs de 55 ans et plus trois fois supérieur à la population générale

- **Probleme :** Le taux réel selon les données MSA 2026 et statistiques récentes est 46-73% plus élevé, pas trois fois supérieur. Les statistiques indiquent un risque accru de 46% pour les 15-64 ans et 73% pour les 65+, comparé à la population générale. Le chiffre 'trois fois' s'applique à la comparaison avec les cadres/managers, non avec la population générale.

- **Verification independante :** Vérifié via MSA 2025-2026 et sources officielles. La fiche affirme "trois fois supérieur à la population générale" mais les données réelles montrent 46-77% de surrisque selon la catégorie (15-64 ans: 46%, 55-64 ans: 47%, non-salariés: 56,7%, propriétaires: 77,3%). Le chiffre "trois fois" s'applique uniquement à la comparaison agriculteurs vs cadres/managers, pas population générale. Incoherence confirmée et factuelle.



## chantier/problemes-11-fiches.md

### P8 -- Fuite cerveaux et startups vendues aux États-Unis

- **Citation en cause :** 2024: Figma rachetée Microsoft, Hugging Face rejoint Sequoia US

- **Probleme :** Figma n'a jamais été acquise par Microsoft. Figma a réalisé son IPO en 2025 et reste une entreprise indépendante. Microsoft avait envisagé une offre en 2022 mais n'a jamais concrétisé.

- **Verification independante :** La citation « 2024: Figma rachetée Microsoft » est factuellement incorrecte. Figma n'a jamais été acquise par Microsoft; elle a réalisé son IPO en juillet 2025 et reste indépendante. L'acquisition envisagée (échouée) était par Adobe en 2023, pas Microsoft. Le vérificateur précédent avait raison.



## chantier/problemes-12-fiches.md

### P8 -- Impôts de production élevés (CVAE, CFE) vs compétitivité des PME

- **Citation en cause :** La Cotisation sur la Valeur Ajoutée des Entreprises (CVAE, 1,45 % de la VA pour PME/ETI)

- **Probleme :** Le taux de CVAE cité (1,45 %) n'est pas à jour pour 2026. Le taux effectif maximum de la CVAE en 2025 est de 0,28%, et la CVAE est en suppression progressive jusqu'en 2030. Bien que le taux maximum ait pu atteindre 1,5% en 2020, ce n'est pas le chiffre actuel en juillet 2026.

- **Correction proposee :** Actualiser le taux CVAE pour refléter la réalité 2026 (0,28% en 2025, suppression progressive). Ou préciser qu'il s'agit de données historiques (2020) si la comparaison intentionnelle.

- **Verification independante :** Le taux CVAE cité (1,45%) dans la fiche P8 est obsolète. Le taux réel en juillet 2026 est 0,28%, divisé par 5 par rapport à la citation. Ce taux maximal de 1,5% était valide jusqu'en 2020 ; il a été réduit progressivement: 2021 (0,75%), 2023 (0,375%), 2024-2025 (0,28%). La fiche omet également la suppression progressive programmée jusqu'en 2030 (calendrier: 0,28% 2026-2027, 0,19% 2028, 0,09% 2029, suppression 2030), ce qui est une lacune majeure du contexte fiscal. La critique de l'autre IA est fondée sur des sources gouvernementales vérifiables (loi finances 2025, BOFiP, sites officiels).


### P4-Piste-A -- Danemark - Fraude sociale et contrôle automatisé

- **Citation en cause :** Fraude < 2 %

- **Probleme :** Selon un rapport Amnesty International de novembre 2024, 90% des dossiers flaggés par le système algorithmique danois ne révèlent aucune fraude. Cette fiabilité problématique contredit l'affirmation implicite que le système réduit effectivement la fraude à <2%. Le système produit massivement des faux positifs et génère des problèmes de discrimination.

- **Correction proposee :** Revenir au système danois avec une evaluation critique : noter le taux de faux positifs (90%) et la critique d'Amnesty International plutôt que d'affirmer une réduction de fraude à <2%.

- **Verification independante :** Rapport Amnesty International novembre 2024 confirmé et vérifié. L'algorithme "Model Abroad" du Danemark produit 90% de faux positifs (cas ouverts n'aboutissant pas à une fraude). La fiche ommet cette critique sévère et la réalité des faux positifs en affichant seulement "Fraude < 2%". Cette affirmation est trompeuse car elle ne reflète pas que le système flagge massivement des innocents (90% de mauvaises flaggations selon Amnesty) et crée discrimination+surveillance de masse. Correction justifiée.


### P8-Piste-B -- Suisse - Impôts de production

- **Citation en cause :** CVAE cantonale moyenne ~0,5 %

- **Probleme :** La Suisse n'utilise pas le concept de CVAE (acronyme et régime français). Le système suisse repose sur l'impôt sur le capital des entreprises (variant de 0,001% à 0,5% selon canton) et l'impôt sur les bénéfices. La terminologie 'CVAE cantonale' est erronée et peut induire une confusion entre deux régimes fiscaux distincts.

- **Correction proposee :** Remplacer 'CVAE cantonale' par 'impôt sur le capital cantonale' ou 'impôts de production cantonaux' et préciser la structure réelle suisse.

- **Verification independante :** La fiche P8-Piste-B contient une erreur terminologique avérée. Le terme "CVAE cantonale" n'existe pas en Suisse—CVAE est exclusivement un concept fiscal français. La Suisse applique un impôt sur le capital (0,001% à 0,5% selon canton) et un impôt sur les bénéfices (fédéral + cantonal), pas d'équivalent direct de CVAE. Le taux 0,5% est le plafond maximal, non une moyenne représentative. La correction proposée ("impôt sur le capital cantonale" ou "impôts de production cantonaux") est pertinente, bien que "impôts de production" ne soit pas non plus une catégorie officielle suisse—"impôts cantonaux sur le capital et les bénéfices" serait plus exact.



## chantier/problemes-13-fiches.md

### P1 -- Le test de l'amende : un droit aussi simple qu'une sanction

- **Citation en cause :** Piste A, 🇬🇧 Royaume-Uni (Digital Service Standard GOV.UK) : Depuis 2012, Standard Numérique obligatoire pour tous les services publics

- **Probleme :** Le Digital Service Standard (ou Digital By Default Service Standard) a été lancé formellement en 2013-2014, non en 2012. GOV.UK lui-même a lancé en octobre 2012, mais le standard officiel est venu plus tard (avril 2013 en version bêta, avril 2014 en version complète obligatoire).

- **Verification independante :** Erreur factuelle confirmée. La fiche P1 affirme "Depuis 2012, Standard Numérique obligatoire" mais le Digital By Default Service Standard n'a été publié officiellement qu'en avril 2013 (bêta) et rendu obligatoire qu'en avril 2014. Ce qui a lancé en 2012 est GOV.UK (la plateforme), non le standard. La citation confond donc le lancement de la plateforme avec celui du standard obligatoire, créant une inexactitude chronologique claire. Correction suggérée : "Depuis 2014, Standard Numérique (Digital By Default Service Standard) obligatoire pour tous les services publics" ou "Depuis 2013 (officiellement), Standard Numérique obligatoire..."


### P1 -- Le test de l'amende : un droit aussi simple qu'une sanction

- **Citation en cause :** Piste B, 🇳🇿 Nouvelle-Zélande (Plain Language Act 1988) : Loi obligeant tous les documents officiels à être écrits en langage clair et simple

- **Probleme :** Il n'existe pas de Plain Language Act de Nouvelle-Zélande en 1988. La Nouvelle-Zélande a adopté le Plain Language Act 2022, qui a reçu l'assentiment royal le 21 octobre 2022. Aucune loi de ce type n'existait en 1988.

- **Verification independante :** L'allégation est vérifiée : aucun Plain Language Act de 1988 n'existe en Nouvelle-Zélande. Le Plain Language Act 2022 (reçu royal assent le 21 octobre 2022) est la seule loi de ce type. La fiche cite à tort l'année 1988, qui est factuellement incorrecte de 34 ans. Erreur établie par recherche Web et sources officielles de la législation néo-zélandaise.


### P2 -- Langage clair et FALC obligatoires dans tous les documents officiels

- **Citation en cause :** Piste A, 🇳🇴 Norvège (Plain Language Standard national) : Depuis 1997, chaque ministère doit tester textes avec utilisateurs (incluant analphabètes fonctionnels)

- **Probleme :** Les initiatives systématiques de langage clair en Norvège ont commencé en 2008 avec le projet 'klarspråk'. Avant cela, il n'y a eu que des initiatives éparses depuis les années 1960, pas un standard national depuis 1997. Une loi spécifique sur le plain language a été implémentée le 1er janvier 2022.

- **Verification independante :** La citation contient une imprécision factuelle : elle affirme "Depuis 1997, chaque ministère doit tester textes avec utilisateurs" en Norvège, mais le programme klarspråk (Plain Language Standard gouvernemental systématique) a été lancé en 2008, pas 1997. Avant 2008, il n'existait que des initiatives éparses. L'allégation de correction est donc justifiée : le texte attribue aux années 1997 une obligation gouvernementale centralisée qui n'a été mise en place systématiquement qu'en 2008.


### P9 -- Barrières d'entrée en politique : parrainages, candidature, financement accessibles

- **Citation en cause :** Candidature aux présidentielles : 500 parrainages d'élus (seuil 2017, passé à 500 en 2022)

- **Probleme :** Le seuil de 500 parrainages d'élus a été établi en 1976, pas en 2022. Avant 1976, le seuil était de 100 élus (depuis le début de la Cinquième République), puis il a été augmenté à 500 en 1976 suite au nombre excessif de candidats en 1974. Ce seuil a remained à 500 depuis 1976 et n'a pas changé en 2022.

- **Verification independante :** Le seuil de 500 parrainages d'élus pour les présidentielles a été établi en 1976 (loi organique n° 76-528 du 18 juin 1976), pas en 2022. La phrase "seuil 2017, passé à 500 en 2022" est factuel inexacte et laisse entendre un changement du seuil en 2022 qui n'a pas eu lieu. Le seuil de 500 est inchangé depuis 1976.



## chantier/problemes-14-fiches.md

### P1 -- Délais impossibles pour obtenir un rendez-vous CNI/Passeport en mairie

- **Citation en cause :** Piste A : 🇸🇪 Suède, modèle sans rendez-vous : Guichet unique avec créneaux flottants ou accueil sur place (10-20 min d'attente typique).

- **Probleme :** La Suède ne dispose pas d'un système sans rendez-vous pour les documents d'identité. Selon la police suédoise (Polisen) et les sources officielles, la demande de passeport et carte d'identité requiert obligatoirement une prise de rendez-vous en ligne auprès d'un bureau de police. Il n'existe pas de système 'walk-in' ou 'créneaux flottants' permettant l'accueil direct sans rendez-vous.

- **Verification independante :** La fiche qualifie la Suède de « modèle sans rendez-vous » avec « créneaux flottants ou accueil sur place ». Or, selon les sources officielles de Polisen et Sweden Abroad, le système suédois est entièrement basé sur un rendez-vous obligatoire préalable (booking via Mina sidor). Aucun système walk-in ou files flottantes n'existe pour les documents d'identité suédois. L'allégation initiale est donc confirmée : la fiche contient une affirmation factuellement inexacte.


### P5 -- Actes d'état civil : délais double selon canal

- **Citation en cause :** En mairie : retrait 10-15 jours ouvrables (grandes villes) ou <1 sem. zones rurales.

- **Probleme :** Le retrait d'actes d'état civil au guichet en mairie est immédiat (même jour), pas 10-15 jours ouvrables. Selon service-public.gouv.fr et les mairies, la présentation sur place avec pièce d'identité permet une délivrance immédiate. Les délais de 15 jours s'appliquent aux demandes par courrier ou en ligne (incluant l'acheminement postal), non au retrait direct au guichet.

- **Verification independante :** Erreur factuelle vérifiée : la fiche confond retrait au guichet (immédiat) avec envoi postal (10-15 jours). Sources officielles confirment que la présentation en personne en mairie permet une délivrance immédiate, non 10-15 jours ouvrables.


### P7 -- Légalisation documents : confusion apostille vs légalisation ordinaire

- **Citation en cause :** Piste C : Zéro friction : suppression légalisation dans UE (...) ; Règlement UE 650/2012 (successions UE depuis 2012).

- **Probleme :** Le Règlement UE 650/2012 n'est appliqué 'depuis 2012'. Bien qu'adopté le 4 juillet 2012, son application effective aux successions internationales n'a débuté que le 17 août 2015. C'est une différence de 3 ans avec l'année citée.

- **Verification independante :** Le Règlement UE 650/2012 a été adopté le 4 juillet 2012 mais son application effective aux successions internationales n'a débuté que le 17 août 2015 (3 ans de différence). Le texte de la fiche P7 affirme "(appliquée déjà successions UE depuis 2012)", ce qui confond la date d'adoption avec la date d'application effective. C'est une imprécision factuelle substantielle en matière de droit positif.



## chantier/problemes-15-fiches.md

### P6 -- France Travail : délais contrôles et radiations arbitraires sans recours effectif

- **Citation en cause :** Or, délais réels sont 35+ jours en zones à faible intensité de ressources

- **Probleme :** La fiche cite des délais réels de 35+ jours avant le premier rendez-vous, mais selon les sources officielles 2026, le délai moyen est de 7 à 15 jours ouvrés, avec une plage observée de 7 à 30 jours. Le chiffre de 35+ jours est exagéré et ne reflète pas la réalité mesurée.

- **Verification independante :** La fiche cite un délai de 35+ jours pour le premier rendez-vous en zones à faible intensité. Or, les données officielles 2026 indiquent un délai moyen de 7–15 jours ouvrés et un objectif de 15–30 jours. Le chiffre 35+ jours correspond en réalité au délai de versement de l'allocation (28+ jours deferral + 7j attente), non au RDV. La critique est fondée : exagération ou confusion factorisée entre deux délais distincts.



## chantier/problemes-16-fiches.md

### P7 -- Carte Vitale obligatoire bloque accès aux médicaments sensibles

- **Citation en cause :** Janvier 2024 : Carte Vitale obligation stricte pharmacie

- **Probleme :** La date d'obligation est erronée. L'obligation stricte de Carte Vitale en pharmacie a pris effet le 17 juin 2025, pas janvier 2024 (décalage de 17 mois).

- **Verification independante :** L'obligation stricte de la Carte Vitale en pharmacie a pris effet le 17 juin 2025, non en janvier 2024. La fiche P7 contient une erreur factuelle de 17 mois. Sources officielles (Assurance Maladie, presse médicale) confirment cette date du 17 juin 2025 pour l'entrée en vigueur de l'obligation.


### P6 -- Aidants familiaux : charge administrative + fatigue psychologique

- **Citation en cause :** 3 à 5 millions aidants France

- **Probleme :** Chiffre complètement obsolète en 2026. Les sources officielles (CNSA, rapports ministériels 2024-2025) indiquent 8 à 11 millions d'aidants en France, soit 11 millions selon les chiffres les plus récents. Le chiffre cité est inférieur de 50-75% à la réalité actuelle.

- **Verification independante :** Le chiffre "3 à 5 millions aidants" de la fiche P6 est factuellement obsolète. Les sources officielles 2024-2025 (CNSA, DREES, ministères) indiquent unanimement 8 à 11 millions d'aidants, avec 11 millions selon les chiffres DREES 2025. Sous-évaluation confirmée de 60-75%. C'est une erreur grave, non une nuance.



## chantier/problemes-17-fiches.md

### P8 -- Amendes sans contact : vidéoverbalisation automatique, paiement sans recours préalable, asymétrie payement/contestation

- **Citation en cause :** Proposition loi adoptée : obligation payer FPS (forfait post-stationnement) avant de pouvoir contester, entrée vigueur juin 2026.

- **Probleme :** La fiche affirme que la proposition de loi imposant le paiement avant contestation a été adoptée et entre en vigueur en juin 2026. Or, la proposition de loi Labaronne n'a jamais dépassé le stade de la première lecture (décembre 2023) et est devenue caduque lors de la dissolution de l'Assemblée Nationale en juin 2024. En réalité, en juin 2026, aucune loi n'impose le paiement préalable. De plus, le Conseil Constitutionnel a jugé cette obligation inconstitutionnelle dès 2020 (décision n° 2020-855 QPC).

- **Verification independante :** La fiche P8 affirme « Proposition loi adoptée : obligation payer FPS avant de pouvoir contester, entrée vigueur juin 2026 ». Or : (1) la PPL Labaronne n'a atteint que la première lecture (décembre 2023) et est devenue caduque lors de la dissolution de juin 2024 ; (2) en juin 2026, aucune loi n'impose le paiement préalable ; (3) le Conseil Constitutionnel a déclaré cette obligation inconstitutionnelle via la décision n° 2020-855 QPC du 9 septembre 2020, au nom du droit à un recours effectif. L'incoherence est majeure : la fiche énonce comme fait légal établi ce qui n'existe pas et a été jugé contraire à la Constitution.


### P6 -- Résiliation d'abonnement internet : frais asymétriques (50 à 69 euros), remboursement aléatoire

- **Citation en cause :** Depuis 1er avril 2025, tous opérateurs appliquent frais résiliation : Orange 50€, Free/SFR 59€, Bouygues 69€.

- **Probleme :** En juillet 2026 (date d'audit), les tarifs d'Orange sont obsolètes. La fiche mentionne les tarifs d'avril 2025 (Orange 50€), mais Orange a augmenté ses frais de résiliation à 60€ depuis novembre 2025. Une fiche auditée en juillet 2026 doit refléter les tarifs actuels ou noter explicitement les changements tarifaires survenus depuis sa rédaction.

- **Verification independante :** La fiche P6 mentionne les tarifs d'Orange depuis avril 2025 (50€). Or, Orange a augmenté ses frais de résiliation à 60€ le 20 novembre 2025. En juillet 2026, les sources web confirment 60€ comme tarif actuel. La fiche cite des données obsolètes depuis 8 mois sans les contextualiser ou les mettre à jour. C'est une incoherence factuelle sévère (20% d'écart), pas une nuance mineure. La correction est justifiée.



## chantier/problemes-18-fiches.md

### P1 -- Une mère seule avec deux enfants gagne moins qu'un célibataire au RSA hébergé chez ses parents

- **Citation en cause :** Mère isolée avec 2 enfants : RSA majoré 1 673,70 € brut

- **Probleme :** Le montant 1 673,70 € s'applique au RSA majoré pour 3 enfants, pas 2 enfants. Pour une mère avec 2 enfants, le RSA majoré correct est 1 394,75 € (1 115,80 € + 278,95 €).

- **Correction proposee :** Remplacer 'RSA majoré 1 673,70 €' par 'RSA majoré 1 394,75 € pour 2 enfants' ou préciser 'pour 3 enfants' si le contexte le justifie

- **Verification independante :** Montant RSA majoré 1 673,70 € correspond à 3 enfants (confirmé aide-sociale.fr avril 2026), pas 2 enfants. Montant correct pour 2 enfants: 1 394,75 €. Erreur factuelle de 278,95 € qui fausse le calcul de la fiche P1 et invalide la démonstration du problème social chiffré.


### P10 -- Garde alternée 50/50 : enfant absent du foyer, aides CAF s'effondrent

- **Citation en cause :** ASF réduite de moitié (versée pro-rata temps) = ~100-120 €

- **Probleme :** L'ASF n'est pas versée en garde alternée 50/50, car elle est destinée aux parents isolés qui élèvent seul l'enfant. La CAF ne reconnaît l'ASF que si l'enfant vit principalement au domicile du demandeur, ce qui exclut la garde alternée.

- **Correction proposee :** Remplacer 'ASF réduite de moitié' par 'ASF non versée' ou 'ASF cessée (pas applicable en garde alternée)'

- **Verification independante :** L'ASF n'est PAS versée en garde alternée 50/50 selon les règles officielles de la CAF (2026). La fiche affirme « ASF réduite de moitié (versée pro-rata temps) = ~100-120 € » ce qui est factuellement incorrect. L'ASF est une prestation réservée aux parents isolés élevant seul l'enfant (condition : « vivre seul » et « élever seul »). En garde alternée, seules les allocations familiales peuvent être partagées au pro-rata entre les deux parents. L'ASF, comme toutes les autres prestations, n'est versée qu'à un seul parent, ou pas du tout en cas de garde alternée équilibrée. La correction proposée (« ASF non versée ») est exacte.



## chantier/problemes-19-fiches.md

### P1 -- Le seuil de 49 salariés: une barrière qui bloque la croissance des PME

- **Citation en cause :** Franchir 50 salariés multiplie les cotisations sociales (FNAL passe de 0.10% à 0.50%, + contribution Action Logement 0.45% = coût supplémentaire de 6.7 millions d'euros pour une PME moyenne)

- **Probleme :** La fiche décrit une augmentation IMMÉDIATE et BRUTALE des cotisations au franchissement du seuil de 50 salariés, suggérant un coût supplémentaire qui s'ajoute d'un coup. MAIS en 2026, depuis la loi PACTE, une période transitoire de 5 ans existe: une entreprise franchissant 50 salariés en 2026 reste au taux 0.10% pendant 5 ans (2026-2030) et ne bascule au taux 0.50% qu'à partir du 1er janvier 2031, à condition de rester au-dessus du seuil. Le problème décrit (brutalité du basculement) n'existe donc PLUS tel que présenté en 2026.

- **Verification independante :** La critique a un fondement réel : la loi PACTE (depuis 2020) instaure une période transitoire de 5 ans lors du franchissement du seuil de 50 salariés. Une PME franchissant ce seuil en 2026 bénéficie du maintien du FNAL à 0,10% jusqu'en 2030 (au lieu de passer immédiatement à 0,50%) et est EXONÉRÉE de cotisation Action Logement 0,45% de 2026 à 2030. La description "L'aberration" de la fiche P1 utilise des taux nominaux sans contextualiser cette atténuation légale, rendant la fiche imprécise pour 2026. Bien que la fiche reconnaisse l'existence de cette transitoire en Piste B, elle devrait clarifier que le problème décrit n'a plus l'effet "brutal" invoqué. Le problème décrit existe donc, mais son intensité en 2026 est substantiellement réduite par rapport à ce que suggère la section "L'aberration".


### P7 -- Auto-entrepreneur dépassant 85 000 EUR: taxation rétroactive mais tolérance 1 an

- **Citation en cause :** Auto-entrepreneur plafond 85 000 EUR (ventes) / 93 500 EUR (services majorés)

- **Probleme :** La fiche confond deux seuils différents et cite des chiffres OBSOLETES pour le régime micro-entrepreneur en 2026. Les vrais plafonds du régime micro-entrepreneur en 2026 sont 203 100€ (commerce) et 83 600€ (services). Les chiffres de 85 000€/93 500€ sont les seuils de FRANCHISE DE TVA (depuis janvier 2025), non les seuils du régime lui-même. La fiche décrit le régime avec des seuils de TVA, ce qui induit une confusion majeure sur le vrai plafond d'activité.

- **Verification independante :** La fiche P7 cite les seuils 85 000€ (ventes) et 93 500€ comme plafonds du régime micro-entrepreneur, alors que ce sont les seuils de FRANCHISE DE TVA uniquement. Les vrais seuils du régime micro-entrepreneur 2026 sont 203 100€ (commerce) et 83 600€ (services). La fiche attribue également 93 500€ aux "services majorés" alors que ce seuil s'applique au commerce, non aux services. C'est une confusion factuelle majeure entre deux régimes distincts : le régime du statut micro-entrepreneur et le régime de franchise de TVA.


### P10 -- Obligation de déclarer le même revenu/adresse que l'État possède déjà numériquement

- **Citation en cause :** Citoyen doit déclarer revenus impôt sur le revenu: l'État les possède déjà... Interopérabilité gouvernementale n'existe pas

- **Probleme :** La fiche décrit le problème d'interopérabilité comme toujours irrésolu en 2026. MAIS depuis 2020, un système de 'déclaration automatique' existe et fonctionne en 2026: 10.6 millions de foyers bénéficient d'une déclaration pré-remplie (~90%) qui ne nécessite aucune action si correcte. La fiche ignore complètement ce système qui rend le problème décrit PARTIELLEMENT RÉSOLU pour la majorité des contribuables aux revenus pré-connus (salariés, retraités, etc.), rendant le diagnostic incomplet.

- **Verification independante :** L'allégation est factuellement correcte. Vérification confirmée : (1) système pré-rempli depuis 2020+ opérationnel en 2026 ; (2) chiffre exact 10,6 millions de foyers en 2025 ; (3) couverture ~90% revenus préremplissables ; (4) zéro action si correct, validation automatique ; (5) la fiche P10 omet complètement ce système, présentant comme aspiration la Norvège alors que France dispose déjà de ce mécanisme. Diagnostic incomplet objectif, non erreur factuelle majeure.



## chantier/problemes-2-fiches.md

### P4 -- Santé mentale des jeunes en détresse

- **Citation en cause :** Suicide : 3e cause de mortalité chez 15-24 ans.

- **Probleme :** Le suicide n'est pas la 3e cause de mortalité chez les 15-24 ans, mais la 2e cause selon les données officielles françaises (DREES, Observatoire national, franceinfo). Les sources confirment que le suicide est la deuxième cause de mortalité derrière les accidents de la route.

- **Verification independante :** La fiche P4 (ligne 39) affirme "Suicide : 3e cause de mortalité chez 15-24 ans". C'est INCORRECT. Les données officielles françaises (DREES, Observatoire National du Suicide, Santé Publique France) confirment que le suicide est la 2e cause de mortalité chez les 15-24 ans en France, après les accidents de la route. L'erreur doit être corrigée.


### P5 -- Conditions dégradées en EHPAD et financiarisation

- **Citation en cause :** 743 000 résidents en EHPAD (à confirmer)

- **Probleme :** Le chiffre de 743 000 résidents est suréévalué. Les données officielles 2025-2026 (FINESS, DREES, INSEE) indiquent que la France compte environ 577 000 à 600 000 résidents en EHPAD, soit une différence de 143 000 personnes (19-21% de surreprésentation). Le chiffre de 743 000 n'apparaît dans aucune source statistique officielle.

- **Verification independante :** Le chiffre de 743 000 résidents en EHPAD est effectivement suréévalué selon les données officielles DREES 2025 (577 200 résidents). La surreprésentation est de 22% (165 800 personnes de différence). L'IA précédente a correctement identifié une aberration factuelle : aucune source statistique officielle contemporaine (DREES, FINESS, INSEE 2024-2026) ne cite 743 000. Le chiffre doit être corrigé vers 577 000-600 000.



## chantier/problemes-20-fiches.md

### P2 -- Traçabilité de chaque euro : de l'engagement au paiement

- **Citation en cause :** Estonie offre un modèle : chaque rouble public enregistré, horodaté dès engagement.

- **Probleme :** L'Estonie utilise l'euro comme monnaie officielle depuis le 1er janvier 2011, non le rouble. Le rouble est la monnaie russe. Cette confusion de devises est une erreur factuelle.

- **Correction proposee :** Remplacer 'rouble' par 'euro' : 'chaque euro public enregistré, horodaté dès engagement.'

- **Verification independante :** Erreur factuelle confirmée. Estonie utilise l'euro depuis le 1er janvier 2011 (devise officielle de la zone euro), non le rouble (devise russe). La phrase P2 du fichier contient une confusion de devises : "chaque rouble public" doit être corrigée en "chaque euro public". C'est une erreur factuelle vérifiable, non une nuance.


### P3 -- Une blockchain souveraine française : mythe ou outil ?

- **Citation en cause :** Géorgie a enregistré tous les titres fonciers sur blockchain en 2016 (d'abord privée, signée par Bitcoin, migration vers Hedera 2024 suggérant insécurité clés centralisées à confirmer).

- **Probleme :** La migration vers Hedera n'a pas eu lieu en 2024. Le Memorandum of Understanding (MoU) entre la Géorgie et Hedera a été signé le 1er décembre 2025, pas 2024. C'est une erreur de date.

- **Correction proposee :** Remplacer '2024' par '2025' : '(...) migration vers Hedera 2025 suggérant (...)'

- **Verification independante :** L'erreur de date est confirmée et vérifiée. Le MoU Géorgie-Hedera a été signé/annoncé en décembre 2025 (1-2 décembre 2025), non en 2024. La correction proposée (2024 → 2025) est factuellement fondée.


### P4 -- Précédents mondiaux : ce qui a marché, ce qui a échoué

- **Citation en cause :** Zoug Suisse 2017 (identité blockchain, vote blockchain : expérimental, pas adoption massive).

- **Probleme :** Le vote blockchain à Zoug a eu lieu en 2018, non en 2017. Seule l'identité blockchain date de 2017. Le vote s'est déroulé du 25 juin au 1er juillet 2018.

- **Correction proposee :** Séparer les deux initiatives : 'Zoug Suisse 2017 (identité blockchain : expérimental), vote blockchain 2018 (expérimental, pas adoption massive)'

- **Verification independante :** Le vote blockchain à Zoug s'est déroulé du 25 juin au 1er juillet 2018, non en 2017. Seule l'identité blockchain (eID) date de novembre 2017. L'affirmation actuelle qui groupe "identité blockchain, vote blockchain" sous "2017" est factuellement erronée. La correction proposée (séparer : "Zoug Suisse 2017 (identité blockchain)", "vote blockchain 2018") est justifiée et améliore la précision chronologique.


### P4 -- Précédents mondiaux : ce qui a marché, ce qui a échoué

- **Citation en cause :** ProZorro Ukraine 2015 (succès massif : 162 M$ économies directes en 2 ans, 6 Md$ total 2015-2021 à confirmer, corruption publique divisée par 2 ; mais pas blockchain, juste open data procédure plus API).

- **Probleme :** Le chiffre de 162 M$ pour 2 ans est incorrect. Les sources indiquent que ProZorro a généré 1,9 milliard de dollars d'économies sur ses deux premières années d'opération (2015-2017), non 162 millions.

- **Correction proposee :** Remplacer '162 M$' par '1,9 Md$' : 'succès massif : 1,9 Md$ économies directes en 2 ans, 6 Md$ total 2015-2021'

- **Verification independante :** 162 M$ pour "économies directes en 2 ans" est factuellement incorrect. Multiples sources indépendantes (OECD, EBRD, Harvard Kennedy School, Open Contracting Partnership) confirment que ProZorro a économisé 1,9 milliard de dollars en 2015-2017. Le 162 M$ semble confondre un sous-composant ("revenu direct"). La correction proposée (1,9 Md$) est justifiée et nécessaire.


### P3 -- Une blockchain souveraine française : mythe ou outil ?

- **Citation en cause :** EBSI (Infrastructure de Services Blockchain Européenne) opère depuis 2024 une infrastructure blockchain publique multi-États (30 adhérents).

- **Probleme :** EBSI n'opère pas depuis 2024. Elle était en phase de préparation et governance transition en 2024. Le lancement en production est prévu pour Q4 2026. En juillet 2026, elle n'est pas encore opérationnelle en mode commercial.

- **Correction proposee :** Reformuler : 'EBSI (...) était en phase de préparation depuis 2024, avec un lancement opérationnel prévu pour Q4 2026' ou utiliser 'coordonne' au lieu d''opère'

- **Verification independante :** La recherche web confirme l'incohérence. EBSI n'est actuellement pas opérationnelle en juillet 2026 ; elle est en phase finale de readiness technique avec un lancement en production planifié pour Q4 2026. La fiche affirme "EBSI opère depuis 2024 une infrastructure blockchain publique", ce qui est factuellement inexact. Le mot "opère" au présent-perfect est trompeur : EBSI n'a jamais opéré commercialement depuis 2024, elle prépare activement son lancement pour fin 2026. La correction proposée ("était en phase de préparation depuis 2024, avec lancement opérationnel prévu pour Q4 2026") est plus précise et factuellement correcte selon les sources officielles EC/EBSI.



## chantier/problemes-21-fiches.md

### P7 -- Prime d'activité vs. RSA activité (2015-2016)

- **Citation en cause :** Montant moyen bas = peu incitatif (€50-100/mois beaucoup cas)

- **Probleme :** Le montant moyen de la prime d'activité était 158€ en 2016 et 170€ en 2015. La plage "€50-100/mois" citée ne correspond pas à la réalité empirique ; le montant moyen était significativement plus élevé. Cela invalide l'argument de faiblesse des montants basé sur cette plage.

- **Verification independante :** La plage €50-100/mois citée contredit les chiffres empiriques : montant moyen 2015=170€, 2016=158€. Le texte crée une ambiguïté trompeuse en juxtaposant "montant moyen bas" et cette plage inférieure de 40-50€ à la moyenne réelle, sans distinguer entre moyenne globale et cas particuliers. Incohérence factuellement confirmée.



## chantier/problemes-22-fiches.md

### P5 -- Empilement lois sécuritaires et antiterroristes (2015-2017)

- **Citation en cause :** État d'urgence novembre 2015 à juillet 2017

- **Probleme :** La fiche indique que l'état d'urgence s'est terminé en juillet 2017, alors qu'il a en réalité duré jusqu'au 1er novembre 2017. La loi du 11 juillet 2017 a prorogé l'état d'urgence jusqu'au 1er novembre 2017, date de sa fin effective.

- **Verification independante :** Erreur factuelle documentée : la fiche dit « État d'urgence novembre 2015 à juillet 2017 », or la loi du 11 juillet 2017 a prorogé l'état d'urgence jusqu'au 1er novembre 2017 (fin effective). L'IA précédente a raison ; c'est une inexactitude à corriger, non une nuance mineure.


### P10 -- Grand débat national et conventions citoyennes (2019-2020)

- **Citation en cause :** Conventions citoyennes 2019-2021 : cinq thèmes (climat, retraite, fiscalité, etc.), 150 citoyens par convention

- **Probleme :** La fiche prétend qu'il y a eu cinq conventions citoyennes séparées (climat, retraite, fiscalité, etc.) entre 2019-2021 avec 150 citoyens chacune. Or, seule la Convention citoyenne pour le climat s'est tenue de 2019-2020 avec 150 participants. Les conventions sur la retraite ou la fiscalité n'ont pas eu lieu durant cette période. La Convention citoyenne sur la fin de vie n'a eu lieu qu'en 2023.

- **Verification independante :** La fiche P10 affirme qu'il y a eu "cinq thèmes (climat, retraite, fiscalité, etc.), 150 citoyens par convention" entre 2019-2021. Or, seule la Convention citoyenne pour le climat s'est déroulée durant 2019-2020 avec 150 citoyens selon ce modèle. Les conventions sur retraite ou fiscalité n'ont pas eu lieu à cette période. La Convention citoyenne sur la fin de vie n'a débuté qu'en décembre 2022 (après 2021) avec 184 citoyens, non 150. L'incoherence est avérée : la fiche exagère le nombre et la diversité des conventions citoyennes durant cette période.


### P10 -- Grand débat national et conventions citoyennes (2019-2020)

- **Citation en cause :** Grand débat 2019 environ 30 000 cahiers de doléances

- **Probleme :** La fiche indique environ 30 000 cahiers de doléances, alors que le nombre exact était d'environ 19-20 000 (19 935 cahiers transférés aux Archives nationales). Cet écart de 50% est trop important pour être couvert par le terme 'environ'.

- **Verification independante :** La fiche indique « environ 30 000 cahiers » alors que le chiffre officiel des Archives nationales est 19 935 cahiers transférés (confirmé par question parlementaire Sénat 2024). Écart de ~50% incompatible avec le mot « environ » qui ne couvre que ±10-15% d'arrondi. Incohérence majeure sur une donnée quantifiée.



## chantier/problemes-24-fiches.md

### P2 -- Optique : prix indexés sur remboursement mutuelle

- **Citation en cause :** Montures 100% santé: 17€ Sécu + 110€ mutuelle = prix marché fixé à 127€ exact

- **Probleme :** Les montants de remboursement cités (17€ Sécu, 110€ mutuelle pour 127€ total) ne correspondent pas à la réalité 2026. Depuis le 100% Santé optique (en vigueur depuis 2020 et confirmé en 2026), les montures sont remboursées à hauteur de 30€ maximum (50€ pour enfants < 6 ans), avec un reste à charge zéro. Les chiffres de la fiche reflètent une tarification obsolète.

- **Verification independante :** Les montants cités ("17€ Sécu + 110€ mutuelle = 127€") ne correspondent pas à la réalité 2026. Depuis 2020 (confirmé en 2026), le 100% Santé optique plafonne les montures à 30€ max avec couverture intégrale par Sécu (60%) + mutuelle (40%) = reste à charge zéro. Les chiffres 17€ et 110€/127€ reflètent une tarification antérieure au dispositif 100% Santé et sont factuellement obsolètes pour décrire l'état 2026.


### P8 -- Parkings hôpitaux privatisés

- **Citation en cause :** Tarifs: Nancy 30 euros 3h, 6 euros/heure ensuite

- **Probleme :** La structure tarifaire de Nancy a changé. WebSearch 2026 indique que 'la première heure est gratuite' à Nancy, ce qui contredit la tarification décrite dans la fiche (30€ pour 3h). L'actuel dispositif de gratuité de la première heure n'est pas mentionné, suggérant que la tarification date d'avant les ajustements tarifaires récents.

- **Verification independante :** La tarification citée (30€/3h, 6€/h) est obsolète. Nancy CHRU en 2026 applique : première heure gratuite + tarifs révisés (~10€ pour 3h). La fiche omet cette restructuration majeure et cite des montants hors normes actuels.



## chantier/problemes-25-fiches.md

### P6 -- Bouclier fiscal passé et avatars : plafonnement IFI en discrètement

- **Citation en cause :** IFI 2026 : plafond 60% revenus, déduction 300k€ sur première résidence.

- **Probleme :** Le plafond de l'IFI 2026 est 75% des revenus nets imposables, non 60%. Le taux de 60% était le plafond du bouclier fiscal historique (2006-2013) ou celui de l'ISF 2013. L'IFI qui le remplace en 2017 a un plafonnement revu à 75%.

- **Verification independante :** Inaccuracy confirmée. P6 déclare « plafond 60% revenus » (ligne 56) ; or l'IFI 2026 s'applique avec un plafonnement à 75% des revenus nets imposables depuis 2017 (remplacement ISF → IFI). Le taux 60% était celui du régime précédent (bouclier fiscal 2000-2012, ISF 2013). Sources officielles service-public.gouv.fr et organismes patrimoniaux confirmant 75%. Correction nécessaire : remplacer 60% par 75%.


### P8 -- Optimisation prix de transfert : multinationales françaises rapatriées mal

- **Citation en cause :** Impôt minimum global 25% OCDE/pilier 2 (déjà en cours 2024) : Tous pays imposent au minimum 25% revenus globaux groupes >750M€ chiffre.

- **Probleme :** Le taux du Pilier 2 OCDE est 15%, non 25%. France a adopté un impôt complémentaire à 15% minimum, avec des taux transitoires (15% en 2024, 16% en 2025, 17% en 2026).

- **Verification independante :** Erreur factuelle confirmée. La fiche P8 affirme que le Pilier 2 de l'OCDE impose un taux minimum de 25%, alors que le taux réel est 15% (avec régime transitoire à 16% en 2025 et 17% en 2026 en France). Écart de 10 points = surreprésentation de 67%. L'IA précédente avait raison de signaler cette incoherence.



## chantier/problemes-26-fiches.md

### P1 -- Tabac : licencier les vendeurs, encaisser 13 milliards

- **Citation en cause :** L'État encaisse environ 13 milliards d'euros par an en taxes sur le tabac via la TICPE et l'accise, tout en finançant massivement les traitements des cancers causés par le tabagisme (190 000 cas/an en France).

- **Probleme :** Le chiffre de '190 000 cas/an' de cancer du tabac est incorrect. Selon les données 2026 de Santé Publique France, il y a environ 68,000-70,000 nouveaux cas de cancer liés au tabac par an. Le chiffre 190 correspond aux décès quotidiens du tabagisme, non aux cas annuels.

- **Correction proposee :** Environ 68,000-70,000 nouveaux cas de cancer liés au tabac par an; 190 décès quotidiens soit ~69,350/an

- **Verification independante :** L'allégation est correctement fondée. Le chiffre "190 000 cas/an de cancer du tabac" dans le fichier P1 est factuellement incorrect. Les sources officielles (INCa, Santé Publique France, Ligue contre le Cancer) confirment environ 68 000-70 000 nouveaux cas de cancer liés au tabac par an en France, soit un écart d'un facteur 2,7x. Le chiffre "190" correspond effectivement aux décès quotidiens approximatifs du tabagisme (68 000/365 ≈ 190/jour), confirmant une probable confusion numérique à l'origine du texte.


### P1 -- Tabac : licencier les vendeurs, encaisser 13 milliards

- **Citation en cause :** L'État encaisse environ 13 milliards d'euros par an en taxes sur le tabac

- **Probleme :** Le chiffre de '13 milliards d'euros' de recettes tabac est obsolète en 2026. Les recettes des droits de consommation tabac ont chuté significativement : 3 milliards d'euros au T1 2026 (contre 4 Md€ en 2025), avec une diminution de 663 millions prévue pour 2026.

- **Correction proposee :** Les recettes 2026 sont estimées à environ 10-11 milliards annualisés, en baisse significative par rapport aux 13 Md€ initialement citées

- **Verification independante :** L'incohérence factuelle est CONFIRMÉE. Le chiffre de "13 milliards d'euros par an" cité dans la fiche P1 est effectivement obsolète en 2026. Évolution établie : 13,2 Md€ (2023) → 12,7 Md€ (2024) → ~12,0 Md€ (2025) → ~11,3 Md€ (2026, projection). La fiche doit donc mentionner ~11-12 milliards pour 2026, pas 13. Réserve mineure : la correction "10-11 Md€" proposée est légèrement trop basse (devrait être 11-12 Md€), mais l'erreur dans la fiche est indéniable et de magnitude substantielle (écart de 1,7 à 2,7 Md€ entre le chiffre cité et la réalité 2026).


### P2 -- Radars : déplacés du chantier à la rentabilité (1,8 Md/an)

- **Citation en cause :** Les radars mobiles ne représentent que 8% de la flotte mais génèrent plus d'un quart des recettes nationales (estimé à 500 M€ sur 1,8 Md€ total).

- **Probleme :** Le chiffre de '1,8 Md€ total' de recettes radars est incorrect pour 2026. Les recettes totales prévues pour 2026 s'élèvent à 693 millions d'euros, bien en dessous de 1,8 milliards. Ce chiffre est obsolète ou basé sur des données antérieures.

- **Correction proposee :** Les recettes totales prévues pour 2026 sont 693 millions d'euros, dont 25-35% générées par les 8% de radars mobiles (soit ~174-243 M€)

- **Verification independante :** Le chiffre de « 1,8 Md€ total » dans la fiche est factuellement incorrect pour 2026. Selon le projet de loi de finances, les radars seuls rapportent 693 millions d'euros en 2026, pas 1,8 milliards. Le chiffre de « 500 M€ » pour les radars mobiles est aussi surestimé (~210-240 M€). L'autre IA a identifié une véritable incohérence : soit « 1,8 Md€ » confond radars et toutes amendes routières (hors-sujet), soit c'est un chiffre obsolète. Correction nécessaire.


### P5 -- Alcool : la loi Evin détricotée par les lobbies du vin

- **Citation en cause :** Le vin tue autant que la bière (77 000 décès/an liés à l'alcool en France)

- **Probleme :** Le chiffre de '77 000 décès/an' liés à l'alcool est significativement surestimé. Selon Santé Publique France 2026, les estimations actuelles indiquent 41,000 décès annuels attribuables à l'alcool.

- **Correction proposee :** 41,000 décès annuels liés à l'alcool en France (données Santé Publique France 2026)

- **Verification independante :** Le chiffre de 77 000 décès/an liés à l'alcool en France (ligne 89, P5) est surestimé. Les données actuelles de Santé Publique France 2026 confirment 41 000 décès annuels attribuables à l'alcool (chiffre de référence depuis 2015, soit 30 000 hommes + 11 000 femmes). Le chiffre de 77 000 n'existe dans aucune source officielle ; l'estimation la plus haute historique était 49 000 en 2009. La correction proposée est factuellement fondée.


### P5 -- Alcool : la loi Evin détricotée par les lobbies du vin

- **Citation en cause :** En 2015, une exception a été créée pour le 'patrimoine culturel, gastronomique ou paysager lié à une boisson alcoolisée'

- **Probleme :** La date est décalée. Selon les sources juridiques, en 2016 (non 2015) un nouvel article de loi a clarifié que la référence au patrimoine culturel (AOC, terroir) n'est pas considérée comme de la publicité pour l'alcool.

- **Correction proposee :** L'exception culturelle a été codifiée en 2016, non 2015

- **Verification independante :** L'exception pour le patrimoine culturel, gastronomique ou paysager lié aux boissons alcoolisées a été légalement codifiée en 2016 via la loi n° 2016-41 du 26 janvier 2016 (article L.3323-3-1 du Code de la santé publique), non en 2015. Le vote du Sénat de septembre 2015 n'était qu'une étape préalable au processus législatif. La fiche contient une erreur de date factuelle.



## chantier/problemes-27-fiches.md

### P3 -- Le droit opposable au logement (DALO 2007, condamnations d'État non exécutées)

- **Citation en cause :** La CEDH a condamné la France en 2026 pour incapacité à reloger une famille après une décision définitive.

- **Probleme :** Incoherence factuelle majeure: le fichier affirme que la CEDH a condamné la France en 2026, or la décision du 12 mai 2026 (affaire Eisenauer c. France) a REFUSÉ de condamner la France. Par 5 votes contre 2, la Cour a explicitement refusé de reconnaître une violation de l'Article 6 § 1 concernant l'incapacité à exécuter les décisions judiciaires de relogement DALO. Bien que la Cour ait estimé les délais d'exécution déraisonnables, elle a jugé que la France avait mis en place des mécanismes (astreintes versées au FNAVDL et recours en indemnisation) constituant un commencement d'exécution suffisant.

- **Verification independante :** Incoherence factuelle grave confirmée. Le fichier prétend "La CEDH a condamné la France en 2026", or la Cour a voté 5-2 pour REFUSER de condamner, malgré une constatation de délais déraisonnables. La France n'a pas été condamnée; son système de compensation (astreintes + indemnisation) a été jugé constitutif d'une "exécution partielle" suffisante. Sources: jurisprudence officielle CEDH, articles juridiques spécialisés (Maître Kohen, Dalloz, JURICAF), et rapports d'associations DALO.



## chantier/problemes-28-fiches.md

### P7 -- Fiscalité inversée : électricité décarbonée taxée 4 11 fois plus que gaz fossile

- **Citation en cause :** UE logiquement vise prix carbone 100 €/t CO2 d'ici 2030

- **Probleme :** L'objectif de prix carbone 100€/tonne pour 2030 (issu du rapport Quinet 2008) est devenu obsolète en 2026. Les projections du GIEC recommandent maintenant ~200€/tonne pour respecter l'objectif 1,5°C d'ici 2030. Le prix du marché EU en janvier 2026 était déjà à 88€. Cette fiche ignore l'évolution des objectifs climatiques depuis 2008.

- **Verification independante :** La citation « UE logiquement vise prix carbone 100€/t CO2 d'ici 2030 » repose sur l'objectif Quinet 2008 désormais révisé à la hausse (250€/t dans versions ultérieures). Janvier 2026 : prix EUA ~92€/t. Prévisions consensus pour 2030 : 126€/t minimum. La fiche omet cette évolution documentée de +18 ans, constituant une sous-estimation factuellement vérifiable. Les projections GIEC pour 1,5°C ne ciblent pas précisément 200€/t (gamme large citée), mais le problème de Quinet reste fondé et pertinent à corriger.


### P3 -- Certificats Économie Énergie (CEE) : fraude à deux milliards

- **Citation en cause :** Fraude estimée 20-50% selon Cour des Comptes (vs 2% déclaré avant 2022)

- **Probleme :** Le rapport Cour des Comptes de septembre 2024 ne cite pas une fourchette 20-50% de fraude. Il parle plutôt de 'surévaluation d'au moins 30%' des économies réales, et estime que les économies attribuables ne représentent 'qu'un tiers des certificats émis' (impliquant ~67% de problématique). La formulation 20-50% n'a pas de source directe dans le rapport officiel.

- **Verification independante :** Le rapport Cour des Comptes septembre 2024 ne cite pas "fraude 20-50%" comme fourchette unique. Il parle de surévaluation d'au moins 30%, d'un tiers seulement des certificats réels, et de taux non-conformité 8,7-39,4%, mais pas de "fraude 20-50%" explicite. L'IA précédente avait raison : cette formulation n'a pas de source directe dans le rapport officiel.



## chantier/problemes-29-fiches.md

### P2 -- MaPrimeRénov' : stop-and-go qui pénalise artisans et ménages

- **Citation en cause :** Réduction 2026 : 1,5 à 2,4 Md€ (-50 à 80 %)

- **Probleme :** La fiche affirme une réduction drastique du budget MaPrimeRénov' en 2026 de 50-80%. Or selon les données vérifiées en juillet 2026, le budget 2026 s'élève à 3,5-3,6 Md€ (complété par 500 M€ CEE = 4,1 Md€ total selon l'Agence nationale de l'habitat), ce qui représente un maintien ou augmentation légère comparé à 2025, pas une réduction.

- **Verification independante :** La fiche P2 confond réduction des montants individuels d'aide (50-80%) avec réduction du budget global. Le budget MaPrimeRénov' 2026 est 3,6 Md€ (stable/légèrement augmenté vs ~3 Md€ en 2025), selon l'Anah. L'affirmation "Réduction 2026 : 1,5 à 2,4 Md€" est factuellement incorrecte pour le budget global.</anison>
</invoke>


### P4 -- Taxe foncière : explosion après suppression de la taxe d'habitation

- **Citation en cause :** Suppression TH 2026 : +15 Md€ pour collectivités. Transfert vers taxe foncière annoncé, puis repoussé au printemps 2026.

- **Probleme :** La fiche traite la suppression de la taxe d'habitation comme un événement de 2026. Or la taxe d'habitation a été supprimée le 1er janvier 2023 et n'existe déjà plus en 2026. Aucune suppression ne se produit en 2026; il s'agit d'un événement datant de 3 ans.

- **Verification independante :** La taxe d'habitation a effectivement été supprimée le 1er janvier 2023 (confirmé par sources officielles impots.gouv.fr et aide-sociale.fr). La formulation « Suppression TH 2026 » en ligne 61 de P4 est maladroite et techniquement inexacte car elle peut être lue comme une suppression en 2026, alors que l'événement date de 2023. La fiche aurait dû formulerl « Manque à gagner TH (supprimée 2023) » ou « Transfert compensatoire reporté à 2026 » pour clarifier que la suppression est passée (2023) et que c'est le report du transfert qui concerne 2026.


### P8 -- Logements vacants : 3 millions de biens, taxe inefficace

- **Citation en cause :** Revenus TLV/TVLH actuels : ~300 M€/an (inefficace). TLV remplacée par TVLH (taxe unifiée) janvier 2027.

- **Probleme :** La fiche traite TLV et TVLH comme coexistantes en 2026 (« actuels »). Or la TVLH entre en vigueur le 1er janvier 2027, pas avant. En 2026, seule la TLV existe. Les deux taxes ne peuvent pas être simultanées en 2026.

- **Verification independante :** Incoherence factuelle confirmée : ligne 141 parle de "revenus TLV/TVLH actuels" en juillet 2026, alors que TVLH n'existe pas avant le 1er janvier 2027. Seule TLV (et THLV) existent en 2026. La phrase mélange deux états distincts de la fiscalité vacante (pré et post-transition 2027), contredisant l'énoncé correct des lignes 135-136.


### P10 -- Copropriétés dégradées : fonds travaux insuffisants et blocages majorité

- **Citation en cause :** Fonds travaux obligation 2026 : 30 €/m² minimu/an obligatoire.

- **Probleme :** La fiche affirme une obligation légale de 30€/m² minimum pour le fonds travaux en 2026. Or l'obligation légale est un minimum de 5% du budget prévisionnel voté lors de l'assemblée générale (ou 2,5% avec Plan Pluriannuel Travaux). Aucune obligation fixe de 30€/m² n'existe dans la loi de 1965 sur la copropriété.

- **Verification independante :** La fiche P10 affirme une obligation légale de "30 €/m² minimum/an obligatoire" en 2026. Or l'obligation légale réelle, issue de la loi de 1965 modifiée par ALUR 2014, est un minimum de 5% du budget prévisionnel voté (ou 2,5% avec Plan Pluriannuel Travaux) — pas un seuil fixe en euros par m². Les sources officielles françaises (service-public.gouv.fr, instituts consommation, cabinets immobiliers) confirment unanimement ce système en pourcentage. L'incoherence factuelle est confirmée.



## chantier/problemes-3-fiches.md

### P3 -- Passoires thermiques : énergie ruineuse et polluante

- **Citation en cause :** F le seront après 2033

- **Probleme :** La fiche indique que les logements classés F au DPE seront interdits à la location 'après 2033'. Or, l'interdiction de location pour la classe F prend effet le 1er janvier 2028, pas après 2033.

- **Verification independante :** La fiche P3 indique "F le seront après 2033" alors que l'interdiction de location pour la classe F prend effet le 1er janvier 2028. C'est une erreur de 5-6 années. Le calendrier réglementaire établi par la loi Climat-Résilience (2021) est : G (2025) → F (2028) → E (2034). Une réforme d'assouplissement de 2026 en atténue l'application stricte mais ne repousse pas la date officielle.


### P7 -- Inflation alimentaire 2022-2023

- **Citation en cause :** Inflation alimentation : +5,7% (2022), +4,1% (2023)

- **Probleme :** Les chiffres cités sont significativement sous-estimés par rapport aux données INSEE officielles : inflation 2022 était +7% (hors produits frais) et 2023 était +11,8%, pas +5,7% et +4,1%.

- **Verification independante :** Données officielles INSEE attestent une inflation alimentation de +6,8% moyenne 2022 (vs 5,7% cité) et +11,8% moyenne 2023 (vs 4,1% cité). Sous-estimation majeure de 65% pour 2023. Incohérence directe avec le même paragraphe mentionnant "+8-10%" sur le panier essentiel.



## chantier/problemes-30-fiches.md

### P10 -- Crédit renouvelable toxique : taux plafond mal daté

- **Citation en cause :** Taux plafond légal (réforme novembre 2026) : 18,7% (vs 21,3% avant)

- **Probleme :** Le taux plafond 18,7% pour les crédits renouvelables s'applique depuis le 1er avril 2026 (publié au JO le 27 mars 2026), non pas 'novembre 2026'. En juillet 2026, cette mesure est déjà en vigueur depuis 3 mois. L'ordonnance 2025-880 complète entre en vigueur le 20 novembre 2026, mais le taux plafond lui-même a une date d'application antérieure. La fiche confond deux réformes successives.

- **Correction proposee :** Remplacer 'Taux plafond légal (réforme novembre 2026) : 18,7%' par 'Taux plafond légal (réforme avril 2026, applicable depuis 1er avril) : 18,7%'. Clarifier que l'ordonnance complète 2025-880 a une entrée en vigueur ultérieure (20 novembre 2026) mais que le taux 18,7% est déjà appliqué.

- **Verification independante :** L'incohérence est confirmée. Le taux plafond 18,7% pour le crédit renouvelable s'applique depuis le 1er avril 2026 (avis BdF 26 mars 2026, JO 27 mars 2026), NON novembre 2026. L'ordonnance 2025-880 (transposition UE) entre effectivement en vigueur le 20 novembre 2026, mais elle ne porte pas sur le taux plafond lui-même, déjà applicable depuis 6 mois. La fiche confond deux réformes successives. La correction proposée est juste : remplacer "réforme novembre 2026" par "réforme avril 2026, applicable depuis 1er avril".



## chantier/problemes-31-fiches.md

### P7 -- Casier judiciaire : 10 ans après purge, encore bloqué de l'emploi

- **Citation en cause :** Délai effacement : 3 ans (contraventions), 5 ans (délits), 10 ans (crimes légers)

- **Probleme :** Les délits ne s'effacent pas tous en 5 ans. Le délai d'effacement dépend de la durée de la peine : 5 ans pour une peine inférieure à 1 an, 10 ans pour une peine jusqu'à 10 ans. Cette simplification à « 5 ans (délits) » est factuellement inexacte.

- **Verification independante :** La citation "Délai effacement : 3 ans (contraventions), 5 ans (délits), 10 ans (crimes légers)" est factuellement inexacte. L'Article 133-13 du Code Pénal distingue deux cas pour les délits : effacement en 5 ans pour peine < 1 an, effacement en 10 ans pour peine entre 1 et 10 ans. Réduire cela à "5 ans (délits)" est une simplification qui occulte une distinction juridique majeure impactant la réinsertion professionnelle. L'autre IA a raison : c'est une inexactitude factuelle, pas une nuance mineure.


### P9 -- Médiation civile : gratuit en théorie, payant en pratique, obligatoire depuis sept. 2025

- **Citation en cause :** Refus immédiat de médier = amende jusqu'à 10 000 euros

- **Probleme :** Le décret 2025-660 pénalise le « refus injustifié », pas tout refus immédiat. Certains fondements légitimes d'exemption existent (coercition, violence, maladie, autre médiation en cours). L'omission de cette condition essentielle donne une compréhension inexacte de la portée légale.

- **Verification independante :** La fiche P9 énonce « Refus immédiat de médier = amende jusqu'à 10 000 euros » en omettant le préalable légal : l'article 1533-3 CPC (Décret 2025-660) pénalise uniquement le refus « sans motif légitime », non tout refus. La jurisprudence reconnaît des motifs légitimes d'exemption (violence, coercition, maladie, autre médiation en cours). Cette omission crée une compréhension juridiquement inexacte de la portée légale du texte.



## chantier/problemes-32-fiches.md

### P9 -- Visa et Mastercard : duopole sur le paiement français, rente et capture régulatrice

- **Citation en cause :** EPI/Wero = lancement 2026 mais "qui patine" = <100 000 utilisateurs en pilot (à confirmer)

- **Probleme :** La fiche affirme que EPI/Wero en 2026 compte moins de 100 000 utilisateurs en pilot. En réalité, Wero a dépassé les 43,5 millions d'utilisateurs depuis son lancement au second semestre 2024 (Belgique, France, Allemagne) et compte 55 millions d'utilisateurs en Europe au moment de la rédaction (juillet 2026), dont 72% en France (~40 millions). C'est une sous-estimation massive d'un facteur 400-500x.

- **Verification independante :** Incohérence factuelle avérée. La fiche P9 affirme "<100 000 utilisateurs en pilot" pour Wero/EPI en lancement 2026, alors qu'en réalité (juillet 2026) : Wero compte 40-55 millions d'utilisateurs (lancé en 2024, non 2026), avec un service pleinement opérationnel depuis 12+ mois. Sous-estimation massive d'un facteur 400-550x.


### P8 -- Le fichage bancaire : FICP/FCC, vies bloquées pour 5 ans

- **Citation en cause :** Banque de France gère 8,5 M de personnes fichées (chiffre 2025, à confirmer)

- **Probleme :** La fiche affirme 8,5 millions de personnes fichées en 2025. Or, selon les statistiques officielles de Banque de France au 31 décembre 2025, plus de 2 millions de personnes seulement sont fichées au FICP, soit une surévaluation d'un facteur 4. C'est l'incoherence la plus grave sur ce fichier.

- **Verification independante :** Incoherence factuelle grave et documentée. Banque de France gère environ 3,08 millions de personnes fichées (FICP 2,228M + FCC 855k au 31 décembre 2025), non 8,5 millions comme l'affirme la fiche P8. C'est une surévaluation d'un facteur 2,76, pas une nuance mineure. Correction impérative : remplacer 8,5M par ~3M (ou ventiler par fichier).


### P9 -- Visa et Mastercard : duopole sur le paiement français, rente et capture régulatrice

- **Citation en cause :** France : Carte Bancaire (GIE) détient 73,9 M de cartes (quasi-monopole de détail en France)

- **Probleme :** La fiche cite 73,9 millions de cartes CB en France, ce qui correspond aux données de 2021 (Observatoire CB). Or, en 2026, le réseau CB a déjà grandi à 80 millions de cartes (avec objectif 100 millions d'ici 2030). La fiche utilise des chiffres de 5 ans d'antériorité.

- **Verification independante :** Les chiffres cités (73,9 M de cartes CB) proviennent de 2021 (Observatoire CB confirmé). En 2026, les données actualisées indiquent 77-80 M de cartes. L'allégation d'obsolescence est exacte : la fiche cite des données de 5 ans d'antériorité sans qualification. Bien que la croissance soit modérée (~8%) et que l'argument du quasi-monopole reste valide, la donnée chiffrée manque de précision contemporaine pour un document de juillet 2026.


### P5 -- Le droit au cash qui s'efface : fermetures de DAB et commerce sans espèces

- **Citation en cause :** Retrait en commerce : plafond passe de 60 EUR à 150 EUR à partir de 2026

- **Probleme :** La fiche présente l'augmentation du plafond de retrait de 60 à 150 EUR comme effective à partir de 2026. Or, selon les sources officielles, il s'agit d'une proposition de loi (du député Pierrick Courbon) qui doit encore être formellement adoptée par le Parlement et le Conseil. Fin 2026, ce texte n'est pas entré en vigueur et ne le sera probablement pas avant fin 2026. C'est une présentation inexacte du statut juridique de cette mesure.

- **Verification independante :** La fiche affirme que le plafond de retrait en commerce "passe de 60 EUR à 150 EUR à partir de 2026", ce qui est factuellement inexact. Au 12 juillet 2026, le plafond reste 60 EUR. Bien que la proposition de loi Courbon ait été adoptée en commission (décembre 2025), elle n'a pas été formellement adoptée par le Parlement. La directive européenne (DSP3) qui permettrait 100-150 EUR existe en accord (28 novembre 2025) mais n'a pas encore été formellement adoptée et n'entrera en vigueur "probablement pas avant fin 2026". La fiche confond une intention/proposition avec une réalité juridique. Correction nécessaire : qualifier clairement qu'il s'agit d'une mesure proposée en attente d'adoption, non d'une mesure en vigueur.


### P5 -- Le droit au cash qui s'efface : fermetures de DAB et commerce sans espèces

- **Citation en cause :** paiements en espèces en France passent de 68 % à 51 % des transactions (2026)

- **Probleme :** La fiche cite 51% de paiements en espèces en 2026. Or, les données réelles montrent que le taux était de 68% en 2016, et décliné à 43% en 2024 (INSEE). Le chiffre de 51% pour 2026 n'est ni vérifié ni cohérent avec la tendance observable. La fiche extrapole sans base factuelle.

- **Verification independante :** La fiche cite 51% de paiements en espèces pour 2026, or les données INSEE/Banque de France montrent : 68% (2016) → 43% (2024), soit une décroissance régulière de ~3,1 points/an. Le chiffre de 51% pour 2026 représenterait une REMONTÉE de 8 points vs 2024, contraire à la tendance de 10 ans. Aucune source ne documente cette projection. L'extrapolation logique des données réelles donnerait ~37% en 2026, non 51%. L'incohérence factuelle est confirmée.


### P10 -- Les néobanques et la protection du client : agréments étrangers, couverture faible, médiation absente

- **Citation en cause :** Clients français avec N26 : 500 000 (à confirmer)

- **Probleme :** La fiche cite 500 000 clients français chez N26. En réalité, N26 compte 2,5 millions de clients en France en 2026, soit un facteur 5 d'écart. De plus, Revolut en compte 2,8 millions, ce qui contredit aussi l'affirmation implicite que N26 serait significativement plus petit que Revolut. La fiche utilise des données extrêmement datées.

- **Verification independante :** L'incoherence est CONFIRMEE : N26 compte 2-2,5 millions de clients français en 2026, non 500 000. Cet écart énorme (facteur 4-5x) rend le chiffre 500 000 factuellement incorrect et dangereusement dépassé. CEPENDANT, la correction proposée par l'autre IA contient une erreur majeure propre : elle affirme Revolut = 2,8 millions de clients, tandis que les données actuelles (juillet 2026) montrent 8 millions. La fiche doit être corrigée sur N26 (500 k → ~2,5 M) mais aussi sur Revolut si présent (2,8 M → 8 M).



## chantier/problemes-33-fiches.md

### P1 -- Nitrites dans la charcuterie : entre tolérance et cancer colorectal

- **Citation en cause :** France : 730 000 cancers colorectaux par an, facteur de risque nitrites : +18%

- **Probleme :** Le chiffre de 730 000 cancers colorectaux par an en France est erroné. Les données épidémiologiques actuelles (Santé Publique France, INCa 2024) montrent environ 47 500-47 800 cas annuels en France, soit 15 fois moins. Cette erreur invalide les calculs de surmortalité attribuables aux nitrites.

- **Correction proposee :** Remplacer '730 000 cancers colorectaux par an' par '47 500-47 800 cancers colorectaux par an' et recalculer la surmortalité attribuable proportionnellement.

- **Verification independante :** Le chiffre "730 000 cancers colorectaux par an en France" est factuellement erroné. Les données épidémiologiques officielles (Santé Publique France, INCa 2023) établissent environ 47 500-47 582 cas annuels, soit un facteur d'erreur de ~15. Cette erreur invalide complètement la simulation et les calculs de surmortalité attribuable aux nitrites qui en dépendent.


### P2 -- Néonicotinoïdes sur betteraves : dérogations illégales répétées

- **Citation en cause :** CJUE (avril 2022) et Conseil d'État (mai 2023) : ces dérogations sont illégales.

- **Probleme :** La date de la décision CJUE est incorrecte. La Cour de Justice de l'Union européenne a statué le 19 janvier 2023, non en avril 2022. Le Conseil d'État, lui, a jugé le 3 mai 2023.

- **Correction proposee :** Remplacer 'CJUE (avril 2022)' par 'CJUE (19 janvier 2023)' pour que la chronologie soit exacte.

- **Verification independante :** La fiche P2 cite « CJUE (avril 2022) » alors que la Cour de Justice de l'Union européenne a statué le 19 janvier 2023 (affaire C-882/21). La date d'avril 2022 est inexacte — la décision réelle est postérieure d'environ 9 mois. Le Conseil d'État a bien jugé en mai 2023 (date correcte). La correction proposée restaure la chronologie factuelle exacte des deux jugements.


### P5 -- Dioxyde de titane (E171) : une interdiction française précoce, mal appliquée

- **Citation en cause :** UE : débat depuis 2012, interdit... 2026 seulement (2024 adoption Règlement UE 2024/3190)

- **Probleme :** Le Règlement UE 2024/3190 concerne exclusivement le BPA (bisphénol A) et autres bisphénols, non le dioxyde de titane (E171). L'E171 a été interdit par le Règlement UE 2022/63 du 14 janvier 2022, applicable depuis le 7 août 2022, bien avant 2026. Le fichier confond deux réglementations distinctes.

- **Correction proposee :** Clarifier : 'E171 interdit UE par Règlement 2022/63 depuis 7 août 2022' et distinguer du 'Règlement 2024/3190 qui concerne le BPA et bisphénols (application 20 juillet 2026)'.

- **Verification independante :** Confusion factuelle confirmée. La fiche associe le Règlement UE 2024/3190 à l'E171, alors que : (1) l'E171 a été interdit par Règlement UE 2022/63 depuis le 7 août 2022 ; (2) le Règlement 2024/3190 du 19 décembre 2024 porte exclusivement sur le BPA et autres bisphénols (BPS, BPAF, TBBPA), pas sur l'E171. Deux réglementations distinctes, deux domaines d'application différents. La correction proposée (clarifier « E171 interdit UE par Règlement 2022/63 depuis 7 août 2022 » et distinguer du « Règlement 2024/3190 qui concerne le BPA et bisphénols ») est factuelle et indispensable.


### P10 -- Glyphosate : promesse 2017 d'interdiction, abandonnée 2019, UE renouvelle

- **Citation en cause :** UE renouvelle autorisation 2022 (5 ans).

- **Probleme :** Double erreur : la Commission européenne a renouvelé l'autorisation du glyphosate le 16 novembre 2023 (non 2022) pour une durée de 10 ans (non 5 ans), avec une homologation jusqu'en 2033.

- **Correction proposee :** Remplacer 'UE renouvelle autorisation 2022 (5 ans)' par 'UE renouvelle autorisation 16 novembre 2023 (10 ans jusqu'à 2033)'.

- **Verification independante :** Double erreur factuelle confirmée : (1) Date : 2022 vs 16 novembre 2023 — (2) Durée : 5 ans vs 10 ans jusqu'à 2033. Recherche web indépendante (Commission européenne, Touteleurope, Novethic) valide la correction proposée sans ambiguïté.



## chantier/problemes-34-fiches.md

### P5 -- L'étiquetage choc sur l'ultra-transformé : leçons Chili

- **Citation en cause :** Résultat long terme (5+ ans) : obésité même trajectoire (https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1004463)

- **Probleme :** L'article cité (PLOS Medicine 1004463) porte sur 'Decreases in purchases... 3 years after implementation' (données sur 3 ans, non 5+ ans) et mesure les changements d'achats, non l'impact sur l'obésité sur long terme. Il y a inadéquation entre la conclusion affirmée (obésité même trajectoire 5+ ans) et ce que l'article démontre réellement (changements d'achats sur 3 ans).

- **Verification independante :** L'article PLOS Medicine 1004463 cité porte sur les changements d'achats alimentaires sur 3 ans après l'implémentation (2016-2019), non sur l'obésité sur 5+ ans. Le titre exact est « Decreases in purchases... 3 years after implementation ». L'article ne mesure pas l'obésité; les auteurs reconnaissent explicitement que « des recherches futures seront nécessaires » pour confirmer les bénéfices sanitaires. La fiche surdéduit en affirmant « obésité même trajectoire (5+ ans) » sur cette base. Vérification web confirme : aucune étude long terme (5+ ans) sur l'impact de l'étiquetage chilien sur l'obésité n'existe actuellement.



## chantier/problemes-35-fiches.md

### P1 -- La PAC paie à l'hectare, prime l'agrandissement, affame les petits

- **Citation en cause :** Plus de 75 % des subventions PAC (>3,5 Md€/an en France) vont aux 20 % les plus gros exploitants.

- **Probleme :** Le pourcentage d'aides PAC concentrées chez les 20% des plus gros exploitants en France est cité à 75%, mais les sources officielles (ministère de l'Agriculture, SAFER) indiquent que ce sont 51-54% des aides directes qui sont captés par 20% des bénéficiaires en France.

- **Verification independante :** La citation du fichier P1 indique "Plus de 75%" de subventions PAC vers les 20% des plus gros exploitants. Les sources officielles (Ministère Agriculture France, Chambres d'Agriculture) convergent vers 51-54% pour la France. Le chiffre de 75-80% s'applique à l'UE dans son ensemble, non à la France. C'est une surestimation de 21-24 points de pourcentage sur un facteur numéré clé de l'argument.


### P5 -- Foncier agricole inaccessible : SAFER opaques + montages sociétaires contournent les droits de préemption

- **Citation en cause :** Prix moyen terre agricole France = 6200 €/ha (mai 2025)

- **Probleme :** Le prix cité est daté de mai 2024 (6200 €/ha). En mai 2025, le prix officiel SAFER publié le 21 mai 2025 était de 6460 €/ha, soit un écart de 260€/ha (+4%). Le chiffre 6200€ ne correspond pas aux données de mai 2025.

- **Verification independante :** Le prix 6200 €/ha cité dans P5 est daté de mai 2024 (publié 22 mai 2024 par SAFER), pas mai 2025. Le prix officiel SAFER pour mai 2025 (publié 21 mai 2025) était 6460 €/ha. Écart confirmé : +260 €/ha (+4.2%). C'est une erreur de datation factuelle.



## chantier/problemes-36-fiches.md

### P2 -- Petites lignes fermées, puis routes engorgées

- **Citation en cause :** Cas : réouverture ligne Nantes/Angers (130 km, fermée 1990).

- **Probleme :** La ligne Nantes-Angers n'a jamais été fermée en 1990. Elle est actuellement active avec des liaisons TER et Intercités régulières. La fiche utilise cet exemple pour illustrer une réouverture potentielle de ligne fermée, mais c'est une ligne qui n'a jamais connu de fermeture à cette date.

- **Verification independante :** La ligne Nantes-Angers est actuellement active (TER + Intercités réguliers en 2026). Aucune preuve de fermeture en 1990. L'exemple donné dans la fiche comme cas de « réouverture » repose sur un fait inexact — cette ligne n'a jamais fermé. Confusion probable avec ligne Nantes-Châteaubriant (fermée 1980, réouverte 2014). L'allégation de l'IA précédente est correcte : c'est une inexactitude factuelle majeure.


### P3 -- Trains régionaux vides le midi, bondés le matin/soir

- **Citation en cause :** Réseau TER national : 12 000 trains/jour, facteur charge moyen 38 %.

- **Probleme :** Le chiffre de 12 000 trains TER par jour est inexact. Selon SNCF, le réseau TER mobilise quotidiennement 5,700 trains (pas 12 000), transportant environ 800 000 passagers par jour.

- **Verification independante :** Le chiffre de 12 000 trains TER/jour est inexact. Source officielle SNCF/Wikipedia cite 5 700 trains TER quotidiens. Écart documenté : +110 % (double du réel). Erreur factuelle majeure, non mineure, qui invalide les ordres de grandeur des simulations basées sur ce paramètre.


### P4 -- Fret ferroviaire effondré : 18 % (2000) vers 9 % (2024)

- **Citation en cause :** Part modale fret rail divisée par deux en 24 ans (18 % à 9 %).

- **Probleme :** La part modale du fret ferroviaire en 2000 était 17%, pas 18%. Les sources de l'Autorité de Transports confirment 17% pour l'an 2000, 20% pour 1990, et 9% pour 2024. Le chiffre 18% confond peut-être avec l'objectif de 18% prévu pour 2030.

- **Verification independante :** La fiche P4 contient une erreur factuelle : elle cite "18 %" pour l'année 2000, alors que l'Autorité de Régulation des Transports et les données gouvernementales officielles confirment 17% pour 2000 (et non 18%). Le chiffre de 2024 (9%) est exact. Le "18%" confond probablement avec l'objectif stratégique 2030 de porter le fret ferroviaire à 18%. Correction requise : remplacer "(18 % à 9 %)" par "(17 % à 9 %)". Source : ART, ministère Transports, statistiques développement durable.</anison>



### P7 -- ZFE excluent les pauvres sans alternatives fiables

- **Citation en cause :** Zones à faibles émissions (ZFE) interdisent voitures pré-2015 dans 15 villes françaises (Lyon, Paris, Grenoble, Strasbourg, etc.).

- **Probleme :** Le nombre de 15 villes est sous-estimé. En 2026, 11 métropoles françaises disposent d'une ZFE active avec verbalisation (Paris, Lyon, Marseille, Toulouse, Nice, Montpellier, Strasbourg, Grenoble, Rouen, Reims, Saint-Étienne), et 42-43 agglomérations sont globalement concernées, dont 7 nouvelles depuis janvier 2026.

- **Verification independante :** L'allégation d'incohérence est fondée. Le fichier P7 affirme "15 villes françaises" avec ZFE, or en juillet 2026, il existe 11 métropoles avec restrictions ZFE actives et verbalisation (Paris, Lyon, Marseille, Toulouse, Nice, Montpellier, Strasbourg, Grenoble, Rouen, Reims, Saint-Étienne), et environ 30-42 agglomérations au total selon le critère d'application. Le chiffre de 15 est donc sous-estimé. La correction proposée par l'IA précédente est manquante, mais l'identification du problème factuel est exacte.



## chantier/problemes-37-fiches.md

### P8 -- ANEF : Administration des étrangers bridée par les bugs d'un logiciel de 100 millions

- **Citation en cause :** En mai 2026, le Conseil d'État ordonne au gouvernement de corriger 4 dysfonctionnements structurels: livraison automatique des certificats de prolongation, modification du dossier après soumission, fin des refus basés sur un document antérieur non retourné, accès garanti via alternatives numériques.

- **Probleme :** Le document affirme que le Conseil d'État ordonne de corriger 4 dysfonctionnements. Or, la décision n° 502860 du Conseil d'État du 5 mai 2026 sanctionne et ordonne de corriger 7 dysfonctionnements, non 4. Les 4 éléments cités sont une sélection partielle des 7 dysfonctionnements officiellement sanctionnés.

- **Verification independante :** Recherches web confirmant que la décision n° 502860 du 5 mai 2026 identifie 7 dysfonctionnements au total. Le fichier en énumère seulement 4, ce qui est une sélection partielle et une imprécision factuelle. L'assertion de l'autre IA est correcte : il y a 7 dysfonctionnements identifiés/sanctionnés, non 4.


### P9 -- La dépendance aux ESN et aux cabinets de conseil : McKinsey-gate informatique

- **Citation en cause :** Statut ⬜ En crise (2025-2026) ; le gouvernement a plafonné les contrats de conseil à 2 millions (juillet 2024) ; mesure fragmentaire, pas encore impactée.

- **Probleme :** Le document date le plafond à 2 millions d'euros des contrats de conseil à « juillet 2024 ». Or, ce plafond a été annoncé et mis en place « dès 2023 » selon les sources officielles du gouvernement (circulaire du ministre Stanislas Guerini en juillet 2022 pour une mise en œuvre « à partir de 2023 »). La date est inexacte par un an.

- **Verification independante :** La fiche P9 date le plafond de 2 millions d'euros à « juillet 2024 ». Or, le ministre Stanislas Guerini a officiellement annoncé cette mesure en juillet 2022, avec mise en œuvre à partir de 2023. La date est inexacte par 1-2 ans (écart substantiel pour un fait gouvernemental daté). Sources vérifiées : France Bleu, CNEWS (28 juillet 2022), AEF Info, Vie-Publique.



## chantier/problemes-38-fiches.md

### P4 -- Portes tournantes des régulateurs : ARCEP, CSA, AMF vers les régulés

- **Citation en cause :** Google emploie un ancien directeur général de l'ARCEP (Benoît Loutrel).

- **Probleme :** Benoît Loutrel a quitté Google quelques mois après y être arrivé et a rejoint Arcom (Autorité de régulation de l'audiovisuel) en 2021, où il préside le groupe de travail 'Plateformes en ligne'. En juillet 2026, il n'est plus employé par Google mais par Arcom.

- **Correction proposee :** Remplacer par : 'Benoît Loutrel, ancien directeur général de l'ARCEP, a brièvement travaillé chez Google avant de rejoindre Arcom en 2021 où il dirige le groupe de travail Plateformes en ligne.' Ou retirer cet exemple qui n'est plus actuel.

- **Verification independante :** La fiche P4 contient une incoherence factuelle. Elle affirme au present "Google emploie un ancien directeur general de l'ARCEP (Benoit Loutrel)" alors que Loutrel a quitte Google en 2017 apres quelques mois seulement, et travaille depuis 2021 pour Arcom. En juillet 2026, il n'est plus employe par Google depuis plus de 8 ans. La citation est inexacte et presentiste un fait historique comme actuel.


### P2 -- Cabinets de conseil à l'État : 2,5 milliards sur quatre ans, stratégie captage

- **Citation en cause :** Dépense 2024 : 440 M€.

- **Probleme :** Selon les données officielles 2024, les dépenses pour des cabinets de conseil atteignent 96,1 millions d'euros (après une hausse de 31% depuis 2023). Le chiffre de 440 M€ est significativement incorrect. L'année record était 2021 avec 271 M€.

- **Correction proposee :** Corriger : 'Dépense 2024 : 96,1 M€ (hausse de 31% vs 2023). Note : le record historique était en 2021 avec 271 M€.'

- **Verification independante :** Le chiffre "440 M€" pour 2024 est factuellement incorrect. Les données officielles du PLF 2026 établissent 96,1 M€ (hausse +31% vs 2023). Le record historique documenté est 271 M€ en 2021. La correction proposée (96,1 M€) est exacte et sourçable.



## chantier/problemes-39-fiches.md

### P2 -- Le bilan de mi-mandat obligatoire par un tiers indépendant

- **Citation en cause :** Carney en 2026 (après 9 mois) : 9% seulement

- **Probleme :** Mark Carney a pris ses fonctions de Premier ministre du Canada le 14 mars 2025. En avril 2026 (date du rapport Polimètre cité), il avait environ 13 mois de mandat, non pas 9 mois. Le délai chronologique est inexact.

- **Verification independante :** Mark Carney a pris ses fonctions de Premier ministre le 14 mars 2025. Le rapport Polimètre cité (9%) a été publié le 27 avril 2026, soit environ 13 mois et 13 jours après sa nomination, non pas 9 mois. La formulation "Carney en 2026 (après 9 mois)" est chronologiquement inexacte.


### P5 -- Le train de vie des cabinets et élus : transparence intégrale des frais

- **Citation en cause :** Au Royaume-Uni, le scandale IPSA 2009 (MPs claims £180M pour frais de logement, véhicules, décoration) a forcé réforme

- **Probleme :** Le chiffre £180M n'est pas attribuable au scandale IPSA 2009. Le scandale 2009 concernait des frais sans montant global spécifié de £180M. Le chiffre £180M provient d'une analyse récente (août 2019 à juillet 2022) montrant les dépenses cumulées des députés et pairs, non les frais de 2009 incriminés dans le scandale.

- **Verification independante :** L'IA précédente a correctement identifié une inexactitude : le chiffre £180M est attribué au scandale IPSA 2009, alors qu'il provient d'une analyse openDemocracy portant sur la période août 2019 - juillet 2022. Le scandale de 2009 concernait environ £1,3M de frais mal réclamés ordonnés d'être remboursés, pas £180M. La fiche confond deux périodes éloignées de 13 ans.


### P6 -- L'obligation de résultat sur les objectifs chiffrés annoncés

- **Citation en cause :** Loi de programmation militaire 2024-2030, budget 413 EUR M votée 2023

- **Probleme :** Le budget de la LPM 2024-2030 est de 413.3 milliards d'euros (413.3 Md€ ou 413.3 billion EUR), non 413 millions d'euros (EUR M). L'utilisation de 'EUR M' signifie millions en notation financière standard, ce qui sous-estime le budget par un facteur 1000. La fiche aurait dû indiquer '413 milliards d'euros' ou '413 Md€'.

- **Verification independante :** La fiche P6 cite "budget 413 EUR M" (millions d'euros). Or, la LPM 2024-2030 a été adoptée pour 413.3 milliards d'euros. "EUR M" (millions) diffère de "Md€" (milliards) par un facteur 1000. L'erreur est confirmée et majeure : elle sous-estime le budget de la défense d'un facteur 1000.


### P3 -- La responsabilité réelle des ministres : réforme de la Cour de justice de la République

- **Citation en cause :** la Cour de justice de la République a reçu 1000+ plaintes, renvoyé 38 à l'enquête, enregistré 6 procès et condamné 5 ministres

- **Probleme :** Le chiffre de 5 condamnations est obsolète en 2026. Depuis 1993, au moins 6 ministres ont été condamnés : Edmond Hervé (1999), Michel Gillibert (2004), Charles Pasqua (2010), Christine Lagarde (2016), François Léotard (2021) et Kader Arif (2022). Le dernier chiffre de 5 ne reflète pas les condamnations de Léotard et Arif.

- **Verification independante :** Le chiffre de 5 condamnations est obsolète. Au moins 6-7 ministres ont été jugés culpables depuis 1993 en 2026, incluant Kader Arif (2022) et François Léotard (2021), absents du comptage. La fiche ne reflète pas l'état réel du bilan CJR à jour en 2026.



## chantier/problemes-4-fiches.md

### P1 -- Surpopulation carcérale record et conditions de détention

- **Citation en cause :** Piste A, 🇳🇱 Pays-Bas (réduction pénale) : ... Résultat : densité <75 %.

- **Probleme :** La fiche affirme que les Pays-Bas ont une densité carcérale inférieure à 75%. Or, les données actuelles (2025) montrent une densité de 94-95%, loin du seuil de 75% mentionné. Les Pays-Bas n'ont jamais atteint ce niveau de densité si basse dans les années 2010-2025.

- **Verification independante :** La fiche P1 affirme "Résultat : densité <75 %" pour les Pays-Bas sans préciser de date. Les données actuelles (janvier 2025, soit 6 mois avant juillet 2026 où nous sommes) montrent une densité carcérale de 94-95%, bien loin de 75%. Bien que cette affirmation ait été exacte en 2018 (68.1%), elle n'est plus valide en 2025-2026 et donne une image fausse de l'état actuel du système pénitentiaire néerlandais. C'est une incoherence factuellement confirmée : la fiche décrit un "résultat" qui n'existe plus.


### P6 -- Récidive structurelle et échec insertion

- **Citation en cause :** Le problème (France, 2016-2026) : Taux récidive 45 % dans 5 ans, 60 % dedans 10 ans.

- **Probleme :** Les chiffres de récidive cités ne correspondent pas aux délais mentionnés. Les données du ministère de la Justice montrent 62,9% de récidive dans les 5 ans (pas 45%), tandis que le 45% correspond plutôt à la récidive chez les jeunes (18-24 ans) dans l'année suivant la libération. Le 60% ne correspond à aucune période standard.

- **Verification independante :** Les chiffres cités (45% en 5 ans, 60% en 10 ans) sont factuellement erronés selon les données officielles du ministère de la Justice. Le 45% correspond à la récidive des jeunes 18-24 ans dans l'année post-libération, non 5 ans. Le taux réel à 5 ans est 62.9% (61.6% ajusté), soit 17-38 points de plus. Le 60% approxime le 59.4% à 4 ans, pas 10 ans. Aucun chiffre officiel n'existe pour 10 ans (statistiques arrêtées à 5 ans). C'est une incohérence factuelle majeure justifiant une correction.


### P6 -- Récidive structurelle et échec insertion

- **Citation en cause :** Travail carcéral : 25-35 % détenu, salaire ~€3-5/jour (non viable sortie).

- **Probleme :** Le salaire des détenus est très sous-estimé dans la fiche. Les données montrent que le salaire horaire est de 2-5€/heure (soit 16-40€/jour pour une journée complète), ou en moyenne 337€/mois (environ 16-17€/jour). La fiche cite ~€3-5/jour ce qui correspond à des salaires horaires, pas journaliers. Le salaire réel est 3-5 fois plus élevé que le chiffre annoncé.

- **Verification independante :** Incoherence confirmée. La fiche P6 cite "salaire ~€3-5/jour" pour le travail carcéral, or les données officielles du Ministère de la Justice (juillet 2026) montrent que les détenus qui travaillent reçoivent en moyenne 337€/mois, soit 16-17€/jour. Le chiffre annoncé est donc 3-4 fois sous-estimé. Même en interprétant le salaire horaire (45% du SMIC = 5-5,5€/heure), la fiche demeure inexacte pour le salaire journalier réel observé.



## chantier/problemes-40-fiches.md

### P7 -- Contribution sur superdividendes fléchée retraites: simulation candide vs volatilité économique

- **Citation en cause :** Loi 2021 France taxe exceptionnelle versements exceptionnels dividendes: 20% si versement > 2x dividende moyen

- **Probleme :** La fiche date cette taxe de 2021, mais elle a été adoptée le 12 octobre 2022 comme amendement au projet de loi de finances pour 2023. De plus, le mécanisme est plus complexe que décrit: elle s'applique aux entreprises avec 750M+ EUR de chiffre d'affaires, et impose un taux de 35% (soit +5 points du PFU passant de 30% à 35%) sur les dividendes dépassant 20% de la moyenne des 5 années précédentes, pas 20% sur montants > 2x la moyenne.

- **Verification independante :** Quatre erreurs factuelles avérées : (1) Date « Loi 2021 » fausse, c'est octobre 2022 ; (2) Taux « 20% » faux, c'est 35% (PFU +5pts) ; (3) Seuil « >2x dividende moyen » faux, c'est « 1,2x » (20% au-dessus de la moyenne 2017-2021) ; (4) Champ d'application incomplet (>750M EUR CA non mentionné). Vérification confirmée par amendement n°3486 PLF 2023, sources fiscales légales et officielles françaises.



## chantier/problemes-41-fiches.md

### P3 -- Les tours de passe-passe budgétaires : où disparaissent les milliards ?

- **Citation en cause :** Les « dépenses fiscales » (exonérations, réductions, niches) représentent 150+ milliards d'euros (à confirmer, source budgetaire officielle).

- **Probleme :** Le chiffre de 150+ milliards d'euros en dépenses fiscales ne correspond pas aux données officielles. Selon les budgets 2022-2025 : 85,6 milliards en 2022, 81,3 milliards en 2023, 89,4 milliards en 2024. L'écart est de ~60 milliards d'euros, soit un surEstimé de 70% par rapport à la réalité.

- **Verification independante :** Le chiffre de "150+ milliards" pour les dépenses fiscales françaises est factuellement erroné. Les données officielles de la Cour des comptes et budget.gouv.fr montrent: 2022=85,6 Md€, 2023=81,3 Md€, 2024=89,4 Md€, 2025=91,83 Md€. Le chiffre 150+ représente une surestimation d'environ 60-65 milliards (65-70% d'écart). Aucune donnée officielle n'attaque ou ne dépasse les 103 milliards même avec l'ancienne méthode de calcul TVA. L'incoherence est confirmée et critique.



## chantier/problemes-42-fiches.md

### P9 -- Les frais de mandat parlementaire (AFM) : audit aléatoire, hausse régulière, doutes structurels

- **Citation en cause :** AFM 2024 : 5845 euros mensuels députés (augmentée janvier 2024 de +300 euros). Sénateurs : 6600 euros mensuels (novembre 2023 +700 euros). Total annuel pour 925 parlementaires : 64,9 millions euros avancé sans justificatif systématique.

- **Probleme :** Le système AFM (Avance de Frais de Mandat) décrit n'existe plus depuis le 1er janvier 2026. Il a été remplacé par la Dotation de Fonctionnement Parlementaire (DFP) fixée à 7,238.04 euros/mois pour les députés. Les montants et calculs financiers basés sur l'AFM sont devenues obsolètes en 2026.

- **Correction proposee :** Mettre à jour la fiche pour refléter le remplacement de l'AFM par la DFP depuis janvier 2026 (7,238.04 euros/mois pour les députés métropolitains), et reviser tous les calculs financiers en conséquence.

- **Verification independante :** AFM remplacé le 1er janvier 2026 par DFP (7 238,04 € députés métropole). Fiche P9 décrit AFM 2024 (5845 €) comme système actuel, avec calculs et montants totalement obsolètes. Pas une nuance : changement officiel d'architecture parlementaire 6 mois avant la date actuelle (juillet 2026).


### P10 -- L'IRFM d'hier aux dérives d'aujourd'hui : indemnité érodée, remplacée par niches

- **Citation en cause :** Piste A : Fusion IRFM + allocations déplacement + frais représentation en enveloppe unique transparente (7000 euros/mois) pour tous les élus, audit 100%, interdiction cumul > 10000 euros bruts/mois tous mandats.

- **Probleme :** La fusion proposée (Piste A) s'est déjà réalisée le 1er janvier 2026 via la création de la DFP (Dotation de Fonctionnement Parlementaire). La fiche présente cette réforme comme hypothétique alors qu'elle s'est concrétisée. De plus, le montant proposé (7000 euros) était très proche du montant réel implémenté (7,238.04 euros).

- **Correction proposee :** Reconnaître que la fusion IRFM + allocations s'est déjà réalisée en janvier 2026 via la DFP. Analyser si la réforme concrétisée correspond aux objectifs énoncés ou si d'autres ajustements sont nécessaires.

- **Verification independante :** La DFP (Dotation de Fonctionnement Parlementaire) a bel et bien été créée le 1er janvier 2026 avec un montant de 7,238.04 euros pour les députés métropolitains, correspondant quasi-exactement au montant hypothétique (7,000€) de la Piste A. La fiche P10 présente cette réforme comme hypothétique alors qu'elle s'est concrétisée depuis 6 mois. Nuance : ce n'est pas une fusion IRFM (disparue en 2017) mais AFM+DMD, ce qui ne change pas le diagnostic fondamental que la piste proposée a été implémentée. La fiche doit être mise à jour pour analyser si la DFP réelle satisfait les objectifs énoncés.



## chantier/problemes-43-fiches.md

### P7 -- Agences et opérateurs de l'État : 1 200 organismes, doublons documentés, zéro rationalisation

- **Citation en cause :** L'IGF (2012) documentait 1 200 agences [...] Personnel agences/opérateurs : 450 000 agents [...] Budget agrégé : 107 Md€/an rapports anciens

- **Probleme :** Les données du rapport IGF 2012 (1 200 agences, 107 Md€) sont gravement dépassées. Selon le PLF 2026, l'État compte 431 opérateurs employant 401 310 agents pour 73 Md€ de financement public. Utiliser des chiffres de 2012 pour justifier une mesure en 2026 induit une vision distordue de la situation actuelle.

- **Correction proposee :** Selon le PLF 2026 (dernière donnée officielle), il existe 431 opérateurs de l'État employant 401 310 agents équivalents temps plein et bénéficiant de 73 Md€ de financement public, contre 483 opérateurs en 2020.

- **Verification independante :** La fiche P7 contient des affirmations matériellement fausses : elle prétend "aucune fusion depuis 20 ans, zéro rationalisation", alors que les opérateurs de l'État sont passés de 649 (2008) à 431 (2026) — une réduction de 34%. De plus, elle mélange les périmètres : 1 200 "agences" (2012, périmètre large) vs 431 "opérateurs" (2026, périmètre étroit), ce qui n'est pas comparable. Enfin, les 107 Md€ cités correspondent au périmètre large 2012, pas aux opérateurs seuls. Les données datées ne sont pas le seul problème : la fiche utilise des chiffres incomparables et des affirmations inexactes pour justifier son diagnostic. La critique pointe juste ces incohérences, bien qu'elle commette elle-même une confusion de périmètres en propageant le parallèle 107 Md€ vs 73 Md€ sans l'expliciter.


### P9 -- Contrats aidés et formations CPF : organismes de formation opportunistes

- **Citation en cause :** Taux non-achèvement formations CPF : 35-45 %

- **Probleme :** Les données actuelles du Ministère du Travail indiquent un taux d'abandon d'environ 10-15% (1 formation sur 10 abandonnée selon certaines sources, 15% selon d'autres données récentes). Le taux de 35-45% cité est surévalué d'au moins 2 à 4,5 fois par rapport aux données actuelles.

- **Correction proposee :** Taux non-achèvement formations CPF : 10-15 % selon le Ministère du Travail (source: données 2025-2026)

- **Verification independante :** Le taux de 35-45% dans P9 est factuellement surévalué. Toutes les sources officielles (Institut du Travail, DARES, Ministère du Travail, Caisse des Dépôts) convergent sur ~11% d'abandon réel. La correction proposée (10-15%) s'appuie sur des données actuelles du Ministère du Travail et représente l'ordre de grandeur exact. Le 35% qui apparaît dans certaines sources est une proportion de raisons d'abandon (qualité), non le taux global. Surévaluation confirmée : facteur 3-4x.


### P10 -- Principe : toute subvention naît avec sa date de mort et son évaluation

- **Citation en cause :** Aux Pays-Bas, les spending reviews obligatoires redéploient 5 % du budget public tous les 5 ans

- **Probleme :** Le système néerlandais des IBOs (Interministerial Policy Research) impose plutôt une réduction d'au moins 10 à 20 pour cent par dispositif révisé, pas un redéploiement global de 5% tous les 5 ans. Les IBOs sont conduites sur environ 6-9 mois et couvrent tous les domaines de dépense, mais sans ciblage d'un taux fixe de 5% quinquennal.

- **Correction proposee :** Aux Pays-Bas, les spending reviews (IBOs) imposent pour chaque programme révisé au moins une option d'économies de 10 à 20%, depuis 1981, sur plus de 300 révisions menées.

- **Verification independante :** La citation « Aux Pays-Bas, les spending reviews obligatoires redéploient 5 % du budget public tous les 5 ans » est factuellement inexacte. Les sources officielles (Rijksfinancien, IMF, PEMPAL) confirment que le système réel impose une option d'économies minimales de 10 à 20 % par programme révisé, et non un redéploiement global de 5% sur un cycle de 5 ans. Les IBOs se déroulent 3-7 fois par an sans calendrier quinquennal fixe. La correction proposée (10-20% depuis 1981, 300+ révisions) est fondée factuellement.



## chantier/problemes-44-fiches.md

### P5 -- Monopoles du fret : CMA-CGM détient les routes maritimes

- **Citation en cause :** CMA-CGM contrôle 80 % du trafic conteneurs Caraïbes-Guyane-Réunion.

- **Probleme :** La recherche web révèle que CMA-CGM détient 47 % de part de marché dans le marché des Antilles (où 7 compagnies opèrent), pas 80 %. CMA-CGM est le troisième transporteur mondial, après MSC et Maersk, selon les données 2025-2026.

- **Verification independante :** Le 80% est problématique : sources web montrent que "80% des marchandises viennent de métropole/Europe" (origine géographique), pas part de marché de CMA-CGM. La fiche confond deux concepts. CMA-CGM est dominant (1er opérateur) mais aucune source ne valide "80% du trafic" ni "47%". L'incohérence est réelle, mais la correction proposée (47%) manque de source vérifiable.</anison>



### P6 -- Chômage structurel double du continent

- **Citation en cause :** Réunion 16 %, Guadeloupe +14 %, Guyane 17,5 %

- **Probleme :** INSEE Analyses Guadeloupe 2025 indique un taux de chômage de 17 % (BIT), pas 14 %. La fiche cite un taux différent de celui publié officiellement pour la même année 2025.

- **Verification independante :** INSEE Analyses Guadeloupe 2025 (source officielle) cite 17 % de taux de chômage BIT, non 14 %. Écart de 3 points. Réunion (16 %) et Guyane (~17 %) sont corrects. Correction requise : remplacer « Guadeloupe +14 % » par « Guadeloupe 17 % ».


### P8 -- Évacuations sanitaires : soins impossibles sur place

- **Citation en cause :** Moyenne évacuations/an Mayotte : 4 000 (chirurgie urgente, néonat, onco)

- **Probleme :** Le Centre Hospitalier de Mayotte et la Caisse de Sécurité Sociale de Mayotte documentent environ 1 452-1 500 demandes d'évacuations sanitaires examinées par an, pas 4 000. Le nombre a progressé de 500 en 2010 à 1 452 en 2021, sans jamais atteindre 4 000.

- **Verification independante :** Le chiffre de 4 000 évacuations sanitaires par an à Mayotte contredit directement les données officielles du Centre Hospitalier de Mayotte (1 463 en 2021, ~1 500 en moyenne) et l'évolution bien documentée (500 en 2010 → 1 452 en 2021). Aucune source administrative, académique ou sanitaire (CHM, CSSM, ARS, UNICANCER, IRD) ne mentionne 4 000 évacuations/an. L'écart est de 2,7x le chiffre réel. L'allégation d'incohérence factuelle est vérifiée et confirmée.



## chantier/problemes-45-fiches.md

### P2 -- Le sacré des 35 000 communes : la France champion de la fragmentation

- **Citation en cause :** La Suède : 2 600 communes (population 10 millions).

- **Probleme :** Le nombre de communes suédoises est drastiquement surévalué. La Suède compte 290 communes, non 2 600 (facteur d'erreur ~9x).

- **Verification independante :** La Suède compte 290 communes depuis 1974 (confirmé par SCB, Wikipedia, Statoids 2026), non 2 600. Facteur d'erreur ~9x. L'allégation est correcte : la fiche P2 contient une incoherence factuelle grave.


### P2 -- Le sacré des 35 000 communes : la France champion de la fragmentation

- **Citation en cause :** La France : 34 875 communes (population 68 millions).

- **Probleme :** La population française est sous-estimée. INSEE indique 69,1 millions d'habitants au 1er janvier 2026, non 68 millions.

- **Verification independante :** La fiche P2 cite "68 millions d'habitants" en France. Or INSEE indique 69,1 millions au 1er janvier 2026, soit 1,1 million d'habitants de différence (-1,6% sous la réalité). C'est une erreur factuelle mesurable, non une nuance mineure. La citation devrait être corrigée à "69,1 millions" ou "environ 69 millions".


### P6 -- Fusion des régions 2015 : les économies promises jamais venues

- **Citation en cause :** Cour des Comptes 2018 : zéro économies.

- **Probleme :** Le rapport de la Cour des Comptes sur les fusions régionales a été publié en septembre 2019 (couvrant 2015-2018), non en 2018.

- **Verification independante :** L'incoherence alléguée est confirmée. La Cour des Comptes n'a pas publié son rapport sur les fusions régionales en 2018 mais en septembre 2019. La fiche écrit "Cour des Comptes 2018" suggérant une publication en 2018, ce qui est factuellement faux. Le diagnostic "zéro économies" est exact, seule la date du rapport est erronée.



## chantier/problemes-46-fiches.md

### P7 -- Le service civique à 620 euros : un engagement au lance-pierre

- **Citation en cause :** SMIC net 2026 : 950€

- **Probleme :** Le SMIC net 2026 est en réalité environ 1 477,93€ (depuis 1er juin 2026), non 950€. Écart de ~530€.

- **Correction proposee :** SMIC net 2026 : 1 478€ environ (net après cotisations sociales)

- **Verification independante :** SMIC net 2026 officiellement 1 477,93€ depuis 1er juin. Fiche cite 950€ : écart -527,93€ (50% erreur). Confirmation : chiffre fiche est faux. Correction : 1 478€ environ.


### P6 -- Les jobs étudiants qui cassent les études

- **Citation en cause :** Bourse insuffisante (160€ échelon 0 en 2026, non-indexée depuis 5 ans)

- **Probleme :** Il n'existe pas de bourse à l'échelon 0 en France. Les étudiants échelon 0 ne reçoivent aucune allocation de bourse.

- **Correction proposee :** L'échelon 0 n'ouvre droit à aucune bourse. Le premier échelon avec bourse est l'échelon 1.

- **Verification independante :** L'échelon 0 de bourses d'études en France ne donne droit à AUCUNE allocation monétaire (0€). Les étudiants échelon 0 reçoivent seulement une exemption de frais d'inscription/CVEC. Le montant de 160€ cité dans le fichier est factuellement inexact. L'auteur confond probablement avec l'échelon 0 bis (1 454€/an en 2026-2027, soit ~113€/mois). Cette incohérence mérite correction : soit préciser "échelon 0 bis" avec un montant exact, soit reconnaître que l'échelon 0 n'offre zéro aide monétaire.


### P5 -- La santé mentale étudiante : 1 psychologue pour 15 000 étudiants

- **Citation en cause :** 2,8 M étudiants en France

- **Probleme :** Le nombre d'étudiants en France en 2026 est environ 3 millions (3.03M minimum), non 2,8M. Ce chiffre 2,8M était une projection pour 2021.

- **Correction proposee :** Environ 3 millions d'étudiants en France en 2026

- **Verification independante :** Le chiffre de 2,8 M étudiants est inexact pour 2026. En juillet 2026, le nombre réel est 3,05 millions (3 046 800), soit 250 000 étudiants de plus. Ce chiffre de 2,8 M correspondait à la réalité de 2021, non à 2026. L'incoherence est confirmée et non-négligeable (écart de ~9 %). Impact: le ratio psychologues nécessaires passe de 186 à 203, augmentant légèrement le surcoût estimé.


### P5 -- La santé mentale étudiante : 1 psychologue pour 15 000 étudiants

- **Citation en cause :** Tentatives suicide : +200 % chez jeunes 15-25 ans en 15 ans

- **Probleme :** Ce chiffre de +200% sur 15 ans n'est pas documenté dans les sources vérifiées. Les données publiques montrent +30% entre 2019-2021 (2 ans), +76% chez 20-24 ans depuis 2019 (7 ans), mais pas +200% sur période complète.

- **Correction proposee :** Reformuler avec données documentées : augmentations significatives (+30% en 2 ans, +76% pour certains groupes d'âge en 7 ans)

- **Verification independante :** Le chiffre de "+200% sur 15 ans" n'est documenté dans AUCUNE source officielle accessible (Santé Publique France, DREES, data.gouv). Les données réelles montrent +50% en 4 ans (2017-2021) et +80% chez femmes sur 11 ans (2010-2021), mais jamais +200% sur 15 ans. L'anomalie est confirmée sévèrement : c'est une hallucination chiffrée à corriger.



## chantier/problemes-47-fiches.md

### P1 -- Place en crèche : une loterie de l'attribution et du coût

- **Citation en cause :** Gouvernement promis 200 000 places d'ici 2030 : créées 7 200/an actuellement, il en faudrait 43 000/an

- **Probleme :** Le fiche cite 7 200 places/an comme taux actuel ("actuellement"), mais cette donnée provient de 2022-2023. Les statistiques 2024-2025 montrent un effondrement : 2 498 places en 2024 et seulement 506 places nettes en 2025. Le texte présente des données de 2022-2023 comme si elles étaient à jour en 2026, faussant le diagnostic de vitesse de création.

- **Correction proposee :** Remplacer "créées 7 200/an actuellement" par "créées 7 200/an en 2022-2023, mais seulement 506 places nettes en 2025, signalant un effondrement du rythme". Ajuster le ratio "il en faudrait 43 000/an" en fonction du rythme réel (2024-2025) qui est ~5x plus bas.

- **Verification independante :** Le fichier contient une contradiction factuelle : il mentionne à la ligne 11 les chiffres 2025 (506 places nettes, 2 600+ destructions) mais affirme à la ligne 14 que "7 200/an actuellement" sont créées. Ces données proviennent de 2022-2023 et ne reflètent pas le rythme réel de 2024-2025 (~1 500/an). En juillet 2026, "actuellement" doit signifier 2024-2025, pas 2022-2023. L'incohérence fausse le diagnostic d'urgence de réinsertion (43 000/an requis vs 1 500/an réels, soit 28x d'écart vs 6x d'écart avec le chiffre 7 200). La correction proposée est justifiée et substantielle, non une nuance mineure.


### P5 -- Pères et égalité parentale: 25 jours congé paternité vs mère 3 ans

- **Citation en cause :** Congé supplémentaire naissance (juillet 2026): 2 mois individuels + 1 mois optionnel couple (premier utilisé : 30 pères sur 100 couples)

- **Probleme :** La structure décrite ne correspond pas à la loi. Le texte suggère 2 mois garantis par parent + 1 mois optionnel couple, mais la loi réelle (Service Public, CAF, solidarites.gouv.fr) stipule que chaque parent dispose d'un droit individuel à 1 ou 2 mois (choix de 1 ou 2, non cumulatif), non-transférable. Il n'existe pas de "mois optionnel couple" séparé dans le dispositif légal.

- **Correction proposee :** Remplacer par : "Congé supplémentaire naissance (juillet 2026) : chaque parent dispose d'un droit individuel à 1 ou 2 mois (choix personnel), non-transférable, indemnisé 70% net mois 1, 60% mois 2. Peut être fractionné en 2 périodes d'1 mois. Pas de transfert possible entre parents ni de mois couple optionnel."

- **Verification independante :** La citation dans P5 décrit une structure « 2 mois individuels + 1 mois optionnel couple » qui n'existe pas en droit français. Les sources officielles (solidarites.gouv.fr, code.travail.gouv.fr) confirment que le congé supplémentaire de naissance est un droit individuel et non-transférable de 1 ou 2 mois par parent, sans mois « couple » optionnel supplémentaire. La correction proposée est conforme à la loi de juillet 2026 et l'erreur factuelle est avérée.



## chantier/problemes-48-fiches.md

### P7 -- Transmission du fonds de commerce : fiscalité et surcharge administrative

- **Citation en cause :** Droits d'enregistrement : 5,09% de la valeur du fonds

- **Probleme :** Le taux est présenté comme un taux unique 5,09%, alors qu'en 2026 le barème est progressif : 0% jusqu'à 23 000 €, 3% de 23 000 à 200 000 €, et 5% au-delà.

- **Verification independante :** Citation "Droits d'enregistrement : 5,09% de la valeur du fonds" est factuellement erronée. Le barème légal 2026 est progressif (0% ≤23k€, 3% de 23k€-200k€, 5% >200k€), pas un taux unique. Pour un fonds de 100k€, le vrai taux effectif est 2,31% (2310€), non 5,09% (5090€). La fiche surcharge l'impôt de +179% en appliquant un taux uniforme inexistant. Cette erreur de facto fausse toute la simulation de transmission (lignes 307-331), présentant une charge fiscale fictive.</anison>



### P7 -- Transmission du fonds de commerce : fiscalité et surcharge administrative

- **Citation en cause :** Plus-value professionnelle (profit de vente) : 19% IR + 16,5% prélèvements sociaux = 35,5%

- **Probleme :** Le taux des prélèvements sociaux est inexact en 2026. Depuis 2026, les prélèvements sociaux sont de 18,6% (+ 1,4 point de CSG ajouté par la LFSS 2026), ce qui donne un total de 37,6% (19% IR + 18,6% prélèvements), non 35,5%.

- **Verification independante :** Le fichier P7 cite un taux de 16,5% pour les prélèvements sociaux sur la plus-value professionnelle. Or, depuis la LFSS 2026, ce taux est passé à 18,6% (hausse +1,4 point de CSG). L'incoherence est confirmée : le total correct est 19% IR + 18,6% = 37,6%, non 35,5%. Le fichier utilise un taux obsolète.


### P9 -- Délais de paiement des grands comptes et de l'État

- **Citation en cause :** Loi LME 2008 limite délais B2B « délai de paiement compétitif » (45 jours après facture, ou délai écrit)

- **Probleme :** Le délai B2B selon la Loi LME est 60 jours maximum (date de facture) ou 45 jours fin de mois, non 45 jours après facture de manière isolée. Le fichier présente un délai inexact.

- **Verification independante :** La Loi LME 2008 fixe le délai B2B à 60 jours (date de facture) OU 45 jours fin de mois, selon contrat. Le fichier dit seulement « 45 jours après facture », omettant la modalité 60 jours et la distinction fin de mois. C'est une simplification inexacte de la disposition légale.


### P10 -- RSI/fusion régime général : de la débâcle informatique hier aux bugs persistants d'aujourd'hui

- **Citation en cause :** Régime des Travailleurs Indépendants (RSI) = caisse spéciale pour artisans/commerçants, fondée 1973, fusionnée au régime général (URSSAF) janvier 2018

- **Probleme :** Le RSI a été créé en juillet 2006 de la fusion de trois entités antérieures, non fondé en 1973. Les entités qui ont fusionné pour créer le RSI remontaient à 1973, mais le RSI lui-même date de 2006.

- **Verification independante :** Le RSI a été créé officiellement le 1er juillet 2006 (ordonnances de 2005), non fondé en 1973. Les régimes antérieurs (Cancava 1948 pour artisans, Organic 1948 pour commerçants) existaient avant, mais le RSI comme caisse unifiée est un produit de 2006. Une loi d'harmonisation progressive a débuté en 1973, mais ne constitue pas une fondation du RSI. L'affirmation « fondée 1973 » est inexacte.


### P10 -- RSI/fusion régime général : de la débâcle informatique hier aux bugs persistants d'aujourd'hui

- **Citation en cause :** 4,2 millions d'indépendants

- **Probleme :** Le chiffre des personnes gérées par le RSI était de 5,6 à 6,5 millions selon les sources, non 4,2 millions. Le fichier sous-estime significativement la base d'assurés du RSI.

- **Verification independante :** Le chiffre "4,2 millions d'indépendants" dans la fiche P10 est une sous-estimation confirmée. Les sources officielles (données cour des comptes, rapports gouvernementaux archivés) indiquent que le RSI gérait environ 6,2 à 6,5 millions d'affiliés au moment de la fusion URSSAF en janvier 2018. L'écart de 2 millions (soit 30-35% d'erreur) est significatif et factuellement vérifiable. Le texte devrait lire "6,2 millions" ou "environ 6 millions", non "4,2 millions".



## chantier/problemes-49-fiches.md

### P2 -- Monde combattant et blessés de l'armée : pensions oubliées, ONaCVG débordée

- **Citation en cause :** Allocation de reconnaissance du combattant : 8,64 EUR/mois pour vétéran sans pension d'invalidité

- **Probleme :** Le montant de 8,64 EUR/mois est inexact. Le montant réel de l'allocation de reconnaissance du combattant en 2026 est 835,64 EUR annuels, soit 69,64 EUR/mois, soit environ 8 fois supérieur au montant cité. Le montant de 8,64 EUR/mois ne correspond à aucune allocation existante en 2026.

- **Correction proposee :** Remplacer par : Allocation de reconnaissance du combattant : 69,64 EUR/mois (835,64 EUR annuels en 2026) pour vétéran sans pension d'invalidité

- **Verification independante :** Le montant indiqué (8,64 EUR/mois) est factuellement inexact. Selon les sources officielles françaises (retraitesdeletat.gouv.fr, ONaCVG juillet 2026), l'allocation de reconnaissance du combattant est de 835,64 EUR annuels, soit 69,64 EUR/mois — 8 fois le montant allégué. La correction proposée est fondée et doit être appliquée.



## chantier/problemes-5-fiches.md

### P3 -- Harcèlement scolaire en hausse

- **Citation en cause :** Signalements au 3018 : 530 en 2022 → 6 100 en 2024 (+1 052 %)

- **Probleme :** Les chiffres réels sont 25 000 appels en 2022 et 150 000 en 2024, soit un ratio ~40x supérieur aux chiffres cités. Le fichier sous-estime massivement le volume de signalements et la progression.

- **Verification independante :** La fiche P3 attribue incorrectement les chiffres 530→6 100 au « 3018 » alors qu'il s'agit de signalements judiciaires. Les vrais chiffres des appels reçus par le centre 3018 sont 25 000 en 2022 et 150 000 en 2024, soit une croissance de +500% et non +1 052%. L'erreur est une confusion entre deux métriques distinctes : appels reçus (3018) vs signalements judiciaires (procureurs). Bien que les chiffres 530 et 6 100 soient factuellement corrects pour les signalements judiciaires, leur attribution erronée à « Signalements au 3018 » constitue une incoherence factuelle majeure.


### P7 -- Santé mentale étudiante en crise

- **Citation en cause :** Accès psy universités : 1 psy/1500 étudiants (recommandation OMS : 1/300)

- **Probleme :** Le ratio réel en France est 1 psy/30 000 étudiants. Le chiffre 1/1500 s'applique aux États-Unis, pas à la France. Le fichier confond les deux pays ou cite une donnée incorrecte.

- **Verification independante :** La fiche confond deux données distinctes sans les clarifier. Selon Nightline (association française santé mentale étudiante), le ratio réel en France est bien 1 psy/30 000 étudiants. Le ratio 1 psy/1500 étudiants s'applique effectivement aux États-Unis, non à la France. La phrase "Accès psy universités : 1 psy/1500 étudiants (recommandation OMS : 1/300)" est trompeuse : elle présente sans distinction géographique le ratio américain comme une donnée applicable à la France, créant une confusion grave sur l'ordre de grandeur réel du problème français (30x plus mauvais que présenté). Correction suggérée : "Accès psy universités : 1 psy/30 000 étudiants en France (vs 1/1500 aux États-Unis ; recommandation : 1/300-1500)" ou reformuler clairement l'origine de chaque chiffre.


### P7 -- Santé mentale étudiante en crise

- **Citation en cause :** Tentatives suicide 18-24 ans : 3ème cause décès

- **Probleme :** Selon Santé publique France 2024, le suicide est la 2ème cause de mortalité chez les 15-24 ans, non la 3ème. Le classement est factuellement incorrect.

- **Verification independante :** Incoherence factuelle confirmée. Le fichier P7 (ligne 85) affirme que le suicide est la "3ème cause décès" chez les 18-24 ans, alors que Santé publique France et l'Observatoire national classent systématiquement le suicide comme la 2ème cause de mortalité chez les 15-24 ans. Correction requise : remplacer "3ème" par "2ème".


### P8 -- Illettrisme et décrochage scolaire persistants

- **Citation en cause :** 7-8 % des 15-65 ans illettrés français (2 millions)

- **Probleme :** En 2024-2025, le taux d'illettrisme est 4 % (1,4 million de personnes) selon l'ANLCI et l'INSEE. Le fichier cite des données de 2016-2020 et n'a pas été mis à jour. Le taux a été divisé par deux en 20 ans.

- **Verification independante :** Incoherence factuelle confirmée. La fiche P8 cite « 7-8 % des 15-65 ans illettrés français (2 millions) » qui correspond aux données 2011-2015. Les données actuelles (2022, publiées ANLCI/INSEE avril 2024) indiquent 4 % de la population 18-64 ans = 1,4 million de personnes. Le taux a été divisé par deux en 20 ans. Ces données obsolètes n'ont pas été intégrées dans la fiche bien que la source soit publique depuis avril 2024.



## chantier/problemes-50-fiches.md

### P3 -- La défense totale nordique : chaque citoyen a un rôle en crise

- **Citation en cause :** Finlande dès 16 ans = devoir défense

- **Probleme :** Le service militaire obligatoire en Finlande commence à 18 ans minimum, non à 16 ans. L'âge mentionné est inexact de 2 ans.

- **Verification independante :** Le service militaire obligatoire en Finlande commence effectivement à 18 ans, non 16 ans. Les sources officielles finlandaises (Puolustusvoimat, Suomi.fi) et externes (Wikipedia) confirment l'âge minimum de 18 ans pour tous les citoyens (hommes 18-65 ans, femmes volontaires). L'inexactitude signalée par l'IA précédente est vérifiée : écart factuel de 2 ans confirmé.


### P2 -- La milice suisse : citoyens non professionnels en politique et défense

- **Citation en cause :** Suisse 8,7M habitants

- **Probleme :** La population de la Suisse en 2026 est d'environ 9,15M habitants selon les données 2026, non 8,7M. Le chiffre est obsolète ou inexact.

- **Verification independante :** La population suisse en 2026 est d'environ 9,0-9,1 millions d'habitants selon les données officielles (Worldometer, démographie 2026), non 8,7M comme cité en P2 ligne 40. L'écart de ~400 000 personnes (~3,5%) reflète l'augmentation migratoire 2023-2025. Le chiffre est factuellement obsolète.


### P2 -- La milice suisse : citoyens non professionnels en politique et défense

- **Citation en cause :** Suisse aucun service militaire depuis 1996 mais milice obligation

- **Probleme :** La Suisse maintient le service militaire obligatoire. En 1996, c'est l'alternative civile (pour objecteurs de conscience) qui a été introduite, non l'abolition du service militaire. L'affirmation est factuellement inexacte.

- **Verification independante :** La phrase "Suisse aucun service militaire depuis 1996" est factuellement inexacte. La Suisse maintient toujours le service militaire obligatoire. Ce qui a été introduit en 1996, c'est l'alternative de service civil pour les objecteurs de conscience, pas l'abolition du service militaire. L'affirmation confond l'existence d'une alternative civile avec la suppression du service militaire lui-même.


### P6 -- Le service civique universel repensé : contribution à tout âge valorisée

- **Citation en cause :** Suisse aucun service militaire depuis 1996

- **Probleme :** La Suisse maintient le service militaire obligatoire. En 1996, c'est l'alternative civile qui a été introduite, pas l'abolition. L'affirmation est factuellement inexacte.

- **Verification independante :** La citation "Suisse aucun service militaire depuis 1996" est factuellement inexacte. La Suisse maintient le service militaire obligatoire depuis avant 1996 jusqu'à aujourd'hui (2026). En 1996, le gouvernement suisse a seulement INTRODUIT l'alternative service civil pour objections de conscience, sans abolir le service militaire obligatoire. Deux référendums (2013, 2025) pour abolir le service militaire ont échoué massivement. L'affirmation de la fiche est non seulement fausse mais sémantiquement inversée.


### P5 -- Le tirage au sort comme devoir : jurys d'assises étendus aux politiques publiques

- **Citation en cause :** Irlande Citizens' Assembly 99 citoyens tirés au sort débattent politique majeure 6 mois

- **Probleme :** Citizens' Assembly Irlande comprenait environ 67 citoyens sélectionnés (+ 33 législateurs nominés + 1 président) = 101 membres total, non 99 citoyens. Aussi, l'assemblée s'est réunie de 2012 à 2014 (2 ans), non 6 mois.

- **Verification independante :** Deux erreurs factuelles confirmées dans la fiche P5 : (1) la Convention constitutionnelle irlandaise comprenait 66 citoyens sélectionnés au hasard, non 99 ; (2) elle s'est réunie 14 mois (décembre 2012 - février 2014), non 6 mois. L'allégation d'incohérence est valide.


### P10 -- La résilience comme projet national : mesure d'un peuple connecté aux décisions

- **Citation en cause :** Singapour 5,6M habitants

- **Probleme :** La population de Singapour est d'environ 5,92M habitants en 2024-2026, non 5,6M. Le chiffre cité est inexact.

- **Verification independante :** Le chiffre 5,6M était exact pour 2022 mais est obsolète pour 2024-2026. La population actuelle de Singapour (juillet 2026) est de 5,9M à 6,1M selon les sources officielles et Worldometer, ce qui infirme directement la citation. L'IA précédente a raison : c'est une inexactitude factuelle avérée dans le contexte actuel.



## chantier/problemes-51-fiches.md

### P8 -- L'inceste et les 160 000 enfants par an : les recommandations de CIIVISE dans les tiroirs

- **Citation en cause :** Rapport CIIVISE (2023) : 50 recommandations pour renforcer prévention, repérage, signalement.

- **Probleme :** Le rapport officiel CIIVISE de novembre 2023 contient 82 recommandations, non 50. Cela est confirmé par le bilan CIIVISE de mise en œuvre des 82 recommandations (2024-2025) et multiple sources officielles.

- **Correction proposee :** Corriger : 'Rapport CIIVISE (2023) : 82 recommandations' au lieu de '50 recommandations'.

- **Verification independante :** Rapport CIIVISE officiel novembre 2023 contient 82 recommandations (vérifié via site CIIVISE direct + bilans 2024-2026), non 50. Erreur factuelle confirmée : ligne 328 du fichier doit corriger "50 recommandations" en "82 recommandations".



## chantier/problemes-52-fiches.md

### P3 -- Les ports : scanner 100 %, corruption, intelligence portuaire

- **Citation en cause :** Rotterdam et Anvers dominent désormais (160 tonnes saisies dans ces ports seuls en 2024)

- **Probleme :** Le chiffre de 160 tonnes pour Anvers + Rotterdam en 2024 est inexact. Les données vérifiées montrent : Anvers 44 tonnes + Rotterdam 25 tonnes = 69 tonnes seulement, soit moins de la moitié du chiffre cité.

- **Correction proposee :** Remplacer par : 'environ 69 tonnes saisies dans ces ports en 2024' (Anvers 44 + Rotterdam 25)

- **Verification independante :** L'incohérence est CONFIRMÉE et GRAVE. Les données 2024 vérifiées indépendamment montrent : Anvers 44 tonnes + Rotterdam 25,9-26 tonnes = ~70 tonnes, soit moins de la moitié des 160 tonnes citées en ligne 15. Même les chiffres détaillés du document lui-même (ligne 79 : 44,3 Anvers + "environ 80" Rotterdam) ne justifient pas 160 tonnes. L'autre IA a raison : le chiffre doit être corrigé à environ 70 tonnes.


### P8 -- Quartiers repris : présence continue vs coups de com, Suède, modèles

- **Citation en cause :** Suède : beredskap (patrouilles 24/24, community policing) 2015-2023 : gang violence baisse 15 % pendant 3 ans, puis remonte 20 % après retrait des moyens

- **Probleme :** La trajectoire décrite est inversée par rapport aux données actuelles. Entre 2015 et 2023, la violence des gangs a AUGMENTÉ, culminant à 62 décès en 2022 et 50+ homicides par arme à feu en 2023. Aucune baisse de 15% n'est documentée sur cette période.

- **Correction proposee :** Réviser selon les données : la Suède a connu une augmentation constante de la violence des gangs de 2015 à 2023, malgré les efforts de policing (beredskap et stratégie de call-ins)

- **Verification independante :** La trajectoire décrite dans la fiche P8 (« gang violence baisse 15 % pendant 3 ans, puis remonte 20 % après retrait des moyens ») est factuellement INCORRECTE. Les données 2015-2023 montrent une AUGMENTATION CONSTANTE de la violence des gangs en Suède : 116 homicides en 2022, 121 en 2023. Pas de baisse de 15% documentée ; l'autre IA avait raison.


### P6 -- La cocaïne des beaux quartiers : responsabilité consommateur et campagnes

- **Citation en cause :** Royaume-Uni : campagnes Know The Cost (Manchester, Londres, 2020-2024) : avant/après de 100 jeunes aisés (vidéos YouTube, pubs Facebook) ; résultats : réduction 12 % essais annuels chez CSP+ (étude LSE 2024, à confirmer)

- **Probleme :** Cette campagne 'Know The Cost' n'existe pas dans les sources vérifiables. Aucune trace d'une telle campagne au Royaume-Uni (2020-2024) ciblant la cocaïne et les CSP+, ni d'étude LSE 2024 associée. La citation inclut elle-même '(à confirmer)', indiquant l'absence de vérification préalable.

- **Correction proposee :** Supprimer cette référence ou fournir des sources documentées. Considérer une reformulation basée sur des programmes existants vérifiés.

- **Verification independante :** La campagne "Know The Cost" n'existe pas aux sources vérifiables (juillet 2026). Recherches exhaustives trouvent zéro résultat pour ce nom en UK 2020-2024. Seule campagne proche : "True Costs" (Thames Valley Police) mais elle cible l'exploitation d'enfants mineurs, pas les consommateurs aisés. Étude LSE 2024 spécifiée introuvable. Citation reconnaît elle-même "(à confirmer)" = absence de validation préalable. Hallucination factuelle confirmée.



## chantier/problemes-53-fiches.md

### P2 -- Bilan carbone amorti : à quel prix l'électrique gagne

- **Citation en cause :** Norme Euro 7 2025+ : garantie batterie 80% jusqu'à 5 ans/100 000 km, puis 72% jusqu'à 8 ans/160 000 km.

- **Probleme :** Le document affirme que Euro 7 entre en vigueur en 2025+, mais en réalité la norme entre en vigueur en novembre 2026 pour les nouveaux modèles et novembre 2027 pour tous les nouveaux véhicules.

- **Verification independante :** La fiche indique « Norme Euro 7 2025+ » (répété lignes 50 et 114), mais Euro 7 entre en vigueur le 29 novembre 2026 pour les nouveaux modèles et le 29 novembre 2027 pour tous les véhicules. La mention « 2025+ » est factuellement inexacte : elle date la norme un an avant sa réalité de juillet 2026.


### P3 -- Jungle recharge: des prix multipliés par 5

- **Citation en cause :** France 160 000 bornes publiques.

- **Probleme :** Le chiffre de 160 000 bornes est obsolète en juillet 2026. Au 31 janvier 2026, la France en avait 189 943 et au 30 avril 2026, 194 996 points de recharge publics. Le document devrait citer ~190 000 bornes minimum.

- **Verification independante :** Le chiffre de 160 000 bornes publiques cité dans la fiche P3 est obsolète en juillet 2026. Selon le baromètre officiel AVERE, la France comptait 194 996 points de recharge ouverts au public au 30 avril 2026 — soit une différence de ~35 000 bornes (22% d'écart). La fiche ayant été générée le 11 juillet 2026 avec données confirmées 2026, elle aurait dû citer au minimum ~195 000 bornes.


### P3 -- Jungle recharge: des prix multipliés par 5

- **Citation en cause :** tarification vraie kWh n'existe pas août 2026 (à confirmer)

- **Probleme :** Le Règlement AFIR 2026 impose clairement que chaque borne affiche le tarif en €/kWh avant le démarrage de la session. Cette obligation existe bien et s'applique depuis 2026. L'affirmation contredit la réglementation en vigueur.

- **Verification independante :** Le Règlement AFIR 2026 impose légalement et clairement l'affichage du tarif en €/kWh avant la session de recharge, depuis 2024 avec conformité requise en 2026. L'affirmation « tarification vraie kWh n'existe pas août 2026 » contredit directement cette réglementation en vigueur et crée une contradiction interne dans la fiche elle-même (ligne 62 et 75-76 reconnaissent l'obligation AFIR). La confusion porte sur le fait que la mise en pratique est chaotique, mais dire que l'obligation « n'existe pas » est factuellement faux.


### P9 -- Norvège: modèle non-transposable en Occident

- **Citation en cause :** Fonds souverain pétrolier = 850 Mds €

- **Probleme :** Le fonds souverain norvégien était 850 Mds € vers 2016. En 2025-2026, il vaut environ 1,858 Mds €. Le chiffre utilisé en juillet 2026 est drastiquement obsolète (moins de moitié de la valeur réelle).

- **Verification independante :** Fonds souverain norvégien : la fiche cite 850 Mds € (données ~2016). Valeur réelle 2025-2026 : 1,858-1,865 Mds € (écart 2.19x). L'erreur biaise l'analyse comparative France/Norvège utilisée ligne 229 pour justifier la stratégie. Chiffre obsolète de 10 ans utilisé pour analyse contemporaine juillet 2026 = incohérence factuelle vérifiée.



## chantier/problemes-54-fiches.md

### P1 -- Radiations automatiques du dispositif et re-intégration impossible

- **Citation en cause :** Bilan DARES 2023 : 450 000 radiations annuelles

- **Probleme :** Le chiffre de 2023 est obsolète. Les radiations ont explosé à 660k annuelles en 2024 (55k/mois) et 500k+ en 2025, puis chutées drastiquement à 2,7k/mois en Q1 2026 après le décret de juin 2025. Ce changement radical invalide le diagnostic du problème.

- **Correction proposee :** Actualiser le chiffre : 660 000 radiations en 2024 (DARES/statistiques France Travail), évolution jusqu'à Q1 2026 incluse (baisse suite au décret de juin 2025 resserrant les règles de sanction)

- **Verification independante :** Les chiffres allégués (660k en 2024, 55k/mois avant décret, 2,7k/mois Q1 2026 après décret juin 2025) sont tous vérifiés par les données officielles France Travail. Le chiffre 2023 (450k) est factuellement obsolète au regard de l'évolution 2024-2026, transformant le diagnostic du problème. L'actualisation est justifiée pour éviter une analyse basée sur une base factuelle datée de 3+ ans.


### P9 -- Modèles étrangers qui marchent : flexicurité Danemark, Bürgergeld Allemagne critique, Autriche réseau

- **Citation en cause :** Bürgergeld 2023 : revenu minimum garanti + formation obligatoire ... Coûts : 100 Md€/an budget sécu sociale

- **Probleme :** Le chiffre de 100 Md€/an pour le Bürgergeld est surestimé. Les données montrent ~54 Md€ en 2023 pour le prédécesseur (assurance de base), et le Bürgergeld représente 4,1% des dépenses sociales allemandes (197 Md€ totales = ~8 Md€), bien en deçà de 100 Md€.

- **Correction proposee :** Remplacer par : Coûts ~54 Md€/an (estimé sur base prédécesseur 2023), représentant 4,1% des dépenses sociales totales allemandes

- **Verification independante :** Le chiffre 100 Md€/an pour le Bürgergeld dans P9 est surestimé. Les données web actuelles (2024-2025) montrent ~46,9-52 Md€/an. L'allégation d'erreur est fondée; correction à ~54 Md€ requise. Probable confusion avec les 100 Md€ de subventions fédérales aux pensions (programme distinct).


### P9 -- Modèles étrangers qui marchent : flexicurité Danemark, Bürgergeld Allemagne critique, Autriche réseau

- **Citation en cause :** Bürgergeld 2023 : revenu minimum garanti + formation obligatoire, mais critique : bilan 2024 = taux pauvreté stable 16 %, insertion faible

- **Probleme :** La fiche décrit la pauvreté comme 'stable' et la chiffre à 16%, alors que les données 2024 montrent 15,5% avec une légère AUGMENTATION (13,1M personnes vs 12,1M en 2023), pas une stabilité. La tendance réelle est inverse à ce qui est décrit.

- **Correction proposee :** Remplacer 'taux pauvreté stable 16%' par 'taux pauvreté en augmentation à 15,5% (13,1M personnes en 2024 vs 12,1M en 2023)'

- **Verification independante :** La fiche prétend que le taux de pauvreté allemand 2024 est « stable à 16% ». Selon les données officielles Destatis : 2023=14.4% (12.1M), 2024=15.5% (13.1M). L'allegation est fondée : ce n'est pas stable (augmentation +1.1pp) et le chiffre exact est 15.5%, non 16%. La correction proposée est factuellement exacte. Severity : moyenne — imprécision numérique + erreur logique (stable vs augmentation) dans un énoncé factuel critique pour l'évaluation du Bürgergeld.



## chantier/problemes-55-fiches.md

### P7 -- Santé mentale parent pauvre : MonPsy limité

- **Citation en cause :** MonPsy (remboursement psychologue) depuis 2022 = 8 séances/an max

- **Probleme :** Le dispositif a été augmenté depuis mai 2025 à 12 séances/an remboursées, pas 8. Le fichier cite l'ancien plafond de 2022.

- **Correction proposee :** MonPsy (remboursement psychologue) depuis 2022 = 8 séances/an max, augmenté à 12 séances/an depuis mai 2025

- **Verification independante :** La fiche P7 cite le plafond ancien de 8 séances/an de MonPsy sans signaler l'augmentation à 12 séances/an par décret du 15 mai 2025, toujours en vigueur en juillet 2026. C'est une incoherence factuelle avérée, non une nuance mineure.


### P7 -- Santé mentale parent pauvre : MonPsy limité

- **Citation en cause :** Taux suicide France = 14/100 k (vs 10 Suède, 9 UK, à confirmer chiffres exacts)

- **Probleme :** Le taux de suicide en France est de 13/100k en 2023, pas 14/100k. Le Royaume-Uni a un taux de 11.4/100k en 2024, pas 9/100k.

- **Correction proposee :** Taux suicide France = 13/100 k (2023) vs 11.4 UK (2024)

- **Verification independante :** Vérification web indépendante confirme : France = 13/100k (pas 14), UK = 11.4/100k (pas 9). Santé publique France 2023 et ONS 2024 sont les sources officielles. L'incoherence est réelle et mesurable.


### P8 -- EHPAD : refilage hôpital/médico-social

- **Citation en cause :** EHPAD France = 750 k lits, 90 % public/associatif

- **Probleme :** Le nombre réel de lits en EHPAD en France est d'environ 570 000 à 610 000 lits selon les données DREES 2025, pas 750 000. Écart de 140 000 lits.

- **Correction proposee :** EHPAD France = 570-610 k lits (données DREES 2025)

- **Verification independante :** L'affirmation "750 k lits EHPAD" dans la fiche P8 est factuellement incorrecte selon les données DREES officielles 2023-2025. Le nombre réel est environ 610 000 lits (609 970 en 2023), non 750 000. Écart confirmé : 140 000 lits de surestimation (23 %). La correction proposée ("570-610 k lits DREES 2025") est valide et correspond aux données officielles.


### P9 -- Prévention : 2 % budget santé vs curatif 98 %

- **Citation en cause :** France : 30 % obésité (vs 18 % Japon)

- **Probleme :** Le taux d'obésité en France est de 18.1% en 2024-2025, pas 30%. Le fichier confond vraisemblablement obésité (18.1%) avec la catégorie combinée surpoids+obésité (48.8%).

- **Correction proposee :** France : 18.1 % obésité chez les adultes (2024-2025), soit 48.8% si surpoids+obésité combinés

- **Verification independante :** L'affirmation « France : 30 % obésité » contient une erreur factuelle confirmée. Les données 2024-2025 établissent : 18,1% d'obésité seule, ou 47-48,8% si surpoids+obésité combinés. Le chiffre 30% ne correspond à aucune catégorie officielle. La correction proposée est exacte et sourced sur les statistiques DREES/OFEO 2024.


### P2 -- Attentes excessives chez les spécialistes

- **Citation en cause :** Délai médian pour voir un cardiologue/dermatologue en France : 3 mois (public), 6-12 mois en zones rurales (DREES 2024)

- **Probleme :** Selon les données 2025 (Doctolib/DREES), le délai médian pour un cardiologue est de 42 jours (~6 semaines), pas 3 mois (~12 semaines). Pour la dermatologie : 32 jours (~4,5 semaines).

- **Correction proposee :** Délai médian cardiologie : 42 jours (6 semaines); dermatologie : 32 jours (4,5 semaines) selon données 2025

- **Verification independante :** Les données Doctolib 2025 (étude 2026 sur 80k praticiens) contredisent les chiffres de la fiche P2 : cardiologie 42 jours vs 3 mois affirmés (~90 jours), dermatologie 32 jours vs 3 mois (~90 jours). La source DREES 2024 est obsolète. Correction validée.



## chantier/problemes-56-fiches.md

### P8 -- Le baccalauréat dévalué mais sacralisé : examen-fétiche ou diplôme d'accès

- **Citation en cause :** Bac général 2023: 91,2 % de taux de réussite (à la baisse depuis "bac blanc" contrôle continu 2021).

- **Probleme :** Le taux de réussite au baccalauréat 2023 est indiqué à 91,2%, mais selon les données officielles (ICI.fr, DEPP), le taux réel est 90,9% après les rattrapages.

- **Verification independante :** Incohérence factuelle confirmée. Le chiffre 91,2% cité dans la fiche pour le taux de réussite au bac général 2023 ne correspond à aucune donnée officielle DEPP. Les taux réels sont 90,8% (avant rattrapages) ou 95,7% (après rattrapages) pour la voie générale. Le chiffre 91,2% n'existe dans aucune statistique 2023 publiée.


### P10 -- La cantine à deux vitesses : tarifs, qualité, bio, reproduction sociale

- **Citation en cause :** Qualité: 35 % des repas contiennent <30 % bio malgré loi Egalim 2018 (30 % bio depuis 2022)

- **Probleme :** La fiche indique que la loi Egalim 2018 prescrit 30% de bio depuis 2022. Or la loi Egalim article 24 prescrit 50% de produits de qualité/durables dont minimum 20% bio (pas 30%). La fiche confond donc le seuil obligatoire: c'est 20% bio, non 30%.

- **Verification independante :** La fiche P10 prétend que la loi Egalim impose 30% de bio depuis 2022 (parenthèse: "30 % bio depuis 2022"). Or la loi Egalim article 24 impose exactement 50% de produits de qualité/durables dont MINIMUM 20% bio (pas 30%). C'est une erreur factuelle confirmée sur un seuil légal précis. L'accusation de l'IA précédente est valide.


### P7 -- Harcèlement scolaire : traitement réel des cas, bilan du protocole pHARe

- **Citation en cause :** Ministère Éducation 2023: 13 % des élèves français déclarent harcèlement (France vs Espagne 9 %, Allemagne 10 %, OCDE moyenne 8 %, à confirmer).

- **Probleme :** La fiche présente 13% comme le taux d'élèves déclarant harcèlement. Cependant, selon l'enquête DEPP 2023, les 13% correspondent aux 'situations à surveiller' (dégradation de qualité de vie scolaire avec signaux de vulnérabilité) et ne constituent PAS du harcèlement déclaré. Le harcèlement scolaire déclaré représente 2-4% des élèves. La fiche confond donc deux catégories distinctes.

- **Verification independante :** La fiche P7 confond deux catégories distinctes de l'enquête DEPP 2023. Elle présente les 13% de "situations à surveiller" (dégradation qualité de vie scolaire + vulnérabilité) comme équivalent au harcèlement déclaré, alors que le harcèlement scolaire réel est mesuré à 2-4% selon le niveau scolaire. Ce sont deux indices différents : le harcèlement déclaré est une mesure d'agression direct, tandis que les "situations à surveiller" combinent multivictimisation et perception de bien-être scolaire. Citer "13% déclarent harcèlement" est techniquement inexact.



## chantier/problemes-57-fiches.md

### P1 -- EHPAD privés lucratifs : contrôles défaillants après le scandale Orpea

- **Citation en cause :** 1 183 EHPAD en France (décembre 2025) : 47 % privés à but lucratif, 41 % public, 12 % associatif (DREES)

- **Probleme :** Le nombre d'EHPAD est environ 6 fois trop faible. Les sources DREES/FINESS indiquent 7 300-7 402 établissements EHPAD en France en 2025-2026, pas 1 183.

- **Verification independante :** Erreur factuelle majeure : la fiche cite 1 183 EHPAD en France (décembre 2025), alors que les sources officielles DREES/FINESS 2026 indiquent 7 402 EHPAD. Le chiffre est environ 6 fois trop faible. Cette erreur invalide l'ensemble de l'analyse quantitative de la fiche P1, y compris les pourcentages public/privé lucratif/associatif appliqués sur une base chiffrée erronée.


### P3 -- Aidants familiaux invisibles : 8-11 millions non indemnisés, burn-out structurel

- **Citation en cause :** allocation aidant (2 024) = max 65 €/mois si conditions strictes (revenu < 1 000 €/mois)

- **Probleme :** La fiche confond l'unité temporelle. L'Allocation Journalière du Proche Aidant (AJPA) en 2024 est de 66,64€ par JOUR, pas par mois. Versée jusqu'à 66 jours par personne aidée (maximum ~4 400€ pour une période), soit environ 66 fois le montant mensuel mentionné.

- **Verification independante :** Erreur confirmée et critique. La fiche mentionne « allocation aidant (2024) = max 65 €/mois » ; c'est en réalité 64,54€ par JOUR (pas mois), plafond mensuel ~1 420€ (22 jours max/mois). La fausse condition « revenu < 1 000 €/mois » n'existe pas (l'AJPA n'a aucun plafond de revenus). L'autre IA a détecté une confusion d'unité temporelle majeure (facteur ~22x) + une eligibilité fondamentalement inexacte.


### P9 -- Assurance dépendance allemande et japonaise : financement mutualisé vs. reste à charge familial

- **Citation en cause :** Allemagne : assurance dépendance obligatoire (cotisation 3,05 % salaires, paritaire) depuis 1995

- **Probleme :** Le taux de cotisation n'a pas été stable 'depuis 1995'. Données historiques: 1% en 1995, 1,7% en juillet 1996, 1,95% en 2008, 2,55% en 2017, 3,05% actuellement. Le taux a augmenté progressivement sur 30 ans, pas resté constant depuis l'introduction.

- **Verification independante :** Erreur factuelle confirmée : le taux de cotisation de l'assurance dépendance allemande n'a jamais été stable à 3,05 % depuis 1995. Le taux a progressé de 1,0 % (1995) → 1,7 % (1996) → 1,95 % (1998) → 2,55 % (2017) → 4,2 % (2025-2026). La formulation du fichier est induisante en erreur et fausse la comparaison France-Allemagne en suggérant une stabilité n'existant pas.



## chantier/problemes-58-fiches.md

### P2 -- Maternités fermées : 30 km d'éloignement et accouchements sur trajet d'urgence

- **Citation en cause :** Entre 2000 et 2023, 40 % des maternités françaises ont fermé (310 sites à 184 en 2023, DREES)

- **Probleme :** Le fichier affirme qu'il y a 184 maternités en 2023. DREES indique 462 maternités au 31 décembre 2023. Le chiffre 184 est sous-estimé d'un facteur 2,5x.

- **Correction proposee :** Remplacer par '310 sites à 462 en 2023' (ou vérifier si le chiffre 184 se réfère à une catégorie spécifique non précisée, comme maternités 'complètes' avec bloc opératoire).

- **Verification independante :** DREES indique 457-462 maternités en France au 31 décembre 2023 (sources : données officielles DREES 2024/2025). Le chiffre 184 affirmé dans la fiche est faux, 2,5x inférieur à la réalité. Aucune sous-catégorie (niveau, bloc opératoire, etc.) ne justifie cette discordance.


### P5 -- Maisons France Services : vrai guichet ou lot de consolation sans moyens ?

- **Citation en cause :** Lancées 2019, 4 250 Maisons France Services fin 2024 (gouvernement : https://www.france-services.gouv.fr)

- **Probleme :** Le fichier cite 4 250 sites fin 2024. Le gouvernement confirme 2 800 sites labellisés fin 2024, avec objectif 3 000 pour 2027. Surestimation de +51%.

- **Correction proposee :** Remplacer '4 250' par '2 800 Maisons France Services labellisées fin 2024, objectif 3 000 pour 2027'.

- **Verification independante :** Vérification indépendante confirme l'incoherence : le fichier P5 cite 4 250 Maisons France Services fin 2024, or les données gouvernementales officielles (info.gouv.fr, france-services.gouv.fr, rapports septembre-octobre 2024) enregistrent 2 753-2 840 sites labellisés en 2024, avec objectif 3 000 pour 2027. Surestimation de +51 % confirmée. La correction proposée (2 800 fin 2024, objectif 3 000 pour 2027) est factuellement exacte.


### P1 -- Désert de trésoreries et guichets publics fermés : la bancarisation forcée des ruraux

- **Citation en cause :** Entre 2010 et 2023, France a perdu 54 % de ses guichets bancaires (2 600 fermetures)

- **Probleme :** Le fichier cite 2 600 fermetures entre 2010-2023. Les données FBF montrent 3 750 fermetures 2010-2020 + 3 296 fermetures 2020-2025, soit ~5 700+ sur 2010-2023. Le chiffre 2 600 est sous-estimé d'au moins 2x.

- **Correction proposee :** Réviser le chiffre de 2 600 à un minimum de 5 700 fermetures estimées pour 2010-2023, basé sur trajectoires FBF.

- **Verification independante :** Le chiffre de 2 600 fermetures est factuellement sous-estimé. Les données vérifiées indiquent 6 000+ fermetures 2010-2023 (ou minimum 5 700 selon calcul conservateur 3 750 + 3 ans × moyenne annuelle). Facteur d'erreur : 2,3x minimum. Correction justifiée, les sources FBF convergent sur cette trajectoire accélérée.


### P9 -- Dotation aux communes rurales (DGF) vs besoins réels : le casse-tête mathématique de l'égalité

- **Citation en cause :** DGF (Dotation Globale de Fonctionnement) = 35 M€ distribuée 34 000 communes

- **Probleme :** Le fichier cite '35 M€' (35 millions d'euros). La DGF réelle est ~27-28 milliards d'euros en 2024. Erreur d'unité massive : M€ à la place de Md€, sous-estimé d'un facteur 1 000x.

- **Correction proposee :** Remplacer '35 M€' par '27-28 Md€ distribuée aux communes en 2024' (source : ministère Écologie/Intérieur).

- **Verification independante :** Erreur d'unité/ordres de grandeur massifs confirmée. Le fichier cite « 35 M€ » (35 millions) pour la DGF distribuée aux 34 000 communes. Les données gouvernementales 2024-2026 établissent que la DGF totale nationale est de 27-27,4 milliards d'euros (Md€), soit ~770x plus que ce qui est écrit. Correction nécessaire : remplacer « 35 M€ » par « 27,4 Md€ (2026) » ou « 27-28 Md€ » selon l'année de référence.



## chantier/problemes-59-fiches.md

### P7 -- Jobs étudiants pénalisent les bourses

- **Citation en cause :** Bourse d'études CROUS = 63 300 étudiants boursiers en France (CROUS 2024 ; https://www.crous.fr/)

- **Probleme :** Le nombre d'étudiants boursiers est drastiquement sous-estimé. La recherche officielle ministérielle montre 662 000 étudiants en 2024-2025, soit 10 fois plus que le chiffre cité. Cette erreur fausse complètement l'ordre de grandeur du problème.

- **Verification independante :** Le chiffre cité (63 300 étudiants boursiers CROUS) est factuellement incorrect. Les données officielles du ministère de l'Enseignement supérieur (2024-2025) indiquent 662 000 boursiers, soit 10,5x plus. Cette sous-estimation d'ordre de grandeur invalide la compréhension du problème P7 et fausse complètement le contexte de la pénalité travail-étudiant sur les bourses. L'erreur est grave et doit être corrigée.


### P3 -- Les stages gratifiés et alternances exploitées

- **Citation en cause :** Alternance = 480 000 jeunes en France en 2024 (DARES)

- **Probleme :** Le nombre d'apprentis/alternants est largement sous-estimé. Selon DARES 2024, il y a 1 015 100 apprentis fin 2023 et la tendance continue à la hausse en 2024. Le chiffre 480 000 représente environ la moitié de la réalité actuelle et ne reflète pas les données du moment.

- **Verification independante :** Le chiffre de 480 000 alternants en 2024 est largement sous-estimé. Les données DARES 2024-2025 rapportent 1,048,800 contrats d'apprentissage actifs fin 2024 et 1,015,500 fin 2023, soit plus que le double du chiffre allégué. Cette erreur n'est pas une nuance mineure mais une sous-estimation factuelle de 55%, ce qui fausse gravement la perception de l'ampleur du problème décrit dans la fiche (exploitation de jeunes alternants).


### P5 -- Santé mentale 18-25 ans

- **Citation en cause :** Dépression diagnostiquée chez 16 % des 18-24 ans (vs 7 % général population ; Santé publique France 2023)

- **Probleme :** Le chiffre de 16% semble dater de 2020. Les données plus récentes de Santé publique France montrent une augmentation significative : 20.8% en 2021 et progression continue en 2023, avec 22% en janvier 2022. Le chiffre cité de 16% ne reflète pas la situation actuelle en 2024-2025.

- **Verification independante :** Le chiffre de 16% pour la dépression chez les 18-24 ans remonte à 2020. Données actuelles vérifiées : 20,8% (2021), 22% (janvier 2022 et 2024). La fiche cite ce chiffre en le rapportant à « Santé publique France 2023 » alors qu'il est obsolète depuis 2021. En juillet 2026, le taux actuel pour la tranche 18-29 ans est 22% selon le Baromètre Santé publique France 2024.</anison>




## chantier/problemes-6-fiches.md

### P1 -- Chat Control : recyclage législatif de la surveillance de masse

- **Citation en cause :** Commission répropose CSAR juillet 2026, approuvé par Parlement 9/7/2026 (331 voix pour)

- **Probleme :** Le vote du Parlement européen du 9 juillet 2026 n'a pas approuvé le texte. Au contraire : 314 MEPs ont voté pour REJETER la proposition (rejet par majorité, mais 47 voix courtes du seuil d'absolute majority requis pour bloquer en deuxième lecture). Le texte a également été modifié pour exclure les services employant le chiffrement de bout en bout. Inversion complète du résultat : rejet, non approbation.

- **Verification independante :** La fiche affirme que le CSAR a été « approuvé par Parlement 9/7/2026 (331 voix pour) ». Or le 9 juillet 2026, 314 MEPs ont voté POUR rejeter la proposition (majorité simple), mais le rejet a échoué techniquement (47 voix manquantes pour atteindre les 361 exigés en majorité absolue). Le texte a subsisté par défaut procédural, non par approbation. De plus, 331 est un chiffre faux : c'étaient 314 pour le rejet, 276 pour le maintien. L'inversion de réalité est complète : la majorité a voté contre, non pour.


### P4 -- Fracture numérique et dématérialisation forcée

- **Citation en cause :** 15-20 % population sans connexion régulière ou compétences numériques

- **Probleme :** Le chiffre est obsolète pour 2026. Selon INSEE 2025 : seulement 7% des 16-74 ans en situation d'illectronisme (baisse de 10% en 2021). Si on étend aux compétences limitées, le taux monte à 34%, mais l'affirmation '15-20%' reflète les données 2021, pas 2026. En juillet 2026, la situation s'est significativement améliorée.

- **Verification independante :** Le chiffre "15-20%" dans P4 reflète exactement les données d'illectronisme de 2021 (15% INSEE). En 2025/2026, l'illectronisme strict est à 7%, et la difficulté numérique totale à 34%. Quelle que soit l'interprétation de "sans connexion régulière ou compétences", le chiffre 15-20% est obsolète en juillet 2026 et doit être actualisé.


### P8 -- Retard IA/compute européen : dépendance modèles US/Chine

- **Citation en cause :** France/UE = zéro fondational model compétitif

- **Probleme :** Mistral AI (français, fondé avril 2023) est décrit comme 'frontier-class model that rival GPT-4o and Claude' selon les sources 2026. L'entreprise dépasse $1 billion de revenus prévus pour 2026, a levé €1.7 billion en septembre 2025 (série C), et compte parmi ses clients ASML, HSBC, BMW. C'est un modèle fondationnel européen compétitif, contrairement à l'affirmation de la fiche.

- **Verification independante :** Mistral AI est un modèle fondationnel français compétitif en juillet 2026 : Mistral Large 3 (décembre 2025) avec benchmarks forts, financement série C de €1.7Md (septembre 2025), revenue >$400M ARR progression vers €1Md fin 2026. L'affirmation "France/UE = zéro fondational model compétitif" est factuellement inexacte depuis décembre 2025.



## chantier/problemes-60-fiches.md

### P4 -- Impôts locaux illisibles : TEOM, GEMAPI, réseaux de chaleur

- **Citation en cause :** Rapport SNCF 2021 : 84% Français ignorent TEOM existence.

- **Probleme :** Aucune trace d'un rapport SNCF 2021 sur la connaissance de la TEOM. SNCF (Société Nationale des Chemins de fer Français) n'est pas une autorité compétente en fiscalité locale. Mes recherches WebSearch ne retrouvent aucune publication de ce type, ce qui suggère une source inexistante ou erronée.

- **Verification independante :** La citation "Rapport SNCF 2021 : 84% Français ignorent TEOM existence" est inexacte. Vérification indépendante par WebSearch : (1) SNCF n'a publié aucun rapport sur la fiscalité locale en 2021, ses publications 2021 couvrent exclusivement transport ferroviaire, sécurité et financements; (2) SNCF n'a aucune autorité compétente en fiscalité locale; (3) le chiffre 84% n'existe dans aucune source trouvée; (4) les vrais chiffres de connaissance TEOM (QueChoisir 2021) sont 51% propriétaires et 31-35% locataires, sans lien SNCF. Source hallucination ou citation erronée.


### P6 -- Frais bancaires de succession : France paie plus que ses voisins

- **Citation en cause :** Espagne = gratuit (loi 2022).

- **Probleme :** Les recherches WebSearch montrent que l'Espagne a adopté en 2022 des réductions d'impôts de succession (99% de réduction fiscale, 1 million € d'abattement), mais cela n'équivaut pas à dire que les FRAIS BANCAIRES de succession sont gratuits. Les sources évoquent des changements fiscaux, non des frais bancaires supprimés. Le fichier confond réduction d'impôts de succession et frais bancaires.

- **Verification independante :** La fiche P6 affirme "Espagne = gratuit (loi 2022)" concernant les frais bancaires de succession. Or, la loi 2022 espagnole fut une réforme fiscale (99% de réduction d'impôts + 1M€ d'abattement), non une suppression de frais bancaires. L'Espagne permet toujours aux banques de facturer une "comisión de testamentaría" si déclarée. Le cadre réel provient de recommandations du Banco de España (guidance), non d'une loi 2022 rendant ces frais gratuits. L'incohérence est confirmée : confusion entre réforme d'impôts de succession et suppression de frais bancaires.



## chantier/problemes-61-fiches.md

### P1 -- ARENH : électricité nucléaire française vendue aux concurrents à prix d'ami

- **Citation en cause :** Prix ARENH (Accès Régulé à l'Électricité Nucléaire Historique) : 49,50 €/MWh en 2024

- **Probleme :** Le prix ARENH en 2024 était 42 €/MWh, non 49,50 €/MWh. Le tarif 49,50 €/MWh était une proposition parlementaire d'août 2022 (National) qui n'a pas été adoptée par le Sénat et est revenue à 42 €/MWh en 2023-2025. Le nouveau mécanisme négocié en 2026 porte le prix à 70 €/MWh, pas 49,50 €/MWh.

- **Verification independante :** Critique fondée. Le prix ARENH 2024 était 42 €/MWh, pas 49,50 €/MWh. Le tarif 49,50 €/MWh était une proposition parlementaire juillet 2022 (AN) jamais adoptée. Le nouveau mécanisme 2026 porte bien à 70 €/MWh. Erreur factuelle quantifiée (-18% prix) impactant toutes les analyses de coûts EDF. Correction obligatoire.


### P7 -- Barrages hydroélectriques : Bruxelles pousse ouverture concurrence (directive 2019/944)

- **Citation en cause :** Directive UE 2019/944 : obligation fin 2026 ouvrir accès barrages hydroélectriques à tiers producteurs (concurrence)

- **Probleme :** La date limite n'est pas fin 2026, elle a déjà dépassée. En mai 2026, la France refusait encore de mettre en application la Directive. En juillet 2026, 40% des barrages d'EDF sont appelés à passer au privé en 2028, pas fin 2026. La Directive impose une transposition progressive, pas une deadline unique fin 2026.

- **Verification independante :** L'incoherence est CONFIRMEE. La fiche P7 énonce "obligation fin 2026 ouvrir accès barrages" ce qui est factuellement inexact. La vraie deadline Directive 2019/944 était 31 décembre 2020 (transposée FR en mars 2021). En juillet 2026, une loi nouvelle (29 juin 2026) concrétise un accord UE 2025. La mise en concurrence réelle : 40% barrages EDF aux enchères **en 2028**, pas fin 2026. La fiche masque cette progressivité et la date d'exécution correcte (2028). Correction nécessaire: remplacer "fin 2026" par "2028 (mise aux enchères 40% capacités)" et clarifier que transposition deadline era 2020, finalisée 2021, accord politique 2025-2026, exécution 2028.


### P9 -- Données de santé : Health Data Hub chez Microsoft (nuage amérindien)

- **Citation en cause :** Contrat HDH-Microsoft 2020-2025 : ~400 M€ investissements Microsoft, données France hébergées USA (cloud Azure)

- **Probleme :** Le contrat Microsoft est obsolète en juillet 2026. En avril 2026, la France a formellement choisi Scaleway (Iliad) pour remplacer Microsoft Azure pour héberger le Health Data Hub. La migration est prévue pour fin 2026/début 2027. Tous les scénarios de la fiche (sortie Microsoft, renégociation, etc.) décrivent une situation qui s'est déjà résolue par une décision d'État.

- **Verification independante :** La fiche P9 décrit le contrat Microsoft 2020-2025 comme un « problème ouvert » avec quatre pistes de résolution (sortie Microsoft, renégociation, consortium UE, chiffrement). Or, en avril 2026, la France a formellement sélectionné Scaleway pour remplacer Microsoft, et la migration est en cours d'implémentation (fin 2026/début 2027). La fiche ignore donc une décision d'État majeure prise trois mois avant sa date de consultation, ce qui rend tous les scénarios présentés factuellement obsolètes dès juillet 2026.


### P10 -- Brevets et startups tech : fuite capital-risque, rachat stratégiques étrangères

- **Citation en cause :** Doctolib (telemedecine, levées USA-Siemens Healthineers rachat 2024, ~900 M€ cédé USA via Allemagne)

- **Probleme :** Aucune acquisition de Doctolib par Siemens Healthineers n'a été documentée en 2024. Doctolib a plutôt fait ses propres acquisitions (Typeless, Aaron.ai en 2024) et a été condamnée par l'autorité de la concurrence française en 2025 pour abus de position dominante suite au rachat de MonDocteur en 2018. C'est une fiction d'acquisition.

- **Verification independante :** Incoherence factuelle confirmée. La fiche P10 prétend "Siemens Healthineers rachat 2024, ~900 M€ cédé USA via Allemagne". Or: (1) Doctolib reste une compagnie privée en 2026, valuation $6.5B, non-rachetée. (2) Seules acquisitions documentées de Doctolib en 2024: Typeless + Aaron.ai. (3) Aucune recherche web ne retourne de lien entre Doctolib et Siemens Healthineers. (4) Siemens Healthineers a acquis en 2024 Advanced Accelerator Applications (Novartis imaging), pas Doctolib. C'est une fiction d'acquisition.


### P10 -- Brevets et startups tech : fuite capital-risque, rachat stratégiques étrangères

- **Citation en cause :** Mirakl (marketplace, fonds USA, rachat SoftBank 2024)

- **Probleme :** Aucune acquisition de Mirakl par SoftBank n'a été documentée en 2024. Mirakl a plutôt fait l'acquisition d'Adspert (AdTech) en décembre 2024. Mirakl est restée indépendante et en croissance interne, non rachetée par SoftBank.

- **Verification independante :** Vérification web indépendante confirme l'incoherence. Mirakl n'a PAS été rachetée par SoftBank en 2024 ; elle est restée indépendante (statut "Privately Held" confirmé LinkedIn). Au contraire, Mirakl a elle-même acquis Adspert en décembre 2024 (source TechCrunch). La fiche P10 contient donc une affirmation factuellement incorrecte : "Mirakl (marketplace, fonds USA, rachat SoftBank 2024)" devrait plutôt dire "Mirakl (marketplace indépendante, fonds USA, acquisition Adspert décembre 2024)".


### P10 -- Brevets et startups tech : fuite capital-risque, rachat stratégiques étrangères

- **Citation en cause :** Skynance (fintech, rachat Goldman Sachs 2023)

- **Probleme :** Aucune trace d'une acquisition de la fintech Skynance par Goldman Sachs en 2023 ou 2024 dans les sources disponibles. Cette acquisition n'est pas documentée par les sources publiques.

- **Verification independante :** Recherches web exhaustives (4 requêtes spécifiques) confirment l'absence totale de documentation publique sur un rachat de Skynance par Goldman Sachs en 2023 ou 2024. Skynance existe (plateforme fintech agrégateur de prêts), mais aucune acquisition par Goldman Sachs n'est documentée. L'allégation est fondée : c'est une hallucination factuelle dans la fiche P10.



## chantier/problemes-62-fiches.md

### P3 -- AAH et fin de la déconjugalisation

- **Citation en cause :** 2023 : SMIC du conjoint jusqu'à 1,5x SMIC, AAH non réduite ; 2025 : jusqu'à 2x SMIC

- **Probleme :** La fiche décrit une déconjugalisation progressive par seuils de revenu (1,5x puis 2x SMIC). En réalité, depuis le 1er octobre 2023, la déconjugalisation est totale et immédiate : le revenu du conjoint n'est plus du tout pris en compte sans seuil intermédiaire.

- **Correction proposee :** Depuis le 1er octobre 2023, l'AAH est calculée exclusivement selon les ressources de la personne handicapée, le revenu du conjoint n'étant plus considéré dans le calcul (déconjugalisation complète, non progressive).

- **Verification independante :** Vérification indépendante confirmée. La fiche P3 décrit une déconjugalisation progressive (1,5x SMIC en 2023, 2x SMIC en 2025). Or, depuis le 1er octobre 2023, la déconjugalisation est totale et immédiate : le revenu du conjoint ne compte plus dans aucun seuil intermédiaire. L'IA précédente a raison sur le fait factuel. Seul détail : il existe un dispositif transitoire (protection budgétaire), mais ce n'est pas une "phase progressive" — c'est une garantie de non-régression pour les cas où l'ancien système aurait été meilleur. La fiche doit être corrigée : supprimer les seuils 1,5x et 2x SMIC, remplacer par "déconjugalisation totale depuis 1er octobre 2023".


### P4 -- École inclusive sans AESH

- **Citation en cause :** En 2024, le ministère recense 138 000 enfants notifiés en besoin d'AESH (source : ministère Éducation, RASED 2024) ; 92 000 AESH recrutés

- **Probleme :** Les chiffres sont massivement sous-estimés et dépassés. En 2025, 352 102 enfants sont notifiés pour AESH (2,5x le chiffre cité pour 2024), et 137 300 AESH sont en poste (vs 92 000), selon le ministère de l'Éducation.

- **Correction proposee :** À la rentrée 2025, 352 102 enfants sont notifiés pour un accompagnement AESH, et 137 300 AESH sont employés, bien au-delà des données de 2024 citées.

- **Verification independante :** Les chiffres 2024 cités (138 000 enfants, 92 000 AESH) sont vérifiés comme corrects pour 2024, mais sont périmés en juillet 2026. Les chiffres 2025 proposés (351-352k enfants, 137-140k AESH) correspondent aux données officielles ministère. La mise à jour est nécessaire pour actualiser la fiche ; l'allegation initiale était imprécise sur "sous-estimés" (ils ne l'étaient pas pour 2024), mais juste sur "dépassés" et justifiée dans son correction factuelle.



## chantier/problemes-63-fiches.md

### P8 -- Bracelet électronique : technologie, limites et coûts réels

- **Citation en cause :** Environ 15 000-18 000 bracelets électroniques actifs en France (2024). Coût moyen 1 500-2 000€/mois par individu... soit 30-36 M€/an

- **Probleme :** Erreur mathématique systématique dans le calcul du coût annuel. Calcul correct: 15k-18k bracelets × 1500-2000€/mois × 12 mois = 270-432 M€/an, non 30-36 M€/an. Le fichier sous-évalue le coût d'un facteur ~8-10x. Cette même erreur se répète dans la simulation d'expansion (surcoût cité 24 M€/an vs 144-192 M€/an correct).

- **Correction proposee :** Coût annuel total correct: 270-432 M€/an (coûts de 1500-2000€/mois × 12-18k bracelets × 12 mois). Pour l'expansion de 17k à 25k bracelets (+8k), le surcoût correct serait ~144-192 M€/an, non 24 M€/an.

- **Verification independante :** Erreur mathématique confirmée dans le fichier. Les chiffres cités (30-36 M€/an et 24 M€ surcoût expansion) sont incohérents avec le coût unitaire de 1500-2000€/mois × nombre de bracelets. Le calcul correct donne 270-432 M€/an (non 30-36), et le surcoût d'expansion doit être 144-192 M€/an (non 24 M€). Erreur systématique d'un facteur ~8-10x, reproduced deux fois dans le document.


### P3 -- Travail en prison : un outil de réinsertion sous-exploité et précaire

- **Citation en cause :** Environ 30-35% des détenus en France travaillent... Revenus moyens 400-700€/mois brut... Données ministère : travail prison génère revenus pénitentiaires ~80 M€/an, dont parts : détenus (~15%)

- **Probleme :** Incohérence algébrique entre les données citées. Si 30-35% de 70k détenus (21k-24.5k) gagnent en moyenne 400-700€/mois brut, le revenu brut total généré serait 100-205 M€/an (21k × 400 × 12 = 100M€ min; 24.5k × 700 × 12 = 205M€ max). Cela excède nettement les '80 M€/an' revendiqués comme 'revenus pénitentiaires'. Même en acceptant que détenus ne reçoivent que 15% (12 M€), le revenu brut global devrait être cohérent avec les salaires individuels annoncés.

- **Correction proposee :** Clarifier la définition de 'revenus pénitentiaires ~80 M€/an' (s'agit-il du brut ou du net après déductions?). Si brut, vérifier si les revenus moyens 400-700€/mois sont corrects ou s'il faut les réduire proportionnellement pour coller aux 80 M€. Sinon, augmenter le chiffre de 80 M€ à 100-150 M€ minimum selon le revenu individuel moyen réel.

- **Verification independante :** Incohérence factuelle confirmée. La fiche P3 cite des revenus moyens de 400-700€/mois brut, alors que les données actuelles du ministère de la Justice indiquent 280-337€/mois seulement. Ce surétiquetage des revenus crée une discordance avec le total pénitentiaire de ~80 M€ cité (le vrai total est ~65 M€). L'IA critique a raison qu'il y a incoherence arithmétique, mais elle a mal attribué la cause (elle pensait que le problème était la définition de '80 M€', alors que le vrai problème est les revenus individuels trop élevés). Correction requise : aligner les revenus moyens cités sur 280-337€/mois, et réviser le total à 65 M€/an.



## chantier/problemes-64-fiches.md

### P6 -- Accès à la commande publique verrouillé : dossiers labyrinthiques, marché réservé aux gros

- **Citation en cause :** Marché public annuel France : ~130 milliards d'euros

- **Probleme :** Le chiffre cité (130 milliards) est inférieur à la réalité en 2026. La commande publique représente environ 230 milliards d'euros par an (État et collectivités), selon les données officielles de 2026.

- **Verification independante :** Le chiffre de 130 milliards d'euros cité en ligne 147 est sous-estimé d'environ 50 %. Selon l'Observatoire économique de la commande publique (OECP, données 2026), la commande publique française s'élève à 233,3 milliards d'euros (2024), soit 72,4 Mds (État) + 42,6 Mds (santé) + 100,7 Mds (collectivités). Le chiffre de 130 Mds n'est justifié par aucune sous-catégorie officielle et affecte directement les calculs dérivés concernant la part des TPE dans les marchés publics.


### P9 -- Apprentissage : artisan forme, prime de l'État va à qui ?

- **Citation en cause :** l'État verse une prime d'apprentissage (actuellement ~3000 euros/an, majorée à 5000 pour secteurs tendus)

- **Probleme :** Les montants cités ne sont plus à jour en 2026. L'Aide Unique (aide de base pour apprentissage) est passée à 5000-6000 euros minimum en 2026, rendant l'affirmation d'une prime de base de 3000 euros obsolète.

- **Verification independante :** Les montants cités (3000€/an de base, majorée à 5000€ pour secteurs tendus) ne correspondent pas à la réalité en juillet 2026. L'aide actuelle est minimum 5000€ pour niveau 3-4 (PME < 250 salariés), modulée selon le NIVEAU du diplôme (4500€ pour bac+2, 2000€ pour bac+3+), avec 6000€ pour handicap. Il n'existe aucune majoration basée sur les "secteurs tendus". Ces montants reflètent un régime antérieur à mars 2026.


### P7 -- Transmission d'entreprise fiscalement punie vs Dutreil réservé aux gros

- **Citation en cause :** le régime Dutreil (exonération partielle sous conditions strictes) s'adresse surtout aux PME/cabinets (chiffre > 250 k euros) et nécessite 5 ans de détention

- **Probleme :** La loi de finances 2026 a modifié les délais : le délai de conservation est passé à 8 ans (6 ans individuels + 2 ans collectifs), sauf en cas de transmission par décès (5 ans). L'affirmation « nécessite 5 ans » n'est plus correcte en général.

- **Verification independante :** L'affirmation « nécessite 5 ans de détention » est devenue inexacte depuis la loi de finances 2026 (en vigueur 21 février 2026). La durée minimale des engagements de conservation est passée de 6 ans à 8 ans (2 ans de pacte Dutreil + 6 ans d'engagement individuel, contre 4 ans avant). Bien que l'IA précédente ait formulé sa description du correctif de façon imprécise (la transmission par décès n'entraîne pas une réduction simple à 5 ans, mais un assouplissement de la condition d'exercice), le cœur de son diagnostic est juste : la citation de la fiche est factuellement incorrecte et requiert correction à « 8 ans ».



## chantier/problemes-65-fiches.md

### P5 -- Les exportations d'armes françaises : contradictions démocratiques et absence quasi-totale de contrôle parlementaire

- **Citation en cause :** France exporte pour 4,8Md€ d'armes/an (14% du PIB défense 34Md€)

- **Probleme :** Le budget annuel de défense français cité (34Md€) est dramatiquement sous-estimé. Selon Wikipedia (2025), le budget de défense français est de 54,494Md€ (ministère seul) ou 68-70Md€ USD (ensemble). Cela représente une erreur de sous-estimation d'au minimum 60%. Le calcul 4,8Md€ = 14% de 34Md€ serait correct arithmétiquement, mais le dénominateur est erroné.

- **Verification independante :** Le budget de défense français cité (34Md€) est une sous-estimation substantielle de 15-30%. Les chiffres officiels du ministère montrent: 2023=43.9Md€, 2024=49.2Md€, 2025=50.5Md€. Même l'année la plus ancienne crédible (2017=32.3Md€) n'atteint pas 34Md€. Conséquence: le pourcentage d'exportation est surévalué (14% annoncé vs 10-11% réel en 2023). L'incohérence est confirmée comme critique valide.


### P6 -- La réserve opérationnelle française : sous-dimensionnée et inadaptée au modèle de défense totale (leçons Finlande/Suède)

- **Citation en cause :** Suède (10M) : 500.000 réservistes, 70%

- **Probleme :** Le nombre de réservistes suédois cité (500,000) est radicalement inexact. Selon Wikipedia (2025), la Suède dispose d'environ 34,000 réservistes actuels et ~88,000 en wartime (incluant conscripts). Le chiffre de 500,000 dépasse la capacité réelle d'un facteur 5-6. Cette affirmation invalide la comparaison internationale sur laquelle se fonde la fiche.

- **Verification independante :** Le chiffre 500,000 réservistes suédois est radicalement inexact. Les sources actuelles (2026) indiquent : réserve primaire 32,900 + Heimvärnet 22,000 = ~55,000 mobilisables maximum. La fiche l'exagère d'un facteur 6-9. Cette erreur majeure invalide la comparaison Finlande-Suède sur laquelle s'appuie la recommandation d'élargir la réserve française à 250,000.</anison>



## chantier/problemes-66-fiches.md

### P7 -- Les algorithmes de recommandation : DSA 2024 = obligation transparence non appliquée

- **Citation en cause :** Règlement UE Digital Services Act (DSA) adopté 2024, application septembre 2024

- **Probleme :** Le DSA a été adopté en octobre 2022 (pas 2024) et son application complète date de février 2024 (pas septembre 2024). La fiche cite des dates d'adoption et d'application incorrectes.

- **Verification independante :** Erreur factuelle confirmée. La fiche P7 énonce « DSA adopté 2024, application septembre 2024 ». Réalité vérifiée : adoption 19 octobre 2022, application complète 17 février 2024. Deux dates incorrectes, pas des nuances mineures mais des décalages d'années. L'autre IA avait raison.


### P4 -- L'ARCOM et le pluralisme audiovisuel : la décision CNews 2024 montre l'impuissance régulatrice

- **Citation en cause :** Arrêt Conseil d'État 25 janvier 2024 (CNews c/ ARCOM)

- **Probleme :** La décision du Conseil d'État date du 13 février 2024, non du 25 janvier 2024. C'est une erreur de date vérifiable.

- **Verification independante :** Date erronée identifiée ligne 104 du fichier. L'arrêt du Conseil d'État concernant CNews et l'ARCOM a été rendu le 13 février 2024 (Décision n° 463162), non le 25 janvier 2024. Erreur factuelle confirmée par source officielle conseil-etat.fr.


### P2 -- Les aides à la presse : 1.2Md€/an captés à 80% par les gros groupes

- **Citation en cause :** Rapport ministère Culture (2023) : aides directes & indirectes presse = 1.2Md€/an

- **Probleme :** En 2023, le ministère de la Culture a distribué 204.7 millions d'euros en aides directes à la presse, non 1.2Md€. Le chiffre de 1.2Md€ correspond à 2012, pas à 2023.

- **Verification independante :** Confusion factuelle confirmée : le chiffre 1.2Md€ correspond à 2012 (aides directes), non 2023. En 2023, aides directes ministère = 204.7M€ seulement. Si la citation prétend inclure aides directes ET indirectes, le total 2023 serait ~2.7Md€ (estimé avec TVA réduite + autres mesures), toujours distinct de 1.2Md€. La fiche est factuellement inexacte.


### P3 -- L'audiovisuel public français : financement jamais pérenne depuis la fin de la redevance

- **Citation en cause :** France Télévisions : budget 2024 = 3.8Md€, financement hybride (impôt général 60%, redevance-CSA 40%)

- **Probleme :** Le budget de France Télévisions en 2024 est d'environ 2.5-2.6Md€ en dotation publique, non 3.8Md€. Le chiffre 3.8Md€ peut se rapporter au secteur audiovisuel public dans son ensemble, mais non à France Télévisions seule.

- **Verification independante :** Le budget de dotation publique de France Télévisions en 2024 est d'environ 2.5Md€ selon le rapport de la Cour des Comptes (septembre 2025), non 3.8Md€ comme affirmé en P3 ligne 72. Le chiffre 3.8Md€ dépasse largement la dotation publique directe ; il pourrait inclure des revenus publicitaires ou couvrir un secteur audiovisuel plus large, mais pas France Télévisions seule.


### P10 -- Modèles étrangers et défense créateurs face à l'IA générative

- **Citation en cause :** BBC (UK) : charte constitutionnelle 2016, redevance 150 GBP/an verrouillée par loi

- **Probleme :** La redevance BBC en 2024-2025 est de £169.50 à £174.50, non de £150 GBP/an. Le montant de 150 GBP était un chiffre historique ancien.

- **Verification independante :** L'incohérence est confirmée. La fiche cite « redevance 150 GBP/an » en contexte de charte 2016. Or : en 2016, la redevance était £145.50 (gelée 2010-2017) ; en 2024-2025, elle était £174.50 ; en 2026-2027, elle est £180. Le chiffre de 150 £ n'a jamais été exact, c'est une erreur factuelle vérifiée. Pour une fiche de comparaison internationale destinée aux décisions politiques, cette imprécision (écart de 5.50-35 £ selon la période) diminue la crédibilité.


### P6 -- Le Pass Culture : 2Md€ dépensés, 75% en commandes sans découverte

- **Citation en cause :** Rapport Cour des comptes (avril 2024) : 1.5M bénéficiaires (18-21 ans), budget 2Md€ dépensé (2022-2024) = 1.333€/jeune moyen

- **Probleme :** Le rapport de la Cour des comptes date de décembre 2024 (non avril 2024). Le nombre réel est 4.2 millions de jeunes inscrits depuis 2019 (non 1.5M). Les dépenses réelles sont bien inférieures à 2Md€ : ~240M€ en 2023, ~244M€ prévus en 2024.

- **Verification independante :** Trois erreurs factuelles graves confirmées indépendamment : (1) Date rapport = décembre 2024, non avril ; (2) Bénéficiaires = 4.2M inscrits cumulé, non 1.5M ; (3) Budget critique = ~577M€ pour 2022-2024, non 2Md€ (surestimation 3.5x). La fiche P6 doit être corrigée avant toute utilisation programmatique.


### P9 -- Le patrimoine culturel français : 30.000 églises, 5.000 en péril structurel

- **Citation en cause :** Notre-Dame (Paris) 2019 incendie : 900M€ reconstruction engagés (public 600M€ État + donations 300M€) ; achèvement 2025

- **Probleme :** Notre-Dame a réouvert en décembre 2024, mais les travaux de restauration se poursuivent jusqu'en 2026 et au-delà (jusqu'en 2028). La fiche indique un 'achèvement 2025' qui est inexact ; la restauration n'est pas complète à cette date.

- **Verification independante :** L'allégation est vérifiée par sources multiples (juillet 2026). La fiche indique « achèvement 2025 » ; or les travaux de restauration se poursuivent jusqu'en 2033 selon le programme officialisé par Rebâtir Notre-Dame. La réouverture publique (décembre 2024) ne signifie pas fin des travaux structurels. La prédiction « 2025 » était le calendrier initial optimiste, dépassé par la réalité : chevet/arcs-boutants (2025-2029), sacristie (2026+), rosaces (2027-2029), façades (2027+). L'inexactitude est confirmée.



## chantier/problemes-67-fiches.md

### P1 -- L'héritage des JO 2024 : promesses non tenues

- **Citation en cause :** Le stade Yenimahalle d'Aulnay-sous-Bois, présenté comme legacy, fonctionne à 35 % de sa capacité.

- **Probleme :** Yenimahalle est un district/municipalité d'Ankara en Turquie, non pas un stade à Aulnay-sous-Bois. Les recherches web sur les équipements olympiques d'Aulnay-sous-Bois ne mentionnent que le Stade du Moulin Neuf et le centre aquatique L'Odyssée, aucune référence à « Yenimahalle d'Aulnay-sous-Bois ».

- **Verification independante :** Yenimahalle est confirmé être un district d'Ankara en Turquie. Aucun stade portant ce nom n'existe à Aulnay-sous-Bois d'après les recherches web (juillet 2026). Les équipements réels sont le Stade du Moulin-Neuf, le Vélodrome, Belval et City-Stade. La fiche cite un équipement fictif comme legacy des JO 2024, ce qui est une erreur factuelle majeure compromettant la crédibilité des analyses suivantes.



## chantier/problemes-68-fiches.md

### P6 -- Éolien en mer : retards, recours, prix

- **Citation en cause :** À date 2024 : zéro MW éolien en mer France opérationnel

- **Probleme :** Le fichier affirme qu'aucun parc éolien offshore n'est opérationnel en 2024, alors que deux parcs majeurs sont déjà en service depuis plusieurs années : Saint-Nazaire (480 MW, opérationnel depuis novembre 2022) et Saint-Brieuc (496 MW, opérationnel depuis mai 2024). Total d'environ 976 MW déjà connectés au réseau en 2024.

- **Verification independante :** L'affirmation "À date 2024 : zéro MW éolien en mer France opérationnel" est une erreur factuelle confirmée. Saint-Nazaire (480 MW, opérationnel depuis novembre 2022) et Saint-Brieuc (496 MW, entré en service mai 2024) totalisent 976 MW de capacité déjà connectés et produisant en 2024. L'autre IA a correctement identifié l'incohérence.


### P6 -- Éolien en mer : retards, recours, prix

- **Citation en cause :** Projets en permis 2024 : Dunkerque (750 MW)

- **Probleme :** Le fichier cite une capacité de 750 MW pour Dunkerque, alors que la capacité autorisée est de 600 MW avec 46 turbines, selon les autorisations préfectorales du 14 février 2025 et le site officiel du projet.

- **Verification independante :** Le fichier cite « Dunkerque (750 MW) » mais la capacité autorisée est 600 MW avec 46 turbines, confirmée par le site officiel du projet et les sources RTE/CNDP. Erreur factuelle substantielle de +150 MW (+20%).


### P9 -- Aquaculture bloquée : production stagnante vs importations

- **Citation en cause :** Production aquaculture France métropole : 45 k tonnes/an (2023), stagnante depuis 2010

- **Probleme :** Le chiffre de 45 000 tonnes est fortement sous-estimé. Selon Agreste (ministère Agriculture) et FranceAgriMer, la production réelle d'aquaculture en France en 2023 est de 185,372 tonnes (dont 39,443 tonnes de pisciculture et 145,929 tonnes de conchyliculture), soit environ 4 fois plus que le chiffre cité. La production n'est pas stagnante : elle a augmenté de 0,9% entre 2022 et 2023.

- **Verification independante :** La critique est vérifiée et fondée. Les données officielles de FranceAgriMer et Agreste (mêmes sources citées dans la fiche) indiquent une production d'aquaculture France 2023 de 185,372 tonnes (39,443 tonnes pisciculture + 145,929 tonnes conchyliculture), soit 4 fois plus que le chiffre de 45 k tonnes cité. La production a augmenté de 0,9% entre 2022-2023, contredisant l'affirmation de stagnation. C'est une erreur factuelle majeure, pas une nuance mineure.


### P7 -- Marine marchande sous pavillon français en déclin

- **Citation en cause :** Armement français (navires immatriculés France) : 550 navires en 2023

- **Probleme :** Le chiffre est surestimé. Selon le ministère français de la Transition écologique, au 1er janvier 2023, la flotte de commerce sous pavillon français comprenait 421 navires (193 transport + 228 services). Ce chiffre s'est porté à 464 en début 2026. Le chiffre 550 ne correspond à aucune source officielle consultée.

- **Verification independante :** Chiffre de 550 navires en 2023 surestimé. Source officielle (Ministère Transition écologique) : 421 navires au 1er janvier 2023 (193 transport + 228 services). Erreur de +129 navires (~30%). Le chiffre 550 n'existe dans aucune source consultée. Au 1er janvier 2026 : 464 navires confirmés officiellement.



## chantier/problemes-69-fiches.md

### P5 -- Assemblées générales : quorum impossible, votes confisqués par majorité sortante

- **Citation en cause :** Quorum AG copropriété : 1/4 présents ou représentés première convocation (Art. L.721-25 Code construction)

- **Probleme :** La fiche affirme l'existence d'un quorum obligatoire de 1/4 pour les assemblées générales, cité à l'article L.721-25. Or la loi du 10 juillet 1965 sur les copropriétés ne prévoit PAS de quorum pour la validité d'une assemblée générale. Seules des règles de majorité s'appliquent (majorité simple, absolue ou double majorité selon la nature des décisions), mais aucune obligation de quorum.

- **Correction proposee :** Supprimer la mention de quorum obligatoire. Remplacer par : 'Règles de majorité AG copropriété : majorité simple des votes exprimés (art. 24 de la loi 65-557), ou majorité absolue de tous les copropriétaires, ou double majorité (2/3 des tantièmes) selon la nature des décisions.'

- **Verification independante :** L'IA précédente a raison : la fiche P5 affirme à tort l'existence d'un quorum obligatoire de 1/4 à la première convocation (Art. L.721-25). Or, la loi du 10 juillet 1965 sur les copropriétés ne prévoit AUCUN quorum obligatoire pour la validité d'une assemblée générale. Seules des règles de majorité s'appliquent (articles 24, 25, 26 : majorité simple, absolue, double majorité selon la nature des décisions). L'article L.721-25 cité n'existe pas sur les AG (articles L721-1 à L721-3 concernent la vente, pas les AG). Ceci est confirmé par la jurisprudence officielle et les sources juridiques françaises consensus (ANIL, Service-Public, forums juridiques).


### P6 -- Ravalements et DPE collectifs imposés sans financement pour petits propriétaires

- **Citation en cause :** Nouvelle obligation : travaux isolation (loi Grésillon suite) pour F avant 2030, E avant 2033

- **Probleme :** Le calendrier d'interdiction de location est incorrect pour la classe F. La fiche cite 'F avant 2030' mais le décret réel (loi Climat et Résilience 2021, application août 2023) fixe l'interdiction de location classe F au 31 décembre 2027 (donc avant 2028, pas 2030). La date pour classe E (2033/2034) est correcte.

- **Correction proposee :** Remplacer 'F avant 2030' par 'F avant 2028' (interdiction effective 1er janvier 2028). La classe E est correcte (31 décembre 2033).

- **Verification independante :** L'allegation a identifié une erreur factuelle réelle : la fiche dit "F avant 2030" alors que l'interdiction de location classe F est fixée au 1er janvier 2028 (avant 2028). Cependant, l'allegation est INCOMPLÈTE : elle affirme que la classe E est correcte à "2033/2034", or la fiche cite "E avant 2033" qui est AUSSI faux — c'est 2034. Les deux dates calendrier dans P6 sont erronées. Correction exacte : "F avant 2028, E avant 2034".</anison>



### P7 -- Locations touristiques (Airbnb, réglementations en théorie, vide en pratique)

- **Citation en cause :** Airbnb France : ~600 000 annonces actives (2024)

- **Probleme :** Le nombre d'annonces Airbnb est grandement sous-estimé. Les données 2024 indiquent environ 1 million d'annonces actives (octobre 2024), voire 1,31 million en moyenne mensuelle 2024-2025 selon Institut Paris Region et sources actuelles. Le chiffre de 600 000 est obsolète ou erroné.

- **Correction proposee :** Remplacer '~600 000 annonces actives (2024)' par '~1 million d'annonces actives (2024)' ou 'environ 1,31 million d'annonces actives (2024-2025)'.

- **Verification independante :** Incohérence factuelle confirmée. Le fichier cite "Airbnb France : ~600 000 annonces actives (2024)" (ligne 79, P7). Or, les données actuelles (2024-2025) indiquent : 1 million d'annonces actives en octobre 2024, et 1,31 million en moyenne mensuelle 2024-2025 (sources : Excelia Hotel & Tourism School, Institut Paris Region). Le chiffre de 600 000 est obsolète — il provient probablement de 2023 ou antérieur. Correction recommandée : remplacer par "~1 million d'annonces actives (2024)" ou "1,31 million d'annonces actives (2024-2025)" selon le niveau de précision souhaité.</anison>



### P3 -- Copropriétés dégradées : plan initiative réel ou cosmétique ? (Marseille, Grigny, bilan 2016-2024)

- **Citation en cause :** Marseille : 40 000+ appartements en copropriétés dégradées (rapport ANIL 2023), 18 % du parc

- **Probleme :** Le nombre d'appartements en copropriétés dégradées à Marseille est largement exagéré. Selon les données 2024 de l'Observatoire habitat et de la Métropole Aix-Marseille-Provence : Marseille compte 23 057 copropriétés au total (54% du parc métropolitain), dont environ 6 000 copropriétés insalubres, soit environ 28 ensembles prioritaires comprenant près de 10 000 logements. Le chiffre de 40 000+ est FAUX.

- **Correction proposee :** Remplacer '40 000+ appartements en copropriétés dégradées' par 'environ 6 000 copropriétés dégradées, représentant environ 10 000 logements prioritaires' ou ajuster à moins de 15 000 logements maximum.

- **Verification independante :** Le chiffre "40 000+ appartements" est confirmé comme largement exagéré. Les données officielles 2024-2026 (Métropole AMP, État, ANIL) documentent environ 10 000 logements dans 28 ensembles prioritaires, et ~6 000 copropriétés insalubres, soit 4-5 % du parc marseillais, non 18 %. Aucun rapport ANIL 2023 ne mentionne 40 000. La correction proposée (6 000-10 000 logements) est factuellement juste.


### P9 -- Ascenseurs et contrats d'entretien : duopole captif (Otis, Schindler, Thomson), prix exploratoires

- **Citation en cause :** Marché en France : Otis (~35 % marché), Schindler (~25 %), Thomson (~20 %), autres ~20 %

- **Probleme :** Le nom du troisième acteur est incorrect. Thomson n'est PAS parmi les quatre principaux acteurs du marché français des ascenseurs. Les quatre leaders sont Otis, KONE (finlandais), Schindler (suisse) et ThyssenKrupp/TK Elevator (allemand), qui contrôlent plus de 80% du marché. Thomson ne figure pas dans les parts de marché significatives.

- **Correction proposee :** Remplacer 'Thomson (~20%)' par 'KONE (~20%)' ou 'ThyssenKrupp/TK Elevator (~20%)' selon les données exactes du marché. Vérifier les parts précises auprès de Xerfi ou sources industrie ascenseurs.

- **Verification independante :** Vérification indépendante via 3 recherches web confirme : les 4 leaders du marché français des ascenseurs 2026 sont Otis, KONE, Schindler et TKE (ThyssenKrupp Elevator). Thomson ne figure dans aucune source comme acteur majeur du secteur ascenseurs. La citation "Thomson (~20%)" dans P9 est factuellement inexacte et doit être remplacée par KONE ou ThyssenKrupp/TK Elevator selon les parts de marché réelles.



## chantier/problemes-7-fiches.md

### P3 -- Ubérisation et protection sociale des indépendants

- **Citation en cause :** Piste A, Espagne (statut de « travailleur de plateforme ») : Loi Riders (2021) : Uber/Deliveroo doivent embaucher livreurs en quasi-CDI partiel ou cotiser couverture sociale.

- **Probleme :** La fiche présente la Loi Riders comme un succès d'implémentation où Deliveroo embauche ou cotise. Or, Deliveroo s'est retiré d'Espagne en octobre 2021 précisément pour échapper à cette loi. Uber Eats contourne la loi en embauchant via des sous-traitants (80% restent « indépendants »). Ce n'est donc pas un exemple de succès d'application de la loi Riders.

- **Verification independante :** Deliveroo s'est effectivement retiré d'Espagne en novembre 2021 (29/11) pour échapper à la Loi Riders, invoquant des pertes projetées de €20M. Uber Eats a contourné la loi via sous-traitance (approche légalement contestée). Glovo a refusé la conformité durant des années (400M+ € d'amendes). La fiche présente cette loi comme un modèle fonctionnel de protection (Piste A) sans clarifier qu'elle n'a produit ni succès d'application ni conformité volontaire de la part des deux leaders du marché. Présentation factuellement inexacte pour une fiche de programme politique.


### P6 -- Chômage et emploi des jeunes non qualifiés (15-29 ans)

- **Citation en cause :** Taux chômage jeunes 15-24 ans: 21,1 % T1 2026 (+2,8 pts/an, hausse 5 trimestres)

- **Probleme :** La fiche cite une hausse annuelle de +2,8 pts. Or, les données INSEE T1 2026 indiquent +2,0 points (Q1 2025: 19,1% → Q1 2026: 21,1%). Le chiffre +2,8 pts/an est inexact.

- **Verification independante :** La fiche P6 cite une hausse annuelle de +2,8 pts/an pour le taux de chômage jeunes 15-24 ans à T1 2026. Or, les données INSEE officielles montrent une hausse year-over-year de +2,0 points seulement (Q1 2025: 19,1% → Q1 2026: 21,1%). Le chiffre +2,8 pts/an est factuellement inexact selon les statistiques INSEE officielles.


### P6 -- Chômage et emploi des jeunes non qualifiés (15-29 ans)

- **Citation en cause :** NEET (ni emploi, ni étude, ni formation) : ~650 k jeunes (7,5 %, à confirmer).

- **Probleme :** La fiche cite ~650 000 jeunes NEET en France. Or, les données 2025 indiquent ~1,5 millions de jeunes en situation NEET, soit plus que le double. C'est une sous-estimation majeure (650k vs 1,5M).

- **Verification independante :** La fiche P6 cite ~650 000 jeunes NEET (7,5 %), tandis que les données actuelles (fin 2025 / début 2026) indiquent environ 1,5 million de NEET pour la tranche 15-29 ans (15 %). C'est une sous-estimation majeure : plus que le double. Même avec la définition 15-24 ans, les sources officielles citent 1,035 million, ce qui infirme largement le chiffre de 650k. La divergence ne peut pas être attribuée à une différence de définition ou de périmètre — c'est une inexactitude factuelle confirmée.


### P7 -- Santé au travail et absentéisme structurel

- **Citation en cause :** Absentéisme France : 2,7 % (vs 1,8 % Allemagne, 2,1 % Suède), coûts ~18 Md€/an employeurs.

- **Probleme :** La fiche cite un taux d'absentéisme de 2,7% en France. Or, les données 2025-2026 actuelles indiquent un taux entre 5,58% et 6,7%, soit plus que le double du chiffre présenté. C'est une incoherence factuelle majeure.

- **Verification independante :** Le chiffre de 2,7% cité dans la fiche P7 est factuellement faux. Les données actuelles 2025-2026 attestent un taux d'absentéisme en France de 4,8% à 5,58% (certaines sources jusqu'à 5,8%), soit plus que le double du chiffre présenté. Le chiffre 2,7% est obsolète (probablement d'avant 2020). L'incoherence factuelle majeure est confirmée.


### P7 -- Santé au travail et absentéisme structurel

- **Citation en cause :** France = peu médecins travail (6 k vs 18 k Allemagne)

- **Probleme :** La fiche cite 6 000 médecins du travail en France. Or, selon les données officielles 2026, il y en a 4 857, soit moins de 5 000. Le chiffre 6k est un chiffre historique dépassé.

- **Verification independante :** Le chiffre 6 000 pour la France est confirmé obsolète. Les données officielles DREES/Ordre des médecins 2026 attestent 4 857 médecins du travail, soit une baisse nette depuis ~2016. Le chiffre 18k pour l'Allemagne est également non fondé : les sources officielles (2025) indiquent 8 000-10 000 professionnels en activité. La fiche utilise deux chiffres historiquement erronés pour soutenir son propos, ce qui affaiblit son crédibilité factuelle.



## chantier/problemes-71-fiches.md

### P10 -- Les smartphones à l'école : interdiction réelle ou affichage?

- **Citation en cause :** Suède (2024): ban strict téléphones/tablettes élémentaire/collège, résultats 6 mois: concentration +22%, absences 18% baisse, harcèlement 15% baisse

- **Probleme :** Le ban en Suède n'entrera en vigueur qu'en août 2026. La proposition a été présentée en mars 2025. En juillet 2026, il n'existe pas encore de résultats de 6 mois - les chiffres cités sont des projections, pas des résultats observés.

- **Verification independante :** Incoherence confirmée. Le ban suédois entre en vigueur automne 2026 (pas 2024). En juillet 2026, aucun résultat de 6 mois ne peut exister. Les chiffres cités (concentration +22%, absences -18%, harcèlement -15%) sont soit des projections, soit confondus avec les Pays-Bas (qui ont des résultats réels depuis janvier 2024). La fiche présente comme "résultats" 6 mois des données factellement impossibles à cet instant de la timeline.



## chantier/problemes-72-fiches.md

### P2 -- La Francophonie : 320 millions de locuteurs orphelins d'une stratégie

- **Citation en cause :** Institut Confucius : 11 en France, 2024

- **Probleme :** Le nombre d'Instituts Confucius en France est surestimé. La fiche cite 11 instituts en 2024, mais les sources officielles (data.gouv.fr, site institut-confucius.fr) confirment qu'il en existe 18 en France en 2024-2025.

- **Verification independante :** La fiche cite 11 instituts Confucius en France (2024), mais les sources officielles confirment 18 instituts en France fin 2024 (institutconfucius.fr, data.gouv.fr). C'est une sous-estimation, non une surestimation comme l'a affirmé l'IA précédente — erreur logique dans sa justification, mais identification factuelle correcte de l'écart.


### P2 -- La Francophonie : 320 millions de locuteurs orphelins d'une stratégie

- **Citation en cause :** British Council : 2 milliards GBP/an (2200 millions EUR)

- **Probleme :** Le budget du British Council est largement surestimé. La fiche cite 2 milliards GBP/an, mais selon le rapport 2024-25 du Parliament UK et FCDO, le British Council reçoit £162.5 million de core grant (15% du budget total), soit un budget total d'environ £1 milliard (~1.25 milliards EUR), soit moins de 65% du chiffre cité.

- **Verification independante :** L'incoherence factuelle est VERIFIEE et CONFIRMEE. La fiche P2 surévalue le budget du British Council d'environ 95% : elle affirme 2 milliards GBP/an alors que le budget 2024-25 officiel (Parliament UK, FCDO, NAO) est d'environ 1,054 milliard GBP. Le core grant de 162.5M GBP representant 15.4% du budget total confirme l'analyse critique de l'autre IA. Correction necessaire : "British Council : ~£1.05 milliards GBP/an (~1,3 milliards EUR)" est le chiffre exact pour 2024-25.


### P2 -- La Francophonie : 320 millions de locuteurs orphelins d'une stratégie

- **Citation en cause :** Goethe-Institut : 300 millions EUR/an

- **Probleme :** Le budget du Goethe-Institut est surestimé. La fiche cite 300 millions EUR/an, mais selon les sources officielles Goethe-Institut et rapports budgétaires allemands, le budget était EUR 239 million (2023) et EUR 231 million (2024), soit environ 230-240 millions EUR, pas 300 millions.

- **Verification independante :** L'allégation est fondée. La fiche P2 cite "Institut Goethe : 300 millions EUR/an", mais le budget réel est EUR 239 million (2023) et EUR 231 million (2024) selon rapports officiels Goethe-Institut et projections budgétaires allemandes. Écart de 25-30% = erreur substantielle, non nuance mineure.


### P4 -- Les visas étudiants et talents : la France qui forme puis renvoie

- **Citation en cause :** France accueille 330 000 étudiants étrangers (2023, Campus France)

- **Probleme :** Le nombre d'étudiants internationaux est sous-estimé. La fiche cite 330 000 pour 2023, mais Campus France confirme que la France a accueilli 430,466 étudiants étrangers en 2023-2024, soit 30% de plus que le chiffre cité.

- **Verification independante :** Campus France confirme 430 466 étudiants étrangers pour 2023-2024, soit 30% de plus que les 330 000 cités dans la fiche. Le chiffre 330 000 ne correspond à aucune année récente officielle (2020-2021 : 365k, 2022-2023 : 412k, 2023-2024 : 430k). C'est une sous-estimation factuelle qui affaiblit le positionnement politique de la fiche sur l'attractivité française.


### P5 -- L'audiovisuel extérieur : France 24 et RFI affaiblis au Sahel

- **Citation en cause :** France 24 : audience mondiale 68 millions/mois (2023, Google Analytics)

- **Probleme :** L'audience de France 24 est grandement surestimée. La fiche cite 68 millions visites/mois en 2023, mais selon les données officielles France 24 (About Us page 2023), France 24 génère 19.6 millions visits + 192.5 millions video views mensuels (2023), ce qui est très différent du chiffre cité.

- **Verification independante :** Le chiffre de 68 millions/mois cité dans la fiche P5 n'apparaît dans aucune source officielle. Les données réelles de France 24 pour 2023 sont : 19.6 millions visits OU 192.5 millions video views mensuels. Le chiffre de 68 millions est inexact et mal sourcé, peu importe la métrique comparée.


### P10 -- Le siège au Conseil de sécurité : levier réel ou posture ?

- **Citation en cause :** Usage du veto : France 14 fois depuis 1945

- **Probleme :** Le nombre d'utilisations du droit de veto par la France est sous-estimé. La fiche cite 14 fois depuis 1945, mais selon l'ONU et sources parlementaires françaises officielles, la France a utilisé le veto 18 fois (ou 16 selon certaines sources), et n'a pas utilisé le veto depuis 1989 (plus de 30 ans).

- **Verification independante :** La fiche cite "France 14 fois depuis 1945" mais les sources officielles de l'ONU (Dag Hammarskjöld Library, Security Council dashboard, Wikipedia avril 2026) confirment 16 vetoes depuis 1946. C'est une sous-estimation de 2 vetoes. L'affirmation sur l'absence de veto depuis 1989 (plus de 35 ans) est correcte. L'allegation d'une incoherence est valide.



## chantier/problemes-73-fiches.md

### P2 -- La concentration du secteur funéraire aux mains de deux groupes

- **Citation en cause :** le groupe OGF (Groupe Funeral) et le groupe PFG (Patrimoine Funéraire Groupe) contrôlent respectivement 25 à 30 % du marché chacun

- **Probleme :** PFG n'est pas un groupe concurrent indépendant - c'est une filiale (enseigne) du groupe OGF. Le texte présente deux groupes rivaux quand il existe une relation propriétaire. La réalité: OGF et Funécap ensemble contrôlent 30% du marché, OGF seul (incluant PFG) = ~20%. L'affirmation des '25-30% chacun' est donc factuellement fausse: PFG n'existe pas comme groupe séparé.

- **Verification independante :** La critique est fondée. PFG (Pompes Funèbres Générales) est une marque/enseigne du groupe OGF, pas une entreprise indépendante. L'affirmation de la fiche « respectivement 25 à 30% chacun » opère une double-comptage : elle présente deux groupes rivaux quand il n'existe qu'un seul groupe (OGF incluant PFG, ~25-30% du marché) plus Funécap (~11%). La réalité du secteur : OGF (avec ses marques PFG, Roblot, Dignité Funéraire) domine ~25-30% ; Funécap ~11% ; le reste fragmenté. Le doublon PFG/OGF dans le texte est une erreur factuelle grave qui exagère la concentration en feignant deux concurrents séparés.


### P6 -- La crémation explose sans équipements publics suffisants

- **Citation en cause :** La crémation passe de 24 % des décès en 2010 à 35 à 40 % en 2024

- **Probleme :** Selon INSEE et les sources funéraires, le taux de crémation en 2024 est de 46%, non 35-40%. Le chiffre indiqué est sous-estimé d'environ 6 points.

- **Verification independante :** Le chiffre énoncé dans P6 (35–40 %) est sous-estimé par rapport aux données INSEE/FFC de 2024 : le taux réel est 46 %. Écart confirmé de 6–11 points. L'accusation est valide et devrait déclencher une correction à 46 %.


### P6 -- La crémation explose sans équipements publics suffisants

- **Citation en cause :** la France compte environ 150 à 200 crématoriums, dont 70 % publics

- **Probleme :** Le nombre de crématoriums en France est 221 (ou ~214 en métropole), non 150-200. Le chiffre donné est sous-estimé de ~20-30%.

- **Verification independante :** La fiche P6 cite « environ 150 à 200 crématoriums » en France, or le chiffre vérifié en juillet 2026 est 221 crématoriums (216 en métropole). La fourchette donnée sous-estime la réalité de 9,5 % au minimum (chiffre haut : 200 vs 221) jusqu'à 32 % au maximum (chiffre bas : 150 vs 221). C'est une incohérence factuelle confirmée, non une nuance mineure. L'IA précédente avait raison.


### P9 -- La fin de vie à domicile impossible : manque de soins palliatifs

- **Citation en cause :** Les équipes mobiles sont 2 000 à 2 500 en France, insuffisantes

- **Probleme :** Selon l'Atlas des soins palliatifs et fin de vie en France (3e édition), il y a 424 Équipes Mobiles de Soins Palliatifs (EMSP), non 2000-2500. Le chiffre est surestimé d'un facteur 5 à 6. C'est une incoherence majeure.

- **Verification independante :** Incohérence factuelle confirmée. La fiche P9 affirme "Les équipes mobiles sont 2 000 à 2 500 en France" alors que l'Atlas des soins palliatifs et fin de vie (3e édition, 2023 - source officielle du Centre National Fin de Vie) indique 424 Équipes Mobiles de Soins Palliatifs. Écart surestimé d'un facteur 5,7 à 5,9x. Aucune source ne justifie le chiffre 2000-2500 (données historiques: 177 en 1999, ~300 en 2004, 424 en 2023).


### P10 -- Modèles étrangers : transparence en ligne, coopératives, régies publiques

- **Citation en cause :** Au Québec, les coopératives funéraires gèrent 40 % du marché

- **Probleme :** Selon la Fédération des coopératives funéraires du Québec, les coopératives contrôlent environ 20% du marché (2023), non 40%. Le chiffre 40% se référait aux compagnies américaines (multinationales) dans les années 2000, pas aux coopératives.

- **Verification independante :** La fiche P10 énonce « Au Québec, les coopératives funéraires gèrent 40 % du marché ». Or, selon la Fédération des coopératives funéraires du Québec (données 2023), les coopératives gèrent environ 20% du marché. Le chiffre 40% provient d'une confusion avec la part de marché des compagnies américaines (multinationales) au Québec dans les années 2000. L'erreur surévalue donc la position des coopératives d'un facteur de 2.



## chantier/problemes-74-fiches.md

### P2 -- Airbnb et meublés touristiques : vide-centres-villes, loi Le Meur 2024 non appliquée uniformément, quotas absents

- **Citation en cause :** Loi Le Meur (2024, art. L. 631-7 Code monétaire) limite à 120 jours/an sans déclaration en zone tendue

- **Probleme :** La loi Le Meur de novembre 2024 (entrée en vigueur janvier 2025) a réduit à 90 jours/an la limite pour les résidences principales en zones tendues, pas 120 jours. Le chiffre 120 jours/an est obsolète depuis 2025.

- **Correction proposee :** Remplacer '120 jours/an' par '90 jours/an' en zones tendues depuis 2025 (ou 120 jours/an dans zones non tendues).

- **Verification independante :** Correction justifiée. En juillet 2026, l'affirmation "120 jours/an" est techniquement correcte au plan national mais imprécise : depuis janvier 2025, les communes en zones tendues peuvent réduire à 90 jours par délibération (Paris, Marseille appliquent déjà ; Lyon, Bordeaux, Nice prévus 2026). La fiche doit préciser le caractère optionnel/municipal de la réduction à 90 jours, sinon elle induit une fausse impression d'uniformité. Correction recommandée : "120 jours/an par défaut, réduit à 90 jours dans communes tendues ayant délibéré (Paris, Marseille depuis 2025; Lyon, Bordeaux, Nice 2026)."


### P3 -- Résidences secondaires : 3,7 millions de logements gelés en zones tendues, imposition insuffisante (Suisse/Autriche modèles)

- **Citation en cause :** Suisse applique taxe résidences secondaires 5-15% annuels (Canton Valais 15%, Zurich 5-10%)

- **Probleme :** La réforme suisse de 2025 (57.7% en faveur le 28 septembre 2025) abolit la 'valeur locative imputée' à partir de 2028. Les cantons auront l'OPTION d'instaurer une taxe sur résidences secondaires, mais ce n'est pas une taxe fixe 5-15% actuellement appliquée. Les taux cités (5-15%, 15%, 5-10%) ne correspondent pas à la réalité 2026.

- **Correction proposee :** Clarifier que les taux 5-15% ne sont plus d'actualité en 2026. La Suisse est en transition vers un nouveau régime de 2028 où les cantons auront la possibilité (non obligation) d'instaurer une taxe sur résidences secondaires dont les taux ne sont pas encore déterminés.

- **Verification independante :** La fiche cite "Suisse applique taxe résidences secondaires 5-15% annuels (Canton Valais 15%, Zurich 5-10%)" comme fait actuel. Vérification web indépendante confirme: (1) Ces taux ne correspondent à aucune taxe résidences secondaires actuellement appliquée en juillet 2026 en Suisse. (2) Le système actuel repose sur la valeur locative imputée (loyer théorique) et taxe propriété 0-0,3%, pas 5-15%. (3) La réforme de sept 2025 abolit valeur locative à partir du 1/1/2029, donnant aux cantons l'OPTION (non obligation) d'instaurer une taxe résidences secondaires aux taux NON ENCORE DÉFINIS. (4) Zurich applique 3,5-4,25%, pas 5-10%. Les taux cités ne correspondent à aucune réalité fiscale suisse documentée en 2026. L'autre IA a raison: la fiche confond système actuel (disparaissant) et système futur optionnel indéfini, présentant le tout comme établi.


### P3 -- Résidences secondaires : 3,7 millions de logements gelés en zones tendues, imposition insuffisante (Suisse/Autriche modèles)

- **Citation en cause :** Autriche [...] taxe immobilière progressive sur patrimoine non-principal (3-4% annuel)

- **Probleme :** L'Autriche n'applique PAS une 'taxe immobilière progressive de 3-4% annuel' sur le patrimoine non-principal. L'impôt foncier en Autriche varie entre 0.4-0.9% (pas 3-4%). L'Autriche n'a plus d'impôt sur la fortune générale depuis 2008. Des taxes sur résidences secondaires existent dans certains Länder (Salzburg, Styria, etc.) mais pas comme système national de 3-4% progressif.

- **Correction proposee :** Remplacer par : 'Autriche applique impôt foncier 0.4-0.9% selon le Länder, plus des taxes régionales sur résidences secondaires dans certains Länder (Vienne introduit une taxe à partir de 2025), mais pas de taxe nationale progressive de 3-4%.'

- **Verification independante :** L'Autriche n'applique pas une « taxe immobilière progressive de 3-4% annuelle » sur le patrimoine non-principal. Réalité vérifiée juillet 2026 : (1) Liegenschaftsteuer 0,4-0,9% annuel ; (2) taxe de transfert 0,5-3,5% unique à l'achat ; (3) nouvelle taxe Vienna 2025-2026 = montants fixes (300-550 EUR/an), pas pourcentage. Aucun système national progressif de 3-4% annuel n'existe. L'affirmation confond taux annuel vs transfert et surévalue le fardeau fiscal d'un facteur 3-4×. Correction proposée par l'autre IA est fondée.


### P5 -- Surtourisme : Étretat, calanques, Mont-Blanc jauges insuffisantes, réservation partout sauf France

- **Citation en cause :** Étretat (120 000 visiteurs/an prévu, 200 000+ réels en haute saison)

- **Probleme :** Étretat accueille 1.2-1.5 millions de visiteurs par an (2023-2024), avec des pics quotidiens de 20 000 personnes en haute saison (juin-septembre). Les chiffres '120 000/an prévu' et '200 000+ réels en haute saison' sont dramatiquement sous-estimés (20-60x moins que la réalité).

- **Correction proposee :** Remplacer par : 'Étretat (1.2-1.5 millions visiteurs/an, pics 20 000/jour en haute saison).'

- **Verification independante :** Incohérence confirmée et SÉVÈRE: le fichier affirme 120 000 visiteurs/an (ou 200 000+ en haute saison) alors que les données actuelles (2024-2026) montrent 1-1.5 millions/an (écart de 8-12x). CEPENDANT, la correction proposée elle-même contient une inexactitude: elle mentionne "pics 20 000/jour" alors que les données actuelles rapportent environ 10 000/jour maximum. Le fond de l'incohérence est valide, mais la formulation corrigée doit dire "pics 10 000/jour" non "20 000/jour".


### P7 -- Quarante pour cent des Français ne partent jamais en vacances : tourisme social abandonné, chèques-vacances déclinants

- **Citation en cause :** colonies [...] 350 k enfants 2023 vs 1,2 M 1990

- **Probleme :** Selon UNOSEL (2023), 47 000 enfants ont participé à des colonies de vacances stricto sensu (vs 505 000 total UNOSEL incluant séjours linguistiques). Si on considère tous les 'séjours avec hébergement', c'est 1.34 millions (2023-2024). Le chiffre 350 000 en 2023 ne correspond à aucune donnée officielle trouvée.

- **Correction proposee :** Utiliser 47 000 (colonies UNOSEL) ou 1.34 millions (tous séjours) selon la catégorie exacte visée, pas 350 000.

- **Verification independante :** Le chiffre de 350 000 enfants en colonies de vacances en 2023 n'existe dans aucune donnée officielle (INJEP, UNOSEL, INSEE). Les données réelles 2023-2024 sont : 47 000 colonies stricto sensu (UNOSEL) ; 505 000 total UNOSEL avec séjours linguistiques ; 1,34 million pour tous les séjours collectifs avec hébergement (INJEP). Le 350 000 est une valeur intermédiaire qui ne correspond à aucune catégorie statistique officielle.


### P7 -- Quarante pour cent des Français ne partent jamais en vacances : tourisme social abandonné, chèques-vacances déclinants

- **Citation en cause :** chèques-vacances (3 Md EUR 2023 vs 5 Md EUR 2010, perte 40%)

- **Probleme :** En 2023, le volume émis en chèques-vacances est 1.77-1.8 milliards d'euros, pas 3 milliards. Le chiffre 3 Md EUR surévalue la réalité de 67%.

- **Correction proposee :** Remplacer '3 Md EUR 2023' par '1.77-1.8 Md EUR 2023'. Le ratio de perte vs 2010 (5 Md) est alors -64% à -65%, plus sévère que les -40% annoncés.

- **Verification independante :** Vérification indépendante confirme : le volume de chèques-vacances émis en 2023 est 1.76-1.8 Md EUR selon l'ANCV, non 3 Md EUR comme affirmé dans la fiche P7. La surévaluation est d'environ 67% (+0.2-1.24 Md EUR). La correction proposée (remplacer '3 Md EUR 2023' par '1.77-1.8 Md EUR 2023') est factuellement justifiée. Le ratio de perte passe alors de -40% à -64% à -65% (la maths est correcte). Le chiffre 2010 (5 Md EUR) reste non confirmé par les données accessibles, mais l'IA précédente a bien identifié l'erreur factuelle majeure sur 2023.</anison>


### P9 -- Trains de nuit et tourisme bas-carbone sous-développés : gap gigantesque vs Autriche/Italie, investissement rail insuffisant

- **Citation en cause :** Autriche 20 lignes nuit (ÖBB Nightjet : 2,5 M passagers/an, occupation 80%)

- **Probleme :** Les passagers ÖBB Nightjet ont atteint 1.5 millions en 2024 (pas 2.5M). De plus, les routes majeures (Paris-Vienne, Munich-La Spezia) ont fermé le 14 décembre 2025, ce qui invalide le comparatif avec un modèle stable. Le chiffre 2.5M ne correspond pas aux données actuelles.

- **Correction proposee :** Remplacer '2.5 M passagers/an' par '1.5 M passagers/an (2024)', avec mention des fermetures de routes majeures en 2025-2026 qui fragilisent le modèle autrichien.

- **Verification independante :** Vérification indépendante par WebSearch confirme : (1) ÖBB Nightjet a transporté 1.5 million passagers en 2024, non 2.5M — cet écart n'a jamais été atteint depuis 2019 ; (2) services Paris-Vienne interrompus 14 décembre 2025 ; (3) Munich-La Spezia fermée dès 2026. La citation en P9 contient une inexactitude factuelle. Correction proposée est justifiée et nécessaire.



## chantier/problemes-75-fiches.md

### P1 -- Abandons massifs d'animaux de compagnie

- **Citation en cause :** SPA recueille 95 000 animaux de compagnie abandonnés par an (2024)

- **Probleme :** Le chiffre de 95 000 pour la SPA est largement surestimé. Selon les données officielles 2024 de la SPA, l'association a recueilli 43 742 animaux (12 253 chiens, 28 547 chats, 2 942 NAC). Les 95 000 pourraient correspondre à une estimation globale incluant refuges privés, mais la phrase attribue faussement ce chiffre à la SPA seule.

- **Verification independante :** Le chiffre de 95 000 attribué à la SPA en 2024 est largement surestimé. Les données officielles 2024 de la SPA confirment 43 742 animaux recueillis (12 253 chiens, 28 547 chats, 2 942 NAC). L'erreur = 118 % de surestimation. Ce n'est pas une nuance mineure mais une erreur factuelle majeure documentée par les bilans publics de la SPA.


### P3 -- Expérimentation animale

- **Citation en cause :** 1,9 million d'animaux utilisés en expériences (2023, chiffres REEM)

- **Probleme :** Le chiffre 1,9 million correspond aux données de 2021, non 2023. Les chiffres 2021 ont été publiés en février 2023 par le ministère de la Recherche. Pour 2023, le chiffre réel est 2 millions d'animaux (2,046,754 selon les données les plus récentes). La fiche cite 2023 mais utilise les données de 2021.

- **Verification independante :** La fiche cite 1,9 million d'animaux pour 2023, mais ce chiffre correspond aux données officielles de 2021 publiées en février 2023. Les données réelles 2023 du ministère de la Recherche indiquent 2,046,754 utilisations d'animaux. Correction requise: remplacer '1,9 million' par '2 millions' ou '2,046,754'.


### P4 -- Chasse : dimanches, sécurité, accidents

- **Citation en cause :** 1,2 million de chasseurs (2023)

- **Probleme :** Le chiffre de 1,2 million est surestimé. Selon les données officielles, le nombre de chasseurs est passé sous le million d'adeptes : 963 500 permis validés pour la saison 2022-2023, avec une estimation globale de 1,03 million de chasseurs, non 1,2 million.

- **Verification independante :** Le chiffre "1,2 million de chasseurs (2023)" est surestimé. Les données officielles indiquent 963 571 permis validés et ~1,03 million de chasseurs actifs estimés. La fiche surréprésente de ~16%, ce qui n'est pas une nuance mineure mais une erreur factoïde claire.


### P6 -- Animaux sauvages captifs : cirques, delphinariums, zoos

- **Citation en cause :** Delphinariums : 2 France (Antibes, La Côte d'Azur)

- **Probleme :** Deux erreurs : (1) Il existe 3 delphinariums en France métropolitaine, non 2. (2) 'La Côte d'Azur' n'est pas un nom de delphinarium—c'est une région. Marineland à Antibes se situe en Côte d'Azur, mais ce n'est pas un delphinarium distinct.

- **Verification independante :** Erreur factuelle confirmée: (1) France métropolitaine comptait 3 delphinariums avant 2025 (Marineland, Parc Astérix, Planète Sauvage), non 2. (2) La citation énumère "(Antibes, La Côte d'Azur)" comme deux entités ; or La Côte d'Azur est une région, pas un delphinarium distinct. Marineland d'Antibes se situe en Côte d'Azur, ce ne sont pas deux installations différentes. Accusation justifiée.


### P6 -- Animaux sauvages captifs : cirques, delphinariums, zoos

- **Citation en cause :** Cirques itinérants : loi 2021 interdit carnivores sauvages ... ~10 cirques encore actifs avec animaux

- **Probleme :** Le nombre de cirques est largement sous-estimé. Selon le suivi officiel 2024-2025, 25 cirques utilisent toujours des animaux sauvages en France, non 10.

- **Verification independante :** Le nombre de cirques actifs avec animaux sauvages est largement sous-estimé dans la fiche. La fiche indique "~10 cirques" mais le suivi officiel Code Animal 2024-2025 établit 25 cirques utilisant activement des animaux sauvages (150 % de différence). L'incohérence est confirmée et dépasse une nuance mineure.


### P7 -- Élevages à fourrure

- **Citation en cause :** Loi 2022 interdit élevage fourrure France

- **Probleme :** L'année de la loi est incorrecte. La loi d'interdiction des élevages de fourrure en France a été adoptée en novembre 2021 (dans le cadre d'une loi contre la maltraitance animale), non 2022. Les dernières fermes ont fermé en 2023 suite à cette loi de 2021.

- **Verification independante :** L'incoherence factuelle est confirmee. Le fichier indique « Loi 2022 interdit elevage fourrure France » alors que la legislation officielle est la LOI n° 2021-1539 du 30 novembre 2021. L'année 2022 est erronee; c'est 2021 qui est le bon millésime de la loi (novembre 2021), dans le cadre de la loi contre la maltraitance animale. Les fermetures de fermes en 2023 sont coherentes avec une loi adoptee en 2021, non 2022.


### P10 -- Statut juridique de l'animal

- **Citation en cause :** Référendum pour droit animal 2020 échoué (~45 % pour)

- **Probleme :** Il n'y a jamais eu de référendum sur le droit animal en France en 2020. Ce qui s'est passé : une Initiative de Référendum Partagée (RIP) a été lancée en juillet 2020 par des personnalités comme Hugo Clément, avec environ 73% des Français favorables selon les sondages. Mais cette initiative n'a pas abouti aux 4,7 millions de signatures requises. La fiche confond RIP et référendum réel, et cite un taux d'approbation (~45%) qui n'existe pas dans les sources.

- **Verification independante :** Erreur factuelle confirmée. La fiche cite "Référendum pour droit animal 2020 échoué (~45 % pour)" — or : (1) il n'y a jamais eu de référendum réel, seulement une Initiative de Référendum Partagée (RIP) qui n'a pas atteint le seuil de 4,7 millions de signatures ; (2) le taux "~45%" est inexact — les sondages documentés (IFOP, juillet 2020) montrent 73% de Français favorables, pas 45%. La fiche confond un processus démocratique inachevé avec un vote populaire.



## chantier/problemes-76-fiches.md

### P1 -- Hôpitaux rançonnés : données patients exposées, services d'urgence paralysés

- **Citation en cause :** Corbeil-Essonnes (2019) : 1 500 patients lésés, dossiers dentaires/médicaux vendus.

- **Probleme :** La cyberattaque du centre hospitalier de Corbeil-Essonnes s'est produite en août 2022, non 2019. Le groupe LockBit a attaqué le 21 août 2022 et divulgué 11.7 gigabytes de données sensibles (rapports de colonoscopie, accouchements, examens gynécologiques).

- **Correction proposee :** Remplacer '(2019)' par '(2022)'. Corbeil-Essonnes : août 2022, cyberattaque LockBit 3.0.

- **Verification independante :** Date erronée dans la fiche : (2019) au lieu de (2022). L'attaque du centre hospitalier de Corbeil-Essonnes s'est produite le 21-22 août 2022 par LockBit 3.0, non en 2019. Tous les autres détails (données vendues, dossiers médicaux/dentaires compromis) sont corrects et concernent bien 2022.


### P1 -- Hôpitaux rançonnés : données patients exposées, services d'urgence paralysés

- **Citation en cause :** Versailles (2020) : 1 000 lits bloqués 10 jours, déprogrammation chirurgicale.

- **Probleme :** L'attaque de l'hôpital André-Mignot de Versailles s'est produite en décembre 2022, non 2020. Les sources confirment qu'elle a eu lieu samedi soir en décembre 2022 (l'hôpital a déclenché son plan blanc et les équipes travaillaient au papier deux semaines après).

- **Correction proposee :** Remplacer '(2020)' par '(décembre 2022)'. Versailles : hôpital André-Mignot, décembre 2022.

- **Verification independante :** L'attaque de l'hôpital André-Mignot de Versailles s'est effectivement produite en décembre 2022 (samedi 3-4 décembre), non en 2020 comme indiqué dans le fichier. Tous les articles de presse consultés (LeMagIT, Siècle Digital, Bitdefender, France Bleu, France Info) confirment cette date. L'erreur est factuelle et la correction proposée (remplacer "2020" par "décembre 2022") est justifiée.


### P4 -- NIS2 : directive UE transposée en retard, épargne petits opérateurs

- **Citation en cause :** Directive NIS2 adoptée juin 2022, date limite transposition : octobre 2024

- **Probleme :** La directive NIS2 (EU 2022/2555) a été adoptée le 14 décembre 2022, non en juin 2022. Elle a été publiée au Journal officiel de l'Union européenne le 27 décembre 2022.

- **Correction proposee :** Remplacer 'juin 2022' par '14 décembre 2022'. La directive a été adoptée en décembre 2022, entrée en force janvier 2023.

- **Verification independante :** La Directive NIS2 (EU 2022/2555) a été adoptée le 14 décembre 2022, non en juin 2022. Erreur factuelle confirmée : décalage de 6 mois sur la date d'adoption. Sources officielles (EUR-Lex, Jones Day, EC) concordent. La correction vers « décembre 2022 » est exacte.


### P6 -- Données de santé et souveraineté : Health Data Hub français vs. résilience, hébergement externe risqué

- **Citation en cause :** Hébergement : servers Google Cloud (USA) jusqu'à 2024

- **Probleme :** Le Health Data Hub a été hébergé par Microsoft Azure (Microsoft Ireland), non Google Cloud (USA). Le fiche confond le prestataire. De plus, Microsoft a hébergé jusqu'à fin 2024-2025, avant migration vers Scaleway (fin 2026/début 2027).

- **Correction proposee :** Remplacer 'Google Cloud (USA)' par 'Microsoft Azure'. Corriger la timeline : Microsoft jusqu'à fin 2024, migration vers Scaleway (hébergeur français) entre fin 2026 et début 2027.

- **Verification independante :** L'IA précédente a correctement identifié une erreur factuelle majeure dans la fiche P6. Le Health Data Hub a été hébergé par Microsoft Azure (Pays-Bas), non Google Cloud (USA). De plus, "jusqu'à 2024" est incorrect : Microsoft héberge toujours en juillet 2026, la migration vers Scaleway n'étant prévue que fin 2026/début 2027. L'affirmation dans la fiche est factuellement erronée et doit être corrigée.


### P10 -- Modèles étrangers : Estonie résilience, UK NCSC PME, assurance cyber encadrée allemande

- **Citation en cause :** Estonie : digital-first depuis 1995, zéro attaque critique (blockchain votants, archivage chiffré).

- **Probleme :** L'Estonie a subi une première cyberattaque massive en 2007 (attribuée à la Russie), qui a été la première attaque cyber souveraine au monde. L'affirmation 'zéro attaque critique' est factuellement incorrecte. C'est après cette attaque 2007 que l'Estonie a créé le Centre d'Excellence pour la Cyberdéfense de Tallinn et adopté la blockchain pour garantir l'intégrité des bases de données publiques.

- **Correction proposee :** Remplacer 'zéro attaque critique' par 'résilience démontrée post-2007'. Préciser : L'Estonie a subi une attaque massive en 2007 (première attaque cyber souveraine), après laquelle elle a renforcé sa défense avec blockchain et architecture distribuée.

- **Verification independante :** Factualité vérifiée : l'Estonie a subi une attaque cyber majeure le 27 avril 2007 contre ses infrastructures critiques (parlement, banques, ministères, médias). Cette attaque est qualifiée par les experts comme « potentiellement la deuxième instance la plus grande de cyberguerre parrainée par un État » de l'époque. L'affirmation « zéro attaque critique » est donc factuellement incorrecte. La correction proposée (« résilience démontrée post-2007 ») rectifie appropriément cette inexactitude.



## chantier/problemes-77-fiches.md

### P6 -- Les seniors et les arnaques en ligne : responsabilité bancaire et remboursement

- **Citation en cause :** 1,2 million de seniors (65+) victimes de cyberfraude par an (phishing bancaire, faux conseillers, usurpation d'identité)

- **Probleme :** Le chiffre de 1,2 million de seniors victimes par an est manifestement erroné. Les données du Ministère de l'Intérieur et INSEE pour 2023-2024 indiquent que les personnes âgées de 65-74 ans représentent environ 17% des 411 700 victimes d'escroqueries et fraudes totales en France, soit environ 70 000 seniors. Même en 2024-2025 avec une hausse de 40% des escroqueries en ligne visant les 65+, le chiffre reste très inférieur à 1,2 million. Il y a une confusion possible entre le nombre de victimes (70 000) et le montant total des pertes (1,2 milliards d'euros).

- **Verification independante :** Le chiffre "1,2 million de seniors (65+) victimes de cyberfraude par an" ne trouve aucune source dans les données officielles actuelles (Ministère de l'Intérieur, INSEE, Banque de France, 2023-2025). Le chiffre réel de victimes seniors d'abus/fraude est environ 800 000 pour les 75+, ou ~37 000 si on prend 9% des 411 700 escroqueries totales de 2023 pour la tranche 65+. La confusion provient probablement d'une mélecture montant (1,2 milliards €) vs. nombre de victimes, ou d'une sur-généralisation non sourcée. L'incohérence est manifeste.


### P8 -- L'illettrisme courant : 2,5 millions d'adultes que le numérique aggrave

- **Citation en cause :** 2,5 millions d'adultes français (20% dans certains milieux précaires) ne maîtrisent pas les compétences de base

- **Probleme :** Le chiffre de 2,5 millions sous-estime la réalité. Selon les données ANLCI (Agence Nationale de Lutte Contre l'Illettrisme) publiées en 2024, 3,7 millions de personnes sont en forte difficulté dans au moins une compétence de base (lire, écrire, compter). Le fichier sous-estime donc d'environ 1,2 million de personnes.

- **Verification independante :** Les données ANLCI 2024-2026 confirment que 3,7 millions d'adultes en France rencontrent des difficultés avec les compétences de base (lire, écrire, compter). La fiche P8 utilise le chiffre de 2,5 millions, qui sous-estime donc de ~1,2 million la réalité documentée. C'est une erreur factuelle, non une nuance : la fiche elle-même définit "compétences de base (lire, écrire, compter)" de manière explicite — exactement le périmètre des 3,7 millions ANLCI, pas un sous-ensemble.



## chantier/problemes-78-fiches.md

### P7 -- Mécénat et philanthropie : captation par grosses fondations, appauvrissement du tissu local

- **Citation en cause :** déduction 75% donation pour particuliers (loi 2003), déduction 60% pour entreprises

- **Probleme :** Le taux de réduction d'impôt pour les dons des particuliers aux œuvres d'intérêt général est de 66%, non 75%. Le taux de 75% ne s'applique que depuis le 14 octobre 2025 aux dons aux organismes d'aide aux personnes en difficulté ou aux victimes de violence domestique, avec un plafond annuel de 2 000€. Le taux de 60% pour les entreprises est correct.

- **Verification independante :** La fiche P7 énonce "déduction 75% donation pour particuliers (loi 2003)" ce qui est factuellement inexact. Le taux standard pour les particuliers est 66%, pas 75%. Le taux 75% n'existe que depuis octobre 2025, limité aux dons aux organismes d'aide aux personnes en difficulté/victimes de violences domestiques, plafonné à 2.000€/an. L'alerte du vérificateur est correcte : la fiche doit être corrigée pour refléter que 66% est le taux de droit commun.


### P10 -- Modèles étrangers et articulation avec devoir citoyen

- **Citation en cause :** Québec : service civique obligatoire 12 mois (18-25 ans), 70% en structures associatives

- **Probleme :** Le service civique au Québec (via l'OFQJ) est volontaire, pas obligatoire. Le Québec ne dispose pas d'une politique de service civique obligatoire de 12 mois pour les jeunes. Les missions offertes via l'OFQJ durent 8-12 mois et sont des engagements bénévoles facultatifs.

- **Verification independante :** Le Québec n'a pas de service civique obligatoire de 12 mois pour les jeunes 18-25 ans. Les missions via l'OFQJ sont volontaires et facultatives (6-12 mois). L'allégation du vérificateur précédent est correcte: cette citation est factuellement inexacte. La fiche confond les jeunes français volontaires au Québec avec une politique québécoise hypothétique qui n'existe pas.


### P1 -- Le poids économique des associations invisibilisé

- **Citation en cause :** Le secteur associatif représente 1,5 million d'associations actives et mobilise 20 millions de bénévoles en France (chiffres Baromètre du Bénévolat, France Bénévolat 2023)

- **Probleme :** Le Baromètre du Bénévolat 2023 indique que 23% des Français sont bénévoles, ce qui correspond à environ 12-13 millions de bénévoles, non 20 millions. Les données 2025 confirment cette tendance avec 21% soit environ 12 millions de bénévoles.

- **Verification independante :** Le chiffre de 20 millions de bénévoles cité en ligne 5 de la fiche P1 est surestimé. Le Baromètre du Bénévolat 2023 indique 23-24% de bénévoles (12-13 millions), et 2025 confirme 21% (~12 millions). L'écart de ~50% ne peut pas être expliqué par une différence de définition — c'est une erreur factuelle avérée.



## chantier/problemes-79-fiches.md

### P5 -- Plateformes en ligne : vide juridique OnlyFans, escorting 2.0, mineurs

- **Citation en cause :** Modération LCEN (Loi confiance numérique 2022) : obligations limitées aux contenus illégaux manifestes

- **Probleme :** LCEN est la loi n° 2004-575 du 21 juin 2004, pas une loi de 2022. Le texte attribue à tort l'origine de la LCEN à 2022, alors qu'elle remonte à 2004. Des amendements ont pu être apportés en 2022, mais LCEN elle-même date de 2004.

- **Verification independante :** Erreur factuelle confirmée. Le Constat (ligne 125) attribue à tort l'année 2022 à la LCEN ("Loi confiance numérique 2022"), alors que la LCEN est la loi n° 2004-575 du 21 juin 2004. La source du même paragraphe (ligne 127) cite correctement cette date. Bien que des amendements aient pu être adoptés en 2022, la LCEN elle-même remonte à 2004 et n'a jamais porté l'année 2022 comme date de création.


### P7 -- Modèles étrangers : abolitionnisme suédois versus réglementarisme allemand-néerlandais

- **Citation en cause :** Pays-Bas depuis 1993

- **Probleme :** La légalisation de la prostitution aux Pays-Bas remonte au 1er octobre 2000, non à 1993. C'est en 2000 que le gouvernement néerlandais a abrogé l'interdiction des bordels et mis en place un système de régulation par permis.

- **Verification independante :** La légalisation de la prostitution aux Pays-Bas date du 1er octobre 2000, non 1993. En 1993, une tentative législative d'abolir l'interdiction des bordels a échoué. C'est en 2000 que l'interdiction a été effectivement levée (suppression articles 250bis et 432 du Code pénal néerlandais) et que le système de permis et de régulation a été formalisé. La fiche P7 affiche donc une incoherence factuelle en datant le modèle réglementariste néerlandais de 1993.


### P7 -- Modèles étrangers : abolitionnisme suédois versus réglementarisme allemand-néerlandais

- **Citation en cause :** Allemagne ProstSchG 2002

- **Probleme :** Le ProstSchG (Prostituiertenschutzgesetz) date du 1er juillet 2017, pas 2002. La loi de 2002 s'appelait ProstG (Prostitutionsgesetz). Le fichier confond les deux législations allemandes. Le ProstSchG a remplacé le ProstG avec de nouvelles exigences (enregistrement obligatoire notamment).

- **Verification independante :** Le fichier confond deux lois allemandes distinctes. ProstG (Prostitutionsgesetz) date du 1er janvier 2002, tandis que ProstSchG (Prostituiertenschutzgesetz) date du 1er juillet 2017. La citation "Allemagne ProstSchG 2002" est factuellemant inexacte. Le ProstSchG n'est pas de 2002 mais de 2017, et il a remplacé le ProstG antérieur en introduisant de nouvelles exigences réglementaires (enregistrement obligatoire, permis d'exploitation, etc.).


### P4 -- Traite des êtres humains : condamnations dérisoires face à l'ampleur

- **Citation en cause :** MIPROF et ministère Intérieur estiment entre 40 000 et 60 000 victimes de traite en France chaque année

- **Probleme :** Les données officielles de 2024 (Ministère de la Justice, Intérieur, Interstats) montrent environ 2 100 victimes selon les services de sécurité et 7 285 selon les associations (MIPROF). La fourchette de 40 000-60 000 est drastiquement surestimée et non corroborée par les chiffres administratifs accessibles en 2024-2026.

- **Verification independante :** La fiche P4 affirme que "MIPROF et ministère Intérieur estiment entre 40 000 et 60 000 victimes de traite en France chaque année". Or les données officielles MIPROF 2024-2026 montrent 7 285 victimes identifiées en 2024 et 6 022 en 2023. Aucune source officielle ne corrobore l'estimation de 40 000-60 000 victimes de traite par an. Cette fourchette confond probablement personnes en situation de prostitution (~30-40 000) avec victimes de traite identifiées. L'incoherence factuelle est confirmée : surestimation drastique par un facteur 5-8.



## chantier/problemes-8-fiches.md

### P8 -- Démographie & besoins de main-d'œuvre : immigration économique vs. asile

- **Citation en cause :** Piste A, 🇨🇦 Canada (points immigration économique claire) : Scoring explicite (âge, langue, diplôme, secteur), quota annuels transparents (380 k 2024).

- **Probleme :** Le fichier cite 380 000 comme quota d'immigration au Canada pour 2024, or le chiffre correct pour 2024 est 485 000 permanent residents. Le chiffre de 380 000 correspond à la cible révisée pour 2026, suite aux réductions annoncées par le Canada.

- **Correction proposee :** Remplacer '(380 k 2024)' par '(485 k 2024)' ou clarifier que 380k est le quota révisé pour 2026 si les pistes sont actualisées en 2026.

- **Verification independante :** Erreur factuelle vérifiée : le fichier cite '380 k 2024' mais le quota canadien de 2024 était 485 000 permanent residents (cible officielle), avec 483 395 admissions réelles. Le chiffre de 380 000 correspond à la cible révisée pour 2026 (annoncée octobre 2024). Écart de 105 000 personnes (~22%) — erreur manifeste, non nuance mineure.


### P8 -- Démographie & besoins de main-d'œuvre : immigration économique vs. asile

- **Citation en cause :** besoins secteurs : santé (500 k postes/10 ans)

- **Probleme :** Le fichier indique 500 000 postes à pourvoir sur 10 ans dans la santé. Selon France Travail (2026), l'objectif est 500 000 postes à pourvoir d'ici 4 ans (jusqu'en 2030), non 10 ans. Cela sous-estime significativement la vitesse du besoin de recrutement.

- **Correction proposee :** Remplacer '500 k postes/10 ans' par '500 k postes d'ici 4 ans' ou préciser la source et période exacte si différente.

- **Verification independante :** L'allégation est fondée. France Travail (2026) affirme explicitement « 500 000 postes à pourvoir d'ici 4 ans » dans les métiers de soin/santé, non « 10 ans » comme l'indique le fichier. Cette différence n'est pas cosmétique : elle implique une vitesse de recrutement 2,5× supérieure (125k/an vs 50k/an actuellement indiqué). Les données officielles (communiqués et enquête BMO 2026) confirment l'horizon 2030 (4 ans), pas 2036 (10 ans). Correction impérative.


### P8 -- Démographie & besoins de main-d'œuvre : immigration économique vs. asile

- **Citation en cause :** Immigration économique régulée (~250 k/an), mais asile-refuges + clandestine = ~600 k/an total.

- **Probleme :** Le fichier estime l'immigration économique régulée à 250 000/an. Or, les données officielles françaises (2024) montrent 55 600 permis de séjour pour raisons économiques, soit ~20% des 294 000 nouveaux immigrants (2022). Le chiffre de 250k/an est surévalué d'un facteur 4-5 et dépasse le flux total d'immigration permanente française.

- **Correction proposee :** Remplacer '~250 k/an' par '~55-60 k/an' (chiffres 2024) ou clarifier si la figure englobe d'autres catégories non documentées officiellement.

- **Verification independante :** L'allégation soulève un problème réel mais soi-même imparfait. La fiche P8 est ambigüe : si '~250 k/an' réfère aux ENTRÉES NETTES (flux), elle est surévaluée (~5x : le chiffre réel est ~50 k de visas économiques). Si elle réfère au stock réarticulation + nouveaux, ~250 k est exact. Cependant, l'allégation affirme faussement que 250 k « dépasse le flux total d'immigration permanente française » (313 k en 2024, 384 k en 2025 — c'est faux). Verdict : fiche imprécise à clarifier, allégation pertinente mais elle-même contient une inexactitude que je dois rapporter. CONFIRME=true car le doute persiste et l'allégation a raison de pointer l'ambiguïté, même si elle commet une erreur accessoire.



## chantier/problemes-80-fiches.md

### P6 -- Parcoursup et taux d'échec licence : 28-35% abandon première année

- **Citation en cause :** Parcoursup (plateforme admission 2021, MESR) affecte 850 k candidats/an

- **Probleme :** Parcoursup a été lancée le 15 janvier 2018, non pas en 2021. La plateforme a remplacé APB (Admission Post-Bac). Bien que le nombre de candidats (~850 k pour 2021) soit plausible pour cette période, la date de création est incorrecte.

- **Verification independante :** Parcoursup a été lancée le 15 janvier 2018, non 2021. La fiche P6 line 166 contient une imprécision factuelle en mentionnant "(plateforme admission 2021, MESR)" qui suggère une date de création erronée. Le chiffre de 850k candidats en 2021 est plausible, mais l'année de création doit être corrigée à 2018.



## chantier/problemes-81-fiches.md

### P3 -- Hébergement d'urgence vs Housing First : bilan coûts France et Finlande

- **Citation en cause :** Résultat finlandais : quasi-éradication du sans-abrisme (moins de 2000 personnes, forte baisse depuis 2015).

- **Probleme :** Les statistiques réelles montrent environ 7000 sans-abri en 2015, puis réduction à ~4000 en 2020-2022, et 4579 en 2025. Le chiffre « moins de 2000 » n'a jamais été atteint et est de 2-2.5x inférieur à la réalité actuelle.

- **Verification independante :** Le chiffre « moins de 2000 sans-abri en Finlande » est faux. Les statistiques réelles montrent: 7000 en 2015-2016, ~4000 en 2020, 4579 en 2025. Aucun palier « moins de 2000 » n'a été atteint. L'IA précédente a détecté une erreur factuelle confirmée (ratio ~2.3x entre allégation et réalité).


### P6 -- Expulsions locatives record : prévention en amont 10x moins chère

- **Citation en cause :** Selon DIHAL/Statistiques justice, 180 000 procédures expulsion engagées en 2022 (+ 25% vs 2019). Taux réalisation : 60% (108 k exécutions).

- **Probleme :** Les données officielles de la Cour des Comptes et Fondation Abbé Pierre indiquent 17 500 ménages expulsés (38 000 personnes) en 2022. Le chiffre de 180 000 procédures est 10 fois supérieur aux exécutions officiellement documentées et ne correspond à aucun chiffre de procédures engagées trouvable.

- **Verification independante :** Les données de la fiche P6 contiennent une incoherence factuelle grave. Le chiffre de 180 000 procédures provient de 2016 (rapports Cour des Comptes), pas de 2022. Les exécutions réelles documentées en 2022 s'élèvent à environ 17 500 ménages (sources : Cour des Comptes 2023, Fondation Abbé Pierre), non 108 000. L'autre IA a correctement identifié une erreur de sourçage anachronique : les chiffres allégués pour 2022 correspondent en réalité à des données de 2016 ou ne trouvent aucune source officielle au chiffre cité.



## chantier/problemes-82-fiches.md

### P4 -- Violences conjugales et séparation : ordonnances de protection émises, délais pour bracelets anti-rapprochement, efficacité réelle

- **Citation en cause :** actuellement ~8 000 bracelets actifs en France (soit 53% des ordonnances, reste sous forme simple interdiction + contrôle police)

- **Probleme :** Incoherence massive : le chiffre de 8 000 bracelets est très largement surévalué. Selon le ministère de la Justice (données du 23 février 2026 publiées par France Info), seuls 641 bracelets anti-rapprochement étaient actifs à cette date. L'ordre de grandeur cité (8 000 vs réalité 641) représente un écart de plus d'un facteur 12, rendant les simulations et analyses basées sur ce chiffre complètement invalides.

- **Verification independante :** Vérification indépendante par WebSearch confirme l'erreur factuelle : France Info rapporte ~700 bracelets anti-rapprochement actifs au 1er février 2026 selon le ministère de la Justice (et l'allégation cite 641 au 23 février). Le chiffre de 8 000 dans la fiche P4 est surévalué d'un facteur 11-12. Cela invalide les ordres de grandeur des simulations de la piste A qui s'appuient sur ce chiffre faux.


### P4 -- Violences conjugales et séparation : ordonnances de protection émises, délais pour bracelets anti-rapprochement, efficacité réelle

- **Citation en cause :** ~225 000 femmes victimes de violences conjugales/an en France (enquête Enveff INSEE 2019)

- **Probleme :** Erreur de source : l'enquête Enveff s'est terminée en 2003, pas 2019. Il n'y a jamais eu d'enquête Enveff en 2019. Cette fiche cite donc une source inexistante. Les données les plus récentes (2025) montrent 473 000 victimes de violences physiques en France, loin du chiffre de 225 000 cité.

- **Verification independante :** L'enquête Enveff a terminé collecte en juillet 2000 et publication en juin 2003. Aucune enquête Enveff n'a jamais eu lieu en 2019. La citation attribue donc un chiffre à une source inexistante. C'est une erreur factuelle critique : la fiche cite "Enveff INSEE 2019" mais cette source n'existe pas. Les données actuelles (2024-2025) montrent 272 400 à 473 000 victimes selon la catégorie, mais certainement pas une validation de l'année 2019.



## chantier/problemes-83-fiches.md

### P1 -- Concours non pourvus et attractivité effondrée

- **Citation en cause :** Enseignants : 4 043 postes non pourvus en 2024 (source : ministère de l'Éducation, BOP 140)

- **Probleme :** Le nombre de postes non pourvus aux concours enseignants en 2024 était 3 185 (2 925 public + 260 privé), non 4 043. Le chiffre de 4 043 correspond aux années antérieures (2022).

- **Correction proposee :** Corriger à 3 185 postes non pourvus en 2024, soit 1 350 en primaire et 1 575 en secondaire selon vie-publique.fr

- **Verification independante :** Le chiffre de 4 043 postes non pourvus en 2024 est faux. Le chiffre officiel du ministère de l'Éducation est 3 185 (2 925 secteur public + 260 privé, soit 1 350 primaire + 1 575 secondaire). Le chiffre 4 043 correspond à l'année 2022, antérieure à celle citée. La correction proposée (3 185 pour 2024) est exacte selon les sources officielles (vie-publique.fr, Franceinfo, AEFinfo).


### P1 -- Concours non pourvus et attractivité effondrée

- **Citation en cause :** Salaire net moyen d'un enseignant 2024 : 2 100 euros (brut ~2 850)

- **Probleme :** Le salaire NET MOYEN d'un enseignant en 2024 est 2 920 euros, non 2 100 euros. Le chiffre 2 100 euros correspond au salaire minimum d'un titulaire débutant/stagiaire, pas à la moyenne.

- **Correction proposee :** Salaire net moyen enseignant 2024: 2 920 euros ; titulaire débutant: 2 100 euros. Ces deux données sont différentes et ne doivent pas être confondues.

- **Verification independante :** L'autre IA a identifié une erreur factuelle réelle. La fiche cite "Salaire net moyen 2 100 euros" alors que la donnée correcte est 2 920-2 950 euros net en moyenne (2024-2025). Le chiffre 2 100 euros correspond au salaire BRUT d'un titulaire débutant, pas à une moyenne. Vérification web indépendante confirme : sources récentes (VousNousIls nov 2025, Ministère Éducation) établissent le salaire net moyen à ~2 950 euros, soit 850+ euros au-dessus du chiffre cité. C'est une confusion brut/net et début/moyenne.


### P5 -- Absentéisme public : débat réel, chiffres occultes

- **Citation en cause :** Ministère fonction publique : ~9 jours/an absence non-justifiée (moyenne)

- **Probleme :** Selon le rapport annuel 2024 sur l'état de la fonction publique, les agents publics se sont absentés en moyenne 11,1 jours en 2024, non 9 jours. Écart de 2 jours (22% d'underestimation).

- **Correction proposee :** Actualiser à 11,1 jours/an en 2024 (fonction publique d'État hors enseignants: 8,8 jours; enseignants: 8,2 jours; hôpitaux: 12,9 jours; collectivités: 13,3 jours)

- **Verification independante :** Les chiffres 11,1 jours (moyenne générale 2024), 8,8 jours (FPE hors enseignants), 8,2 jours (enseignants), 12,9 jours (hospitalière), 13,3 jours (territoriale) sont CONFIRMÉS par le rapport DGAFP 2024 officiel. Le chiffre de 9 jours dans la fiche est une sous-estimation de ~20-23%. L'allégation pointe une incoherence factuellement vérifiée. Note : la fiche confond "absences non-justifiées" et "absences pour raison de santé" (deux catégories différentes), mais les chiffres du rapport 2024 réfèrent correctement aux absences pour raison de santé, pas aux absences disciplinaires.


### P7 -- Haute fonction publique : l'écart vertigineux entre sommet et guichet

- **Citation en cause :** ENA/INSP : 350-400 entrants/an, réseau très serré

- **Probleme :** Le nombre réel d'admis à l'INSP (successeur de l'ENA depuis 2022) est environ 85 par an (84-85 en 2022-2023, 60 en 2024), non 350-400. La fiche suréstime le nombre d'entrants d'un facteur 4-5.

- **Correction proposee :** Corriger à environ 80-85 admis annuels (en 2024: 60 admis). En 2024: 2 323 candidatures pour ~60 places (ratio ~40:1 de compétitivité extrême)

- **Verification independante :** Vérification indépendante confirmée : la fiche P7 cite "ENA/INSP : 350-400 entrants/an" alors que les données officielles INSP montrent 60-90 admis annuels (2022-2026), soit un facteur 4-5x surestimé. L'ENA avant 2022 admettait ~80/an, pas 350-400. L'incoherence est sévère et non ambigüe.



## chantier/problemes-9-fiches.md

### P8 -- Transports du quotidien saturés - Piste A (Autriche)

- **Citation en cause :** ticket climat : 1 abonnement ÖV national, 1100 €/an

- **Probleme :** Le prix du Klimaticket autrichien n'est plus 1100€/an en juillet 2026. Selon Wikipedia, le prix a été augmenté à 1300€ depuis août 2025 et à 1400€ à partir de 2026.

- **Verification independante :** Klimaticket Austria 2026 = 1400€/an (not 1100€). Citation stale par +300€ (~27%). Affecte ordres de grandeur budgétaires (simulation ligne 104). Tarif réel confirmé par sources officielles ÖBB, klimaticket.at, oesterreich.gv.at.


### P6 -- Pesticides et santé publique - Chlordécone

- **Citation en cause :** Chlordécone (Antilles) : interdit 1990

- **Probleme :** L'interdiction de 1990 s'appliquait à la France métropolitaine. Aux Antilles spécifiquement, le chlordécone a été autorisé jusqu'en 1993 (les planteurs ont obtenu une dérogation) puis utilisé illégalement après cette date selon Wikipedia.

- **Verification independante :** L'affirmation « Chlordécone (Antilles) : interdit 1990 » est factuellement inexacte. Le chlordécone a été interdit en France métropolitaine en 1990, mais aux Antilles spécifiquement, il a été autorisé par dérogations jusqu'au 30 septembre 1993 (trois ans de prolongement via décisions ministériales successives pour permettre l'écoulement des stocks des producteurs de bananes). L'IA précédente a correctement identifié cette incohérence : la fiche masque une distinction territoriale cruciale. La correction s'impose : préciser « métropole 1990, Antilles 1993 ».


### P6 -- Pesticides et santé publique - Chlordécone

- **Citation en cause :** lait, poisson impropres 2000-2025 (à confirmer niveau résiduel)

- **Probleme :** La formulation suggère une fin du problème en 2025, ce qui est inexact en juillet 2026. Une étude de 2018 montrait 95% de la population de Guadeloupe contaminée. En mars 2024, l'Assemblée nationale française reconnaissait toujours le problème de contamination aux Antilles.

- **Verification independante :** L'allégation est CONFIRMÉE. La formulation « lait, poisson impropres 2000-2025 » est factuellement inexacte en juillet 2026. Les données établissent que (1) 90%+ de la population a toujours de la chlordécone dans le sang en 2026 ; (2) une loi d'indemnisation reconnaît la persistance du problème (juin 2026) ; (3) de nouveaux impacts sanitaires ont été documentés en 2025 (fertilité) ; (4) les contaminations agricoles et marines restent massives. La plage temporelle « 2000-2025 » masque une urgence sanitaire toujours active, bien qu'elle soit partiellement tempérée par la note « à confirmer niveau résiduel ». Ce n'est pas une nuance mineure mais une représentation trompeuse de la situation actuelle.

