// Gabarit commun à toutes les pages : hairline tricolore, en-tête, contenu,
// pied de page. Les pages sont rendues dans le <Outlet/> de React Router.

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'
import { initialiserAuth } from '../lib/auth'
import { gsap, ScrollTrigger } from '../lib/gsap'

export default function Layout() {
  // Finalise une connexion par lien email et purge les sessions > 24 h.
  useEffect(() => {
    void initialiserAuth()
  }, [])

  // Défilement lissé (Lenis), cadencé par le ticker GSAP pour que
  // ScrollTrigger et le défilement partagent la même horloge. Désactivé
  // d'office avec prefers-reduced-motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: false, lerp: 0.12 })
    lenis.on('scroll', ScrollTrigger.update)
    const cadence = (temps: number) => lenis.raf(temps * 1000)
    gsap.ticker.add(cadence)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(cadence)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-shell">
      <Seo />
      <div className="tricolore" aria-hidden="true" />
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
