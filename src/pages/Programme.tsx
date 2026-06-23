// Page « Programme » : liste les cinq axes et renvoie vers leur détail.

import { Link } from 'react-router-dom'
import { axes } from '../data/axes'

export default function Programme() {
  return (
    <div className="container container--reading">
      <header className="page-head">
        <p className="page-head__kicker">Le programme</p>
        <h1 className="page-head__title">Cinq axes de travail</h1>
        <p className="page-head__intro">
          En face de chaque constat, une proposition. Pas une promesse — une
          direction, chiffrée et évaluable. Chaque axe sera approfondi dans un
          document de travail dédié.
        </p>
      </header>

      <ol className="programme-list">
        {axes.map((axe) => (
          <li key={axe.slug} className="programme-item">
            <Link to={`/programme/${axe.slug}`} className="programme-item__link">
              <span className="programme-item__num">
                Axe {axe.numero}
              </span>
              <span className="programme-item__main">
                <span className="programme-item__title">{axe.titre}</span>
                <span className="programme-item__accroche">{axe.accroche}</span>
                {axe.contentKey && (
                  <span className="badge">Document détaillé disponible</span>
                )}
              </span>
              <span className="programme-item__chevron" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
