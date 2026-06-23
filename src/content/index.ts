// Registre des documents Markdown.
//
// Vite importe le contenu brut des fichiers `.md` grâce au suffixe `?raw`.
// On centralise ici les imports pour que les pages ne dépendent jamais d'un
// chemin de fichier : elles consomment uniquement les clés de cet objet.

import documentFondateur from './document-fondateur.md?raw'
import axe1Institutions from './axe-1-institutions.md?raw'

export const content = {
  documentFondateur,
  axe1Institutions,
} as const

export type ContentKey = keyof typeof content
