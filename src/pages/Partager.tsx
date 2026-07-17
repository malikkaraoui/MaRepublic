// Page de partage : « Faire connaître » MaRepublic.
//
// L'usager choisit FINEMENT ce que la carte exprime : tout le site, une famille,
// un onglet (sujet), ou une fiche précise. Le choix se fait par une barre de
// recherche à mots-clés, complétée en dessous par des accès rapides (les six
// familles, et les fiches les plus votées du moment). Tout se génère dans le
// navigateur : lien, QR code, et image de story (votes en direct + statut).
// Aucune requête réseau pour fabriquer l'image ; rien n'est envoyé.

import { useEffect, useMemo, useState } from 'react'
import QRCode from 'qrcode'
import { useSearchParams } from 'react-router-dom'
import { FAMILLES, famille as familleParSlug, familleDeOnglet } from '../lib/familles'
import {
  axesFiches,
  numeroDeSlug,
  slugDeNumero,
  type AxeFiches,
  type Fiche,
} from '../lib/fiches'
import { chargerCompteurs, type Compteurs } from '../lib/compteurs'
import { usePseudoPartage } from '../lib/pseudoPartage'
import { genererImagePartage, dataUrlVersFichier } from '../lib/imagePartage'

const STATUT = 'Ouvert au vote'

// La cible de partage : ce que la carte exprime.
type Cible =
  | { type: 'site' }
  | { type: 'famille'; slug: string }
  | { type: 'onglet'; numero: number }
  | { type: 'fiche'; id: string }

interface Affichage {
  famille: { libelle: string; accent: string }
  titre: string
  exemples: string[]
  lien: string
  message: string
}

const ORIGINE =
  typeof window !== 'undefined' ? window.location.origin : 'https://marepublique-2027.web.app'

function normaliser(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
}

