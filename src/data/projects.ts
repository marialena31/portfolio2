import { Project, createSlug, validateProject } from '../types/data';

const createProject = (
  id: string,
  title: string,
  description: string,
  image: string,
  tags: string[],
  githubUrl?: string,
  liveUrl?: string
): Project => ({
  id,
  title,
  description,
  image,
  tags,
  githubUrl: githubUrl as Project['githubUrl'],
  liveUrl: liveUrl as Project['liveUrl'],
  slug: createSlug(title),
});

export const projects: Project[] = [
  createProject(
    '1',
    'E-commerce Platform',
    'A modern e-commerce platform built with React and Node.js',
    '/images/projects/ecommerce.jpg',
    ['React', 'Node.js', 'MongoDB'],
    'https://github.com/yourusername/ecommerce',
    'https://ecommerce-demo.com'
  ),
  createProject(
    '2',
    'Portfolio Website',
    'A personal portfolio website built with Gatsby and TypeScript',
    '/images/projects/portfolio.jpg',
    ['Gatsby', 'TypeScript', 'GraphQL'],
    'https://github.com/yourusername/portfolio',
    'https://portfolio-demo.com'
  ),
  createProject(
    '3',
    'Task Management App',
    'A collaborative task management application',
    '/images/projects/taskmanager.jpg',
    ['Vue.js', 'Express', 'PostgreSQL'],
    'https://github.com/yourusername/taskmanager',
    'https://taskmanager-demo.com'
  ),
];

// Validate all projects at runtime
projects.forEach((project, index) => {
  if (!validateProject(project)) {
    throw new Error(`Invalid project data at index ${index}`);
  }
});
