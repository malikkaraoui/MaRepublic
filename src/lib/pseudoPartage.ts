// Pseudo / signature de partage, gardé UNIQUEMENT dans le navigateur.
//
// Facultatif par principe : il ne sert qu'à humaniser le partage (« Partagé par
// X ») sur le message et l'image. Rien en base, aucune identité imposée. Même
// patron que profil.ts (useSyncExternalStore).

import { useCallback, useSyncExternalStore } from 'react'

const KEY = 'marep-pseudo-partage-v1'
const MAX = 24

function lire(): string {
  try {
    return localStorage.getItem(KEY) ?? ''
  } catch {
    return ''
  }
}

let cache = lire()
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Hook : pseudo courant (chaîne vide si aucun) + enregistrer. Borné, sans identité. */
export function usePseudoPartage() {
  const pseudo = useSyncExternalStore(subscribe, () => cache)

  const enregistrer = useCallback((valeur: string) => {
    const propre = valeur.trim().slice(0, MAX)
    cache = propre
    try {
      if (propre) localStorage.setItem(KEY, propre)
      else localStorage.removeItem(KEY)
    } catch {
      /* stockage indisponible : on garde en mémoire pour la session */
    }
    listeners.forEach((l) => l())
  }, [])

  return { pseudo, enregistrer, MAX }
}
