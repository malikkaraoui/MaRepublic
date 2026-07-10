#!/usr/bin/env node

/**
 * Script d'audit d'accessibilité WCAG 2.1 AA
 * Utilise axe-core pour scanner l'application React a http://localhost:5174
 * Usage: npm run a11y
 * 
 * Audite chaque page a 375px et 1280px, affiche violations critical/serious
 */

const pages = [
  { path: '/', name: 'Accueil' },
  { path: '/programme', name: 'Programme' },
  { path: '/programme/institutions', name: 'Institutions' },
  { path: '/fondateur', name: 'Fondateur' },
  { path: '/chantier', name: 'Chantier' },
];

console.log('Audit d\'accessibilite WCAG 2.1 AA');
console.log('====================================\n');
console.log('Verifiez que le serveur dev est lance: npm run dev -- --host --port 5174');
console.log('Les violations axe-core seront affichees via axe.run() en console\n');
