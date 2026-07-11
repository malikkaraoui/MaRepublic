// Agrège les votes (collection fermée `reactions`) en compteurs publics.
//
// Lancé par GitHub Actions (toutes les heures) ou à la main avec le compte
// de service Firebase. Il lit les votes avec des droits d'administration,
// compte par fiche et par choix, puis écrit UN document public :
// `compteurs/global`. Aucune empreinte ni pseudo ne sort : que des nombres.
//
// Usage : FIREBASE_SERVICE_ACCOUNT='<json>' node scripts/maj-compteurs.mjs
//    ou : node scripts/maj-compteurs.mjs /chemin/vers/service-account.json

import { createSign } from 'node:crypto'
import { readFileSync } from 'node:fs'

const brut = process.argv[2]
  ? readFileSync(process.argv[2], 'utf8')
  : process.env.FIREBASE_SERVICE_ACCOUNT
if (!brut) {
  console.error('Compte de service manquant (argument fichier ou FIREBASE_SERVICE_ACCOUNT).')
  process.exit(1)
}
const sa = JSON.parse(brut)
const projet = sa.project_id

// ─── Jeton OAuth depuis le compte de service (JWT signé RS256) ───────────────
async function jetonAdmin() {
  const now = Math.floor(Date.now() / 1000)
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
  const corps = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/datastore',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`
  const signature = createSign('RSA-SHA256').update(corps).sign(sa.private_key, 'base64url')
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${corps}.${signature}`,
    }),
  })
  if (!r.ok) throw new Error(`OAuth : ${r.status} ${await r.text()}`)
  return (await r.json()).access_token
}

const base = `https://firestore.googleapis.com/v1/projects/${projet}/databases/(default)/documents`
const jeton = await jetonAdmin()
const entetes = { authorization: `Bearer ${jeton}`, 'content-type': 'application/json' }

// ─── Lecture paginée des votes ───────────────────────────────────────────────
const parFiche = new Map() // ficheId -> Map(choix -> n)
const votants = new Set() // empreintes distinctes
let lus = 0
let curseur = null
for (;;) {
  const query = {
    structuredQuery: {
      from: [{ collectionId: 'reactions' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'type' },
          op: 'EQUAL',
          value: { stringValue: 'vote' },
        },
      },
      orderBy: [{ field: { fieldPath: '__name__' }, direction: 'ASCENDING' }],
      limit: 1000,
      ...(curseur ? { startAt: { values: [curseur], before: false } } : {}),
    },
  }
  const r = await fetch(`${base}:runQuery`, {
    method: 'POST',
    headers: entetes,
    body: JSON.stringify(query),
  })
  if (!r.ok) throw new Error(`runQuery : ${r.status} ${await r.text()}`)
  const lignes = (await r.json()).filter((l) => l.document)
  for (const { document } of lignes) {
    const f = document.fields ?? {}
    const ficheId = f.ficheId?.stringValue
    const choix = f.vote?.stringValue
    const empreinte = f.empreinte?.stringValue
    if (!ficheId || !choix) continue
    if (!parFiche.has(ficheId)) parFiche.set(ficheId, new Map())
    const m = parFiche.get(ficheId)
    m.set(choix, (m.get(choix) ?? 0) + 1)
    if (empreinte) votants.add(empreinte)
    lus++
  }
  if (lignes.length < 1000) break
  curseur = { referenceValue: lignes.at(-1).document.name }
}

// ─── Écriture du document public ─────────────────────────────────────────────
const champsFiche = {}
for (const [ficheId, m] of parFiche) {
  champsFiche[ficheId] = {
    mapValue: {
      fields: Object.fromEntries(
        [...m].map(([choix, n]) => [choix, { integerValue: String(n) }]),
      ),
    },
  }
}
const doc = {
  fields: {
    totalVotes: { integerValue: String(lus) },
    totalVotants: { integerValue: String(votants.size) },
    majDate: { timestampValue: new Date().toISOString() },
    parFiche: { mapValue: { fields: champsFiche } },
  },
}
const w = await fetch(`${base}/compteurs/global`, {
  method: 'PATCH',
  headers: entetes,
  body: JSON.stringify(doc),
})
if (!w.ok) throw new Error(`écriture compteurs : ${w.status} ${await w.text()}`)
console.log(
  `OK : ${lus} votes agrégés, ${votants.size} votants distincts, ${parFiche.size} fiches votées.`,
)
