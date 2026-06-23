// Rendu d'un document Markdown en HTML accessible.
//
// - remark-gfm : tableaux, listes de tâches, barré, autoliens (le document
//   fondateur et la fiche Axe 1 utilisent largement les tableaux GFM).
// - rehype-slug : attribue un `id` à chaque titre.
// - rehype-autolink-headings : enveloppe le titre dans une ancre cliquable,
//   ce qui permet le partage de liens profonds vers une section.

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface MarkdownProps {
  children: string
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: 'heading-anchor' } }],
        ]}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
