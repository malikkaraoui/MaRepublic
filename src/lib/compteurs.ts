// Compteurs de votes publics.
//
// La collection `reactions` reste fermée en lecture (protection des
// empreintes). Les totaux, eux, sont publics : un agrégateur avec droits
// d'administration (scripts/maj-compteurs.mjs, lancé par GitHub Actions)
// écrit le document `compteurs/global`, seul document lisible par tous.
// Ce module le lit en REST (pas besoin du SDK) et le met en cache.

export interface CompteurFiche {
  /** Nombre de votants sur la fiche (1 personne = 1 vote). */
  total: number
  /** Détail par choix : pour, contre, piste-a... */
  parChoix: Record<string, number>
}

export interface Compteurs {
  parFiche: Record<string, CompteurFiche>
  /** Personnes distinctes ayant voté au moins une fois, tout le site. */
  totalVotants: number
  /** Date de la dernière agrégation (ISO), affichée pour l'honnêteté. */
  majDate: string | null
}

const VIDE: Compteurs = { parFiche: {}, totalVotants: 0, majDate: null }

let promesse: Promise<Compteurs> | null = null

/** Déplie une valeur Firestore REST (integerValue, mapValue...). */
function deplier(v: unknown): unknown {
  if (v === null || typeof v !== 'object') return v
  const o = v as Record<string, unknown>
  if ('integerValue' in o) return Number(o.integerValue)
  if ('doubleValue' in o) return Number(o.doubleValue)
  if ('stringValue' in o) return o.stringValue
  if ('timestampValue' in o) return o.timestampValue
  if ('mapValue' in o) {
    const fields = (o.mapValue as { fields?: Record<string, unknown> }).fields ?? {}
    return Object.fromEntries(Object.entries(fields).map(([k, x]) => [k, deplier(x)]))
  }
  return v
}

/** Charge (une fois) les compteurs publics. Ne lève jamais : vide si absent. */
export function chargerCompteurs(): Promise<Compteurs> {
  if (promesse) return promesse
  const projet = import.meta.env.VITE_FIREBASE_PROJECT_ID
  const cle = import.meta.env.VITE_FIREBASE_API_KEY
  if (!projet || !cle) return Promise.resolve(VIDE)
  const url =
    `https://firestore.googleapis.com/v1/projects/${projet}/databases/(default)` +
    `/documents/compteurs/global?key=${cle}`
  promesse = fetch(url)
    .then((r) => (r.ok ? r.json() : null))
    .then((doc): Compteurs => {
      if (!doc?.fields) return VIDE
      const f = Object.fromEntries(
        Object.entries(doc.fields as Record<string, unknown>).map(([k, v]) => [k, deplier(v)]),
      )
      const brut = (f.parFiche ?? {}) as Record<string, Record<string, number>>
      const parFiche: Record<string, CompteurFiche> = {}
      for (const [ficheId, parChoix] of Object.entries(brut)) {
        const total = Object.values(parChoix).reduce((n, x) => n + x, 0)
        parFiche[ficheId] = { total, parChoix }
      }
      return {
        parFiche,
        totalVotants: Number(f.totalVotants ?? 0),
        majDate: (f.majDate as string) ?? null,
      }
    })
    .catch(() => VIDE)
  return promesse
}
