import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building modern, responsive web applications using the latest technologies',
    icon: 'code',
    features: [
      'Custom website development',
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Responsive design',
    ],
  },
  {
    id: '2',
    title: 'API Development',
    description: 'Designing and implementing robust RESTful and GraphQL APIs',
    icon: 'api',
    features: [
      'RESTful API design',
      'GraphQL API development',
      'API documentation',
      'Performance optimization',
    ],
  },
  {
    id: '3',
    title: 'Technical Consulting',
    description: 'Providing expert advice on technology choices and architecture',
    icon: 'consulting',
    features: [
      'Technology stack selection',
      'Architecture design',
      'Code review',
      'Performance auditing',
    ],
  },
];
