// Pied de page.
//
// Sobre, sans réseau social ni logo : cohérent avec le principe « zéro budget
// com' tant que les fondamentaux ne sont pas posés ». On rappelle simplement
// la nature du mouvement et les liens essentiels.

import { Link } from 'react-router-dom'

export default function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__statement">
          Un mouvement politique sans étiquette.
          <br />
          Fondé sur les actes, pas sur les promesses.
        </p>

        <nav className="site-footer__nav" aria-label="Navigation de pied de page">
          <Link to="/fondateur">Document fondateur</Link>
          <Link to="/programme">Programme</Link>
        </nav>

        <p className="site-footer__meta">
          Ce document est un point de départ, pas un point d'arrivée. Tout est
          évaluable, tout est améliorable.
        </p>

        <p className="site-footer__copy">
          © {annee}, Document de travail. On ne demande pas aux Français de
          nous croire, mais de nous juger sur pièces.
        </p>
      </div>
    </footer>
  )
}
