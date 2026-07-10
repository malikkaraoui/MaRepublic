// Chargement et parsing des fiches-mesures du chantier.
//
// Les fichiers `chantier/axe-*-fiches.md` sont la source de vérité rédigée
// en ping-pong (voir la méthode dans chaque fichier). Cette lib les importe
// en brut via Vite et les découpe en fiches individuelles pour la page
// Chantier : chaque `### X1. Titre` devient une carte votable/commentable.

const files = import.meta.glob(
  ['../../chantier/axe-*-fiches.md', '../../chantier/problemes-*-fiches.md'],
  {
    query: '?raw',
    import: 'default',
    eager: true,
  },
) as Record<string, string>

export interface Fiche {
  /** Identifiant stable : "axe4-C1" (sert de clé aux votes/commentaires). */
  id: string
  /** Code court affiché : "C1". */
  code: string
  titre: string
  /** Corps markdown de la fiche (les puces Problème / Ça existe / etc.). */
  corps: string
}

export interface AxeFiches {
  /** Numéro d'axe extrait du nom de fichier. */
  numero: number
  /** Titre du document ("Axe 4 — Souveraineté …"). */
  titre: string
  fiches: Fiche[]
}

/** Découpe un document en fiches à partir des titres `### X1. …`. */
function parseDocument(numero: number, raw: string): AxeFiches {
  const titre =
    raw.match(/^#\s+(.+)$/m)?.[1].replace(/·.*$/, '').trim() ?? `Axe ${numero}`

  const fiches: Fiche[] = []
  const re = /^###\s+([A-Z]?\d+)\.\s+(.+)$/gm
  const matches = [...raw.matchAll(re)]

  matches.forEach((m, i) => {
    const debut = (m.index ?? 0) + m[0].length
    const fin = i + 1 < matches.length ? matches[i + 1].index : raw.length
    fiches.push({
      id: `axe${numero}-${m[1]}`,
      code: m[1],
      titre: m[2].replace(/🔥/g, '').trim(),
      corps: raw.slice(debut, fin).trim(),
    })
  })

  return { numero, titre, fiches }
}

export const axesFiches: AxeFiches[] = Object.entries(files)
  .map(([path, raw]) => {
    // Axes 1-5 = programme ; les lots « problèmes » sont numérotés à partir
    // de 100 pour se ranger après les axes dans les onglets.
    const axe = path.match(/axe-(\d)/)?.[1]
    const lot = path.match(/problemes-(\d+)/)?.[1]
    const numero = axe ? Number(axe) : 100 + Number(lot ?? 0)
    return parseDocument(numero, raw)
  })
  .sort((a, b) => a.numero - b.numero)
