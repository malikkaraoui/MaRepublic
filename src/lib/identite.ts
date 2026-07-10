// Identité du citoyen qui réagit : pseudo + email, exigés pour tout retour.
//
// Saisie une seule fois (bandeau de la page Chantier), conservée en
// localStorage. L'email n'est jamais affiché ni lisible publiquement : il
// part dans Firestore dont la lecture est fermée (voir firestore.rules).

import { useCallback, useSyncExternalStore } from 'react'

export interface Identite {
  pseudo: string
  email: string
}

const KEY = 'marep-identite-v1'

function lire(): Identite {
  try {
    const brut = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    return { pseudo: brut.pseudo ?? '', email: brut.email ?? '' }
  } catch {
    return { pseudo: '', email: '' }
  }
}

let cache = lire()
const listeners = new Set<() => void>()

export function identiteValide(i: Identite): boolean {
  return i.pseudo.trim().length >= 2 && /.+@.+\..+/.test(i.email.trim())
}

/** Hook : identité courante + mise à jour. */
export function useIdentite() {
  const identite = useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => cache,
  )

  const definir = useCallback((next: Identite) => {
    cache = { pseudo: next.pseudo, email: next.email }
    localStorage.setItem(KEY, JSON.stringify(cache))
    listeners.forEach((l) => l())
  }, [])

  return { identite, definir, valide: identiteValide(identite) }
}

/** Accès hors-hook (envoi Firestore). */
export function identiteCourante(): Identite {
  return cache
}
