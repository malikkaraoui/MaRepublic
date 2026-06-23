// Page 404.

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container container--reading not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page introuvable</h1>
      <p className="not-found__text">
        Le lien que vous avez suivi n'existe pas ou plus. Revenez à l'essentiel.
      </p>
      <div className="not-found__actions">
        <Link to="/" className="button button--primary">
          Retour à l'accueil
        </Link>
        <Link to="/programme" className="button button--ghost">
          Voir le programme
        </Link>
      </div>
    </div>
  )
}
