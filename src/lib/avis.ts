// Envoi des réactions vers Firestore (collection `reactions`).
//
// Chaque retour = un document horodaté serveur, avec pseudo + email
// obligatoires (validés aussi côté règles). L'envoi est « fire-and-forget » :
// l'UI locale (localStorage) reste la source d'affichage immédiat, Firestore
// est le registre central que le mouvement dépouille.

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { getFirebaseApp } from './firebase'
import { identiteCourante, identiteValide } from './identite'

export type AvisPayload =
  | { ficheId: string; type: 'vote'; vote: 'pour' | 'contre' }
  | { ficheId: string; type: 'commentaire' | 'alternative'; texte: string }

/**
 * Envoie une réaction à Firestore. Renvoie `false` (sans lever) si Firebase
 * n'est pas configuré ou si l'identité est incomplète, l'appelant a déjà
 * validé côté UI, ceci est la ceinture de sécurité.
 */
export async function envoyerAvis(payload: AvisPayload): Promise<boolean> {
  const app = getFirebaseApp()
  const identite = identiteCourante()
  if (!app || !identiteValide(identite)) return false

  try {
    await addDoc(collection(getFirestore(app), 'reactions'), {
      ...payload,
      pseudo: identite.pseudo.trim(),
      email: identite.email.trim(),
      date: serverTimestamp(),
    })
    return true
  } catch (err) {
    // Réseau coupé ou règles refusées : on ne casse pas l'expérience locale.
    console.error('Envoi de la réaction impossible :', err)
    return false
  }
}
