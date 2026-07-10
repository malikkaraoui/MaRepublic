// Page « Feuille de route » : le dossier présidentiel, on attaque par quoi ?
// Rend le Markdown source intégral (src/content/feuille-de-route.md).

import Markdown from '../components/Markdown'
import { content } from '../content'

export default function FeuilleDeRoute() {
  return (
    <article className="container container--reading document">
      <Markdown>{content.feuilleDeRoute}</Markdown>
    </article>
  )
}
