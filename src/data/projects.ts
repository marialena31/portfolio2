import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Gatsby and TypeScript',
    image: '/images/projects/portfolio.jpg',
    tags: ['Gatsby', 'TypeScript', 'GraphQL'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio-demo.com',
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A collaborative task management application',
    image: '/images/projects/taskmanager.jpg',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
  },
];
