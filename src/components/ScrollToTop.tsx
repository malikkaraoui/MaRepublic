// Réinitialise la position de défilement à chaque changement de route.
//
// React Router ne le fait pas par défaut : sans ce composant, naviguer d'une
// page longue (le document fondateur) vers une autre conserve le scroll.
// On respecte toutefois les ancres (#section) en ne touchant pas au scroll
// lorsqu'un hash est présent.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
