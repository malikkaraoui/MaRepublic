// Ramène la page en haut à chaque arrivée : navigation, rechargement, et
// retour/avance dans l'historique.
//
// Deux pièges neutralisés ici :
//   1. Le navigateur restaure tout seul la position (retour arrière,
//      rechargement) : on passe scrollRestoration en « manual » pour décider
//      nous-mêmes.
//   2. `scroll-behavior: smooth` est global : un simple scrollTo(0, 0)
//      remonterait en glissant. On force donc un saut instantané.
//
// Les ancres (#section) restent respectées : si un hash est présent, on ne
// touche pas au défilement pour laisser le navigateur viser l'élément.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
