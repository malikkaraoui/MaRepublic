# Problèmes : Numérique & libertés

> BROUILLON non validé, matière à débat. Chaque fiche pose UN problème et PLUSIEURS pistes (jamais une seule « solution »), toujours avec le pour et le contre.

---

### P1. Chat Control : recyclage législatif de la surveillance de masse
- **Le problème (France, 2016-2026) :** Directive ePrivacy 2002 suspendue et rétablie (2018, 2022, 2026) pour légaliser le scan des messages privés sans consentement. Commission répropose CSAR (Child Sexual Abuse Regulation) juillet 2026, approuvé par Parlement 9/7/2026 (331 voix pour). Même dispositif présenté 4 fois en dix ans.
- **Piste A, 🇩🇪 Allemagne (exception stricte chiffrement) :** Excluir messages E2E du scan obligatoire, limiter aux non-chiffrés. **Pour :** protège intimité, force confiance chiffrement. **Contre :** laisse contenu illégal sur E2E, compliquée techniquement.
- **Piste B, 🇪🇪 Estonie (audit indépendant) :** Évaluation externe annuelle de l'efficacité réelle (pédopornographie détectée vs faux positifs). **Pour :** données factuelles, rend légitime ou révèle l'inefficacité. **Contre :** long, coûteux, repousse implémentation.
- **Piste C, 🇨🇭 Suisse (consentement et opt-out) :** Légaliser scan seulement sur accord explicite utilisateur, pas par défaut. **Pour :** redonne choix, respecte libertés. **Contre :** compliance très basse, rend dispositif inefficace par conception.
- **Piste D, 🇫🇷 France (« Règle des 20 % ») :** Interdire rétroposition de texte identique avant 20 ans ; exiger rédaction nouvelle ou abandon. **Pour :** freina recyclage politique, force débat de fond. **Contre :** rigide, peut bloquer législation utile.

- **Simulation (ordres de grandeur) :** Implémentation scan serveurs = 100-200 M€ infra EU. Piste A (Allemagne exception) : moins cher ~50 M€. Gagnants : lutte pédopornographie (à confirmer). Délai : 1-2 ans.
- ⚖️ **Faisabilité juridique :** Réglement UE ; CEDH art. 8 + Charte UE ; Directive ePrivacy 2002.
- ⚖️ **À trancher :** Accepte-t-on scan obligatoire contre pédopornographie ? Si oui, techniquement comment sans casser chiffrement ? Qui évalue ?
- **Statut :** ⬜

---

### P2. Vidéosurveillance algorithmique : expérimentation permanente sans évaluation
- **Le problème (France, 2016-2026) :** Légalisée à titre expérimental pour JO 2024, sur 1 000+ caméras à Paris et agglomérations. Aucune évaluation indépendante prouvant efficacité réelle (réduction criminalité, terrorisme). Risque de biais discriminatoire : 4 entreprises retenues, aucune audit externe de fairness. Techniquement à 1 activation de reconnaissance faciale.
- **Piste A, 🇸🇪 Suède (suspension + scrutin parlementaire) :** Arrêter tous les sites expérimentaux, requérir vote Assemblée avant réactivation post-JO. **Pour :** légitime, démocratique, force débat public. **Contre :** ralentit sécurité si réelle, peut bloquer outil utile.
- **Piste B, 🇳🇱 Pays-Bas (audit tiers, audit biais) :** Conserver VSA mais audit indépendant annuel (effectivité + biais racial/genre sur 1M+ détections). **Pour :** données probantes, limite abus. **Contre :** coûteux, entreprises résistent, délais longs.
- **Piste C, 🇬🇧 UK (transparence locale) :** Publier bilans trimestriels par quartier (nb détections, infractions confirmées, démographies touchées). **Pour :** rend visible abus, pression publique. **Contre :** peut exposer failles sécurité, résistance données sensibles.
- **Piste D, 🇪🇸 Espagne (interdiction E2E reconnaissance faciale) :** Interdire reconn. faciale, autoriser seulement analyse comportement/foules. **Pour :** limite biométrie la plus intrusive. **Contre :** réduit utilité sécurité, difficile techniquement.

