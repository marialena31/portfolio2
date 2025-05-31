import { Service } from '../types/data';

export const services: Service[] = [
  {
    id: '1',
    title: 'Réponse à appel d’offre',
    description: 'Je vous aide à construire une réponse claire, cadrée et réaliste.',
    icon: 'briefcase',
    features: [
      'Analyse du besoin, des risques et du périmètre',
      'Chiffrage réaliste, planning, livrables',
      'Livrable structuré pour agences, ESN ou DSI',
    ],
  },
  {
    id: '2',
    title: 'Cadrage projet & pilotage transverse',
    description: 'Je (re)cadre le projet côté client comme côté prestataire.',
    icon: 'target',
    features: [
      'Définition du MVP, backlog et rôles',
      'Mise en place des rituels projet',
      'Relance de projet figé ou en crise',
    ],
  },
  {
    id: '3',
    title: 'Constitution & coordination d’équipe',
    description: 'Je construis une équipe projet adaptée (interne, freelance, offshore).',
    icon: 'users',
    features: [
      'Sélection des profils',
      'Organisation hybride ou full remote',
      'Suivi de production et gouvernance',
    ],
  },
  {
    id: '4',
    title: 'Conformité intégrée & sécurisation projet',
    description: 'J’intègre les exigences RGPD, PCI, NIS2, accessibilité… dès le cadrage.',
    icon: 'shield-check',
    features: [
      'Cartographie des responsabilités',
      'Sécurisation des flux et dépendances',
      'Pilotage pragmatique, pas de surcouche inutile',
    ],
  },
  {
    id: '5',
    title: 'Mentorat PO, CP & formation tech',
    description: 'J’accompagne vos équipes sur le terrain, sans PowerPoint.',
    icon: 'graduation-cap',
    features: [
      'Backlog, priorisation, arbitrages',
      'Coaching dev/PO/chef de projet',
      'Scénarios pédagogiques personnalisés',
    ],
  },
];
