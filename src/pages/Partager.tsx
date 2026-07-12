// Page de partage : « Faire connaître » MaRepublic. Un lien à copier, un QR code
// (généré en local, aucun appel réseau), une IMAGE de partage format story
// (votes en direct + statut, fabriquée dans le navigateur), le partage natif du
// téléphone, et des raccourcis vers les canaux courants (dont Reddit, Discord).
// Si on arrive avec ?famille=X, tout parle de cette famille plutôt que de la racine.

import { useEffect, useMemo, useState } from 'react'
import QRCode from 'qrcode'
import { useSearchParams } from 'react-router-dom'
import { famille as familleParSlug, familleDeOnglet } from '../lib/familles'
import { axesFiches } from '../lib/fiches'
import { chargerCompteurs, type Compteurs } from '../lib/compteurs'
import { usePseudoPartage } from '../lib/pseudoPartage'
import { genererImagePartage, dataUrlVersFichier } from '../lib/imagePartage'

const STATUT = 'Ouvert au vote'

// Somme des accords (pour + pistes) et des rejets (contre) sur les fiches d'une
// famille. slug null = tout le site.
function agregerVotes(slug: string | null, c: Compteurs): { accords: number; rejets: number } {
  let accords = 0
  let rejets = 0
  for (const axe of axesFiches) {
    if (slug && familleDeOnglet(axe.numero) !== slug) continue
    for (const f of axe.fiches) {
      const compte = c.parFiche[f.id]
      if (!compte) continue
      for (const [choix, n] of Object.entries(compte.parChoix)) {
        if (choix === 'contre') rejets += n
        else accords += n
      }
    }
  }
  return { accords, rejets }
}

function nbFichesFamille(slug: string): number {
  let n = 0
  for (const axe of axesFiches) {
    if (familleDeOnglet(axe.numero) !== slug) continue
    n += axe.fiches.length
  }
  return n
}

// Quelques titres de mesures de la famille, pour remplir l'image de vrai contenu.
function exemplesFamille(slug: string, n: number): string[] {
  const out: string[] = []
  for (const axe of axesFiches) {
    if (familleDeOnglet(axe.numero) !== slug) continue
    for (const f of axe.fiches) {
      out.push(f.titre)
      if (out.length >= n) return out
    }
  }
  return out
}