- **Simulation (ordres de grandeur) :** 1000 caméras Paris. Piste B (audit annuel) = 2-5 M€/an. Maintenance VSA = 10 M€/an. Piste C (transparence) = ~2 M€/an. Gagnants : sécurité (à confirmer). Délai : 2-3 ans.
- ⚖️ **Faisabilité juridique :** Loi + RGPD + CNIL ; CEDH art. 8, 14 ; Jurisprudence CNIL reconnaissance faciale.
- ⚖️ **À trancher :** VSA efficace pour sécu ou prétexte ? Comment garantir non-biais ? Qui contrôle les 4 entreprises ?
- **Statut :** ⬜

---

### P3. Cloud Act : données publiques/santé captives aux juridictions US
- **Le problème (France, 2016-2026) :** CLOUD Act (2018) : autorités US peuvent accéder données d'entreprises US, n'importe où stockées. Ministères, hôpitaux dépendent Microsoft/AWS/Google (contrats publics). Données de santé (PDS), civil, social stockées clouds US malgré RGPD français. Conseil d'État (2024-2026) valide Microsoft pour santé : « risque acceptable ». Aucune garantie souveraineté réelle.
- **Piste A, 🇫🇷 France (cloud souverain public) :** Généraliser Scaleway/OVHcloud pour données publiques/santé. Budget R&D cloud français. **Pour :** souveraineté réelle, données pas US-accessible. **Contre :** coûteux, moins mature AWS, peut ralentir innovation.
- **Piste B, 🇪🇺 UE (traités bilatéraux) :** Négocier traité UE-USA : autorités US accès seulement sur ordre judiciaire français + appel UE possible. **Pour :** légitime en diplomatie, moins coûteux. **Contre :** US peut refuser, fragile politiquement.
- **Piste C, 🇮🇹 Italie (encadrement strict US) :** Autoriser Microsoft/AWS mais chiffrement client (clés France), audit IT trimestriel, interdiction partage NSA. **Pour :** usage pragmatique US + garde-fous. **Contre :** confiance limitée, chiffrement peut réduire perfs, US peut ignorer restrictions.
- **Piste D, 🇪🇪 Estonie (zéro-trust décentralisé) :** Architecturer données santé décentralisées (hôpitaux régionaux = ses clés), pas cloud centralisé. **Pour :** pas point unique défaillance. **Contre :** complexe, fragmentation, synergies perdues.

- **Simulation (ordres de grandeur) :** Cloud souverain français (Piste A) : surcoût 20-30% vs AWS ≈ 200-300 M€/an. Investissement R&D GPU français : 2-5 Md€ sur 5 ans. Gagnants : souveraineté. Délai : 5-10 ans.
- ⚖️ **Faisabilité juridique :** Traité + RGPD ; RGPD art. 44 (transfert) ; CJUE Schrems II 2020.
- ⚖️ **À trancher :** Faut-il vraiment nuage français ? Ou traité US suffit ? Somme-nous prêts à payer surcoût souveraineté ?
- **Statut :** ⬜

---

