// Page de détail d'un axe : /programme/:slug
//
// - Si l'axe dispose d'un document de travail détaillé (`contentKey`), on rend
//   ce Markdown intégral (cas de l'Axe 1, Institutions).
// - Sinon, on présente l'accroche et la liste des propositions, en signalant
//   que la fiche détaillée est à venir.

import { Link, useParams } from 'react-router-dom'
import Markdown from '../components/Markdown'
import { content } from '../content'
import { axes, getAxe } from '../data/axes'
import NotFound from './NotFound'

export default function AxeDetail() {
  const { slug } = useParams()
  const axe = getAxe(slug)

  if (!axe) {
    return <NotFound />
  }

  const autresAxes = axes.filter((a) => a.slug !== axe.slug)

  return (
    <div className="container container--reading">
      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        <Link to="/programme">Programme</Link>
        <span aria-hidden="true">/</span>
        <span>Axe {axe.numero}</span>
      </nav>

      <header className="page-head">
        <p className="page-head__kicker">Axe {axe.numero}</p>
        <h1 className="page-head__title">{axe.titre}</h1>
        <p className="page-head__intro">{axe.accroche}</p>
      </header>

      {axe.contentKey ? (
        <article className="document">
          <Markdown>{content[axe.contentKey]}</Markdown>
        </article>
      ) : (
        <section className="propositions">
          <h2 className="propositions__title">Propositions</h2>
          <ul className="propositions__list">
            {axe.propositions.map((proposition, i) => (
              <li key={i} className="propositions__item">
                {proposition}
              </li>
            ))}
          </ul>
          <p className="note">
            La fiche détaillée de cet axe, chiffrage, calendrier, indicateurs
            et comparaisons internationales, est en cours de rédaction, sur le
            modèle de l'Axe 1.
          </p>
        </section>
      )}

      <nav className="axe-more" aria-label="Autres axes">
        <h2 className="axe-more__title">Les autres axes</h2>
        <ul className="axe-more__list">
          {autresAxes.map((a) => (
            <li key={a.slug}>
              <Link to={`/programme/${a.slug}`}>
                <span className="axe-more__num">Axe {a.numero}</span>
                <span className="axe-more__label">{a.titre}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
