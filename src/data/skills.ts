import { Skill, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces',
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server-side applications and API development',
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'Deployment, automation, and cloud infrastructure',
  },
];

export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: 'react',
  },
  {
    id: '2',
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    icon: 'typescript',
  },
  {
    id: '3',
    name: 'Node.js',
    level: 80,
    category: 'backend',
    icon: 'nodejs',
  },
  {
    id: '4',
    name: 'GraphQL',
    level: 75,
    category: 'backend',
    icon: 'graphql',
  },
  {
    id: '5',
    name: 'Docker',
    level: 70,
    category: 'devops',
    icon: 'docker',
  },
  {
    id: '6',
    name: 'AWS',
    level: 65,
    category: 'devops',
    icon: 'aws',
  },
];
