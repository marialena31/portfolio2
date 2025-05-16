import { ContentBlock } from '../components/ContentRenderer';

export const conseilsProContent: ContentBlock[] = [
  {
    type: 'heading',
    level: 1,
    children: 'Conseils de pro – Galères & Réponses cash',
  },
  {
    type: 'paragraph',
    children:
      "Pas de jargon, pas de baratin. Voici 10 situations que je rencontre chaque semaine chez des e-commerçants… et ce que je recommande pour s'en sortir.",
  },
  {
    type: 'paragraph',
    children:
      "👉 Vous vous reconnaissez dans l'un de ces cas ?\n\n" +
      '<a href="https://linkedin.com/in/marialenapietri" class="underline text-blue-600 hover:text-blue-800" target="_blank">LinkedIn</a>' +
      '\nou prenez\n\n' +
      '<a href="/contact" class="underline text-blue-600 hover:text-blue-800">1h d\'audit gratuite</a>' +
      '\npour faire le point.',
  },
  {
    type: 'heading',
    level: 2,
    children: '💨 Mon site est lent et je ne sais pas pourquoi',
  },
  {
    type: 'paragraph',
    children:
      "C'est peut-être Magento. Ou l'hébergeur. Ou un plugin WordPress. Tant qu'on n'a pas de mesures, ce ne sont que des hypothèses.",
  },
  {
    type: 'list',
    items: [
      'Benchmarks simples : GTmetrix, New Relic, logs serveur',
      'Audit de surcharge (images, JS, appels API, cron Magento)',
      "Vérifier l'infogérance (souvent le maillon faible)",
      'Prioriser les actions à impact visible',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '💰 Mon budget est limité mais je veux un site performant',
  },
  {
    type: 'paragraph',
    children: "Le meilleur n'est pas toujours le plus cher. Concentrez-vous sur l'essentiel.",
  },
  {
    type: 'list',
    items: [
      'Audit technique préalable',
      'Solution adaptée à votre volume',
      'Budget de maintenance inclus',
      'Équipe réduite mais qualifiée',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '🎯 Je veux augmenter mes ventes mais je ne sais pas par où commencer',
  },
  {
    type: 'paragraph',
    children: "Les conversions ne viennent pas du hasard. Il faut d'abord comprendre votre client.",
  },
  {
    type: 'list',
    items: [
      'Analyse des parcours clients',
      'Tests A/B sur les pages clés',
      'Optimisation des formulaires',
      'Personnalisation des offres',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '🛠️ Mon site est en maintenance constante',
  },
  {
    type: 'paragraph',
    children:
      "Une maintenance réactive n'est pas une solution à long terme. Il faut identifier les causes profondes.",
  },
  {
    type: 'list',
    items: [
      'Audit des plugins et extensions',
      'Nettoyage du code',
      'Documentation des process',
      "Formation de l'équipe",
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '📊 Je ne sais pas mesurer la performance de mon site',
  },
  {
    type: 'paragraph',
    children: 'Sans indicateurs clairs, impossible de prendre des décisions éclairées.',
  },
  {
    type: 'list',
    items: [
      'KPIs clés à suivre',
      'Tableaux de bord automatisés',
      'Alertes en cas de baisse',
      'Rapports mensuels détaillés',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: "👥 J'ai besoin d'une équipe mais je ne peux pas tout recruter",
  },
  {
    type: 'paragraph',
    children:
      "Une équipe polyvalente et bien organisée vaut mieux qu'une équipe nombreuse mais inefficace.",
  },
  {
    type: 'list',
    items: [
      'Cartographie des compétences',
      'Matrice RACI',
      'Process de travail clairs',
      'Outils de collaboration',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '🎯 Je veux lancer une nouvelle fonctionnalité',
  },
  {
    type: 'paragraph',
    children: "L'innovation ne doit pas se faire au détriment de la stabilité.",
  },
  {
    type: 'list',
    items: ['Test de concept', 'Plan de migration', 'Budget de recul', 'Suivi des impacts'],
  },
  {
    type: 'heading',
    level: 2,
    children: '🎯 Je veux moderniser mon site mais je ne sais pas par où commencer',
  },
  {
    type: 'paragraph',
    children: "Une refonte totale n'est pas toujours nécessaire. Identifiez les points critiques.",
  },
  {
    type: 'list',
    items: [
      'Audit UX/UI',
      'Priorisation des améliorations',
      'Plan de migration',
      'Budget de recul',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '🎯 Je veux améliorer mon SEO mais je ne sais pas par où commencer',
  },
  {
    type: 'paragraph',
    children: "Le SEO n'est pas une baguette magique. Il faut une stratégie claire et mesurable.",
  },
  {
    type: 'list',
    items: [
      'Audit technique',
      'Analyse des mots-clés',
      'Optimisation des contenus',
      'Suivi des résultats',
    ],
  },
  {
    type: 'paragraph',
    children: "📩 Envie d'en parler ?",
  },
  {
    type: 'paragraph',
    children:
      '👉\n<a href="/contact" class="underline text-blue-600 hover:text-blue-800">Prenez rendez-vous pour 1h gratuite</a>\n\n' +
      '👉 Ou retrouvez-moi sur\n' +
      '<a href="https://linkedin.com/in/marialenapietri" class="underline text-blue-600 hover:text-blue-800" target="_blank">LinkedIn</a>' +
      '\npour poser vos questions, me défier ou partager votre propre cas.',
  },
];
