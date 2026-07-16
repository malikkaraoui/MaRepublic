// Sommaire latéral des longs documents (feuille de route, fondateur).
//
// Extrait les titres `## ` du Markdown source et fabrique les mêmes ancres
// que rehype-slug (github-slugger), donc chaque entrée pointe sur le titre
// rendu. Sur desktop il est sticky dans la marge gauche, avec surlignage de
// la section en cours de lecture (IntersectionObserver).

import { useEffect, useMemo, useState } from 'react'
import GithubSlugger from 'github-slugger'

interface Entree {
  id: string
  titre: string
}

/** Retire la syntaxe Markdown courante d'un intitulé de titre. */
function nettoyer(titre: string): string {
  return titre
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim()
}

export default function SommaireDoc({ markdown }: { markdown: string }) {
  const entrees = useMemo<Entree[]>(() => {
    const slugger = new GithubSlugger()
    const out: Entree[] = []
    for (const ligne of markdown.split('\n')) {
      const m = ligne.match(/^##\s+(.+)$/)
      if (!m) continue
      const titre = nettoyer(m[1])
      out.push({ id: slugger.slug(titre), titre })
    }
    return out
  }, [markdown])

  const [actif, setActif] = useState<string | null>(null)

  // Surligne la section visible : on suit les titres h2 rendus par Markdown.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || entrees.length === 0) return
    const titres = entrees
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => el !== null)
    if (titres.length === 0) return
    const obs = new IntersectionObserver(
      (observations) => {
        const visible = observations.find((o) => o.isIntersecting)
        if (visible) setActif(visible.target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    titres.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [entrees])

  if (entrees.length < 2) return null

  return (
    <nav className="sommaire-doc" aria-label="Sommaire du document">
      <p className="sommaire-doc__titre">Sommaire</p>
      <ul>
        {entrees.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              className={`sommaire-doc__lien${actif === e.id ? ' sommaire-doc__lien--actif' : ''}`}
            >
              {e.titre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
