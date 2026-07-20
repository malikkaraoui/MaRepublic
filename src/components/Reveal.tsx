// Révèle son contenu quand il entre dans le champ de vision, avec un délai
// optionnel pour un effet de cascade d'un élément à l'autre.
//
// L'animation est portée par GSAP + ScrollTrigger (translation + fondu,
// une seule fois). Avec prefers-reduced-motion, aucune animation n'est créée
// et le contenu reste simplement visible.

import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '../lib/gsap'

export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        el,
        { y: 26, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          delay: delay / 1000,
          ease: 'power3.out',
          clearProps: 'transform,visibility',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        },
      )
    })
    return () => mm.revert()
  }, [delay])

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
