// Bouton clair/sombre, place dans l'en-tête. Le choix est persiste en local
// (localStorage) et prime sur la preference systeme une fois active.

import { useEffect, useState } from 'react'
import { applyTheme, getStoredTheme, getSystemTheme, setStoredTheme, type Theme } from '../lib/theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggle() {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      setStoredTheme(next)
      return next
    })
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
    >
      <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
    </button>
  )
}
