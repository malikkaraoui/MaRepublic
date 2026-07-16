// Page « Document fondateur » : rend le Markdown source intégral, avec un
// sommaire sticky dans la marge gauche sur desktop.

import Markdown from '../components/Markdown'
import SommaireDoc from '../components/SommaireDoc'
import { content } from '../content'

export default function Fondateur() {
  return (
    <div className="container document-layout">
      <SommaireDoc markdown={content.documentFondateur} />
      <article className="document">
        <Markdown>{content.documentFondateur}</Markdown>
      </article>
    </div>
  )
}
