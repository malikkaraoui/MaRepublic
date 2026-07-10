// Génère public/sitemap.xml à chaque build.
//
// Routes statiques + une entrée par axe du programme. La date de dernière
// modification est celle du build : le contenu vit dans le repo, chaque
// déploiement correspond à une vraie mise à jour du site.

import { readdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const racine = join(dirname(fileURLToPath(import.meta.url)), '..')
const BASE = 'https://marepublique-2027.web.app'

const routes = [
  { path: '/', priorite: '1.0', freq: 'weekly' },
  { path: '/chantier', priorite: '1.0', freq: 'daily' },
  { path: '/programme', priorite: '0.9', freq: 'weekly' },
  { path: '/fondateur', priorite: '0.8', freq: 'monthly' },
  { path: '/garde-fous', priorite: '0.6', freq: 'monthly' },
  { path: '/accessibilite', priorite: '0.5', freq: 'monthly' },
  ...['institutions', 'services-publics', 'fiscalite', 'souverainete', 'ecologie'].map(
    (slug) => ({ path: `/programme/${slug}`, priorite: '0.8', freq: 'weekly' }),
  ),
  // Un onglet du chantier par fichier de fiches (axe-N, problemes-N).
  ...readdirSync(join(racine, 'chantier'))
    .map((f) => f.match(/^(axe-\d+|problemes-\d+).*-fiches\.md$/)?.[1])
    .filter(Boolean)
    .map((slug) => ({ path: `/chantier/${slug}`, priorite: '0.7', freq: 'weekly' })),
]

const jour = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${jour}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priorite}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(racine, 'public', 'sitemap.xml'), xml)
console.log(`Sitemap généré : ${routes.length} URLs`)
