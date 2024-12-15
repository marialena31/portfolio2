import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introduction to React Hooks',
    excerpt: 'Exploring the power of React Hooks and how they revolutionize state management',
    content: `
      # Understanding React Hooks

      React Hooks have transformed the way we write React components. Let's dive deep into their usage and benefits.

      ## Key Hooks

      1. useState
      2. useEffect
      3. useContext
      4. useReducer

      ## Example of useState

      \`\`\`typescript
      const [count, setCount] = useState(0);
      \`\`\`
    `,
    date: '2023-11-15',
    author: 'John Doe',
    tags: ['React', 'JavaScript', 'Hooks'],
    slug: 'introduction-to-react-hooks',
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
  }
];
