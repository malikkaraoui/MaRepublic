// Thème clair/sombre : la préférence explicite prime sur celle du système.
// Le script inline dans index.html applique déjà le thème avant le premier
// rendu (évite le flash) ; ce module reprend la main côté React.

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'marepublique-theme'

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
}

export function setStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Stockage indisponible (navigation privée) : le choix ne persiste pas
    // d'une visite à l'autre, mais l'affichage reste correct.
  }
}
