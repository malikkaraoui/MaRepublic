// Aiguilleur citoyen : 3 questions courtes (temps, sujet, motivation) puis UNE
// action principale + 2 secondaires, calculées par une matrice déterministe.
// Zéro identité, profil gardé en local. Spec : docs/superpowers/specs/
// 2026-07-11-participer-aiguilleur-design.md

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { axesFiches } from '../lib/fiches'
import { familleDeOnglet, FAMILLES, famille as familleParSlug } from '../lib/familles'
import {
  useProfil,
  type Temps,
  type Niveau,
  type Motivation,
  type ProfilParticipation,
} from '../lib/profil'

// ─── Libellés des choix ──────────────────────────────────────────────────────
const TEMPS: { cle: Temps; titre: string; sous: string }[] = [
  { cle: 'rapide', titre: '⚡ 5 minutes', sous: 'Un geste rapide' },
  { cle: 'approfondi', titre: '🔧 ~30 minutes', sous: 'De quoi creuser un sujet' },
  { cle: 'engage', titre: '🌱 Sur la durée', sous: 'Un engagement suivi' },
]

const NIVEAUX: { cle: Niveau; titre: string }[] = [
  { cle: 'expert', titre: "Je m'y connais" },
  { cle: 'concerne', titre: 'Je suis concerné·e' },
  { cle: 'curieux', titre: 'Je découvre' },
]

const MOTIVATIONS: { cle: Motivation; titre: string }[] = [
  { cle: 'juger', titre: '✓ Juger, trancher' },
  { cle: 'ameliorer', titre: '🔧 Repérer les failles' },
  { cle: 'proposer', titre: '💡 Proposer, apporter mon terrain' },
  { cle: 'diffuser', titre: '📣 Faire connaître' },
]

const libelleMotivation = (m: Motivation) => MOTIVATIONS.find((x) => x.cle === m)!.titre
const libelleTemps = (t: Temps) => TEMPS.find((x) => x.cle === t)!.titre
const libelleNiveau = (n: Niveau) => NIVEAUX.find((x) => x.cle === n)!.titre

// ─── Comptes de fiches par famille (dynamiques, jamais figés) ────────────────
function comptesFamille(slug: string): { total: number; debat: number } {
  let total = 0
  let debat = 0
  for (const axe of axesFiches) {
    if (familleDeOnglet(axe.numero) !== slug) continue
    for (const f of axe.fiches) {
      total += 1
      if (f.statut === 'debat') debat += 1
    }
  }
  return { total, debat }
}

// ─── La matrice : profil -> action principale + 2 secondaires ────────────────
interface Action {
  titre: string
  sous: string
  to: string
}

function actionPourVerbe(verbe: Motivation, slug: string, temps: Temps): Action {
  const fam = familleParSlug(slug)
  const nom = fam ? fam.libelle : 'ce sujet'
  const { total, debat } = comptesFamille(slug)
  const cible = debat > 0 ? debat : total
  const enDebat = debat > 0
  const to = `/chantier?famille=${slug}`
  const dose =
    temps === 'rapide'
      ? 'En cinq minutes.'
      : temps === 'approfondi'
        ? 'Prenez le temps qu\'il faut, une trentaine de minutes suffit.'
        : 'Sur la durée : jugez, suivez, revenez.'

  switch (verbe) {
    case 'juger':
      return {
        titre: `Voter sur ${cible} fiche${cible > 1 ? 's' : ''} ${nom}${enDebat ? ' en débat' : ''}`,
        sous: `Pour ou contre, chaque voix pèse dans le tri. ${dose}`,
        to,
      }
    case 'ameliorer':
      return {
        titre: `Repérer les failles des fiches ${nom}`,
        sous: `Pointez ce qui cloche, un commentaire fait avancer la fiche. ${dose}`,
        to,
      }
    case 'proposer':
      return {
        titre: `Proposer une alternative sur ${nom}`,
        sous: `Votre terrain vaut mieux qu'une théorie : dites ce que vous feriez. ${dose}`,
        to,
      }
    case 'diffuser':
      return {
        titre: `Faire connaître les fiches ${nom}`,
        sous: `Confiez une fiche à votre IA ou partagez-la autour de vous. ${dose}`,
        to,
      }
  }
}

// Ordre de priorité des verbes selon le niveau : un expert veut proposer, un
// curieux veut d'abord juger/découvrir. Ne change jamais le verbe principal
// (dicté par la motivation), seulement l'ordre des secondaires.
function ordreVerbes(niveau: Niveau): Motivation[] {
  const base: Motivation[] = ['juger', 'ameliorer', 'proposer', 'diffuser']
  if (niveau === 'expert') return ['proposer', ...base.filter((v) => v !== 'proposer')]
  if (niveau === 'curieux') return ['juger', ...base.filter((v) => v !== 'juger')]
  return base
}

function recommandation(p: ProfilParticipation) {
  const principale = actionPourVerbe(p.motivation, p.famille, p.temps)
  const secondairesVerbes = ordreVerbes(p.niveau)
    .filter((v) => v !== p.motivation)
    .slice(0, 2)
  const secondaires = secondairesVerbes.map((v) => actionPourVerbe(v, p.famille, p.temps))
  return { principale, secondaires }
}

