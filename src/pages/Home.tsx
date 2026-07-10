// Page d'accueil.
//
// Structure : hero « Constatons / Proposons / Ferons » → principes non
// négociables → les cinq axes → méthode (les trois phases). Tout renvoie
// vers le document fondateur ou les pages d'axes pour le détail.

import { Link } from 'react-router-dom'
import { axes } from '../data/axes'

const principes = [
  {
    titre: 'Transparence totale',
    texte:
      "Chaque euro reçu et dépensé est public. Chaque vote de nos élus est justifié publiquement. Chaque décision interne est documentée et accessible.",
  },
  {
    titre: 'Obligation de résultat',
    texte:
      "Nos élus s'engagent sur des objectifs mesurables. Un bilan annuel public est réalisé par un tiers indépendant. En cas de manquement, le mouvement peut retirer son investiture.",
  },
  {
    titre: 'Non-cumul strict',
    texte:
      "Un mandat, une mission. Aucun cumul de mandats ni d'indemnités. Limitation à deux mandats consécutifs maximum.",
  },
  {
    titre: 'Pas de professionnalisation',
    texte:
      'Nos candidats viennent du terrain : soignants, enseignants, entrepreneurs, agriculteurs, ingénieurs, artisans. Pas de carriéristes politiques.',
  },
  {
    titre: 'Indépendance financière',
    texte:
      "Aucun financement de lobbies ou de groupes d'intérêt. Financement exclusivement par dons de personnes physiques et aide publique. Comptes en open data.",
  },
  {
    titre: 'Pragmatisme avant idéologie',
    texte:
      'Chaque proposition est évaluée sur ses effets concrets, pas sur son alignement avec un clivage gauche/droite. Ce qui marche ailleurs et qui est adaptable, on le prend.',
  },
]

const phases = [
  {
    label: 'Phase 1, 2026',
    titre: 'Structuration',
    texte:
      "Formalisation juridique, noyau fondateur de 50 à 200 citoyens issus du terrain, rédaction des documents par axe, mise en place de l'infrastructure de transparence.",
  },
  {
    label: 'Phase 2, 2026-2028',
    titre: 'Ancrage local',
    texte:
      "Candidats aux élections municipales et locales. Démonstration par l'action : des résultats mesurables là où le mouvement est présent. La preuve, pas la promesse.",
  },
  {
    label: 'Phase 3, 2028 et au-delà',
    titre: 'Échelle nationale',
    texte:
      "Dépendra des résultats précédents. On ne prétend pas gouverner la France tant qu'on n'a pas prouvé qu'on peut gérer une commune correctement.",
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">Un mouvement politique sans étiquette</p>
          <h1 className="hero__title">
            Ce que nous <span className="hero__verb">constatons</span>.
            <br />
            Ce que nous <span className="hero__verb">proposons</span>.
            <br />
            Ce que nous <span className="hero__verb">ferons</span>.
          </h1>
          <p className="hero__lede">
            Fondé sur les actes, pas sur les promesses. Pas de slogan, pas de
            logo, pas de couleur officielle. Pas de nom, parce qu'on ne met pas
            d'étiquette sur la voix du peuple.
          </p>
          <div className="hero__actions">
            <Link to="/fondateur" className="button button--primary">
              Lire le document fondateur
            </Link>
            <Link to="/programme" className="button button--ghost">
              Découvrir le programme
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section__head">
            <p className="section__kicker">Nos principes non négociables</p>
            <h2 className="section__title">
              Pas de valeurs abstraites. Des règles de fonctionnement
              contrôlables.
            </h2>
          </header>
          <div className="grid grid--principes">
            {principes.map((p) => (
              <article key={p.titre} className="card">
                <h3 className="card__title">{p.titre}</h3>
                <p className="card__text">{p.texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__head">
            <p className="section__kicker">Ce que nous proposons</p>
            <h2 className="section__title">Cinq axes de travail concrets</h2>
            <p className="section__intro">
              Chaque axe fera l'objet d'un document détaillé avec chiffrage,
              calendrier et indicateurs de suivi. Une direction, pas une
              promesse.
            </p>
          </header>
          <ol className="axes-list">
            {axes.map((axe) => (
              <li key={axe.slug} className="axe-row">
                <Link to={`/programme/${axe.slug}`} className="axe-row__link">
                  <span className="axe-row__num">
                    {String(axe.numero).padStart(2, '0')}
                  </span>
                  <span className="axe-row__body">
                    <span className="axe-row__title">{axe.titre}</span>
                    <span className="axe-row__desc">{axe.accroche}</span>
                  </span>
                  <span className="axe-row__chevron" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <header className="section__head">
            <p className="section__kicker">Méthode</p>
            <h2 className="section__title">
              On identifie, on propose, on teste, on mesure, on ajuste.
            </h2>
            <p className="section__intro">
              Pas de plan sur trente ans. Un fonctionnement itératif, prouvé
              localement avant d'être généralisé.
            </p>
          </header>
          <div className="grid grid--phases">
            {phases.map((phase) => (
              <article key={phase.label} className="phase">
                <p className="phase__label">{phase.label}</p>
                <h3 className="phase__title">{phase.titre}</h3>
                <p className="phase__text">{phase.texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <blockquote className="pull-quote">
            On ne demande pas aux Français de nous croire. On leur demande de
            nous juger sur pièces.
          </blockquote>
        </div>
      </section>
    </>
  )
}
