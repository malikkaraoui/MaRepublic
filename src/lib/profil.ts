// Profil de participation, gardé UNIQUEMENT dans le navigateur (localStorage).
//
// Aucune identité, rien en base : l'aiguilleur /participer sert à orienter, pas
// à ficher. Au retour, on relit ce profil pour éviter de re-questionner.

import { useCallback, useSyncExternalStore } from 'react'

export type Temps = 'rapide' | 'approfondi' | 'engage'
export type Niveau = 'expert' | 'concerne' | 'curieux'
export type Motivation = 'juger' | 'ameliorer' | 'proposer' | 'diffuser'

export interface ProfilParticipation {
  temps: Temps
  famille: string // slug d'une des 6 familles
  niveau: Niveau
  motivation: Motivation
  /** Familles dont l'atelier (à venir) intéresse l'usager. Local, sans email. */
  ateliersInteresse: string[]
  date: string
}

const KEY = 'marep-profil-participation-v1'

function lire(): ProfilParticipation | null {
  try {
    const brut = localStorage.getItem(KEY)
    return brut ? (JSON.parse(brut) as ProfilParticipation) : null
  } catch {
    return null
  }
}

let cache = lire()
const listeners = new Set<() => void>()

function ecrire(next: ProfilParticipation | null) {
  cache = next
  if (next) localStorage.setItem(KEY, JSON.stringify(next))
  else localStorage.removeItem(KEY)
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Hook : profil courant + actions (enregistrer, effacer, marquer un atelier). */
export function useProfil() {
  const profil = useSyncExternalStore(subscribe, () => cache)

  const enregistrer = useCallback(
    (p: Omit<ProfilParticipation, 'date' | 'ateliersInteresse'>) => {
      ecrire({
        ...p,
        ateliersInteresse: cache?.ateliersInteresse ?? [],
        date: new Date().toISOString(),
      })
    },
    [],
  )

  const effacer = useCallback(() => ecrire(null), [])

  const basculerAtelier = useCallback((famille: string) => {
    if (!cache) return
    const deja = cache.ateliersInteresse.includes(famille)
    ecrire({
      ...cache,
      ateliersInteresse: deja
        ? cache.ateliersInteresse.filter((f) => f !== famille)
        : [...cache.ateliersInteresse, famille],
    })
  }, [])

  return { profil, enregistrer, effacer, basculerAtelier }
}
