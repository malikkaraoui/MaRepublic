// Registre des documents Markdown.
//
// Vite importe le contenu brut des fichiers `.md` grâce au suffixe `?raw`.
// On centralise ici les imports pour que les pages ne dépendent jamais d'un
// chemin de fichier : elles consomment uniquement les clés de cet objet.

import documentFondateur from './document-fondateur.md?raw'
import axe1Institutions from './axe-1-institutions.md?raw'
import axe2ServicesPublics from './axe-2-services-publics.md?raw'
import axe3Fiscalite from './axe-3-fiscalite.md?raw'
import axe4Souverainete from './axe-4-souverainete.md?raw'
import axe5Ecologie from './axe-5-ecologie.md?raw'
import feuilleDeRoute from './feuille-de-route.md?raw'

export const content = {
  documentFondateur,
  axe1Institutions,
  axe2ServicesPublics,
  axe3Fiscalite,
  axe4Souverainete,
  axe5Ecologie,
  feuilleDeRoute,
} as const

export type ContentKey = keyof typeof content
