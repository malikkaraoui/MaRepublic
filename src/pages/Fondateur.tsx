// Page « Document fondateur » : rend le Markdown source intégral.

import Markdown from '../components/Markdown'
import { content } from '../content'

export default function Fondateur() {
  return (
    <article className="container container--reading document">
      <Markdown>{content.documentFondateur}</Markdown>
    </article>
  )
}