// ─── Écran de résultat ───────────────────────────────────────────────────────
function Resultat({
  profil,
  onRecommencer,
}: {
  profil: ProfilParticipation
  onRecommencer: () => void
}) {
  const { basculerAtelier } = useProfil()
  const { principale, secondaires } = recommandation(profil)
  const fam = familleParSlug(profil.famille)
  const interesse = profil.ateliersInteresse.includes(profil.famille)

  return (
    <div className="page">
      <section className="page-intro">
        <p className="participer__recap">
          Vous : {libelleNiveau(profil.niveau).toLowerCase()} en{' '}
          <strong>
            {fam?.emoji} {fam?.libelle}
          </strong>
          , {libelleTemps(profil.temps).toLowerCase()}, envie de{' '}
          {libelleMotivation(profil.motivation).toLowerCase().replace(/^[^ ]+ /, '')}.
        </p>
        <h1>Votre meilleure façon d'aider, maintenant</h1>
      </section>

      <div className="participer__resultat">
        <Link to={principale.to} className="participer__principale">
          <span className="participer__principale-titre">{principale.titre}</span>
          <span className="participer__principale-sous">{principale.sous}</span>
          <span className="participer__principale-fleche" aria-hidden="true">
            →
          </span>
        </Link>

        <p className="participer__aussi">Vous pouvez aussi :</p>
        <ul className="participer__secondaires">
          {secondaires.map((a) => (
            <li key={a.to + a.titre}>
              <Link to={a.to} className="participer__secondaire">
                <span className="participer__secondaire-titre">{a.titre}</span>
                <span className="participer__secondaire-sous">{a.sous}</span>
              </Link>
            </li>
          ))}
        </ul>

        {profil.temps === 'engage' && fam && (
          <div className="participer__atelier">
            <span>
              🌱 Atelier {fam.libelle} — <em>bientôt</em>. Un espace pour travailler
              le sujet à plusieurs, dans la durée.
            </span>
            <button
              type="button"
              className={`participer__interet${interesse ? ' participer__interet--actif' : ''}`}
              onClick={() => basculerAtelier(profil.famille)}
              aria-pressed={interesse}
            >
              {interesse ? '✓ Ça vous intéresse' : 'Ça m\'intéresse'}
            </button>
          </div>
        )}

        <button type="button" className="participer__recommencer" onClick={onRecommencer}>
          Refaire le questionnaire
        </button>
      </div>
    </div>
  )
}

// ─── Le wizard (3 écrans) ────────────────────────────────────────────────────
export default function Participer() {
  const { profil, enregistrer, effacer } = useProfil()
  const [etape, setEtape] = useState(0)
  const [temps, setTemps] = useState<Temps | null>(null)
  const [slug, setSlug] = useState<string | null>(null)
  const [niveau, setNiveau] = useState<Niveau | null>(null)

  // Dès qu'un profil existe (fraîchement rempli ou relu au retour), on montre le
  // résultat. « Refaire » efface le profil ET réinitialise le wizard.
  if (profil) {
    return (
      <Resultat
        profil={profil}
        onRecommencer={() => {
          effacer()
          setEtape(0)
          setTemps(null)
          setSlug(null)
          setNiveau(null)
        }}
      />
    )
  }

  const choisirTemps = (t: Temps) => {
    setTemps(t)
    setEtape(1)
  }
  const choisirNiveau = (n: Niveau) => {
    setNiveau(n)
    setEtape(2)
  }
  const choisirMotivation = (m: Motivation) => {
    if (!temps || !slug || !niveau) return
    enregistrer({ temps, famille: slug, niveau, motivation: m })
  }

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Participer</h1>
        <p>
          Trois questions, trente secondes. On vous montre ensuite la façon d'aider
          qui vous ressemble. Pas de compte, rien à installer.
        </p>
      </section>

      <div className="wizard" aria-live="polite">
        <p className="wizard__progression">Étape {etape + 1} sur 3</p>

        {etape === 0 && (
          <fieldset className="wizard__etape">
            <legend className="wizard__question">Combien de temps avez-vous, là ?</legend>
            <div className="wizard__options">
              {TEMPS.map((t) => (
                <button
                  key={t.cle}
                  type="button"
                  className="wizard__option"
                  onClick={() => choisirTemps(t.cle)}
                >
                  <span className="wizard__option-titre">{t.titre}</span>
                  <span className="wizard__option-sous">{t.sous}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {etape === 1 && (
          <fieldset className="wizard__etape">
            <legend className="wizard__question">Quel sujet vous parle ?</legend>
            <div className="wizard__familles">
              {FAMILLES.map((f) => (
                <button
                  key={f.slug}
                  type="button"
                  className={`wizard__famille${slug === f.slug ? ' wizard__famille--actif' : ''}`}
                  onClick={() => setSlug(f.slug)}
                  aria-pressed={slug === f.slug}
                >
                  <span aria-hidden="true">{f.emoji}</span> {f.libelle}
                </button>
              ))}
            </div>
            {slug && (
              <div className="wizard__niveau">
                <p className="wizard__question wizard__question--sous">
                  Sur ce sujet, vous êtes plutôt…
                </p>
                <div className="wizard__options wizard__options--ligne">
                  {NIVEAUX.map((n) => (
                    <button
                      key={n.cle}
                      type="button"
                      className="wizard__option wizard__option--compact"
                      onClick={() => choisirNiveau(n.cle)}
                    >
                      {n.titre}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              type="button"
              className="wizard__retour"
              onClick={() => setEtape(0)}
            >
              ← Retour
            </button>
          </fieldset>
        )}

        {etape === 2 && (
          <fieldset className="wizard__etape">
            <legend className="wizard__question">Vous préférez…</legend>
            <div className="wizard__options">
              {MOTIVATIONS.map((m) => (
                <button
                  key={m.cle}
                  type="button"
                  className="wizard__option"
                  onClick={() => choisirMotivation(m.cle)}
                >
                  <span className="wizard__option-titre">{m.titre}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="wizard__retour"
              onClick={() => setEtape(1)}
            >
              ← Retour
            </button>
          </fieldset>
        )}
      </div>
    </div>
  )
}
