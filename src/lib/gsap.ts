// Point d'entrée GSAP unique : le plugin ScrollTrigger n'est enregistré
// qu'une fois, et tout le monde importe d'ici.
//
// Convention du site : chaque animation passe par gsap.matchMedia() avec la
// condition « prefers-reduced-motion: no-preference », pour que le mouvement
// disparaisse entièrement chez qui l'a désactivé.

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
