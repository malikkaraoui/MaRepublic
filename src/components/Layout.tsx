// Gabarit commun à toutes les pages : hairline tricolore, en-tête, contenu,
// pied de page. Les pages sont rendues dans le <Outlet/> de React Router.

import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

export default function Layout() {
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
