// En-tête du site avec menu responsive.
//
// Sur grand écran, la navigation est affichée en ligne. Sur mobile, elle est
// repliée derrière un bouton (« menu ») et déployée en panneau plein largeur.
// Le menu se referme automatiquement à chaque navigation.

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/fondateur', label: 'Document fondateur' },
  { to: '/programme', label: 'Programme' },
  { to: '/chantier', label: 'Chantier' },
  { to: '/feuille-de-route', label: 'Feuille de route' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Referme le menu à chaque changement de page.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">Ma République</span>
          <span className="brand__tag">Fondé sur les actes</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>

        <nav
          id="primary-nav"
          className={`site-nav${open ? ' site-nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
              }
            >
              {({ isActive }) => (
                <span aria-current={isActive ? 'page' : undefined}>
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
