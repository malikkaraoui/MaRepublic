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

export interface DonneesImage {
  famille: { libelle: string; emoji: string; accent: string }
  titre: string
  /** pour + pistes (accords) et contre (rejets). Si 0/0, l'image montre l'appel sans jauge. */
  accords: number
  rejets: number
  statut: string
  lien: string
  pseudo?: string
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
  ctx.fillText(ma, M, 150)
  const wMa = ctx.measureText(ma).width
  ctx.font = "700 52px Spectral, Georgia, serif"
  ctx.fillText('république', M + wMa, 150)

  // Pastille de statut (à droite)
  pastille(ctx, L - M, 108, d.statut, accent)

  // Famille
  ctx.font = "400 60px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif"
  ctx.fillText(d.famille.emoji, M, 330)
  const wEmoji = ctx.measureText(d.famille.emoji).width
  ctx.fillStyle = accent
  ctx.font = "700 34px Archivo, system-ui, sans-serif"
  ctx.fillText(d.famille.libelle.toUpperCase(), M + wEmoji + 24, 322)

  // Titre d'appel
  ctx.fillStyle = INK
  ctx.font = "700 88px Spectral, Georgia, serif"
  const tl = lignes(ctx, d.titre, L - M * 2, 4)
  let ty = 470
  for (const ligne of tl) {
    ctx.fillText(ligne, M, ty)
    ty += 104
  }

  // Bloc bas : votes + footer
  const aTotal = d.accords + d.rejets
  const basY = 1360

  if (aTotal > 0) {
    const pctPour = Math.round((d.accords / aTotal) * 100)
    const pctContre = 100 - pctPour
    // Grand nombre
    ctx.fillStyle = INK
    ctx.font = "700 96px Spectral, Georgia, serif"
    const n = aTotal.toLocaleString('fr-FR')
    ctx.fillText(n, M, basY)
    const wN = ctx.measureText(n).width
    ctx.fillStyle = MUTED
    ctx.font = "400 40px Archivo, system-ui, sans-serif"
    ctx.fillText('votes exprimés', M + wN + 22, basY)
    // Jauge
    const jy = basY + 46
    const jw = L - M * 2
    const jh = 54
    const wPour = Math.round((jw * pctPour) / 100)
    ctx.fillStyle = accent
    ctx.fillRect(M, jy, wPour, jh)
    ctx.fillStyle = ROUGE
    ctx.fillRect(M + wPour, jy, jw - wPour, jh)
    // Légende
    const ly = jy + jh + 54
    ctx.font = "700 38px Archivo, system-ui, sans-serif"
    ctx.fillStyle = accent
    ctx.fillText(`◈ ${pctPour}% d'accord`, M, ly)
    ctx.fillStyle = ROUGE
    const cTxt = `${pctContre}% contre ✕`
    ctx.fillText(cTxt, L - M - ctx.measureText(cTxt).width, ly)
  } else {
    ctx.fillStyle = MUTED
    ctx.font = "400 44px Spectral, Georgia, serif"
    ctx.fillText('Sois une des premières voix.', M, basY)
  }

  // Footer
  const fy = 1660
  ctx.strokeStyle = RULE
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(M, fy)
  ctx.lineTo(L - M, fy)
  ctx.stroke()

  ctx.fillStyle = INK
  ctx.font = "700 46px Spectral, Georgia, serif"
  ctx.fillText('Ton avis compte →', M, fy + 78)
  ctx.fillStyle = MUTED
  ctx.font = "400 32px Archivo, system-ui, sans-serif"
  ctx.fillText(d.lien.replace(/^https?:\/\//, ''), M, fy + 128)
  if (d.pseudo) {
    ctx.fillStyle = accent
    ctx.font = "700 32px Archivo, system-ui, sans-serif"
    ctx.fillText(`Partagé par ${d.pseudo}`, M, fy + 178)
  }

  // QR en bas à droite
  if (d.qrDataUrl) {
    try {
      const qr = await chargerImage(d.qrDataUrl)
      const s = 190
      const qx = L - M - s
      const qy = fy + 46
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(qx - 6, qy - 6, s + 12, s + 12)
      ctx.drawImage(qr, qx, qy, s, s)
    } catch {
      /* pas de QR : tant pis, le reste tient */
    }
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
