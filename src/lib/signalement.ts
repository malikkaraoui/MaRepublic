// Envoi d'un signalement (bug, incohérence, contenu manquant) vers Firestore.
//
// Zéro friction volontaire : pas de compte, pas de pseudo, pas de connexion
// par lien. Un message suffit. C'est le pendant technique de `avis.ts`
// (réactions politiques), qui lui exige une identité vérifiée.

import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getFirebaseApp } from './firebase'

export interface SignalementPayload {
  message: string
  page?: string
  contact?: string
}

/**
 * Envoie un signalement à Firestore. Renvoie `false` (sans lever) si
 * Firebase n'est pas configuré ou si le message est hors bornes.
 */
export async function envoyerSignalement(payload: SignalementPayload): Promise<boolean> {
  const message = payload.message.trim()
  if (message.length < 5 || message.length > 1000) return false

  const app = getFirebaseApp()
  if (!app) return false

  try {
    const db = getFirestore(app)
    const donnees: Record<string, unknown> = { message, date: serverTimestamp() }
    if (payload.page) donnees.page = payload.page.slice(0, 200)
    if (payload.contact) donnees.contact = payload.contact.trim().slice(0, 200)
    await addDoc(collection(db, 'signalements'), donnees)
    return true
  } catch (err) {
    console.error('Envoi du signalement impossible :', err)
    return false
  }
}
