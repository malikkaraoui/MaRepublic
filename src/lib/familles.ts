// Les 6 familles thématiques du chantier.
//
// Elles servent deux buts : orienter l'usager depuis /participer (« les fiches
// de VOTRE domaine ») et préparer la refonte digeste (regrouper les 88 onglets).
// Chaque onglet (axe 1-5 = programme, 101-183 = lots « problèmes ») est rattaché
// à UNE famille via `familleParOnglet`. Ce classement est un premier jet destiné
// à être ajusté à la main, onglet par onglet.

export interface Famille {
  slug: string
  libelle: string
  emoji: string
}

export const FAMILLES: Famille[] = [
  { slug: 'argent-public', libelle: 'Argent public', emoji: '💰' },
  { slug: 'sante-social', libelle: 'Santé & social', emoji: '🏥' },
  { slug: 'justice-securite', libelle: 'Justice & sécurité', emoji: '⚖️' },
  { slug: 'territoires-ecologie', libelle: 'Territoires & écologie', emoji: '🌿' },
  { slug: 'democratie-institutions', libelle: 'Démocratie & institutions', emoji: '🏛️' },
  { slug: 'travail-quotidien', libelle: 'Travail & quotidien', emoji: '🛠️' },
]

const PAR_SLUG = new Map(FAMILLES.map((f) => [f.slug, f]))

/** Famille par défaut si un onglet n'est pas classé (jamais d'orphelin). */
const DEFAUT = 'travail-quotidien'

// Numéro d'onglet -> slug de famille. Axes 1-5, puis lots problèmes 101-183.
// Premier jet à valider ; voir les intitulés dans chantier/*.md.
export const familleParOnglet: Record<number, string> = {
  // Programme (axes)
  1: 'democratie-institutions', // Institutions / Démocratie
  2: 'sante-social', // Services publics
  3: 'argent-public', // Fiscalité
  4: 'democratie-institutions', // Souveraineté
  5: 'territoires-ecologie', // Écologie
  // Problèmes (lots)
  101: 'democratie-institutions', // Institutions & confiance
  102: 'sante-social', // Santé & hôpital
  103: 'travail-quotidien', // Logement & coût de la vie
  104: 'justice-securite', // Sécurité & justice
  105: 'sante-social', // Éducation & jeunesse
  106: 'democratie-institutions', // Numérique & libertés
  107: 'travail-quotidien', // Travail & retraites
  108: 'justice-securite', // Immigration & intégration
  109: 'territoires-ecologie', // Écologie, énergie, eau
  110: 'territoires-ecologie', // Agriculture & territoires
  111: 'democratie-institutions', // Europe & souveraineté
  112: 'argent-public', // Finances publiques & fiscalité
  113: 'travail-quotidien', // Zéro friction, simplicité administrative
  114: 'travail-quotidien', // Frictions vécues, papiers et état civil
  115: 'travail-quotidien', // Frictions vécues, prestations et impôts
  116: 'sante-social', // Frictions vécues, santé et handicap
  117: 'travail-quotidien', // Frictions vécues, auto, logement, en ligne
  118: 'travail-quotidien', // Aberrations, le système punit les mauvaises personnes
  119: 'argent-public', // Aberrations administratives et fiscales
  120: 'argent-public', // Budget traçable et blockchain souveraine
  121: 'travail-quotidien', // 30 ans au crible, économie et travail
  122: 'democratie-institutions', // 30 ans au crible, État, institutions, sécurité
  123: 'sante-social', // 30 ans au crible, social, santé, éducation
  124: 'argent-public', // Rentes et captations
  125: 'argent-public', // Ultra-riches, montages et impôt régressif
  126: 'democratie-institutions', // Hypocrisies d'État
  127: 'democratie-institutions', // Promesses jamais tenues
  128: 'territoires-ecologie', // Énergie, la facture
  129: 'travail-quotidien', // Logement, la crise
  130: 'travail-quotidien', // Le quotidien qui gratte, banques, assurances, abonnements
  131: 'justice-securite', // Justice du quotidien, l'accès au droit
  132: 'argent-public', // Banques et monnaie
  133: 'sante-social', // Seuils sanitaires
  134: 'sante-social', // Alimentation
  135: 'territoires-ecologie', // Agriculture et PAC
  136: 'territoires-ecologie', // Transports
  137: 'argent-public', // L'informatique d'État, le cimetière des milliards
  138: 'democratie-institutions', // Pantouflage et conflits d'intérêts
  139: 'democratie-institutions', // Redevabilité
  140: 'argent-public', // Retraites et superprofits
  141: 'democratie-institutions', // La complexité, instrument du pouvoir
  142: 'argent-public', // Régimes spéciaux et avantages
  143: 'argent-public', // Subventions sans évaluation
  144: 'territoires-ecologie', // Outre-mer
  145: 'democratie-institutions', // Le millefeuille
  146: 'sante-social', // Jeunesse, la France dans le rouge
  147: 'sante-social', // Familles et aidants
  148: 'travail-quotidien', // Indépendants et TPE
  149: 'sante-social', // Les oubliés
  150: 'democratie-institutions', // Le devoir citoyen
  151: 'justice-securite', // Protéger les enfants
  152: 'justice-securite', // Narcotrafic
  153: 'territoires-ecologie', // Écologie punitive de la voiture et recharge
  154: 'travail-quotidien', // France Travail
  155: 'sante-social', // Se soigner en France
  156: 'sante-social', // L'école qui trie
  157: 'sante-social', // Vieillir en France
  158: 'territoires-ecologie', // La France rurale
  159: 'sante-social', // Avoir 20 ans en France
  160: 'travail-quotidien', // Impôt et paperasse du quotidien
  161: 'travail-quotidien', // La France qui se fait tondre chez elle
  162: 'sante-social', // Le handicap
  163: 'justice-securite', // La prison
  164: 'travail-quotidien', // Artisans, commerçants, indépendants
  165: 'justice-securite', // La défense
  166: 'democratie-institutions', // Culture et médias
  167: 'sante-social', // Le sport
  168: 'territoires-ecologie', // La mer
  169: 'travail-quotidien', // Copropriétés et syndics
  170: 'territoires-ecologie', // L'eau
  171: 'sante-social', // Les addictions organisées
  172: 'democratie-institutions', // La France dans le monde
  173: 'sante-social', // Mourir en France
  174: 'territoires-ecologie', // Le tourisme
  175: 'territoires-ecologie', // Les animaux
  176: 'justice-securite', // Les rançongiciels
  177: 'travail-quotidien', // Le tout-numérique qui abandonne 13 millions
  178: 'democratie-institutions', // Les associations
  179: 'justice-securite', // Prostitution et traite
  180: 'democratie-institutions', // La recherche
  181: 'sante-social', // Dormir dehors
  182: 'justice-securite', // Familles séparées, justice familiale
  183: 'travail-quotidien', // La fonction publique
}

/** Slug de la famille d'un onglet (par son numéro). */
export function familleDeOnglet(numero: number): string {
  return familleParOnglet[numero] ?? DEFAUT
}

/** Objet Famille depuis un slug (undefined si inconnu). */
export function famille(slug: string): Famille | undefined {
  return PAR_SLUG.get(slug)
}
