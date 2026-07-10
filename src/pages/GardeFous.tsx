// Page Garde-fous : transparence totale sur la protection du débat.
//
// Le mouvement publie ses défenses anti-manipulation ET sa doctrine
// d'escalade : on ouvre au maximum, on surveille, on durcit si nécessaire.

export default function GardeFous() {
  return (
    <div className="page">
      <section className="page-intro">
        <h1>Garde-fous : comment on protège le débat</h1>
        <p>
          Un débat ouvert attire les saboteurs : fermes à trolls, bots,
          ingérences étrangères, adversaires politiques. Nous publions nos
          défenses, parce que la transparence vaut aussi pour nous.
        </p>
      </section>

      <div className="prose">
        <h2>Ce qui est en place aujourd'hui</h2>
        <ul>
          <li>
            <strong>Un email = un vote par fiche.</strong> Le verrou est dans
            la base elle-même : un second vote avec le même email est refusé
            techniquement, pas par bonne volonté.
          </li>
          <li>
            <strong>Vos emails sont inviolables.</strong> La lecture de la base
            des réactions est fermée à tous, y compris aux robots : personne ne
            peut aspirer les adresses. Elles ne servent qu'au dépouillement.
          </li>
          <li>
            <strong>Les IA sont bienvenues, mais signées.</strong> Un agent
            (Claude, ChatGPT, Gemini...) peut participer pour son utilisateur,
            à condition de se déclarer. Un avis d'IA signé compte, un avis
            d'IA déguisé en humain est éliminé.
          </li>
          <li>
            <strong>Chaque retour est étiqueté</strong> (site ou API) et validé
            à l'entrée : pseudo et email obligatoires, formats stricts,
            horodatage serveur infalsifiable.
          </li>
          <li>
            <strong>Le dépouillement pondère, il ne censure pas.</strong>{' '}
            Rafales coordonnées, textes quasi identiques, domaines email
            jetables : ces signaux réduisent le poids d'un avis, et la méthode
            de dépouillement est publiée avec les résultats.
          </li>
        </ul>

        <h2>Notre doctrine : ouvrir d'abord, durcir si nécessaire</h2>
        <p>
          Nous assumons de démarrer avec des limites légères : c'est le prix
          du zéro friction, et l'immense majorité des participants sont de
          bonne foi. Mais que ce soit dit clairement : <strong>si des dérives
          apparaissent, nous n'hésiterons pas à serrer la vis</strong> pour
          préserver cette initiative. Dans l'ordre, et seulement si la
          pression le justifie :
        </p>
        <ol>
          <li>
            Vérification invisible d'humanité sur le site (type Turnstile :
            aucun captcha pénible, aucune friction pour vous).
          </li>
          <li>Confirmation de l'email en un clic avant la prise en compte.</li>
          <li>
            Limitation de débit et quarantaine des vagues suspectes en attente
            d'analyse.
          </li>
        </ol>
        <p>
          Chaque durcissement sera annoncé sur cette page, daté et justifié.
          Jamais de règle secrète : c'est votre débat, vous avez le droit de
          savoir comment il est protégé.
        </p>

        <h2>Journal des durcissements</h2>
        <ul>
          <li>
            <strong>10 juillet 2026 : pseudonymisation totale.</strong> Plus
            aucun email en clair dans la base des réactions : seules des
            empreintes irréversibles (SHA-256) y circulent, vérifiées par le
            serveur. Un vote n'est plus jamais relié à un email lisible.
            Justification : des opinions politiques liées à des personnes
            identifiables, c'est le fichier que nous refusons de posséder.
          </li>
          <li>
            <strong>10 juillet 2026 : ancrage du canal API.</strong> Un agent
            IA ne peut plus déposer de retour qu'avec un email ayant été
            prouvé au moins une fois par connexion sur le site (une fois,
            valable à vie). Justification : sans cela, une flotte de robots
            pouvait saturer le registre avec des emails inventés. Impact
            citoyen : une connexion unique avant de déléguer à son IA.
          </li>
        </ul>
      </div>
    </div>
  )
}