### P4. Fracture numérique et dématérialisation forcée
- **Le problème (France, 2016-2026) :** Impôts, allocations, services publics dématérialisés (impots.gouv, ameli, CAF uniquement en ligne). 15-20 % population sans connexion régulière ou compétences numériques. Mairies ferment accueils physiques, réduisent guichets. Situations de refus de service ou accès dégradé : retraités, précaires, sans-abri. Urgences numériques (panne Orange 2022 = pas allocations pour semaines).
- **Piste A, 🇩🇪 Allemagne (accès hybride légal) :** Obligation légale de maïntenir courrier+papier parallèle à tout service dématérialisé. Délai de réponse papier = en ligne. **Pour :** inclusion garantie, failsafe physique. **Contre :** coûteux, peut enlentir transformation.
- **Piste B, 🇳🇱 Pays-Bas (tiers d'accompagnement) :** Agents numériques bénévoles + kiosques en mairies/bibliothèques pour aide en ligne. Formation gratuite seniors. **Pour :** inclusif, social, coût modéré. **Contre :** dépend bénévolat, limité en zones désertées.
- **Piste C, 🇧🇪 Belgique (responsabilité conditionnée) :** Dématérialisation autorisée seulement si organisme prouve > 90 % population capable (étude annuelle). Sinon maintien papier. **Pour :** force preuve d'inclusion. **Contre :** frein réforme, seuil arbitraire.
- **Piste D, 🇫🇷 France (évaluation d'impact 50+) :** Avant toute dématérialisation, audit impact sur personnes 65+/analphabètes/pauvres. Exempter certains publics de pénalités (délais allongés, frais réduits). **Pour :** identifie vrais problèmes. **Contre :** compliqué administrativement.

- **Simulation (ordres de grandeur) :** Piste A (accès hybride) : maintien infrastructure papier = 50-100 M€/an. Piste B (agents bénévoles) = 10-20 M€/an. Gagnants : 15-20% exclufs numériques. Délai inclusion : 2-3 ans.
- ⚖️ **Faisabilité juridique :** Loi + Égalité service public ; CEDH art. 14 ; Jurisprudence dématérialisation France.
- ⚖️ **À trancher :** Faut-il service public physique obligatoire parallèle ? Jusqu'à quel coût ? Qui finance inclusion ?
- **Statut :** ⬜

---

### P5. Cyberharcèlement : impunité des plateformes et des harceleurs
- **Le problème (France, 2016-2026) :** Loi de 2017 criminalise cyberharcèlement mais applic faible : dépôt plainte difficile, Police ignore signalements, plaintes classées sans suite. Plateformes (Meta, TikTok) retardent suppression contenus hate/menaces (24-72h+). Mineurs victimes (photos non-consentis, insultes sexistes en masse) = souvent aucune suite judiciaire. Modération algorithme = censure arbitraire, pas transparence.
- **Piste A, 🇨🇭 Suisse (notification obligation) :** Plateforme doit notifier victime + justice simultanément dans 24h sinon amende. Transparence : rapport mensuel nb contenu ôté/raison. **Pour :** force action rapide, responsabilité. **Contre :** peut surcharger justice, notifications faux positifs.
- **Piste B, 🇸🇪 Suède (cyber-brigade dédiée) :** Police : unité nationale cyberharcèlement, formation spécifique, appel gratuit 24/7. Suivi judiciaire garanti. **Pour :** expertise, prise au sérieux. **Contre :** coûteux, saturé rapidement.
- **Piste C, 🇳🇱 Pays-Bas (civile no-platform) :** Victime peut demander justice ordonnance contre harcèlement : suspension compte demandeur/ami (droit civil rapide, pas criminel). **Pour :** rapide, dissuasif sans prison. **Contre :** peut être abusée pour censure/intimidation.
- **Piste D, 🇬🇧 UK (transparency + algorithm audit) :** Plateforme publie algo modération, nb suppressions/appels gagnés. Audit indépendant annuel. Utilisateur : droit appel suppression en 48h. **Pour :** transparence, responsabilité. **Contre :** coûteux, révèle failles sécurité.

- **Simulation (ordres de grandeur) :** Piste A (notification 24h) : plateforme = 20-30 M€ initial, 5-10 M€/an. Piste B (cyber-brigade) : 200 agents x 50k€ = 10 M€/an. Gagnants : victimes protégées. Délai : 1-2 ans.
- ⚖️ **Faisabilité juridique :** Loi + Réglement UE DSA ; CEDH art. 6, 8, 10 ; Loi 2017 cyberharcèlement.
- ⚖️ **À trancher :** Responsabilité plateforme ou harceleurs ? Vitesse = justice ? Qui finance augmentation moyens ?
- **Statut :** ⬜

---

### P6. Désinformation électorale et deepfakes : avant 2027
- **Le problème (France, 2016-2026) :** Deepfakes vidéo/audio de politiciens (fake meeting, discours compromettant) circulent semaines avant scrutin. TikTok, Instagram amplifient (algo optimise engagement, pas vérité). Élections 2022-2024 : faux reportages US/RU sur immigration/sécurité viral en France. Pas obligation plateforme corriger titre/contexte faux. Élections 2027 : risque multiplié (technos améliores, IA générative accessible).
- **Piste A, 🇪🇺 UE (loi électorale DSA 2025) :** Code électoral UE : plateforme doit signaler pré-élection tous deepfakes/désinformation politique (label rouge), fact-check lien, algo ne booste pas. Publicité politique : sponsor transparent, prix public. **Pour :** harmonie UE, déterrance. **Contre :** limite liberté expression ? Qui définit « faux » ? Tech coûteuse.
- **Piste B, 🇩🇪 Allemagne (forensique+police) :** Équipe nationale (police+scientifiques) analyse désinformation massive : forensique audio/vidéo. Plateforme = obligation coopération enquête. **Pour :** expert, légal clair. **Contre :** lent, peut arriver après scrutin.
- **Piste C, 🇮🇹 Italie (literacy + démenti) :** Campagne d'éducation vidéo « Comment repérer deepfake ». Gouvernement : débunking automatisé (fact-check lié posts faux, masque par défaut). **Pour :** inclusif, responsabilise citoyens. **Contre :** impact limité, algorithme fact-check peut être contested.
- **Piste D, 🇸🇬 Singapour (délai protection) :** Loi : 30 jours avant vote = interdiction publication toute vidéo politique non-sourced. Après : libre. **Pour :** simple, temporaire. **Contre :** censure perçue, contournements faciles.

- **Simulation (ordres de grandeur) :** Piste A (UE DSA label+correction) : plateforme fact-check = 50-100 M€ initial EU + 20 M€/an. Piste B (police forensique) : équipe ~50 experts = 5 M€/an. Gagnants : intégrité électorale. Délai : 1 an.
- ⚖️ **Faisabilité juridique :** Loi + Réglement UE DSA ; CEDH art. 10 ; Jurisprudence désinformation 2022.
- ⚖️ **À trancher :** Qui vérifie vérité avant élection ? Combien de délai ? Faut-il tech détection auto deepfakes ?
- **Statut :** ⬜

---

### P7. Mineurs et réseaux sociaux : exposition addictive non régulée
- **Le problème (France, 2016-2026) :** TikTok, Instagram, Snapchat : algorithmes optimisés addiction (likes, engagement temps écran). Mineurs < 13 ans théoriquement interdits (CNIL) mais aucun contrôle technique réel. Exposition contenus : violence, pornographie soft, trouble de l'image (anorexie trend TikTok). Temps écran moyen 4-6h/jour (données Ifop 2024), corrélé dépression ados. Plainte collective contre Meta 2024 : "infraction publicité enfants", en cours.
- **Piste A, 🇩🇰 Danemark (contrôle parental légal) :** Plateforme : contrôle parental = fonctionnalité obligatoire par défaut, parent accès dashboard temps écran/contenu/contacts. **Pour :** responsabilise parents, choix. **Contre :** techn peut être contournée, complexe adoption.
- **Piste B, 🇮🇱 Israël (interdiction < 16) :** Ban complet < 16 ans réseaux sociaux (technique : vérification âge par documento/SMS). **Pour :** simple, zéro exposition. **Contre :** discrimination numérque massive, effet pervers (marché noir applis).
- **Piste C, 🇸🇪 Suède (algo neutre enfants) :** Loi : enfants < 15 ans = algorithme désactivé (feed chronologique, pas recommandation). Contenu violent/sexuel bloqué automatiquement. **Pour :** protège sans ban, basé science. **Contre :** coûteux techn, compétitivité vs US.
- **Piste D, 🇫🇷 France (education+transparence) :** Curriculum obligatoire école : usage réseaux, repérage addictio / harcèlement. Plateforme : rapport trimestriel metrics temps écran moyen enfants par tranche (anonyme). **Pour :** inclusif, awareness. **Contre :** peu dissuasif, compliance basse si pas sanction.

- **Simulation (ordres de grandeur) :** Piste C (algo neutre < 15 ans) : modification code ≈ 200-500 M€ initial pour Meta/TikTok. Piste D (curriculum) : formation ~30 M€/an. Gagnants : 4-6h écran réduit, santé ados. Délai : 2-3 ans.
- ⚖️ **Faisabilité juridique :** Loi + Réglement UE DSA ; CEDH art. 8 ; Directive enfance UE.
- ⚖️ **À trancher :** Ban complet < 16 ou contrôle/éducation ? Qui vérifie âge ? Qui supervise algos ?
- **Statut :** ⬜

---

### P8. Retard IA/compute européen : dépendance modèles US/Chine
- **Le problème (France, 2016-2026) :** Modèles IA dominants = OpenAI (ChatGPT), Google (Gemini), Anthropic (Claude), Llama (Meta), tous US. France/UE = zéro fondational model compétitif. Investissement R&D IA : US 100+ Md$/an, Chine 50+ Md$/an, France 2 Md$/an (à confirmer). GPU/TPU : Nvidia (US) monopole. Cloud entrainement : AWS/Azure/GCP (US). Régulation IA Act (2024) : risque faire réguler hors UE, perte attractivité. Startups IA EU pivot vers US.
- **Piste A, 🇫🇷🇪🇺 UE (champion public HPC) :** Consortium UE + France : investir 50 Md€ 5 ans, fabriquer GPU/TPU europens, data center souverain IA. Temps avant output : 5-10 ans. **Pour :** autonomie long-terme, emplois R&D. **Contre :** coûteux massif, déjà retard technologique, peut échouer (GAFAM trop rapides).
- **Piste B, 🇩🇪 Allemagne (open-source décentralisé) :** Financer open-source IA (Hugging Face, mistral). Chaque pays lab IA public. Partage modèles européens = libre commun. **Pour :** rapide, inclusif, limite contrôle centralise. **Contre :** fragmentation, perte economies d'échelle.
- **Piste C, 🇩🇰 Danemark (partenariat US) :** Accord stratégique Microsoft/Amazon : co-invest cloud IA EU, localisation data, garanties non-accès NSA (à confirmer négo). **Pour :** pragmatique, rapide. **Contre :** reste dépendance US, peut être revoqué.
- **Piste D, 🇸🇬 Singapour (hub neutre) :** Positionner UE "hub IA neutre" : plateforme ouverte startup US/Chine/EU coopérent, régulation light vs US/Chine. **Pour :** attractivité talens. **Contre :** pas solutionner retard compute, géopolitique risqué.

- **Simulation (ordres de grandeur) :** Piste A (UE HPC 50 Md€) : France part ~20% = 10 Md€ sur 5 ans. Piste B (open-source) : 2-3 Md€/an coût-bénéfice réduit. Gagnants : autonomie IA EU. Délai : 5-10 ans compétitivité.
- ⚖️ **Faisabilité juridique :** Loi + Réglement UE IA Act ; Compétitivité vs régulation ; Réglement IA 2024.
- ⚖️ **À trancher :** Investir massif public (risque gaspillage) ? Miser open-source (lent) ? Accepter dépendance stratégique US ?
- **Statut :** ⬜

---

## Notes méthodologiques
- Fiches 1-8 : problèmes 2016-2026, exemples pays UE/assimilés (Suisse, UK post-Brexit).
- Pistes : jamais unilatérale, toujours avantages + risques réalistes.
- Statut ⬜ : à enrichir après consultation experts, mouvements comparables, débat interne.
- Incertitudes marquées (à confirmer) ; WebSearch 3 req. max.
