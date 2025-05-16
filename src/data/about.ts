import { ContentBlock } from '../components/ContentRenderer';

export const aboutContent: ContentBlock[] = [
  {
    type: 'heading',
    level: 1,
    children: 'À propos de moi',
  },
  {
    type: 'paragraph',
    children:
      "Je m'appelle Maria-Lena Pietri. Depuis plus de 15 ans, j'interviens sur des projets e-commerce complexes, en tant que cheffe de projet, responsable fonctionnelle ou product owner. Mon parcours m'a conduite à piloter des refontes Magento, à structurer des bases produits, à mettre en place des PIM, à cadrer des flux entre ERP, e-commerce et CRM.",
  },
  {
    type: 'quote',
    children:
      "Mon expérience m'a appris que trop de projets échouent non par manque de compétence technique, mais par manque de pilotage, de clarté, de relais fonctionnel solide.",
    cite: 'Maria-Lena Pietri',
  },
  {
    type: 'paragraph',
    children:
      "C'est là que j'interviens : pour remettre du lien, du cadre, de la méthode. Je fais le pont entre les équipes techniques et les parties prenantes métier, en veillant à ce que chaque projet soit mené à bien avec rigueur et professionnalisme.",
  },
  {
    type: 'divider',
  },
  {
    type: 'heading',
    level: 2,
    children: 'Ma mission',
  },
  {
    type: 'paragraph',
    children:
      "Je parle les deux langues : celle du client, avec ses enjeux business et stratégiques ; et celle des développeurs, avec ses contraintes techniques et ses besoins de précision. Mon métier, c'est de faire le pont. D'éviter les zones grises, de sécuriser les échanges, de garantir que les livrables correspondent à ce qui a été demandé.",
  },
  {
    type: 'heading',
    level: 3,
    children: 'Mon rôle : facilitatrice, traductrice, garante de qualité',
  },
  {
    type: 'paragraph',
    children: "J'interviens à toutes les étapes clés de vos projets :",
  },
  {
    type: 'list',
    items: [
      "Coordination d'équipes internationales (Inde, Maroc, Madagascar, Pologne, Panama)",
      'Gestion de la relation client et des parties prenantes',
      'Définition des spécifications fonctionnelles',
      'Suivi du développement et assurance qualité',
      'Formation et documentation utilisateur',
    ],
  },

  {
    type: 'divider',
  },
  {
    type: 'heading',
    level: 2,
    children: 'Mon approche',
  },
  {
    type: 'paragraph',
    children:
      "Je ne vends pas du code. Je ne vends pas de la main d'œuvre. Je vends de la rigueur, de la transparence, de la coordination.",
  },
  {
    type: 'list',
    items: [
      'Communication claire et régulière',
      'Suivi rigoureux des projets',
      'Respect des délais et des budgets',
      'Qualité des livrables',
      'Adaptabilité aux besoins spécifiques',
    ],
  },
  {
    type: 'paragraph',
    children:
      'Je vous accompagne pour que vos projets Magento, WordPress ou PIM externalisés soient plus sûrs, mieux cadrés, et véritablement réussis.',
  },
  {
    type: 'divider',
  },
  {
    type: 'heading',
    level: 2,
    children: 'Localisation & mode de travail',
  },
  {
    type: 'paragraph',
    children:
      'Je travaille à distance, basée à Toulouse, avec des partenaires sélectionnés selon les besoins (Magento, WordPress, PIM, saisie produit, infogérance). Je suis disponible pour des missions en télétravail ou en déplacement ponctuel selon les besoins du projet.',
  },
  {
    type: 'paragraph',
    children: 'Je suis disponible pour :',
  },
  {
    type: 'list',
    items: [
      'Missions forfaitaires ou longue durée',
      'Audits flash ou reprises de projets en difficulté',
      'Coordination en marque blanche pour agences',
      'Formations et accompagnement des équipes',
      'Conseil en stratégie e-commerce',
    ],
  },
  {
    type: 'paragraph',
    children:
      "Si vous avez un projet offshore ou un doute sur un partenaire existant, je peux vous aider à y voir clair. Et surtout à reprendre la main. N'hésitez pas à me contacter pour discuter de votre projet et voir comment je peux vous aider à le mener à bien.",
  },
];
