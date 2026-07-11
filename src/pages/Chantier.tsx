// Page Chantier, le débat ouvert.
//
// Affiche les fiches-mesures brouillon (chantier/axe-*-fiches.md) et ouvre
// la réaction citoyenne : pouce haut/bas, commentaire, contre-proposition.
// Rien ici n'est une position figée du mouvement : c'est la matière à débat.

import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Markdown from '../components/Markdown'
import { axesFiches, type Fiche, type StatutFiche } from '../lib/fiches'
import { useReaction, type VoteChoix } from '../lib/reactions'
import { chargerCompteurs, type Compteurs } from '../lib/compteurs'
import { identiteCourante, useIdentite } from '../lib/identite'
import { envoyerAvis } from '../lib/avis'
import { envoyerLien, seDeconnecter, useUtilisateur } from '../lib/auth'

// Bandeau d'identité : pseudo + email exigés avant toute réaction.
// Saisis une fois, conservés sur l'appareil ; l'email n'est jamais affiché
// publiquement (collection Firestore fermée en lecture).
function BandeauIdentite({ connecte }: { connecte: boolean }) {
  const { identite, definir } = useIdentite()
  const [envoi, setEnvoi] = useState<'' | 'encours' | 'envoye' | 'erreur'>('')

  const demanderLien = async () => {
    if (!/.+@.+\..+/.test(identite.email.trim())) {
      setEnvoi('erreur')
      return
    }
    setEnvoi('encours')
    const ok = await envoyerLien(identite.email)
    setEnvoi(ok ? 'envoye' : 'erreur')
  }

  return (
    <section
      className={`identite${connecte ? ' identite--ok' : ''}`}
      aria-label="Votre identité pour réagir"
    >
      {connecte ? (
        <p className="identite__intro">
          ✓ Email vérifié. Vous réagissez en tant que{' '}
          <strong>{identite.pseudo || 'anonyme (choisissez un pseudo)'}</strong>.{' '}
          <button type="button" className="identite__lien" onClick={() => void seDeconnecter()}>
            Se déconnecter
          </button>
        </p>
      ) : (
        <p className="identite__intro">
          Pour voter ou commenter : pseudo + email. Vous recevrez un{' '}
          <strong>lien de connexion</strong> (aucun mot de passe, valable 24 h
          sur cet appareil). L'email n'est jamais affiché publiquement.
        </p>
      )}
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
        {!connecte && (
          <>
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
            <button
              type="button"
              className="identite__bouton"
              onClick={() => void demanderLien()}
              disabled={envoi === 'encours'}
            >
              {envoi === 'encours' ? 'Envoi...' : 'Recevoir mon lien'}
            </button>
          </>
        )}
      </div>
      {envoi === 'envoye' && !connecte && (
        <p className="identite__info" aria-live="polite">
          📬 Lien envoyé ! Ouvrez l'email et cliquez le lien : vous serez
          connecté. Pensez à vérifier vos indésirables (spam), il s'y glisse
          parfois.
        </p>
      )}
      {envoi === 'erreur' && (
        <p className="identite__info identite__info--erreur" aria-live="polite">
          L'envoi a échoué. Vérifiez l'adresse et réessayez.
        </p>
      )}
    </section>
  )
}

// Prompt de mission : le citoyen le colle dans son IA (Claude, ChatGPT,
// Gemini...) qui lit la fiche et réagit via l'API, signée d'une référence
// unique. Traçable au dépouillement, zéro friction pour l'humain.
function promptMission(fiche: Fiche): string {
  const ref = `ref_${crypto.randomUUID().slice(0, 8)}`
  const { pseudo, email } = identiteCourante()
  const identiteConnue = pseudo.trim().length >= 2 && /.+@.+\..+/.test(email)
  return [
    `Mission citoyenne MaRepublic (référence ${ref}).`,
    `1. Lis le mode d'emploi machine : https://marepublique-2027.web.app/llms.txt`,
    `2. Lis la fiche "${fiche.titre}" (id ${fiche.id}) dans https://marepublique-2027.web.app/api/fiches.json`,
    `3. Explique-moi la fiche simplement, discute-la avec moi, puis demande-moi mon vote : si la fiche propose des pistes lettrées, quelle piste je choisis (vote "piste-a", "piste-b"...) ; sinon pour ou contre ; et un commentaire ou une alternative si j'en ai.`,
    identiteConnue
      ? `4. Envoie MA décision via l'API (canal "api"), signée agent:"<ton-modele>/${ref}", avec mon pseudo "${pseudo.trim()}" et mon email "${email.trim()}" (je consens à cette transmission en mon nom).`
      : `4. Envoie MA décision via l'API (canal "api"), signée agent:"<ton-modele>/${ref}", avec mon pseudo et mon email que je vais te donner.`,
    `Important : c'est MOI qui décide, tu prépares et tu transmets.`,
  ].join('\n')
}

