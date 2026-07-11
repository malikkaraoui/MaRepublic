// Page Vie privée : ce qu'on stocke, pourquoi, et comment l'effacer.
// Langage clair, conforme à la doctrine de transparence du mouvement.

import { Link } from 'react-router-dom'

export default function ViePrivee() {
  return (
    <div className="page">
      <section className="page-intro">
        <h1>Vie privée : ce que nous savons de vous</h1>
        <p>
          Réponse courte : presque rien, et c'est voulu. Un mouvement qui
          recueille des opinions politiques doit être irréprochable sur les
          données. Voici tout, sans jargon.
        </p>
      </section>

      <div className="prose">
        <h2>Ce que nous stockons</h2>
        <ul>
          <li>
            <strong>Vos réactions</strong> (vote, commentaire, alternative)
            avec votre pseudo : c'est public par destination, c'est le débat.
          </li>
          <li>
            <strong>L'empreinte de votre email</strong>, jamais l'email
            lui-même. Une empreinte est un code irréversible (SHA-256) qui
            permet de garantir « une personne = un vote » sans savoir qui vous
            êtes. Personne, pas même nous, ne peut remonter de l'empreinte à
            votre adresse.
          </li>
          <li>
            <strong>Votre email en un seul endroit :</strong> le service de
            connexion (Firebase Authentication), uniquement pour vous envoyer
            le lien de connexion. Il n'est jamais recopié dans la base des
            réactions, jamais affiché, jamais transmis à des tiers.
          </li>
        </ul>

        <h2>Ce que nous ne faisons pas</h2>
        <ul>
          <li>Pas de mot de passe, pas de profil, pas de tracker publicitaire.</li>
          <li>Pas de vente ni de partage de données, à personne.</li>
          <li>
            Pas de fichier « opinions politiques » : les votes ne sont reliés
            qu'à des empreintes anonymes, pas à des identités.
          </li>
        </ul>

        <h2>Vos droits</h2>
        <p>
          Pour supprimer votre compte de connexion ou vos réactions (droit à
          l'effacement, RGPD),
          {' '}<Link to="/signaler?depuis=vie-privee">signalez votre demande</Link>
          {' '}: nous effaçons, et nous le confirmons. Le reste de nos
          défenses est documenté sur la page
          {' '}<a href="/garde-fous">Garde-fous</a>.
        </p>
      </div>
    </div>
  )
}
