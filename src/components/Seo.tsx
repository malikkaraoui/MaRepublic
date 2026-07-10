// SEO par route : titre, description et canonique mis à jour à la navigation.
//
// Le site est une SPA : l'index.html porte les balises par défaut (partagées
// par tous les robots qui n'exécutent pas le JS), et ce composant affine
// titre/description/canonical par page pour Google et les navigateurs.
// Monté une seule fois dans Layout, piloté par la route courante.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { axes } from '../data/axes'

const BASE = 'https://marepublique-2027.web.app'

const METAS: Record<string, { titre: string; description: string }> = {
  '/': {
    titre: 'MaRepublic : le débat, pas la vitrine',
    description:
      "Mouvement politique français. Chaque mesure vient d'un pays où elle fonctionne déjà, tout est ouvert au vote, au commentaire et à la contre-proposition des citoyens comme de leurs agents IA.",
  },
  '/chantier': {
    titre: 'Le chantier : 138 mesures et problèmes en débat ouvert | MaRepublic',
    description:
      "96 problèmes français documentés (2016-2026) et 42 mesures importées de pays où elles marchent : votez pour ou contre, commentez, proposez une alternative. Rien n'est figé.",
  },
  '/programme': {
    titre: 'Programme : 5 axes pour refonder la République | MaRepublic',
    description:
      'Institutions, services publics, fiscalité, souveraineté, écologie : cinq axes construits en débat ouvert, à partir de solutions éprouvées ailleurs.',
  },
  '/garde-fous': {
    titre: 'Garde-fous : comment on protège le débat | MaRepublic',
    description:
      "Nos défenses anti-manipulation publiées : un email un vote, IA signées, dépouillement pondéré à méthode publique. On ouvre d'abord, on durcit si nécessaire.",
  },
  '/vie-privee': {
    titre: 'Vie privée : ce que nous savons de vous | MaRepublic',
    description:
      "Presque rien, et c'est voulu : empreintes anonymes au lieu d'emails, pas de mot de passe, pas de tracker, pas de fichier d'opinions. Tout est expliqué en clair.",
  },
  '/feuille-de-route': {
    titre: 'Feuille de route : on attaque par quoi ? | MaRepublic',
    description:
      "Le dossier présidentiel du mouvement : jour 1 par décret, lois des 100 jours, chantiers de l'an I, ce qu'on abolit. Construit sur 241 fiches sourcées, tout reste en débat.",
  },
  '/fondateur': {
    titre: 'Document fondateur | MaRepublic',
    description:
      'Le texte fondateur du mouvement : le constat, la méthode, les engagements. Fondé sur les actes, pas sur les promesses.',
  },
}

// Une entrée par axe : /programme/institutions, etc.
for (const axe of axes) {
  METAS[`/programme/${axe.slug}`] = {
    titre: `Axe ${axe.numero} : ${axe.titre} | MaRepublic`,
    description: axe.accroche.slice(0, 155),
  }
}

/** Met à jour (ou crée) une balise meta par attribut name/property. */
function poserMeta(attr: 'name' | 'property', cle: string, contenu: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${cle}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, cle)
    document.head.appendChild(el)
  }
  el.setAttribute('content', contenu)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta =
      METAS[pathname] ??
      (pathname.startsWith('/chantier') ? METAS['/chantier'] : METAS['/'])
    document.title = meta.titre
    poserMeta('name', 'description', meta.description)
    poserMeta('property', 'og:title', meta.titre)
    poserMeta('property', 'og:description', meta.description)
    poserMeta('property', 'og:url', BASE + pathname)

    let canon = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canon) {
      canon = document.createElement('link')
      canon.rel = 'canonical'
      document.head.appendChild(canon)
    }
    canon.href = BASE + pathname
  }, [pathname])

  return null
}
