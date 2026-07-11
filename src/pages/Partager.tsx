// Page de partage : « Faire connaître » MaRepublic. Un lien à copier, un QR code
// (généré en local, aucun appel réseau), le partage natif du téléphone, et des
// raccourcis vers les canaux courants. Si on arrive avec ?famille=X, on partage
// le chantier filtré sur cette famille plutôt que la racine du site.

import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { useSearchParams } from 'react-router-dom'
import { famille as familleParSlug } from '../lib/familles'

export default function Partager() {
  const [params] = useSearchParams()
  const slug = params.get('famille')
  const fam = slug ? familleParSlug(slug) : undefined

  const chemin = fam ? `/chantier?famille=${slug}` : '/'
  const lien =
    (typeof window !== 'undefined' ? window.location.origin : 'https://marepublique-2027.web.app') +
    chemin
  const message = fam
    ? `MaRepublic, le programme en débat ouvert. Les mesures « ${fam.libelle} » sont votables, venez juger :`
    : `MaRepublic : un programme politique en débat ouvert, chaque mesure est votable et commentable. Venez juger par vous-même :`

  const [qr, setQr] = useState<string | null>(null)
  const [copie, setCopie] = useState(false)

  useEffect(() => {
    QRCode.toDataURL(lien, { margin: 1, width: 320 })
      .then(setQr)
      .catch(() => setQr(null))
  }, [lien])

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

  const enc = encodeURIComponent
  const msgLien = enc(message + ' ' + lien)
  const canaux = [
    { nom: 'WhatsApp', href: `https://wa.me/?text=${msgLien}` },
    { nom: 'Telegram', href: `https://t.me/share/url?url=${enc(lien)}&text=${enc(message)}` },
    { nom: 'X', href: `https://twitter.com/intent/tweet?text=${enc(message)}&url=${enc(lien)}` },
    { nom: 'Bluesky', href: `https://bsky.app/intent/compose?text=${msgLien}` },
    { nom: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(lien)}` },
    { nom: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(lien)}` },
    { nom: 'SMS', href: `sms:?&body=${msgLien}` },
    {
      nom: 'E-mail',
      href: `mailto:?subject=${enc('MaRepublic, à juger')}&body=${enc(message + '\n\n' + lien)}`,
    },
  ]

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Faire connaître</h1>
        <p>
          Le débat n'a de poids que s'il rassemble. Partagez le lien, montrez le QR
          code autour de vous{fam ? `, en commençant par « ${fam.libelle} »` : ''}.
          Chaque personne qui vient juger compte.
        </p>
      </section>

      <div className="partage">
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

        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button type="button" className="partage__natif" onClick={partageNatif}>
            📤 Partager…
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
