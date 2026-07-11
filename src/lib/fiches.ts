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

/** Statut éditorial d'une fiche, porté par le markdown (ligne « Statut »). */
export type StatutFiche = 'debat' | 'discussion' | 'valide' | 'rejete'

const STATUTS: Record<string, StatutFiche> = {
  '⬜': 'debat',
  '🟧': 'discussion',
  '🟩': 'valide',
  '🟥': 'rejete',
}

export interface Piste {
  /** Lettre de la piste ("A", "B"...) : la valeur votable est `piste-a`. */
  lettre: string
  /** Début de l'intitulé, pour l'infobulle du bouton de vote. */
  libelle: string
}

export interface Fiche {
  /** Identifiant stable : "axe4-C1" (sert de clé aux votes/commentaires). */
  id: string
  /** Code court affiché : "C1". */
  code: string
  titre: string
  /** Corps markdown de la fiche (les puces Problème / Ça existe / etc.). */
  corps: string
  /** Avancement : en débat (défaut), en discussion, validé, rejeté. */
  statut: StatutFiche
  /** Pistes lettrées détectées dans le corps : le vote se fait par piste. */
  pistes: Piste[]
}

export interface AxeFiches {
  /** Numéro d'axe extrait du nom de fichier. */
  numero: number
  /** Titre du document ("Axe 4 : Souveraineté …"). */
  titre: string
  /** Thème court pour l'onglet ("Souveraineté", "Santé & hôpital"…). */
  theme: string
  fiches: Fiche[]
}

/**
 * Détecte les pistes lettrées d'une fiche (« **Piste A, 🇦🇹 Autriche...** »).
 * Quand une fiche propose plusieurs hypothèses, le vote se fait par piste
 * plutôt qu'en oui/non. Une seule lettre trouvée = pas un vrai choix,
 * on retombe sur pour/contre.
 */
function extrairePistes(corps: string): Piste[] {
  const vues = new Map<string, string>()
  for (const m of corps.matchAll(/\*\*Piste\s+([A-E])\b[\s,:.]*([^*]*)\*\*/g)) {
    const lettre = m[1]
    if (!vues.has(lettre)) {
      const libelle = m[2].replace(/\s+/g, ' ').trim().slice(0, 80)
      vues.set(lettre, libelle)
    }
  }
  const pistes = [...vues.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([lettre, libelle]) => ({ lettre, libelle }))
  return pistes.length >= 2 ? pistes : []
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
    const corps = raw.slice(debut, fin).trim()
    const emoji = corps.match(/\*\*Statut\s*:\*\*\s*(⬜|🟧|🟩|🟥)/)?.[1]
    fiches.push({
      id: `axe${numero}-${m[1]}`,
      code: m[1],
      titre: m[2].replace(/🔥/g, '').trim(),
      corps,
      statut: (emoji && STATUTS[emoji]) || 'debat',
      pistes: extrairePistes(corps),
    })
  })

  // Thème court pour l'onglet : on retire les préfixes "Axe N :" / "Problèmes :".
  let theme = titre
    .replace(/^Axe\s*\d+\s*:\s*/i, '')
    .replace(/^Problèmes\s*:\s*/i, '')
    .trim()
  // Les lots d'enquête terrain gardent un préfixe court et lisible.
  theme = theme.replace(/^Frictions vécues,\s*(.)/i, (_, c: string) => `Vécu : ${c.toUpperCase()}`)

  return { numero, titre, theme, fiches }
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
