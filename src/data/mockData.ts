import { Project, Service, Skill, BlogPost } from '../types';

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
  // Add more projects as needed
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: 'code',
  },
  // Add more services as needed
];

export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    level: 90,
    category: 'frontend',
  },
  // Add more skills as needed
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Gatsby',
    excerpt: 'Learn how to build blazing-fast websites with Gatsby',
    date: '2023-12-15',
    slug: 'getting-started-with-gatsby',
    featuredImage: '/images/blog/gatsby.jpg',
    tags: ['Gatsby', 'React', 'JavaScript'],
  },
  // Add more blog posts as needed
];
