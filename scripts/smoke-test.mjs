// Smoke test du pipeline de contenu : lancé par `npm test` (gate pré-push).
//
// Vérifie que l'API statique se génère et que le chantier respecte les
// invariants éditoriaux du projet : chaque lot expose des fiches parsables,
// chaque fiche porte son analyse juridique, et aucun cadratin ne traîne
// (règle typographique du mouvement).

import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const racine = join(dirname(fileURLToPath(import.meta.url)), '..')
let erreurs = 0
const fail = (msg) => {
  console.error(`ÉCHEC : ${msg}`)
  erreurs++
}

// 1. L'API statique se génère sans erreur.
execFileSync('node', [join(racine, 'scripts', 'gen-api.mjs')], { stdio: 'pipe' })
const api = JSON.parse(readFileSync(join(racine, 'public', 'api', 'fiches.json'), 'utf8'))
const totalFiches = api.axes.reduce((n, a) => n + a.fiches.length, 0)
if (totalFiches < 500) fail(`API : ${totalFiches} fiches, seuil minimal 500`)
for (const axe of api.axes) {
  if (!axe.fiches.length) fail(`API : onglet « ${axe.titre} » sans aucune fiche parsée`)
}

// 2. Invariants éditoriaux des lots problèmes.
const chantier = join(racine, 'chantier')
const lots = readdirSync(chantier).filter((f) => /^problemes-\d+-fiches\.md$/.test(f))
for (const f of lots) {
  const brut = readFileSync(join(chantier, f), 'utf8')
  const fiches = (brut.match(/^### P\d+\./gm) ?? []).length
  const juridique = (brut.match(/Faisabilité juridique/g) ?? []).length
  if (!fiches) fail(`${f} : aucune fiche au format ### PN.`)
  if (juridique < fiches) fail(`${f} : ${juridique} analyses juridiques pour ${fiches} fiches`)
  if (/—|–/.test(brut)) fail(`${f} : cadratin détecté`)
}

if (erreurs) {
  console.error(`${erreurs} problème(s) : push bloqué.`)
  process.exit(1)
}
console.log(`OK : ${totalFiches} fiches, ${api.axes.length} onglets, ${lots.length} lots problèmes conformes.`)
