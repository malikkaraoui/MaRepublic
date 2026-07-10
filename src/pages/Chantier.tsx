// Page Chantier, le débat ouvert.
//
// Affiche les fiches-mesures brouillon (chantier/axe-*-fiches.md) et ouvre
// la réaction citoyenne : pouce haut/bas, commentaire, contre-proposition.
// Rien ici n'est une position figée du mouvement : c'est la matière à débat.

import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Markdown from '../components/Markdown'
import { axesFiches, type Fiche, type StatutFiche } from '../lib/fiches'
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

// Prompt de mission : le citoyen le colle dans son IA (Claude, ChatGPT,
// Gemini...) qui lit la fiche et réagit via l'API, signée d'une référence
// unique. Traçable au dépouillement, zéro friction pour l'humain.
function promptMission(fiche: Fiche): string {
  const ref = `ref_${crypto.randomUUID().slice(0, 8)}`
  return [
    `Mission citoyenne MaRepublic (référence ${ref}).`,
    `1. Lis le mode d'emploi machine : https://marepublique-2027.web.app/llms.txt`,
    `2. Lis la fiche "${fiche.titre}" (id ${fiche.id}) dans https://marepublique-2027.web.app/api/fiches.json`,
    `3. Explique-moi la fiche simplement, discute-la avec moi, puis demande-moi : pour, contre, commentaire ou alternative ?`,
    `4. Envoie MA décision via l'API (canal "api"), signée agent:"<ton-modele>/${ref}", avec mon pseudo et mon email que je vais te donner.`,
    `Important : c'est MOI qui décide, tu prépares et tu transmets.`,
  ].join('\n')
}

function CarteFiche({ fiche, identiteValide }: { fiche: Fiche; identiteValide: boolean }) {
  const { reaction, voter, commenter } = useReaction(fiche.id)
  const [ouvert, setOuvert] = useState(false)
  const [mode, setMode] = useState<'commentaire' | 'alternative'>('commentaire')
  const [texte, setTexte] = useState('')
  const [copie, setCopie] = useState(false)

  const confierIA = () => {
    void navigator.clipboard.writeText(promptMission(fiche)).then(() => {
      setCopie(true)
      window.setTimeout(() => setCopie(false), 2500)
    })
  }

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
          <button
            type="button"
            className="fiche__mode-btn"
            onClick={confierIA}
            title="Copier une mission à coller dans votre assistant IA (Claude, ChatGPT, Gemini...)"
          >
            <span aria-hidden="true">🤖</span> {copie ? 'Mission copiée !' : 'Confier à mon IA'}
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

// Ordre d'affichage et libellés des statuts (couleur + texte, jamais la
// couleur seule : chaque pastille est doublée de son libellé et du compte).
const STATUTS_UI: { cle: StatutFiche; libelle: string }[] = [
  { cle: 'valide', libelle: 'Finalisées' },
  { cle: 'discussion', libelle: 'En discussion' },
  { cle: 'debat', libelle: 'En débat ouvert' },
  { cle: 'rejete', libelle: 'Rejetées' },
]

function compter(fiches: Fiche[]): Record<StatutFiche, number> {
  const c: Record<StatutFiche, number> = { valide: 0, discussion: 0, debat: 0, rejete: 0 }
  for (const f of fiches) c[f.statut] += 1
  return c
}

// Sommaire du chantier : tableau de bord + tous les sujets, en clair.
function Sommaire() {
  const programme = axesFiches.filter((a) => a.numero <= 5)
  const problemes = axesFiches.filter((a) => a.numero > 5)
  const global = compter(axesFiches.flatMap((a) => a.fiches))
  const total = axesFiches.reduce((n, a) => n + a.fiches.length, 0)

  const carte = (a: (typeof axesFiches)[number]) => {
    const c = compter(a.fiches)
    return (
      <Link key={a.numero} to={`/chantier/${slugDeNumero(a.numero)}`} className="sommaire__carte">
        <span className="sommaire__theme">
          {a.numero <= 5 ? `Axe ${a.numero} : ${a.theme}` : a.theme}
        </span>
        <span
          className="avancement"
          role="img"
          aria-label={STATUTS_UI.filter((s) => c[s.cle] > 0)
            .map((s) => `${c[s.cle]} ${s.libelle.toLowerCase()}`)
            .join(', ')}
        >
          {STATUTS_UI.filter((s) => c[s.cle] > 0).map((s) => (
            <span
              key={s.cle}
              className={`avancement__seg avancement__seg--${s.cle}`}
              style={{ flexGrow: c[s.cle] }}
            />
          ))}
        </span>
        <span className="sommaire__compte">
          {a.fiches.length} fiches
          {c.valide > 0 && ` · ${c.valide} finalisée${c.valide > 1 ? 's' : ''}`}
          {c.discussion > 0 && ` · ${c.discussion} en discussion`}
        </span>
      </Link>
    )
  }

  return (
    <div className="sommaire">
      <section aria-labelledby="sommaire-dash">
        <h2 id="sommaire-dash">Où en est le chantier</h2>
        <div className="dash" role="list">
          <div className="dash__tuile" role="listitem">
            <span className="dash__nombre">{total}</span>
            <span className="dash__libelle">fiches au total</span>
          </div>
          {STATUTS_UI.map((s) => (
            <div key={s.cle} className="dash__tuile" role="listitem">
              <span className="dash__nombre">
                <span className={`dash__point dash__point--${s.cle}`} aria-hidden="true" />
                {global[s.cle]}
              </span>
              <span className="dash__libelle">{s.libelle}</span>
            </div>
          ))}
        </div>
      </section>

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

  // Filtres façon issues GitHub : par statut + recherche plein texte.
  const [filtreStatut, setFiltreStatut] = useState<StatutFiche | 'tous'>('tous')
  const [recherche, setRecherche] = useState('')

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
        <>
          <div className="filtres" role="search">
            <input
              type="search"
              className="filtres__recherche"
              placeholder="Filtrer les fiches (mot-clé...)"
              aria-label="Rechercher dans les fiches de ce sujet"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
            <div className="filtres__statuts">
              {(
                [
                  { cle: 'tous' as const, libelle: 'Toutes' },
                  ...STATUTS_UI.map((s) => ({ cle: s.cle, libelle: s.libelle })),
                ]
              ).map((s) => (
                <button
                  key={s.cle}
                  type="button"
                  className={`filtres__chip${filtreStatut === s.cle ? ' filtres__chip--actif' : ''}`}
                  onClick={() => setFiltreStatut(s.cle)}
                  aria-pressed={filtreStatut === s.cle}
                >
                  {s.libelle}
                </button>
              ))}
            </div>
          </div>
          <section className="chantier-liste">
            {axe.fiches
              .filter((f) => filtreStatut === 'tous' || f.statut === filtreStatut)
              .filter(
                (f) =>
                  !recherche.trim() ||
                  (f.titre + ' ' + f.corps).toLowerCase().includes(recherche.trim().toLowerCase()),
              )
              .map((f) => (
                <CarteFiche key={f.id} fiche={f} identiteValide={valide} />
              ))}
          </section>
        </>
      )}
        </>
      )}
    </div>
  )
}
