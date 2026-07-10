// Connexion sans mot de passe par lien email (Firebase Auth).
//
// Flux : le citoyen donne son email, reçoit un lien, clique, il est
// connecté sur CET appareil pour 24 heures (ensuite : re-demander un lien).
// Aucun mot de passe à gérer, l'email est PROUVÉ (pas seulement déclaré),
// ce qui renforce le garde-fou « 1 email = 1 vote ».

import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getFirebaseApp } from './firebase'

const CLE_EMAIL = 'marep-auth-email'
const CLE_DEBUT = 'marep-auth-debut'
const DUREE_SESSION_MS = 24 * 60 * 60 * 1000

function auth() {
  const app = getFirebaseApp()
  if (!app) return undefined
  const a = getAuth(app)
  // Emails de connexion en français (le modèle Firebase suit cette langue).
  a.languageCode = 'fr'
  return a
}

/** Envoie le lien de connexion à l'email donné. */
export async function envoyerLien(email: string): Promise<boolean> {
  const a = auth()
  if (!a) return false
  try {
    await sendSignInLinkToEmail(a, email.trim(), {
      url: `${window.location.origin}/chantier`,
      handleCodeInApp: true,
    })
    localStorage.setItem(CLE_EMAIL, email.trim())
    return true
  } catch (err) {
    console.error('Envoi du lien impossible :', err)
    return false
  }
}

/** À l'ouverture : finalise une connexion par lien, ou purge une session > 24 h. */
export async function initialiserAuth(): Promise<void> {
  const a = auth()
  if (!a) return

  // Session expirée : déconnexion (l'utilisateur redemandera un lien).
  const debut = Number(localStorage.getItem(CLE_DEBUT) ?? 0)
  if (debut && Date.now() - debut > DUREE_SESSION_MS) {
    localStorage.removeItem(CLE_DEBUT)
    await signOut(a).catch(() => undefined)
  }

  if (isSignInWithEmailLink(a, window.location.href)) {
    const email =
      localStorage.getItem(CLE_EMAIL) ??
      window.prompt('Confirmez votre email pour finaliser la connexion :') ??
      ''
    if (!email) return
    try {
      await signInWithEmailLink(a, email, window.location.href)
      localStorage.setItem(CLE_DEBUT, String(Date.now()))
      // Nettoie le lien de connexion de la barre d'adresse.
      window.history.replaceState({}, '', window.location.pathname)
    } catch (err) {
      console.error('Connexion par lien échouée :', err)
    }
  }
}

/** Déconnexion manuelle. */
export async function seDeconnecter(): Promise<void> {
  const a = auth()
  if (!a) return
  localStorage.removeItem(CLE_DEBUT)
  await signOut(a)
}

/** Hook : utilisateur connecté (email vérifié) ou null. */
export function useUtilisateur(): User | null | undefined {
  const [user, setUser] = useState<User | null | undefined>(undefined)
  useEffect(() => {
    const a = auth()
    if (!a) {
      setUser(null)
      return
    }
    return onAuthStateChanged(a, (u) => {
      // Session > 24 h : déconnexion à la volée.
      const debut = Number(localStorage.getItem(CLE_DEBUT) ?? 0)
      if (u && debut && Date.now() - debut > DUREE_SESSION_MS) {
        void seDeconnecter()
        return
      }
      setUser(u)
    })
  }, [])
  return user
}
