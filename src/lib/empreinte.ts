// Empreinte d'un email : sha256(email en minuscules), hexadécimal minuscule.
//
// C'est la seule forme sous laquelle un email circule dans la base : les
// règles serveur recalculent la même empreinte côté Firestore pour vérifier
// qu'elle correspond bien au compte connecté. Aucun email en clair ne sort
// de Firebase Auth.

export async function empreinteEmail(email: string): Promise<string> {
  const donnees = new TextEncoder().encode(email.trim().toLowerCase())
  const hash = await crypto.subtle.digest('SHA-256', donnees)
  return Array.from(new Uint8Array(hash))
    .map((o) => o.toString(16).padStart(2, '0'))
    .join('')
}
