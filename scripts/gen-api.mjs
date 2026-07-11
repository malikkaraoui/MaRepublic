// Génère l'API statique du site : public/api/fiches.json
//
// Le site n'est pas qu'une vitrine pour humains : les agents IA des citoyens
// doivent pouvoir lire les mesures et faire remonter des réactions de façon
// structurée. Ce script parse chantier/axe-*-fiches.md (même découpage que
// src/lib/fiches.ts) et publie un JSON stable, servi par Hosting sur
// /api/fiches.json. Lancé automatiquement avant chaque build (npm run build).
//
// Canal d'écriture machine (phase 1, sans backend) : GitHub Issues, voir le
// bloc `reagir` du JSON et public/llms.txt.

import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const racine = join(dirname(fileURLToPath(import.meta.url)), '..')
const dossierChantier = join(racine, 'chantier')
const sortie = join(racine, 'public', 'api', 'fiches.json')

const axes = readdirSync(dossierChantier)
  .filter((f) => /^(axe-\d|problemes-\d+).*-fiches\.md$/.test(f))
  .sort()
  .map((fichier) => {
    const brut = readFileSync(join(dossierChantier, fichier), 'utf8')
    // Axes 1-5 = programme ; lots « problèmes » numérotés à partir de 100.
    const axe = fichier.match(/axe-(\d)/)?.[1]
    const lot = fichier.match(/problemes-(\d+)/)?.[1]
    const numero = axe ? Number(axe) : 100 + Number(lot ?? 0)
    const titre =
      brut.match(/^#\s+(.+)$/m)?.[1].replace(/·.*$/, '').trim() ?? `Axe ${numero}`

    const matches = [...brut.matchAll(/^###\s+([A-Z]?\d+)\.\s+(.+)$/gm)]
    const fiches = matches.map((m, i) => {
      const debut = (m.index ?? 0) + m[0].length
      const fin = i + 1 < matches.length ? matches[i + 1].index : brut.length
      const corpsMarkdown = brut.slice(debut, fin).trim()
      // Pistes lettrées : quand il y en a >= 2, le vote se fait par piste
      // (valeurs "piste-a"..."piste-e") plutôt qu'en pour/contre.
      const lettres = [
        ...new Set([...corpsMarkdown.matchAll(/\*\*Piste\s+([A-E])\b/g)].map((x) => x[1])),
      ].sort()
      return {
        id: `axe${numero}-${m[1]}`,
        code: m[1],
        titre: m[2].replace(/🔥/g, '').trim(),
        statut: 'brouillon',
        votesPossibles:
          lettres.length >= 2
            ? [...lettres.map((l) => `piste-${l.toLowerCase()}`), 'pour', 'contre']
            : ['pour', 'contre'],
        corpsMarkdown,
      }
    })

    return { numero, titre, fiches }
  })

const api = {
  projet: 'MaRepublique',
  description:
    "Mesures en débat ouvert. Tout est brouillon : votez, commentez, proposez une alternative, humain ou agent IA.",
  generele: new Date().toISOString(),
  source: 'https://github.com/malikkaraoui/MaRepublic (chantier/*.md)',
  reagir: {
    canalPrincipal: {
      type: 'Firestore REST (écriture directe, sans compte)',
      documentation: 'https://marepublique-2027.web.app/llms.txt',
      champsObligatoires: ['ficheId', 'type', 'pseudo', 'email'],
    },
    canal: 'GitHub Issues',
    url: 'https://api.github.com/repos/malikkaraoui/MaRepublic/issues',
    documentation: 'https://marepublique-2027.web.app/llms.txt',
    format: {
      title: '[<ficheId>] <vote|commentaire|alternative> : <résumé court>',
      body: 'JSON : { "ficheId": "...", "type": "vote|commentaire|alternative", "vote": une valeur de votesPossibles de la fiche (si type=vote), "texte": "..." (sinon), "auteur": "pseudo ou agent" }',
      labels: ['reaction-citoyenne'],
    },
  },
  axes,
}

mkdirSync(dirname(sortie), { recursive: true })
writeFileSync(sortie, JSON.stringify(api, null, 2) + '\n')
console.log(
  `API générée : ${sortie} (${axes.length} axes, ${axes.reduce((n, a) => n + a.fiches.length, 0)} fiches)`,
)
