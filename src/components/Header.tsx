// En-tête du site avec menu responsive.
//
// Sur grand écran, la navigation est affichée en ligne. Sur mobile, elle est
// repliée derrière un bouton (« menu ») et déployée en panneau plein largeur.
// Le menu se referme automatiquement à chaque navigation.

import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/fondateur', label: 'Document fondateur' },
  { to: '/programme', label: 'Programme' },
  { to: '/chantier', label: 'Chantier' },
  { to: '/participer', label: 'Participer' },
  { to: '/feuille-de-route', label: 'Feuille de route' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const headerRef = useRef<HTMLElement>(null)

  // Referme le menu et réaffiche la barre à chaque changement de page.
  useEffect(() => {
    setOpen(false)
    setHidden(false)
  }, [pathname])

  // Mesure la hauteur réelle de la barre : le hero remonte dessous d'autant.
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const majHauteur = () =>
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    majHauteur()
    const ro = new ResizeObserver(majHauteur)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Masque la barre quand on descend, la révèle quand on remonte.
  useEffect(() => {
    let dernierY = window.scrollY
    let enAttente = false
    const onScroll = () => {
      if (enAttente) return
      enAttente = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 24)
        if (y > dernierY && y > 140) setHidden(true)
        else if (y < dernierY - 4) setHidden(false)
        dernierY = y
        enAttente = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = [
    'site-header',
    scrolled ? 'site-header--scrolled' : '',
    hidden && !open ? 'site-header--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header ref={headerRef} className={classes}>
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">Ma République</span>
          <span className="brand__tag">Fondé sur les actes</span>
        </Link>

        <ThemeToggle />

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