/** Libellé humain d'un choix de vote (« piste-a » → « Piste A »). */
function libelleChoix(choix: string): string {
  const piste = choix.match(/^piste-([a-e])$/)?.[1]
  return piste ? `Piste ${piste.toUpperCase()}` : choix
}

// Hook module-level : compteurs publics chargés une fois pour toute la page.
function useCompteurs(): Compteurs | null {
  const [compteurs, setCompteurs] = useState<Compteurs | null>(null)
  useEffect(() => {
    let actif = true
    void chargerCompteurs().then((c) => {
      if (actif) setCompteurs(c)
    })
    return () => {
      actif = false
    }
  }, [])
  return compteurs
}

function CarteFiche({
  fiche,
  identiteValide,
  compteurs,
}: {
  fiche: Fiche
  identiteValide: boolean
  compteurs: Compteurs | null
}) {
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

  // Identité manquante : on guide vers le bandeau au lieu d'un bouton muet.
  const rappelerIdentite = () => {
    const bandeau = document.querySelector('.identite')
    if (bandeau) {
      bandeau.scrollIntoView({ behavior: 'smooth', block: 'center' })
      bandeau.classList.add('identite--alerte')
      window.setTimeout(() => bandeau.classList.remove('identite--alerte'), 2000)
    }
  }

  // Vote : bascule locale + envoi Firestore (sauf annulation d'un vote).
  const voterEtEnvoyer = (v: VoteChoix) => {
    if (!identiteValide) {
      rappelerIdentite()
      return
    }
    const annulation = reaction.vote === v
    voter(annulation ? null : v)
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

  // Une fois le vote posé, on masque le camp opposé : voter « pour » (ou une
  // piste) fait disparaître « contre », et inversement. Le bouton du choix
  // retenu reste affiché et actif ; le recliquer annule le vote et fait
  // réapparaître les deux camps (mécanique d'annulation de voterEtEnvoyer).
  const aChoisiAccord = reaction.vote === 'pour' || Boolean(reaction.vote?.startsWith('piste-'))
  const aChoisiContre = reaction.vote === 'contre'

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
        {!aChoisiContre &&
          fiche.pistes.map(({ lettre, libelle }) => {
            const choix = `piste-${lettre.toLowerCase()}` as VoteChoix
            const actif = reaction.vote === choix
            return (
              <button
                key={choix}
                type="button"
                className={`vote vote--piste${actif ? ' vote--actif' : ''}`}
                onClick={() => voterEtEnvoyer(choix)}
                aria-pressed={actif}
                title={
                  identiteValide
                    ? actif
                      ? `Piste ${lettre} retenue : recliquez pour changer d'avis`
                      : libelle
                        ? `Je choisis la piste ${lettre} : ${libelle}`
                        : `Je choisis la piste ${lettre}`
                    : 'Renseignez pseudo et email en haut de page'
                }
              >
                <span aria-hidden="true">◈</span> Piste {lettre}
              </button>
            )
          })}
        {!aChoisiContre && (
          <button
            type="button"
            className={`vote vote--pour${reaction.vote === 'pour' ? ' vote--actif' : ''}`}
            onClick={() => voterEtEnvoyer('pour')}
            aria-pressed={reaction.vote === 'pour'}
            title={
              identiteValide
                ? reaction.vote === 'pour'
                  ? "Vote « pour » retenu : recliquez pour changer d'avis"
                  : fiche.pistes.length
                    ? 'Pour, sans préférence entre les pistes'
                    : 'Pour cette mesure'
                : 'Renseignez pseudo et email en haut de page'
            }
          >
            <span aria-hidden="true">✓</span> Pour
          </button>
        )}
        {!aChoisiAccord && (
          <button
            type="button"
            className={`vote vote--contre${aChoisiContre ? ' vote--actif' : ''}`}
            onClick={() => voterEtEnvoyer('contre')}
            aria-pressed={aChoisiContre}
            title={
              identiteValide
                ? aChoisiContre
                  ? "Vote « contre » retenu : recliquez pour changer d'avis"
                  : 'Contre cette mesure'
                : 'Renseignez pseudo et email en haut de page'
            }
          >
            <span aria-hidden="true">✕</span> Contre
          </button>
        )}
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

      <p className="fiche__confirmation" aria-live="polite">
        {reaction.vote
          ? `✓ Votre vote « ${libelleChoix(reaction.vote)} » est enregistré et transmis.`
          : ''}
      </p>

      {(() => {
        const compteur = compteurs?.parFiche[fiche.id]
        if (!compteur?.total) return null
        // Sens de la fiche : les accords (pour + toutes les pistes, qui sont
        // des façons de dire oui à une hypothèse) contre les rejets (contre).
        const accords = Object.entries(compteur.parChoix)
          .filter(([k]) => k === 'pour' || k.startsWith('piste-'))
          .reduce((n, [, v]) => n + v, 0)
        const rejets = compteur.parChoix['contre'] ?? 0
        const exprimes = accords + rejets
        const pctAccord = exprimes ? Math.round((accords / exprimes) * 100) : 50
        const sens =
          !exprimes || accords === rejets
            ? 'au coude à coude'
            : accords > rejets
              ? 'penche plutôt pour'
              : 'penche plutôt contre'
        const detail = Object.entries(compteur.parChoix)
          .filter(([, n]) => n > 0)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([choix, n]) => `${libelleChoix(choix)} ${n}`)
          .join(' · ')
        return (
          <div className="fiche__tendance">
            <p className="fiche__compteur">
              🗳️ {compteur.total} votant{compteur.total > 1 ? 's' : ''}
              {detail ? ` : ${detail}` : ''}
            </p>
            {exprimes > 0 && (
              <>
                <div
                  className="jauge"
                  role="img"
                  aria-label={`Tendance : ${accords} pour, ${rejets} contre. La fiche ${sens}.`}
                >
                  <div
                    className="jauge__pour"
                    style={{ width: `${pctAccord}%` }}
                  />
                  <div
                    className="jauge__contre"
                    style={{ width: `${100 - pctAccord}%` }}
                  />
                </div>
                <p className="jauge__legende">
                  <span className="jauge__part jauge__part--pour">Pour {pctAccord}%</span>
                  <span className="jauge__sens">La fiche {sens}</span>
                  <span className="jauge__part jauge__part--contre">
                    Contre {100 - pctAccord}%
                  </span>
                </p>
              </>
            )}
          </div>
        )
      })()}

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
  const compteurs = useCompteurs()

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
          <div className="dash__tuile" role="listitem">
            <span className="dash__nombre">🗳️ {compteurs?.totalVotants ?? '…'}</span>
            <span className="dash__libelle">
              votant{(compteurs?.totalVotants ?? 0) > 1 ? 's' : ''}
              {compteurs?.majDate
                ? ` (compté ${new Date(compteurs.majDate).toLocaleString('fr-FR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })})`
                : ''}
            </span>
          </div>
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
  const utilisateur = useUtilisateur()
  const { identite } = useIdentite()
  const compteursPage = useCompteurs()
  // Réagir exige un email PROUVÉ (connexion par lien) + un pseudo.
  const valide = Boolean(utilisateur) && identite.pseudo.trim().length >= 2

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

      <BandeauIdentite connecte={Boolean(utilisateur)} />

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
                <CarteFiche key={f.id} fiche={f} identiteValide={valide} compteurs={compteursPage} />
              ))}
          </section>
        </>
      )}
        </>
      )}
    </div>
  )
}