export default function Partager() {
  const [params] = useSearchParams()
  const slug = params.get('famille')
  const fam = slug ? familleParSlug(slug) : undefined
  const { pseudo, enregistrer, MAX } = usePseudoPartage()

  const chemin = fam ? `/chantier?famille=${slug}` : '/'
  const lien =
    (typeof window !== 'undefined' ? window.location.origin : 'https://marepublique-2027.web.app') +
    chemin
  const message = fam
    ? `MaRepublic, le programme en débat ouvert. Les mesures « ${fam.libelle} » sont votables, venez juger :`
    : `MaRepublic : un programme politique en débat ouvert, chaque mesure est votable et commentable. Venez juger par vous-même :`

  const titre = useMemo(() => {
    if (!fam) return 'Le programme en débat ouvert, mesure par mesure'
    const n = nbFichesFamille(fam.slug)
    return `${fam.libelle} : ${n} mesures en débat ouvert`
  }, [fam])

  const exemples = useMemo(() => (fam ? exemplesFamille(fam.slug, 3) : []), [fam])

  const [qr, setQr] = useState<string | null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [copie, setCopie] = useState(false)
  const [compteurs, setCompteurs] = useState<Compteurs | null>(null)

  useEffect(() => {
    QRCode.toDataURL(lien, { margin: 1, width: 512 }).then(setQr).catch(() => setQr(null))
  }, [lien])

  useEffect(() => {
    chargerCompteurs().then(setCompteurs).catch(() => setCompteurs(null))
  }, [])

  // (Re)génère l'image dès que le QR, les compteurs ou le pseudo changent.
  useEffect(() => {
    if (!qr) return
    const c = compteurs ?? { parFiche: {}, totalVotes: 0, totalVotants: 0, majDate: null }
    const { accords, rejets } = agregerVotes(slug, c)
    const donnees = {
      famille: fam
        ? { libelle: fam.libelle, emoji: fam.emoji, accent: fam.accent }
        : { libelle: 'Le débat', emoji: '🇫🇷', accent: '#0a3d91' },
      titre,
      accords,
      rejets,
      statut: STATUT,
      lien,
      pseudo: pseudo || undefined,
      exemples,
      qrDataUrl: qr,
    }
    let vivant = true
    genererImagePartage(donnees)
      .then((url) => {
        if (vivant) setImage(url)
      })
      .catch(() => {})
    return () => {
      vivant = false
    }
  }, [qr, compteurs, pseudo, slug, fam, titre, lien, exemples])

  const copier = () => {
    void navigator.clipboard.writeText(lien).then(() => {
      setCopie(true)
      window.setTimeout(() => setCopie(false), 2000)
    })
  }

  const partageNatif = () => {
    if (navigator.share) {
      void navigator.share({ title: 'MaRepublic', text: message, url: lien }).catch(() => {})
    }
  }

  const telechargerImage = () => {
    if (!image) return
    const a = document.createElement('a')
    a.href = image
    a.download = 'marepublique.png'
    a.click()
  }

  const partagerImage = async () => {
    if (!image) return
    const fichier = dataUrlVersFichier(image, 'marepublique.png')
    if (navigator.canShare?.({ files: [fichier] })) {
      try {
        await navigator.share({ files: [fichier], text: message, title: 'MaRepublic' })
      } catch {
        /* annulé */
      }
    } else {
      telechargerImage()
    }
  }

  const [copieDiscord, setCopieDiscord] = useState(false)
  const copierPourDiscord = () => {
    void navigator.clipboard.writeText(`${message} ${lien}`).then(() => {
      setCopieDiscord(true)
      window.setTimeout(() => setCopieDiscord(false), 2000)
    })
  }

  const enc = encodeURIComponent
  const msgLien = enc(message + ' ' + lien)
  const canaux = [
    { nom: 'WhatsApp', href: `https://wa.me/?text=${msgLien}` },
    { nom: 'Telegram', href: `https://t.me/share/url?url=${enc(lien)}&text=${enc(message)}` },
    { nom: 'X', href: `https://twitter.com/intent/tweet?text=${enc(message)}&url=${enc(lien)}` },
    { nom: 'Bluesky', href: `https://bsky.app/intent/compose?text=${msgLien}` },
    { nom: 'Reddit', href: `https://www.reddit.com/submit?url=${enc(lien)}&title=${enc(message)}` },
    { nom: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(lien)}` },
    { nom: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(lien)}` },
    { nom: 'SMS', href: `sms:?&body=${msgLien}` },
    {
      nom: 'E-mail',
      href:
        `mailto:?subject=${enc('MaRepublic — à juger par toi-même')}` +
        `&body=${enc(
          'Je te partage MaRepublic : un mouvement où le programme se construit en débat ' +
            'ouvert. Chaque mesure est un brouillon que les citoyens votent et commentent, ' +
            'rien de boîte noire.\n\n' +
            (fam
              ? `Regarde en priorité les mesures « ${fam.libelle} » :\n`
              : 'Regarde les mesures et juge par toi-même :\n') +
            lien +
            '\n\nAstuce : pour joindre l’image de partage, utilise plutôt le bouton ' +
            '« Mettre dans ma story » puis choisis Mail.',
        )}`,
    },
  ]

  const partageFichiersDispo =
    typeof navigator !== 'undefined' && 'share' in navigator

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Faire connaître</h1>
        <p>
          Le débat n'a de poids que s'il rassemble. Partagez l'image, le lien ou le QR
          code autour de vous{fam ? `, en commençant par « ${fam.libelle} »` : ''}.
          Chaque personne qui vient juger compte.
        </p>
      </section>

      <div className="partage">
        <label className="partage__pseudo">
          <span>Votre signature (facultatif)</span>
          <input
            type="text"
            value={pseudo}
            maxLength={MAX}
            placeholder="ex : Malik, un citoyen d'Annecy…"
            onChange={(e) => enregistrer(e.target.value)}
            aria-label="Signature de partage, facultative"
          />
          <small>Ajoutée à l'image et au message. Rien n'est envoyé, tout reste sur votre appareil.</small>
        </label>

        <figure className="partage__image">
          {image ? (
            <img src={image} alt="Aperçu de l'image de partage" />
          ) : (
            <span className="partage__image-vide">Préparation de l'image…</span>
          )}
          <figcaption>Image prête à poster en story. Les votes affichés sont ceux du moment.</figcaption>
        </figure>

        <div className="partage__actions-image">
          {partageFichiersDispo && (
            <button type="button" className="partage__story" onClick={partagerImage} disabled={!image}>
              📲 Mettre dans ma story
            </button>
          )}
          <button type="button" className="partage__copier" onClick={telechargerImage} disabled={!image}>
            Télécharger l'image
          </button>
        </div>
        {partageFichiersDispo && (
          <p className="partage__astuce">
            « Mettre dans ma story » ouvre le partage de ton téléphone : choisis Instagram,
            Snapchat, WhatsApp… puis Story. Aucune app ne peut publier une story à ta place,
            c'est le maximum possible depuis le web.
          </p>
        )}

        <div className="partage__lien">
          <input
            type="text"
            readOnly
            value={lien}
            aria-label="Lien à partager"
            className="partage__url"
            onFocus={(e) => e.currentTarget.select()}
          />
          <button type="button" className="partage__copier" onClick={copier}>
            {copie ? '✓ Copié' : 'Copier le lien'}
          </button>
        </div>

        {partageFichiersDispo && (
          <button type="button" className="partage__natif" onClick={partageNatif}>
            📤 Partager le lien…
          </button>
        )}

        <ul className="partage__canaux">
          {canaux.map((c) => (
            <li key={c.nom}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="partage__canal">
                {c.nom}
              </a>
            </li>
          ))}
          <li>
            <button type="button" className="partage__canal" onClick={copierPourDiscord}>
              {copieDiscord ? '✓ Copié pour Discord' : 'Discord'}
            </button>
          </li>
        </ul>

        <figure className="partage__qr">
          {qr ? (
            <img src={qr} alt={`QR code vers ${lien}`} width={200} height={200} />
          ) : (
            <span className="partage__qr-vide">QR code…</span>
          )}
          <figcaption>À scanner ou à montrer autour de vous.</figcaption>
        </figure>
      </div>
    </div>
  )
}
