// Page d'accessibilité : déclaration d'engagement envers l'accessibilité WCAG 2.2 AA

import { Link } from 'react-router-dom'

export default function Accessibilite() {
  return (
    <div className="page">
      <section className="page-intro">
        <h1>Accessibilité du site</h1>
        <p>
          Ma République s'engage à rendre son site web accessible à toutes et
          tous, en conformité avec les normes WCAG 2.2 niveau AA et le référentiel
          français RGAA 4.
        </p>
      </section>

      <article className="container--reading">
        <section className="prose">
          <h2>Notre engagement</h2>

          <p>
            Ce mouvement politique est fondé sur le principe que la démocratie
            participative doit être accessible à chacun. Cela inclut l'accès au
            site web, peu importe le handicap (malvoyance, cécité, handicap moteur,
            difficultés cognitives, surdité ou malentendance).
          </p>

          <p>
            Nous nous engageons à faire du site un espace inclusif où aucun
            citoyen n'est laissé de côté.
          </p>

          <h2>État de conformité</h2>

          <p>
            Le site vise la conformité WCAG 2.2 niveau AA (double A). Cela signifie :
          </p>

          <ul>
            <li>Tous les formulaires ont des labels accessibles</li>
            <li>
              Les ratios de contraste respectent le minimum 4,5:1 pour le texte normal
              et 3:1 pour le texte de grande taille
            </li>
            <li>Navigation au clavier entièrement fonctionnelle</li>
            <li>
              Ordre de tabulation logique et focus visible partout, y compris sur
              les fonds sombres
            </li>
            <li>
              Pas d'information transmise par la couleur seule : icônes et texte complémentaires
            </li>
            <li>
              Zoom jusqu'à 200 % : rien ne casse
            </li>
            <li>
              Cibles tactiles d'au moins 44 pixels (boutons de vote, filtres, actions)
            </li>
            <li>
              Menu mobile utilisable au clavier
            </li>
            <li>
              Compteur de caractères annoncé par les lecteurs d'écran
            </li>
          </ul>

          <h2>Contenu audio et vidéo</h2>

          <p>
            Le site est actuellement entièrement textuel. Néanmoins, nous nous
            engageons solennellement à ce que tout futur contenu multimédia respecte
            les normes d'accessibilité :
          </p>

          <ul>
            <li>Toute vidéo sera accompagnée de sous-titres synchronisés</li>
            <li>Transcription complète de chaque vidéo (format texte accessible)</li>
            <li>
              Quand c'est possible, version en Langue des Signes Française (LSF) pour les contenus importants
            </li>
            <li>
              Audiodescription pour les éléments visuels essentiels
            </li>
          </ul>

          <h2>Comment signaler un problème d'accessibilité</h2>

          <p>
            Si vous rencontrez une difficulté pour accéder au site ou si vous
            trouvez un contenu non accessible, signalez-le en deux minutes,
            sans compte à créer :
          </p>

          <p>
            <Link to="/signaler?depuis=accessibilite">
              Signaler un problème d'accessibilité
            </Link>
          </p>

          <p>
            Décrivez simplement ce qui ne fonctionne pas, le navigateur utilisé,
            et le type d'appareil (téléphone, ordinateur). Nous répondrons
            rapidement.
          </p>

          <h2>Langage simple et clair (FALC)</h2>

          <p>
            Nos documents politiques utilisent le principe FALC (Facile à Lire et
            à Comprendre) autant que possible : phrases courtes, mots simples, pas de
            jargon politique ou administratif, listes plutôt que paragraphes longs.
          </p>

          <h2>Méthode et outils</h2>

          <p>
            L'accessibilité du site est vérifiée par :
          </p>

          <ul>
            <li>Tests automatisés avec axe-core à chaque modification</li>
            <li>Tests manuels au clavier sur toutes les pages</li>
            <li>Tests sur navigateurs (Firefox, Chrome, Safari) et appareils (ordinateur, tablette, mobile)</li>
            <li>Retours des utilisateurs en situation de handicap</li>
          </ul>

          <p>
            Cette déclaration sera mise à jour chaque année ou chaque fois que de
            nouvelles fonctionnalités sont ajoutées.
          </p>

          <hr />

          <p>
            <small>
              Mise à jour : juillet 2026. La prochaine révision est prévue en juillet 2027.
            </small>
          </p>
        </section>
      </article>

      <section style={{ marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        <Link to="/" className="button button--primary">
          Retour à l'accueil
        </Link>
      </section>
    </div>
  )
}
