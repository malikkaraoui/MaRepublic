// Page d'accessibilite: declaration d'engagement envers l'accessibilite WCAG 2.1 AA

import { Link } from 'react-router-dom'

export default function Accessibilite() {
  return (
    <div className="page">
      <section className="page-intro">
        <h1>Accessibilite du site</h1>
        <p>
          Ma Republique s'engage a rendre son site web accessible a toutes et
          tous, en conformite avec les normes WCAG 2.1 niveau AA et le referentiel
          francais RGAA 4.
        </p>
      </section>

      <article className="container--reading">
        <section className="prose">
          <h2>Notre engagement</h2>

          <p>
            Ce mouvement politique est fonde sur le principe que la democratie
            participative doit etre accessible a chacun. Cela inclut l'acces au
            site web, peu importe le handicap (malvoyance, cecite, handicap moteur,
            difficultés cognitives, surdite ou malentendance).
          </p>

          <p>
            Nous nous engageons a faire du site un espace inclusif ou aucun
            citoyen n'est laisse de cote.
          </p>

          <h2>État de conformite</h2>

          <p>
            Le site vise la conformite WCAG 2.1 niveau AA (double A). Cela signifie :
          </p>

          <ul>
            <li>Tous les formulaires ont des labels accessibles</li>
            <li>
              Les ratios de contraste respectent le minimum 4,5:1 pour le texte normal
              et 3:1 pour le texte de grande taille
            </li>
            <li>Navigation au clavier entierement fonctionnelle</li>
            <li>
              Ordre de tabulation logique et focus visible partout
            </li>
            <li>
              Pas d'information transmitted par la couleur seule : icones et texte complementaires
            </li>
            <li>
              Zoom jusqu'a 200% : rien ne casse
            </li>
            <li>
              Menu mobile utilisable au clavier
            </li>
            <li>
              Compteur de caracteres annonce a l'ecran par lecteur d'ecran
            </li>
          </ul>

          <h2>Contenu audio et video</h2>

          <p>
            Le site est actuellement entierement textuel. Neanmoins, nous nous
            engageons solennellement que tout futur contenu multimedia respectera
            les normes d'accessibilite :
          </p>

          <ul>
            <li>Tout video sera accompagnee de sous-titres synchronises</li>
            <li>Transcription complete de chaque video (format texte accessible)</li>
            <li>
              Quand possible, version en Langue des Signes Francaise (LSF) pour les contenus importants
            </li>
            <li>
              Description audio pour les elements visuels essentiels
            </li>
          </ul>

          <h2>Comment signaler un probleme d'accessibilite</h2>

          <p>
            Si vous rencontrez une difficulte pour acceder au site ou si vous
            trouvez un contenu non accessible, vous pouvez nous le signaler via
            une issue GitHub :
          </p>

          <p>
            <a
              href="https://github.com/garrytan/marepublique/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Signaler un probleme d'accessibilite
            </a>
          </p>

          <p>
            Decrivez simplement ce qui ne fonctionne pas, le navigateur utilise,
            et le type d'appareil (telephone, ordinateur). Nous repondrons
            rapidement.
          </p>

          <h2>Langage simple et clair (FALC)</h2>

          <p>
            Nos documents politiques utilisent le principe FALC (Facile a Lire et
            Comprendre) autant que possible : phrases courtes, mots simples, pas de
            jargon politique ou administratif, listes plutot que paragraphes longs.
          </p>

          <h2>Methode et outils</h2>

          <p>
            L'accessibilite du site est verifiee par :
          </p>

          <ul>
            <li>Tests automatises avec axe-core a chaque modification</li>
            <li>Tests manuels au clavier sur toutes les pages</li>
            <li>Tests sur navigateurs (Firefox, Chrome, Safari) et appareils (ordinateur, tablette, mobile)</li>
            <li>Feedback des utilisateurs en situation de handicap</li>
          </ul>

          <p>
            Cette declaration sera mise a jour chaque annee ou chaque fois que de
            nouvelles fonctionnalites sont ajoutees.
          </p>

          <hr />

          <p>
            <small>
              Mise a jour : juillet 2026. La prochaine revision est prevue en juillet 2027.
            </small>
          </p>
        </section>
      </article>

      <section style={{ marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
        <Link to="/" className="button button--primary">
          Retour a l'accueil
        </Link>
      </section>
    </div>
  )
}
