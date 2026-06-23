// Les cinq axes du programme.
//
// Source : « III. Ce que nous proposons » du document fondateur.
// Chaque axe peut, à terme, pointer vers un document de travail détaillé
// (champ `contentKey`). Tant qu'il n'existe pas, la page de l'axe affiche
// son résumé et ses propositions.

import type { ContentKey } from '../content'

export interface Axe {
  /** Numéro affiché (1 à 5). */
  numero: number
  /** Identifiant d'URL : /programme/:slug */
  slug: string
  /** Intitulé court, sans le préfixe « Axe N — ». */
  titre: string
  /** Phrase de cadrage, telle qu'écrite dans le document fondateur. */
  accroche: string
  /** Propositions concrètes de l'axe. */
  propositions: string[]
  /**
   * Clé d'un document de travail détaillé dans `src/content`.
   * Présent uniquement pour les axes déjà rédigés (Axe 1).
   */
  contentKey?: ContentKey
}

export const axes: Axe[] = [
  {
    numero: 1,
    slug: 'institutions',
    titre: 'Réformer les institutions',
    accroche:
      "Le problème n'est pas que les Français ne veulent plus voter. C'est qu'ils n'ont aucune raison de croire que leur vote changera quoi que ce soit.",
    propositions: [
      "Instaurer un mandat impératif partiel : les élus s'engagent sur 5 objectifs mesurables. Un bilan indépendant à mi-mandat est publié. En cas d'échec caractérisé, un référendum révocatoire local est déclenché.",
      "Réduire le nombre de parlementaires d'un tiers et professionnaliser leur travail : présence obligatoire, votes nominatifs systématiques, publication intégrale de l'agenda.",
      "Instaurer le référendum d'initiative citoyenne (RIC) sur les sujets législatifs, avec seuil de déclenchement réaliste et débat contradictoire organisé.",
      'Introduire une dose de proportionnelle aux législatives pour refléter la diversité réelle du vote.',
    ],
    contentKey: 'axe1Institutions',
  },
  {
    numero: 2,
    slug: 'services-publics',
    titre: 'Restaurer les services publics',
    accroche: "Avant de réformer, il faut réparer ce qui a été cassé.",
    propositions: [
      "Santé : plan d'urgence pour l'hôpital public. Revalorisation des salaires, recrutement massif, réouverture de lits, obligation de présence médicale dans chaque bassin de vie.",
      "Éducation : réduction du nombre d'élèves par classe (max 20 en primaire, max 25 au secondaire), revalorisation salariale des enseignants indexée sur le coût de la vie local.",
      'Justice : doubler le budget de la justice sur 10 ans, recruter magistrats et greffiers, réduire les délais de jugement à des niveaux européens.',
      "Sécurité : recentrer les forces de l'ordre sur le terrain, alléger la bureaucratie policière, exécuter les peines prononcées, construire les places de prison nécessaires.",
    ],
  },
  {
    numero: 3,
    slug: 'fiscalite',
    titre: 'Fiscalité et équité',
    accroche:
      "Payer des impôts, c'est normal. Payer plus que les multinationales, c'est insupportable.",
    propositions: [
      'Simplification fiscale radicale : réduire le nombre de niches fiscales de moitié, rendre le système lisible pour un citoyen sans expert-comptable.',
      "Taxation effective des multinationales sur le territoire français : ce qui est produit ou consommé en France est taxé en France.",
      "Allègement pour les TPE/PME, artisans et indépendants : baisser les charges sur les 3 premières années, simplifier les démarches, un interlocuteur unique.",
      "Publication annuelle d'un rapport citoyen : où va chaque euro d'impôt, dans un format compréhensible, accessible à tous.",
    ],
  },
  {
    numero: 4,
    slug: 'souverainete',
    titre: 'Souveraineté et indépendance',
    accroche:
      "Un pays qui ne contrôle ni son énergie, ni sa nourriture, ni sa technologie, ni sa défense n'est pas un pays libre.",
    propositions: [
      "Énergie : relancer le nucléaire (nouvelles générations), développer massivement les ENR en complément, viser l'autonomie énergétique à horizon 2040.",
      'Alimentation : soutien massif à l\'agriculture française, circuits courts, obligation de traçabilité complète, régulation des marges de la grande distribution.',
      "Numérique : investissement souverain dans l'IA, le cloud, la cyberdéfense. Former 100 000 spécialistes en 5 ans. Imposer l'hébergement des données publiques en France.",
      "Industrie : conditionner les aides publiques au maintien de l'emploi en France. Tout euro public versé = engagement vérifiable.",
    ],
  },
  {
    numero: 5,
    slug: 'ecologie',
    titre: 'Écologie concrète',
    accroche:
      "Pas d'écologie punitive. Pas d'écologie de salon. Une écologie de bon sens, chiffrée, qui ne laisse personne au bord de la route.",
    propositions: [
      "Rénovation thermique massive du parc immobilier, financée par l'État pour les ménages modestes, avec filière de formation intégrée.",
      "Développement du ferroviaire et des transports collectifs en zone rurale et périurbaine. L'écologie ne peut pas être réservée aux métropolitains.",
      "Interdiction progressive de l'obsolescence programmée. Obligation de réparabilité pour tous les équipements électroniques et électroménagers.",
      "Gestion de l'eau comme bien commun : investissement dans les infrastructures, lutte contre le gaspillage agricole et industriel.",
    ],
  },
]

/** Retrouve un axe par son slug d'URL. */
export function getAxe(slug: string | undefined): Axe | undefined {
  return axes.find((axe) => axe.slug === slug)
}
