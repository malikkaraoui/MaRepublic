// Réactions citoyennes sur les fiches du chantier : vote 👍/👎, commentaires
// et contre-propositions.
//
// Stockage : localStorage pour la phase locale (chaque appareil garde ses
// réactions). Le jour du passage en ligne, ce module est le seul à remplacer
// par une implémentation Firestore, l'interface reste identique.

import { useCallback, useSyncExternalStore } from 'react'

/** Choix de vote : oui/non, ou une piste lettrée quand la fiche en propose. */
export type VoteChoix =
  | 'pour'
  | 'contre'
  | 'piste-a'
  | 'piste-b'
  | 'piste-c'
  | 'piste-d'
  | 'piste-e'

export type Vote = VoteChoix | null

export interface Commentaire {
  /** 'commentaire' = réaction libre ; 'alternative' = contre-proposition. */
  type: 'commentaire' | 'alternative'
  texte: string
  date: string
}

interface Reaction {
  vote: Vote
  commentaires: Commentaire[]
  /**
   * Horodatage ISO du dernier vote posé (absent si pas de vote ou annulé).
   * Sert à afficher la voix en direct dans la jauge tant que l'agrégation
   * horaire ne l'a pas encore prise en compte (voir la jauge du Chantier).
   */
  voteDate?: string
}

const KEY = 'marep-reactions-v1'

function lireTout(): Record<string, Reaction> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

let cache = lireTout()
const listeners = new Set<() => void>()

function ecrire(next: Record<string, Reaction>) {
  cache = next
  localStorage.setItem(KEY, JSON.stringify(next))
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const VIDE: Reaction = { vote: null, commentaires: [] }

/** Hook : réaction locale sur une fiche + actions pour la modifier. */
export function useReaction(ficheId: string) {
  const reaction = useSyncExternalStore(
    subscribe,
    () => cache[ficheId] ?? VIDE,
  )

  const voter = useCallback(
    (vote: Vote) => {
      const courant = cache[ficheId] ?? VIDE
      // Re-cliquer sur le même vote l'annule.
      const annule = courant.vote === vote
      ecrire({
        ...cache,
        [ficheId]: {
          ...courant,
          vote: annule ? null : vote,
          voteDate: annule ? undefined : new Date().toISOString(),
        },
      })
    },
    [ficheId],
  )

  const commenter = useCallback(
    (type: Commentaire['type'], texte: string) => {
      const propre = texte.trim()
      if (!propre) return
      const courant = cache[ficheId] ?? VIDE
      ecrire({
        ...cache,
        [ficheId]: {
          ...courant,
          commentaires: [
            ...courant.commentaires,
            { type, texte: propre, date: new Date().toISOString() },
          ],
        },
      })
    },
    [ficheId],
  )

  return { reaction, voter, commenter }
}
