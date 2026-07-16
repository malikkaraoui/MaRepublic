// Page « Feuille de route » : le dossier présidentiel, on attaque par quoi ?
// Rend le Markdown source intégral (src/content/feuille-de-route.md), avec un
// sommaire sticky dans la marge gauche sur desktop.

import Markdown from '../components/Markdown'
import SommaireDoc from '../components/SommaireDoc'
import { content } from '../content'

export default function FeuilleDeRoute() {
  return (
    <div className="container document-layout">
      <SommaireDoc markdown={content.feuilleDeRoute} />
      <article className="document">
        <Markdown>{content.feuilleDeRoute}</Markdown>
      </article>
    </div>
  )
}
