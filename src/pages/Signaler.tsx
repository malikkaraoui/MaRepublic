// Page « Signaler un souci » : le canal zéro friction pour les humains.
//
// Pas de compte GitHub, pas de pseudo, pas de connexion. Un message suffit.
// Le canal technique GitHub Issues reste ouvert, mais réservé aux agents IA
// (voir /llms.txt) : structuré pour un dépouillement rapide, pas adapté à
// quelqu'un qui ne sait pas ce qu'est GitHub.

import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { envoyerSignalement } from '../lib/signalement'

const maxLength = 1000

export default function Signaler() {
  const [params] = useSearchParams()
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState('')
  const [etat, setEtat] = useState<'saisie' | 'envoi' | 'envoye' | 'erreur'>('saisie')

  const envoyer = async () => {
    setEtat('envoi')
    const ok = await envoyerSignalement({
      message,
      contact: contact.trim() || undefined,
      page: params.get('depuis') ?? undefined,
    })
    setEtat(ok ? 'envoye' : 'erreur')
  }

  if (etat === 'envoye') {
    return (
      <div className="page">
        <section className="page-intro">
          <h1>Merci, c'est noté</h1>
          <p>
            Votre signalement est transmis. Si vous avez laissé un moyen de
            vous joindre, on revient vers vous en cas de besoin. Sinon, rien
            d'autre à faire.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Signaler un souci</h1>
        <p>
          Une faute, un bouton qui ne marche pas, un texte incompréhensible,
          une info manquante : décrivez-le en quelques mots. Pas besoin de
          compte, pas besoin de savoir ce qu'est GitHub.
        </p>
      </section>

      <div className="fiche__saisie" style={{ maxWidth: '40rem' }}>
        <label htmlFor="signalement-message" className="visually-hidden">
          Décrivez le problème
        </label>
        <textarea
          id="signalement-message"
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) setMessage(e.target.value)
          }}
          placeholder="Ex. : sur la fiche retraites, le lien vers la source ne fonctionne pas."
          maxLength={maxLength}
          className="fiche__textarea"
          style={{ minHeight: '8rem' }}
        />
        <div className="fiche__saisie-footer">
          <span className="fiche__counter" aria-live="polite" aria-atomic="true">
            {message.length}/{maxLength}
          </span>
        </div>

        <label className="identite__champ">
          <span>Email (facultatif, pour qu'on vous réponde)</span>
          <input
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="vous@exemple.fr"
            maxLength={200}
            autoComplete="email"
          />
        </label>

        <div className="fiche__saisie-footer">
          <button
            type="button"
            className="fiche__submit"
            onClick={() => void envoyer()}
            disabled={message.trim().length < 5 || etat === 'envoi'}
          >
            {etat === 'envoi' ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>

        {etat === 'erreur' && (
          <p className="identite__info identite__info--erreur" aria-live="polite">
            L'envoi a échoué. Réessayez, ou écrivez-nous directement.
          </p>
        )}
      </div>
    </div>
  )
}
