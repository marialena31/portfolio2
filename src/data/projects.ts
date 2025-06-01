import { Project, createSlug, validateProject } from '../types/data';

const createProject = (
  id: string,
  title: string,
  description: string,
  image: string,
  tags: string[]
): Project => ({
  id,
  title,
  description,
  image,
  tags,
  slug: createSlug(title),
});

export const portfolio: Project[] = [
  createProject(
    '1',
    'Analyse stratégique & chiffrage – Projet Magento B2C',
    'Extrait de cadrage d’un projet e-commerce grand public. Objectif : transformer un besoin métier flou en backlog structuré, avec chiffrage, options d’architecture et arbitrages client.',
    '/images/portfolio/portfolio1.JPG',
    ['Magento B2C', 'Cadrage', 'Architecture', 'Pilotage']
  ),
  createProject(
    '3',
    'Upgrade Magento 2.4.5 – Cadrage stratégique & pilotage projet',
    'Support d’animation produit pour accompagner un upgrade Magento critique : anticipation des risques, arbitrages des fonctionnalités, gouvernance et coordination des équipes.',
    '/images/portfolio/portfolio2.JPG',
    ['Upgrade', 'Magento 2.4.5', 'Planning', 'DevOps']
  ),
  createProject(
    '6',
    'Plan de réversibilité – Marketplace mobile',
    'Document de pilotage conçu pour cadrer une sortie de prestation en douceur : transfert des accès, documentation, reprise de backlog, formation et support à distance.',
    '/images/portfolio/portfolio3.JPG',
    ['Réversibilité', 'Marketplace', 'TMA', 'Support offshore']
  ),
  createProject(
    '8',
    'Scénario pédagogique – Formation Magento & architecture SI',
    'Exemple de support de formation technique à destination de développeurs ou de Product Owners : composants clés de Magento, organisation des flux, enjeux d’intégration SI.',
    '/images/portfolio/portfolio4.JPG',
    ['Formation', 'Architecture SI', 'Magento', 'PO']
  ),
];

// Validate all projects at runtime
portfolio.forEach((project, index) => {
  if (!validateProject(project)) {
    throw new Error(`Invalid project data at index ${index}`);
  }
});
