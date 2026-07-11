// Pied de page recomposé.
//
// Composition tenue : une déclaration en Spectral, la navigation classée en
// trois rubriques (cibles 44px), une invitation à participer, un bas de page
// qui rappelle la nature du mouvement. Sobre, sans dégradé ni verre, lisible au
// clavier sur fond encre (le halo de focus passe au papier, voir global.css).
//
// Sans logo, sans réseau social : cohérent avec « zéro budget com' tant que les
// fondamentaux ne sont pas posés ».

import { Link } from 'react-router-dom'

export default function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__filet" aria-hidden="true" />

      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <p className="site-footer__eyebrow">Ma République</p>
          <p className="site-footer__statement">
            Un mouvement sans étiquette. Fondé sur les actes, pas sur les
            promesses.
          </p>
          <Link to="/chantier" className="site-footer__cta">
            Entrer dans le chantier <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="site-footer__cols">
          <nav className="site-footer__col" aria-label="Le mouvement">
            <p className="site-footer__col-title">Le mouvement</p>
            <Link to="/fondateur">Document fondateur</Link>
            <Link to="/programme">Programme</Link>
            <Link to="/feuille-de-route">Feuille de route</Link>
          </nav>

          <nav className="site-footer__col" aria-label="Le débat">
            <p className="site-footer__col-title">Le débat</p>
            <Link to="/chantier">Le chantier</Link>
            <Link to="/garde-fous">Garde-fous</Link>
            <Link to="/vie-privee">Vie privée</Link>
          </nav>

          <nav className="site-footer__col" aria-label="Accès">
            <p className="site-footer__col-title">Accès</p>
            <Link to="/accessibilite">Accessibilité</Link>
            <Link to="/signaler?depuis=footer">Signaler un souci</Link>
            <a
              href="https://github.com/malikkaraoui/MaRepublic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le code, ouvert
            </a>
          </nav>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p className="site-footer__copy">
            © {annee}, document de travail. On ne demande pas aux Français de
            nous croire, mais de nous juger sur pièces.
          </p>
          <a className="site-footer__haut" href="#contenu">
            Haut de page <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
