// Initialisation du SDK Web Firebase.
//
// Les valeurs proviennent des variables d'environnement `VITE_FIREBASE_*`
// (voir `.env.example`). Ce ne sont PAS des secrets : le SDK Web est conçu
// pour fonctionner côté navigateur et ces clés sont publiques par nature.
// La sécurité repose sur les règles Firebase, pas sur leur confidentialité.
//
// Le site est aujourd'hui purement statique. Ce module fournit l'amorce du
// SDK pour les fonctionnalités à venir (mesure d'audience, formulaires, etc.)
// et n'initialise Firebase que si la configuration minimale est présente.

import { initializeApp, type FirebaseApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

/** `true` lorsque la configuration Firebase est exploitable. */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.appId,
)

let app: FirebaseApp | undefined

/**
 * Renvoie l'instance Firebase (initialisée à la demande), ou `undefined`
 * si la configuration est absente — typiquement en développement local
 * tant que le `.env` n'a pas été rempli.
 */
export function getFirebaseApp(): FirebaseApp | undefined {
  if (!isFirebaseConfigured) return undefined
  if (!app) app = initializeApp(firebaseConfig)
  return app
}
