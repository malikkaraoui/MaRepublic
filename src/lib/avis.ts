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
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFirebaseApp } from './firebase'
import { identiteCourante, identiteValide } from './identite'
import { empreinteEmail } from './empreinte'
import type { VoteChoix } from './reactions'

export type AvisPayload =
  | { ficheId: string; type: 'vote'; vote: VoteChoix }
  | { ficheId: string; type: 'commentaire' | 'alternative'; texte: string }

/**
 * Envoie une réaction à Firestore. Renvoie `false` (sans lever) si Firebase
 * n'est pas configuré ou si l'identité est incomplète, l'appelant a déjà
 * validé côté UI, ceci est la ceinture de sécurité.
 */
export async function envoyerAvis(payload: AvisPayload): Promise<boolean> {
  const app = getFirebaseApp()
  if (!app) return false
  const identite = identiteCourante()
  // Email prouvé par la connexion par lien quand elle existe.
  const emailVerifie = getAuth(app).currentUser?.email
  const pseudoOk = identite.pseudo.trim().length >= 2
  if (!(emailVerifie ? pseudoOk : identiteValide(identite))) return false

  try {
    const db = getFirestore(app)
    // Aucun email en clair : seule son empreinte part en base.
    const empreinte = await empreinteEmail(emailVerifie ?? identite.email)
    const donnees = {
      ...payload,
      pseudo: identite.pseudo.trim(),
      empreinte,
      canal: 'site',
      date: serverTimestamp(),
    }
    if (payload.type === 'vote') {
      // Identifiant imposé par les règles : 1 personne = 1 vote par fiche.
      const id = `v_${payload.ficheId}_${empreinte}`
      await setDoc(doc(db, 'reactions', id), donnees)
    } else {
      await addDoc(collection(db, 'reactions'), donnees)
    }
    return true
  } catch (err) {
    // Réseau coupé ou règles refusées : on ne casse pas l'expérience locale.
    console.error('Envoi de la réaction impossible :', err)
    return false
  }
}
