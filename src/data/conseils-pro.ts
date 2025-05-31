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
    children: '💥 Mon projet Magento tourne au ralenti',
  },
  {
    type: 'paragraph',
    children:
      "Backlog gelé, développeurs qui ne répondent plus, tickets non priorisés : ce n'est pas une fatalité.",
  },
  {
    type: 'list',
    items: [
      'Reprendre la main sur le backlog (tri, priorisation, planification)',
      'Vérifier les process de versioning et de déploiement',
      'Identifier les points de blocage humains ou techniques',
      'Instaurer un reporting simple et transparent',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '🔐 Je crains pour la sécurité de mon site',
  },
  {
    type: 'paragraph',
    children:
      'Les failles ne sont pas toujours visibles. Un chmod mal placé, une extension mal maintenue, un backup inexistant… Et tout peut s’écrouler.',
  },
  {
    type: 'list',
    items: [
      'Audit de configuration et des droits serveur',
      'Contrôle des modules installés (officiels ou non)',
      'Mise en place d’un plan de sauvegarde fiable',
      'Vérification des accès et des comptes obsolètes',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '📦 Mon projet est offshore, mais je n’ai plus de visibilité',
  },
  {
    type: 'paragraph',
    children: 'Le décalage horaire n’est pas une excuse. Il faut du pilotage, pas du miracle.',
  },
  {
    type: 'list',
    items: [
      'Mise en place de points quotidiens ou hebdo',
      'Centralisation des infos dans un outil partagé (Jira, Notion…)',
      'Règles claires de QA, recette, livrables',
      'Un interlocuteur unique, dédié au projet',
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: '💡 Je n’ai pas de specs, mais j’ai une idée claire',
  },
  {
    type: 'paragraph',
    children: 'Un bon cadrage ne tue pas la créativité. Il la rend viable.',
  },
  {
    type: 'list',
    items: [
      'Atelier de cadrage fonctionnel (1 à 2h)',
      'Formalisation des parcours, priorisation des besoins',
      'Validation du périmètre avant devis ou lancement',
      'Spécifications évolutives, adaptées au budget',
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
