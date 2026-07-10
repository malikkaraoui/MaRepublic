// Gabarit commun à toutes les pages : hairline tricolore, en-tête, contenu,
// pied de page. Les pages sont rendues dans le <Outlet/> de React Router.

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'
import { initialiserAuth } from '../lib/auth'

export default function Layout() {
  // Finalise une connexion par lien email et purge les sessions > 24 h.
  useEffect(() => {
    void initialiserAuth()
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
