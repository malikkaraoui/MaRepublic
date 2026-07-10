// Page Chantier, le débat ouvert.
//
// Affiche les fiches-mesures brouillon (chantier/axe-*-fiches.md) et ouvre
// la réaction citoyenne : pouce haut/bas, commentaire, contre-proposition.
// Rien ici n'est une position figée du mouvement : c'est la matière à débat.

import { useEffect, useRef, useState } from 'react'
import Markdown from '../components/Markdown'
import { axesFiches, type Fiche } from '../lib/fiches'
import { useReaction } from '../lib/reactions'
import { useIdentite } from '../lib/identite'
import { envoyerAvis } from '../lib/avis'

// Bandeau d'identité : pseudo + email exigés avant toute réaction.
// Saisis une fois, conservés sur l'appareil ; l'email n'est jamais affiché
// publiquement (collection Firestore fermée en lecture).
function BandeauIdentite() {
  const { identite, definir, valide } = useIdentite()

  return (
    <section className={`identite${valide ? ' identite--ok' : ''}`} aria-label="Votre identité pour réagir">
      <p className="identite__intro">
        {valide
          ? `Vous réagissez en tant que ${identite.pseudo}.`
          : 'Pour voter ou commenter, indiquez un pseudo et un email (jamais affiché publiquement).'}
      </p>
      <div className="identite__champs">
        <label className="identite__champ">
          <span>Pseudo</span>
          <input
            type="text"
            value={identite.pseudo}
            onChange={(e) => definir({ ...identite, pseudo: e.target.value })}
            placeholder="ex. Marie72"
            maxLength={40}
            autoComplete="nickname"
          />
        </label>
        <label className="identite__champ">
          <span>Email</span>
          <input
            type="email"
            value={identite.email}
            onChange={(e) => definir({ ...identite, email: e.target.value })}
            placeholder="vous@exemple.fr"
            maxLength={120}
            autoComplete="email"
          />
        </label>
      </div>
    </section>
  )
}

