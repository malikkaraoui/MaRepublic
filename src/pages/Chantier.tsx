// Page Chantier, le débat ouvert.
//
// Affiche les fiches-mesures brouillon (chantier/axe-*-fiches.md) et ouvre
// la réaction citoyenne : pouce haut/bas, commentaire, contre-proposition.
// Rien ici n'est une position figée du mouvement : c'est la matière à débat.

import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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

// L'onglet actif vit dans l'URL (/chantier/axe-4, /chantier/problemes-13) :
// chaque vue est partageable et le bouton retour du navigateur fonctionne.
const slugDeNumero = (n: number) => (n <= 5 ? `axe-${n}` : `problemes-${n - 100}`)

function numeroDeSlug(slug: string | undefined): number | undefined {
  const axe = slug?.match(/^axe-(\d+)$/)
  if (axe) return Number(axe[1])
  const pb = slug?.match(/^problemes-(\d+)$/)
  if (pb) return 100 + Number(pb[1])
  return undefined
}

// Sommaire du chantier : tous les axes et groupes de travail, en clair.
function Sommaire() {
  const programme = axesFiches.filter((a) => a.numero <= 5)
  const problemes = axesFiches.filter((a) => a.numero > 5)

  const carte = (a: (typeof axesFiches)[number]) => (
    <Link key={a.numero} to={`/chantier/${slugDeNumero(a.numero)}`} className="sommaire__carte">
      <span className="sommaire__theme">
        {a.numero <= 5 ? `Axe ${a.numero} : ${a.theme}` : a.theme}
      </span>
      <span className="sommaire__compte">{a.fiches.length} fiches</span>
    </Link>
  )

  return (
    <div className="sommaire">
      <section aria-labelledby="sommaire-programme">
        <h2 id="sommaire-programme">Le programme : 5 axes de travail</h2>
        <p className="sommaire__note">Les mesures que le mouvement propose, importées de pays où elles fonctionnent.</p>
        <div className="sommaire__grille">{programme.map(carte)}</div>
      </section>
      <section aria-labelledby="sommaire-problemes">
        <h2 id="sommaire-problemes">Les problèmes : {problemes.length} groupes de travail</h2>
        <p className="sommaire__note">
          Les problèmes réels de la France (2016-2026), documentés et sourcés, avec plusieurs pistes chacun : à vous de juger.
        </p>
        <div className="sommaire__grille">{problemes.map(carte)}</div>
      </section>
    </div>
  )
}

export default function Chantier() {
  const { onglet } = useParams()
  const navigate = useNavigate()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { valide } = useIdentite()

  const axeActif = numeroDeSlug(onglet) ?? 0
  const setAxeActif = (n: number) => navigate(`/chantier/${slugDeNumero(n)}`)

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

      {axeActif === 0 && <Sommaire />}

      {axeActif !== 0 && (
        <>
      <p className="chantier-retour">
        <Link to="/chantier">← Tous les sujets du chantier</Link>
      </p>

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
                  <span className="chantier-tab__label">
                    {a.numero}. {a.theme}
                  </span>
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
              <span className="chantier-tab__label">{a.theme}</span>
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
        </>
      )}
    </div>
  )
}
