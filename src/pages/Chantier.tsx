// Page Chantier — le débat ouvert.
//
// Affiche les fiches-mesures brouillon (chantier/axe-*-fiches.md) et ouvre
// la réaction citoyenne : pouce haut/bas, commentaire, contre-proposition.
// Rien ici n'est une position figée du mouvement : c'est la matière à débat.

import { useState } from 'react'
import Markdown from '../components/Markdown'
import { axesFiches, type Fiche } from '../lib/fiches'
import { useReaction } from '../lib/reactions'

function CarteFiche({ fiche }: { fiche: Fiche }) {
  const { reaction, voter, commenter } = useReaction(fiche.id)
  const [ouvert, setOuvert] = useState(false)
  const [mode, setMode] = useState<'commentaire' | 'alternative'>('commentaire')
  const [texte, setTexte] = useState('')

  const envoyer = () => {
    commenter(mode, texte)
    setTexte('')
  }

  return (
    <article className="fiche" id={fiche.id}>
      <header className="fiche__header">
        <span className="fiche__code">{fiche.code}</span>
        <h3 className="fiche__titre">{fiche.titre}</h3>
      </header>

      <details className="fiche__details" open={ouvert} onToggle={(e) => setOuvert(e.currentTarget.open)}>
        <summary>{ouvert ? 'Replier' : 'Lire la fiche'}</summary>
        <Markdown>{fiche.corps}</Markdown>
      </details>

      <div className="fiche__actions">
        <button
          type="button"
          className={`vote vote--pour${reaction.vote === 'pour' ? ' vote--actif' : ''}`}
          onClick={() => voter('pour')}
          aria-pressed={reaction.vote === 'pour'}
        >
          👍 Pour
        </button>
        <button
          type="button"
          className={`vote vote--contre${reaction.vote === 'contre' ? ' vote--actif' : ''}`}
          onClick={() => voter('contre')}
          aria-pressed={reaction.vote === 'contre'}
        >
          👎 Contre
        </button>
        <div className="fiche__mode">
          <button
            type="button"
            className={`mode${mode === 'commentaire' ? ' mode--actif' : ''}`}
            onClick={() => setMode('commentaire')}
          >
            💬 Commenter
          </button>
          <button
            type="button"
            className={`mode${mode === 'alternative' ? ' mode--actif' : ''}`}
            onClick={() => setMode('alternative')}
          >
            💡 Proposer une alternative
          </button>
        </div>
      </div>

      <div className="fiche__saisie">
        <textarea
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder={
            mode === 'commentaire'
              ? 'Votre réaction sur cette mesure…'
              : 'Votre contre-proposition : que feriez-vous à la place ?'
          }
          rows={2}
        />
        <button type="button" className="btn" onClick={envoyer} disabled={!texte.trim()}>
          Envoyer
        </button>
      </div>

      {reaction.commentaires.length > 0 && (
        <ul className="fiche__commentaires">
          {reaction.commentaires.map((c, i) => (
            <li key={i} className={`commentaire commentaire--${c.type}`}>
              <span className="commentaire__type">
                {c.type === 'alternative' ? '💡 Alternative' : '💬'}
              </span>
              {c.texte}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function Chantier() {
  const [axeActif, setAxeActif] = useState(axesFiches[0]?.numero ?? 1)
  const axe = axesFiches.find((a) => a.numero === axeActif)

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Le chantier — débat ouvert</h1>
        <p>
          Ces mesures sont des <strong>brouillons</strong>, importés de ce qui
          fonctionne déjà dans d'autres pays. Rien n'est figé : votez, commentez,
          proposez mieux. C'est votre république.
        </p>
      </section>

      <nav className="chantier-tabs" aria-label="Axes du chantier">
        {axesFiches.map((a) => (
          <button
            key={a.numero}
            type="button"
            className={`chantier-tab${a.numero === axeActif ? ' chantier-tab--actif' : ''}`}
            onClick={() => setAxeActif(a.numero)}
          >
            {a.titre}
          </button>
        ))}
      </nav>

      {axe && (
        <section className="chantier-liste">
          {axe.fiches.map((f) => (
            <CarteFiche key={f.id} fiche={f} />
          ))}
        </section>
      )}
    </div>
  )
}
