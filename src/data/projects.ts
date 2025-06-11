import { Project, createSlug, validateProject } from '../types/data';

const createProject = (
  id: string,
  title: string,
  description: string,
  image: string,
  tags: string[],
  descriptionSeo?: string
): Project => ({
  id,
  title,
  description,
  image,
  tags,
  slug: createSlug(title),
  descriptionSeo,
});

export const portfolio: Project[] = [
  createProject(
    '1',
    'Analyse stratégique & chiffrage – Projet Magento B2C',
    'Extrait de cadrage d’un projet e-commerce grand public. Objectif : transformer un besoin métier flou en backlog structuré, avec chiffrage, options d’architecture et arbitrages client.',
    '/images/portfolio/portfolio1.JPG',
    ['Magento B2C', 'Cadrage', 'Architecture', 'Pilotage'],
    'Découvrez comment cadrer un projet Magento B2C dès les premières étapes : analyse stratégique, chiffrage, structuration du backlog et accompagnement client pour garantir la réussite de la transformation digitale.'
  ),
  createProject(
    '3',
    'Upgrade Magento 2.4.5 – Cadrage stratégique & pilotage projet',
    'Support d’animation produit pour accompagner un upgrade Magento critique : anticipation des risques, arbitrages des fonctionnalités, gouvernance et coordination des équipes.',
    '/images/portfolio/portfolio2.JPG',
    ['Upgrade', 'Magento 2.4.5', 'Planning', 'DevOps'],
    "Exemple d'accompagnement sur un upgrade Magento 2.4.5 : gestion des risques, arbitrages techniques, gouvernance projet et coordination des équipes pour une migration réussie."
  ),
  createProject(
    '6',
    'Plan de réversibilité – Marketplace mobile',
    'Document de pilotage conçu pour cadrer une sortie de prestation en douceur : transfert des accès, documentation, reprise de backlog, formation et support à distance.',
    '/images/portfolio/portfolio3.JPG',
    ['Réversibilité', 'Marketplace', 'TMA', 'Support offshore'],
    'Découvrez comment piloter une réversibilité de marketplace mobile : transfert de compétences, sécurisation des accès, documentation et accompagnement à la reprise pour une transition sans accroc.'
  ),
  createProject(
    '8',
    'Scénario pédagogique – Formation Magento & architecture SI',
    'Exemple de support de formation technique à destination de développeurs ou de Product Owners : composants clés de Magento, organisation des flux, enjeux d’intégration SI.',
    '/images/portfolio/portfolio4.JPG',
    ['Formation', 'Architecture SI', 'Magento', 'PO'],
    "Formation sur l'architecture Magento et l'intégration SI : pédagogie, explications des flux, bonnes pratiques pour développeurs et Product Owners en contexte e-commerce complexe."
  ),
];

// Validate all projects at runtime
portfolio.forEach((project, index) => {
  if (!validateProject(project)) {
    throw new Error(`Invalid project data at index ${index}`);
  }
});
