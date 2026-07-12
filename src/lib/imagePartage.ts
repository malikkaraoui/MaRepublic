// Générateur d'image de partage, format story 9:16 (1080x1920).
//
// Tout se dessine dans le navigateur sur un canvas : aucune requête réseau, et
// les votes affichés sont ceux du moment (fabriqués à l'instant, pas figés). On
// renvoie un PNG en dataURL, prêt à télécharger ou à passer au partage natif.

const L = 1080
const H = 1920
const ROUGE = '#c8102e'
const INK = '#0a0a0a'
const MUTED = '#404040'
const RULE = '#e7e7e3'
const HOTE = 'marepublique-2027.web.app'

export interface DonneesImage {
  famille: { libelle: string; emoji: string; accent: string }
  titre: string
  /** pour + pistes (accords) et contre (rejets). Si 0/0, on montre un appel. */
  accords: number
  rejets: number
  statut: string
  lien: string
  pseudo?: string
  /** Quelques titres de mesures de la famille, pour remplir avec du vrai contenu. */
  exemples?: string[]
  /** QR déjà généré par la page (dataURL PNG). */
  qrDataUrl?: string
}

function hexToRgba(hex: string, a: number): string {
  const n = hex.replace('#', '')
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function chargerImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

/** Découpe un texte en lignes tenant dans `largeurMax`, jusqu'à `maxLignes`. */
function lignes(
  ctx: CanvasRenderingContext2D,
  texte: string,
  largeurMax: number,
  maxLignes: number,
): string[] {
  const mots = texte.split(' ')
  const out: string[] = []
  let courante = ''
  for (const mot of mots) {
    const essai = courante ? `${courante} ${mot}` : mot
    if (ctx.measureText(essai).width > largeurMax && courante) {
      out.push(courante)
      courante = mot
      if (out.length === maxLignes - 1) break
    } else {
      courante = essai
    }
  }
  if (courante && out.length < maxLignes) out.push(courante)
  return out
}

/** Tronque un texte avec … pour tenir sur une ligne de `largeurMax`. */
function tronquer(ctx: CanvasRenderingContext2D, texte: string, largeurMax: number): string {
  if (ctx.measureText(texte).width <= largeurMax) return texte
  let t = texte
  while (t.length > 1 && ctx.measureText(t + '…').width > largeurMax) t = t.slice(0, -1)
  return t.trimEnd() + '…'
}

function pastille(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  texte: string,
  accent: string,
) {
  ctx.font = "700 30px Archivo, system-ui, sans-serif"
  const w = ctx.measureText(texte.toUpperCase()).width
  const padX = 28
  const h = 62
  const total = w + padX * 2 + 34
  const gx = x - total
  ctx.fillStyle = hexToRgba(accent, 0.1)
  const r = h / 2
  ctx.beginPath()
  ctx.moveTo(gx + r, y)
  ctx.arcTo(gx + total, y, gx + total, y + h, r)
  ctx.arcTo(gx + total, y + h, gx, y + h, r)
  ctx.arcTo(gx, y + h, gx, y, r)
  ctx.arcTo(gx, y, gx + total, y, r)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = accent
  ctx.beginPath()
  ctx.arc(gx + padX + 9, y + h / 2, 9, 0, Math.PI * 2)
  ctx.fill()
  ctx.textBaseline = 'middle'
  ctx.fillText(texte.toUpperCase(), gx + padX + 30, y + h / 2 + 2)
  ctx.textBaseline = 'alphabetic'
}

/** Dessine la carte et renvoie un PNG en dataURL. */
export async function genererImagePartage(d: DonneesImage): Promise<string> {
  if (typeof document !== 'undefined' && document.fonts?.ready) {
    try {
      await document.fonts.ready
    } catch {
      /* polices de repli */
    }
  }

  const canvas = document.createElement('canvas')
  canvas.width = L
  canvas.height = H
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('canvas indisponible')

  const { accent } = d.famille
  const M = 80

  // Fond + bandeau d'accent
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, L, H)
  ctx.fillStyle = accent
  ctx.fillRect(0, 0, L, 26)

  // Wordmark
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = INK
  ctx.font = "400 52px Spectral, Georgia, serif"
  const ma = 'ma'
  ctx.fillText(ma, M, 148)
  const wMa = ctx.measureText(ma).width
  ctx.font = "700 52px Spectral, Georgia, serif"
  ctx.fillText('république', M + wMa, 148)

  // Pastille de statut (à droite)
  pastille(ctx, L - M, 106, d.statut, accent)

  // Famille
  ctx.font = "400 58px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif"
  ctx.fillText(d.famille.emoji, M, 316)
  const wEmoji = ctx.measureText(d.famille.emoji).width
  ctx.fillStyle = accent
  ctx.font = "700 34px Archivo, system-ui, sans-serif"
  ctx.fillText(d.famille.libelle.toUpperCase(), M + wEmoji + 24, 308)

  // Titre d'appel (max 3 lignes)
  ctx.fillStyle = INK
  ctx.font = "700 84px Spectral, Georgia, serif"
  const tl = lignes(ctx, d.titre, L - M * 2, 3)
  let ty = 440
  for (const ligne of tl) {
    ctx.fillText(ligne, M, ty)
    ty += 100
  }

  // Section « au débat, par exemple » : du vrai contenu pour remplir
  const exemples = (d.exemples ?? []).slice(0, 3)
  if (exemples.length) {
    let ey = Math.max(ty + 70, 800)
    ctx.fillStyle = accent
    ctx.font = "700 32px Archivo, system-ui, sans-serif"
    ctx.fillText('AU DÉBAT, PAR EXEMPLE', M, ey)
    ey += 78
    ctx.font = "400 44px Spectral, Georgia, serif"
    for (const ex of exemples) {
      ctx.fillStyle = accent
      ctx.beginPath()
      ctx.arc(M + 10, ey - 14, 9, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = INK
      ctx.fillText(tronquer(ctx, ex, L - M * 2 - 44), M + 44, ey)
      ey += 82
    }
  }

  // Bloc votes (ou appel si aucun vote)
  const aTotal = d.accords + d.rejets
  const basY = 1360
  if (aTotal > 0) {
    const pctPour = Math.round((d.accords / aTotal) * 100)
    const pctContre = 100 - pctPour
    ctx.fillStyle = INK
    ctx.font = "700 92px Spectral, Georgia, serif"
    const n = aTotal.toLocaleString('fr-FR')
    ctx.fillText(n, M, basY)
    const wN = ctx.measureText(n).width
    ctx.fillStyle = MUTED
    ctx.font = "400 40px Archivo, system-ui, sans-serif"
    ctx.fillText('votes exprimés', M + wN + 22, basY)
    const jy = basY + 44
    const jw = L - M * 2
    const jh = 54
    const wPour = Math.round((jw * pctPour) / 100)
    ctx.fillStyle = accent
    ctx.fillRect(M, jy, wPour, jh)
    ctx.fillStyle = ROUGE
    ctx.fillRect(M + wPour, jy, jw - wPour, jh)
    const ly = jy + jh + 54
    ctx.font = "700 38px Archivo, system-ui, sans-serif"
    ctx.fillStyle = accent
    ctx.fillText(`◈ ${pctPour}% d'accord`, M, ly)
    ctx.fillStyle = ROUGE
    const cTxt = `${pctContre}% contre ✕`
    ctx.fillText(cTxt, L - M - ctx.measureText(cTxt).width, ly)
  } else {
    ctx.fillStyle = INK
    ctx.font = "700 52px Spectral, Georgia, serif"
    ctx.fillText('Sois une des premières voix.', M, basY + 10)
    ctx.fillStyle = MUTED
    ctx.font = "400 38px Archivo, system-ui, sans-serif"
    ctx.fillText('Ton vote pèse dès maintenant.', M, basY + 66)
  }

  // Footer : appel + QR mis en avant
  const fy = 1548
  ctx.strokeStyle = RULE
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(M, fy)
  ctx.lineTo(L - M, fy)
  ctx.stroke()

  // QR à droite, grand
  if (d.qrDataUrl) {
    try {
      const qr = await chargerImage(d.qrDataUrl)
      const qrTaille = 240
      const qx = L - M - qrTaille
      const qy = fy + 40
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(qx - 8, qy - 8, qrTaille + 16, qrTaille + 16)
      ctx.drawImage(qr, qx, qy, qrTaille, qrTaille)
      ctx.fillStyle = MUTED
      ctx.font = "400 26px Archivo, system-ui, sans-serif"
      const scan = 'Scanne pour juger'
      ctx.fillText(scan, qx + (qrTaille - ctx.measureText(scan).width) / 2, qy + qrTaille + 34)
    } catch {
      /* pas de QR : le reste tient */
    }
  }

  // Appel + URL propre + signature (à gauche du QR)
  ctx.fillStyle = INK
  ctx.font = "700 56px Spectral, Georgia, serif"
  ctx.fillText('Ton avis', M, fy + 100)
  ctx.fillText('compte →', M, fy + 160)
  ctx.fillStyle = accent
  ctx.font = "700 32px Archivo, system-ui, sans-serif"
  ctx.fillText(HOTE, M, fy + 216)
  if (d.pseudo) {
    ctx.fillStyle = MUTED
    ctx.font = "400 30px Archivo, system-ui, sans-serif"
    ctx.fillText(`Partagé par ${d.pseudo}`, M, fy + 262)
  }

  return canvas.toDataURL('image/png')
}

/** Convertit un dataURL en File, pour le partage natif (Web Share niveau 2). */
export function dataUrlVersFichier(dataUrl: string, nom: string): File {
  const [entete, b64] = dataUrl.split(',')
  const mime = /:(.*?);/.exec(entete)?.[1] ?? 'image/png'
  const bin = atob(b64)
  const octets = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) octets[i] = bin.charCodeAt(i)
  return new File([octets], nom, { type: mime })
}