// Somme accords (pour + pistes) / rejets (contre) sur les fiches retenues par
// le prédicat (tout le site, une famille, un onglet, une fiche).
function agreger(
  garder: (f: Fiche, numeroOnglet: number) => boolean,
  c: Compteurs,
): { accords: number; rejets: number } {
  let accords = 0
  let rejets = 0
  for (const axe of axesFiches) {
    for (const f of axe.fiches) {
      if (!garder(f, axe.numero)) continue
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

function predicat(cible: Cible): (f: Fiche, numeroOnglet: number) => boolean {
  switch (cible.type) {
    case 'site':
      return () => true
    case 'famille':
      return (_f, no) => familleDeOnglet(no) === cible.slug
    case 'onglet':
      return (_f, no) => no === cible.numero
    case 'fiche':
      return (f) => f.id === cible.id
  }
}

export default function Partager() {
  const [params, setParams] = useSearchParams()
  const { pseudo, enregistrer, MAX } = usePseudoPartage()

  // Index de recherche des cartes et lookups par numéro / id, calculés une fois.
  const { ongletParNumero, ficheParId, catalogue } = useMemo(() => {
    const ongletParNumero = new Map<number, AxeFiches>()
    const ficheParId = new Map<string, { fiche: Fiche; axe: AxeFiches }>()
    type Entree = {
      cible: Cible
      libelle: string
      sous: string
      texte: string
      rang: number
    }
    const catalogue: Entree[] = []
    for (const fam of FAMILLES) {
      catalogue.push({
        cible: { type: 'famille', slug: fam.slug },
        libelle: fam.libelle,
        sous: 'Famille',
        texte: normaliser(fam.libelle),
        rang: 0,
      })
    }
    for (const axe of axesFiches) {
      ongletParNumero.set(axe.numero, axe)
      const fam = familleParSlug(familleDeOnglet(axe.numero))
      catalogue.push({
        cible: { type: 'onglet', numero: axe.numero },
        libelle: axe.theme,
        sous: `Sujet · ${fam?.libelle ?? ''}`,
        texte: normaliser(`${axe.theme} ${fam?.libelle ?? ''}`),
        rang: 1,
      })
      for (const f of axe.fiches) {
        ficheParId.set(f.id, { fiche: f, axe })
        catalogue.push({
          cible: { type: 'fiche', id: f.id },
          libelle: f.titre,
          sous: `Fiche · ${axe.theme}`,
          texte: normaliser(`${f.titre} ${f.code} ${axe.theme}`),
          rang: 2,
        })
      }
    }
    return { ongletParNumero, ficheParId, catalogue }
  }, [])

  // Cible initiale depuis l'URL (?famille= / ?onglet= / ?fiche=).
  const [cible, setCible] = useState<Cible>(() => {
    const fam = params.get('famille')
    if (fam && familleParSlug(fam)) return { type: 'famille', slug: fam }
    const n = numeroDeSlug(params.get('onglet') ?? undefined)
    if (n) return { type: 'onglet', numero: n }
    const fic = params.get('fiche')
    if (fic && ficheParId.has(fic)) return { type: 'fiche', id: fic }
    return { type: 'site' }
  })

  const [recherche, setRecherche] = useState('')

  // Sélection d'une cible : met à jour l'état ET l'URL (la vue reste partageable).
  const choisir = (c: Cible) => {
    setCible(c)
    setRecherche('')
    const p = new URLSearchParams()
    if (c.type === 'famille') p.set('famille', c.slug)
    else if (c.type === 'onglet') p.set('onglet', slugDeNumero(c.numero))
    else if (c.type === 'fiche') p.set('fiche', c.id)
    setParams(p, { replace: true })
  }

  const resultats = useMemo(() => {
    const q = normaliser(recherche)
    if (q.length < 2) return []
    return catalogue
      .filter((e) => e.texte.includes(q))
      .sort((a, b) => a.rang - b.rang)
      .slice(0, 24)
  }, [recherche, catalogue])

  // Ce que la carte exprime : libellé, couleur, titre, exemples, lien, message.
  const affichage = useMemo<Affichage>(() => {
    if (cible.type === 'famille') {
      const f = familleParSlug(cible.slug)
      if (f) {
        const n = axesFiches.reduce(
          (s, a) => (familleDeOnglet(a.numero) === f.slug ? s + a.fiches.length : s),
          0,
        )
        const exemples: string[] = []
        for (const a of axesFiches) {
          if (familleDeOnglet(a.numero) !== f.slug) continue
          for (const fi of a.fiches) {
            exemples.push(fi.titre)
            if (exemples.length >= 3) break
          }
          if (exemples.length >= 3) break
        }
        return {
          famille: { libelle: f.libelle, accent: f.accent },
          titre: `${f.libelle} : ${n} mesures en débat ouvert`,
          exemples,
          lien: `${ORIGINE}/chantier?famille=${f.slug}`,
          message: `MaRepublic : les mesures « ${f.libelle} » sont votables en débat ouvert. Viens juger :`,
        }
      }
    }
    if (cible.type === 'onglet') {
      const axe = ongletParNumero.get(cible.numero)
      const f = familleParSlug(familleDeOnglet(cible.numero))
      if (axe && f) {
        const n = axe.fiches.length
        return {
          famille: { libelle: f.libelle, accent: f.accent },
          titre: `${axe.theme} : ${n} ${n > 1 ? 'mesures' : 'mesure'} en débat`,
          exemples: axe.fiches.slice(0, 3).map((fi) => fi.titre),
          lien: `${ORIGINE}/chantier/${slugDeNumero(cible.numero)}`,
          message: `MaRepublic : « ${axe.theme} », des mesures votables en débat ouvert. Viens juger :`,
        }
      }
    }
    if (cible.type === 'fiche') {
      const e = ficheParId.get(cible.id)
      const f = e ? familleParSlug(familleDeOnglet(e.axe.numero)) : undefined
      if (e && f) {
        return {
          famille: { libelle: e.axe.theme, accent: f.accent },
          titre: e.fiche.titre,
          exemples: [],
          lien: `${ORIGINE}/chantier/${slugDeNumero(e.axe.numero)}#${e.fiche.id}`,
          message: `MaRepublic : « ${e.fiche.titre} ». Une mesure votable en débat ouvert, ton avis compte :`,
        }
      }
    }
    // Défaut : tout le site.
    return {
      famille: { libelle: 'Le débat', accent: '#0a3d91' },
      titre: 'Le programme en débat ouvert, mesure par mesure',
      exemples: [],
      lien: `${ORIGINE}/`,
      message:
        'MaRepublic : un programme politique en débat ouvert, chaque mesure est votable et commentable. Viens juger par toi-même :',
    }
  }, [cible, ongletParNumero, ficheParId])

  const lien = affichage.lien
  const message = affichage.message

  // Étiquette courte de la cible active (pour le résumé au-dessus de l'aperçu).
  const etiquette = useMemo(() => {
    switch (cible.type) {
      case 'site':
        return { texte: 'Tout le site', tag: 'Général' }
      case 'famille': {
        const f = familleParSlug(cible.slug)
        return { texte: f?.libelle ?? '', tag: 'Famille' }
      }
      case 'onglet': {
        const a = ongletParNumero.get(cible.numero)
        return { texte: a?.theme ?? '', tag: 'Sujet' }
      }
      case 'fiche': {
        const e = ficheParId.get(cible.id)
        return { texte: e?.fiche.titre ?? '', tag: 'Fiche' }
      }
    }
  }, [cible, ongletParNumero, ficheParId])

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

  const { accords, rejets } = useMemo(() => {
    const c = compteurs ?? { parFiche: {}, totalVotes: 0, totalVotants: 0, majDate: null }
    return agreger(predicat(cible), c)
  }, [compteurs, cible])

  // Fiches brûlantes : les plus votées du moment. À défaut de votes, on montre
  // une fiche représentative par famille pour ne jamais laisser la zone vide.
  const brulantes = useMemo(() => {
    const chaudes: { fiche: Fiche; axe: AxeFiches; total: number }[] = []
    if (compteurs) {
      for (const axe of axesFiches) {
        for (const f of axe.fiches) {
          const c = compteurs.parFiche[f.id]
          if (!c) continue
          let total = 0
          for (const n of Object.values(c.parChoix)) total += n
          if (total > 0) chaudes.push({ fiche: f, axe, total })
        }
      }
    }
    if (chaudes.length) {
      return { titre: 'Fiches brûlantes', liste: chaudes.sort((a, b) => b.total - a.total).slice(0, 6) }
    }
    const repres: { fiche: Fiche; axe: AxeFiches; total: number }[] = []
    for (const fam of FAMILLES) {
      const axe = axesFiches.find(
        (a) => familleDeOnglet(a.numero) === fam.slug && a.fiches.length > 0,
      )
      if (axe) repres.push({ fiche: axe.fiches[0], axe, total: 0 })
    }
    return { titre: 'À découvrir', liste: repres }
  }, [compteurs])

  // (Re)génère l'image dès que le QR, les compteurs, le pseudo ou la cible changent.
  useEffect(() => {
    if (!qr) return
    let vivant = true
    genererImagePartage({
      famille: affichage.famille,
      titre: affichage.titre,
      accords,
      rejets,
      statut: STATUT,
      lien,
      pseudo: pseudo || undefined,
      exemples: affichage.exemples,
      qrDataUrl: qr,
    })
      .then((url) => {
        if (vivant) setImage(url)
      })
      .catch(() => {})
    return () => {
      vivant = false
    }
  }, [qr, accords, rejets, pseudo, affichage, lien])

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
            (cible.type === 'site'
              ? 'Regarde les mesures et juge par toi-même :\n'
              : `Regarde en priorité « ${etiquette.texte} » :\n`) +
            lien +
            '\n\nAstuce : pour joindre l’image de partage, utilise plutôt le bouton ' +
            '« Mettre dans ma story » puis choisis Mail.',
        )}`,
    },
  ]

  const partageFichiersDispo = typeof navigator !== 'undefined' && 'share' in navigator

  return (
    <div className="page">
      <section className="page-intro">
        <h1>Faire connaître</h1>
        <p>
          Le débat n'a de poids que s'il rassemble. Choisissez ce que votre carte met en
          avant, du mouvement entier à une seule mesure, puis partagez l'image, le lien ou
          le QR code. Chaque personne qui vient juger compte.
        </p>
      </section>

      <div className="partage">
        {/* Sélecteur de cible : recherche + accès rapides. */}
        <div className="partage__cible">
          <label className="partage__recherche">
            <span>Que voulez-vous partager ?</span>
            <input
              type="search"
              value={recherche}
              placeholder="Un mot-clé : prison, retraites, eau, école…"
              onChange={(e) => setRecherche(e.target.value)}
              aria-label="Rechercher un sujet ou une fiche à partager"
            />
          </label>

          {resultats.length > 0 && (
            <ul className="partage__resultats">
              {resultats.map((e, i) => (
                <li key={`${e.cible.type}-${i}`}>
                  <button type="button" className="partage__resultat" onClick={() => choisir(e.cible)}>
                    <span className="partage__resultat-corps">
                      <span className="partage__resultat-titre">{e.libelle}</span>
                      <span className="partage__resultat-sous">{e.sous}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {recherche.trim().length >= 2 && resultats.length === 0 && (
            <p className="partage__vide-recherche">Aucun sujet ni fiche ne correspond.</p>
          )}

          <div className="partage__rapide">
            <p className="partage__rapide-titre">Sujets</p>
            <div className="partage__chips">
              <button
                type="button"
                className={`partage__chip${cible.type === 'site' ? ' partage__chip--actif' : ''}`}
                onClick={() => choisir({ type: 'site' })}
              >
                Tout le site
              </button>
              {FAMILLES.map((f) => (
                <button
                  key={f.slug}
                  type="button"
                  className={`partage__chip${
                    cible.type === 'famille' && cible.slug === f.slug ? ' partage__chip--actif' : ''
                  }`}
                  onClick={() => choisir({ type: 'famille', slug: f.slug })}
                >
                  {f.libelle}
                </button>
              ))}
            </div>

            <p className="partage__rapide-titre">{brulantes.titre}</p>
            <div className="partage__chips">
              {brulantes.liste.map(({ fiche, axe }) => (
                <button
                  key={fiche.id}
                  type="button"
                  className={`partage__chip${
                    cible.type === 'fiche' && cible.id === fiche.id ? ' partage__chip--actif' : ''
                  }`}
                  onClick={() => choisir({ type: 'fiche', id: fiche.id })}
                  title={`${axe.theme} · ${fiche.titre}`}
                >
                  {fiche.titre}
                </button>
              ))}
            </div>
          </div>

          <p className="partage__active">
            Carte actuelle :{' '}
            <strong>{etiquette.texte}</strong>{' '}
            <span className="partage__active-tag">{etiquette.tag}</span>
          </p>
        </div>

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

        <aside className="partage__apercu">
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
                Mettre dans ma story
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

          <figure className="partage__qr">
            {qr ? (
              <img src={qr} alt={`QR code vers ${lien}`} width={200} height={200} />
            ) : (
              <span className="partage__qr-vide">QR code…</span>
            )}
            <figcaption>À scanner ou à montrer autour de vous.</figcaption>
          </figure>
        </aside>

        <div className="partage__diffusion">
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
              Partager le lien…
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
        </div>
      </div>
    </div>
  )
}