function CarteFiche({ fiche, identiteValide }: { fiche: Fiche; identiteValide: boolean }) {
  const { reaction, voter, commenter } = useReaction(fiche.id)
  const [ouvert, setOuvert] = useState(false)
  const [mode, setMode] = useState<'commentaire' | 'alternative'>('commentaire')
  const [texte, setTexte] = useState('')

  // Vote : bascule locale + envoi Firestore (sauf annulation d'un vote).
  const voterEtEnvoyer = (v: 'pour' | 'contre') => {
    const annulation = reaction.vote === v
    voter(v)
    if (!annulation) void envoyerAvis({ ficheId: fiche.id, type: 'vote', vote: v })
  }

  const envoyer = () => {
    if (!texte.trim()) return
    commenter(mode, texte)
    void envoyerAvis({ ficheId: fiche.id, type: mode, texte: texte.trim() })
    setTexte('')
  }

  const textCount = texte.length
  const maxLength = 500

  return (
    <article className="fiche" id={fiche.id}>
      <header className="fiche__header">
        <span className="fiche__code">{fiche.code}</span>
        <h3 className="fiche__titre">{fiche.titre}</h3>
      </header>

      <details className="fiche__details" open={ouvert} onToggle={(e) => setOuvert(e.currentTarget.open)}>
        <summary className="fiche__summary">
          {ouvert ? 'Replier' : 'Lire la fiche'}
          <span className="fiche__chevron" aria-hidden="true">
            {ouvert ? '▼' : '▶'}
          </span>
        </summary>
        <div className="fiche__content">
          <Markdown>{fiche.corps}</Markdown>
        </div>
      </details>

      <div className="fiche__actions">
        <button
          type="button"
          className={`vote vote--pour${reaction.vote === 'pour' ? ' vote--actif' : ''}`}
          onClick={() => voterEtEnvoyer('pour')}
          aria-pressed={reaction.vote === 'pour'}
          disabled={!identiteValide}
          title={identiteValide ? 'Pour cette mesure' : 'Renseignez pseudo et email en haut de page'}
        >
          <span aria-hidden="true">👍</span> Pour
        </button>
        <button
          type="button"
          className={`vote vote--contre${reaction.vote === 'contre' ? ' vote--actif' : ''}`}
          onClick={() => voterEtEnvoyer('contre')}
          aria-pressed={reaction.vote === 'contre'}
          disabled={!identiteValide}
          title={identiteValide ? 'Contre cette mesure' : 'Renseignez pseudo et email en haut de page'}
        >
          <span aria-hidden="true">👎</span> Contre
        </button>
        <div className="fiche__mode-group">
          <button
            type="button"
            className={`fiche__mode-btn${mode === 'commentaire' ? ' fiche__mode-btn--actif' : ''}`}
            onClick={() => setMode('commentaire')}
            title="Ajouter un commentaire"
          >
            <span aria-hidden="true">💬</span> Commenter
          </button>
          <button
            type="button"
            className={`fiche__mode-btn${mode === 'alternative' ? ' fiche__mode-btn--actif' : ''}`}
            onClick={() => setMode('alternative')}
            title="Proposer une alternative"
          >
            <span aria-hidden="true">💡</span> Alternative
          </button>
        </div>
      </div>

      <div className="fiche__saisie">
        <label htmlFor={`textarea-${fiche.id}`} className="visually-hidden">
          {mode === 'commentaire' ? 'Votre commentaire' : 'Votre contre-proposition'}
        </label>
        <textarea
          id={`textarea-${fiche.id}`}
          value={texte}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              setTexte(e.target.value)
            }
          }}
          placeholder={
            mode === 'commentaire'
              ? 'Votre réaction sur cette mesure...'
              : 'Votre contre-proposition : que feriez-vous à la place ?'
          }
          maxLength={maxLength}
          className="fiche__textarea"
          aria-label={mode === 'commentaire' ? 'Votre commentaire' : 'Votre contre-proposition'}
        />
        <div className="fiche__saisie-footer">
          <span className="fiche__counter" aria-live="polite" aria-atomic="true">
            {textCount}/{maxLength}
          </span>
          <button
            type="button"
            className="fiche__submit"
            onClick={envoyer}
            disabled={!texte.trim() || !identiteValide}
            title={identiteValide ? 'Envoyer votre contribution' : 'Renseignez pseudo et email en haut de page'}
          >
            Envoyer
          </button>
        </div>
      </div>

      {reaction.commentaires.length > 0 && (
        <ul className="fiche__commentaires">
          {reaction.commentaires.map((c, i) => (
            <li key={i} className={`commentaire commentaire--${c.type}`}>
              <span className="commentaire__badge" aria-hidden="true">
                {c.type === 'alternative' ? '💡' : '💬'}
              </span>
              <span className="commentaire__text">{c.texte}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function Chantier() {
  const [axeActif, setAxeActif] = useState(axesFiches[0]?.numero ?? 1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { valide } = useIdentite()

  const axe = axesFiches.find((a) => a.numero === axeActif)

  const programme = axesFiches.filter((a) => a.numero <= 5)
  const problemes = axesFiches.filter((a) => a.numero > 5)

  // Scroll actif onglet en vue
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector(
        '[data-axe-numero][data-active="true"]'
      ) as HTMLElement
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [axeActif])

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Le chantier, débat ouvert</h1>
        <p>
          Ces mesures sont des <strong>brouillons</strong>, importés de ce qui
          fonctionne déjà dans d'autres pays. Rien n'est figé : votez, commentez,
          proposez mieux. C'est votre république.
        </p>
      </section>

      <BandeauIdentite />

      <nav className="chantier-tabs-wrapper" aria-label="Axes du chantier">
        <div className="chantier-tabs-container" ref={scrollContainerRef}>
          {programme.length > 0 && (
            <>
              {programme.map((a) => (
                <button
                  key={a.numero}
                  type="button"
                  data-axe-numero={a.numero}
                  data-active={a.numero === axeActif}
                  className={`chantier-tab${a.numero === axeActif ? ' chantier-tab--actif' : ''}`}
                  onClick={() => setAxeActif(a.numero)}
                  title={a.titre}
                  aria-current={a.numero === axeActif ? 'true' : undefined}
                >
                  <span className="chantier-tab__label">Axe {a.numero}</span>
                  {a.fiches.length > 0 && (
                    <span className="chantier-tab__badge" aria-label={`${a.fiches.length} fiches`}>
                      {a.fiches.length}
                    </span>
                  )}
                </button>
              ))}
              {problemes.length > 0 && <div className="chantier-tabs-divider" aria-hidden="true" />}
            </>
          )}
          {problemes.map((a) => (
            <button
              key={a.numero}
              type="button"
              data-axe-numero={a.numero}
              data-active={a.numero === axeActif}
              className={`chantier-tab${a.numero === axeActif ? ' chantier-tab--actif' : ''}`}
              onClick={() => setAxeActif(a.numero)}
              title={a.titre}
              aria-current={a.numero === axeActif ? 'true' : undefined}
            >
              <span className="chantier-tab__label">Problèmes {a.numero - 99}</span>
              {a.fiches.length > 0 && (
                <span className="chantier-tab__badge" aria-label={`${a.fiches.length} fiches`}>
                  {a.fiches.length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="chantier-tabs-fade" aria-hidden="true" />
      </nav>

      {axe && (
        <section className="chantier-liste">
          {axe.fiches.map((f) => (
            <CarteFiche key={f.id} fiche={f} identiteValide={valide} />
          ))}
        </section>
      )}
    </div>
  )
}
