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
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Gatsby and TypeScript',
    image: '/images/projects/portfolio.jpg',
    tags: ['Gatsby', 'TypeScript', 'SCSS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio-demo.com',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: 'code',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces with great user experience',
    icon: 'palette',
  },
  {
    id: '3',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native',
    icon: 'smartphone',
  },
];

export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    level: 90,
    category: 'frontend',
  },
  {
    id: '2',
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
  },
  {
    id: '3',
    name: 'Node.js',
    level: 80,
    category: 'backend',
  },
  {
    id: '4',
    name: 'Docker',
    level: 75,
    category: 'tools',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Gatsby',
    excerpt: 'Learn how to build blazing-fast websites with Gatsby',
    content: `
      # Getting Started with Gatsby

      Gatsby is a powerful static site generator that helps you build blazing-fast websites.
      In this article, we'll explore the basics of Gatsby and how to get started with your first project.

      ## What is Gatsby?

      Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.
      It combines the best parts of React, GraphQL, and various front-end tools into one very enjoyable developer experience.

      ## Why Choose Gatsby?

      1. Performance out of the box
      2. Great developer experience
      3. Rich plugin ecosystem
      4. GraphQL data layer
      5. Static site generation
    `,
    date: '2023-12-15',
    author: 'John Doe',
    tags: ['Gatsby', 'React', 'JavaScript'],
    slug: 'getting-started-with-gatsby',
  },
  {
    id: '2',
    title: 'Mastering TypeScript',
    excerpt: 'Deep dive into TypeScript features and best practices',
    content: `
      # Mastering TypeScript

      TypeScript is a powerful superset of JavaScript that adds static typing and other features.
      Let's explore some advanced concepts and best practices.

      ## Why TypeScript?

      TypeScript adds several key features to JavaScript:

      1. Static typing
      2. Interface definitions
      3. Generics
      4. Decorators
      5. Enhanced IDE support

      ## Getting Started

      First, install TypeScript globally:
      \`\`\`bash
      npm install -g typescript
      \`\`\`
    `,
    date: '2023-12-14',
    author: 'Jane Smith',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    slug: 'mastering-typescript',
  },
];
