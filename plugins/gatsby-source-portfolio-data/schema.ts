import { Actions } from 'gatsby';

interface SchemaCustomizationArgs {
  actions: Actions;
}

export const createSchemaCustomization = ({ actions }: SchemaCustomizationArgs): void => {
  const { createTypes } = actions;
  
  const typeDefs = `
    type Project implements Node {
      id: ID!
      title: String!
      description: String!
      image: String!
      tags: [String!]!
      githubUrl: String
      liveUrl: String
    }

    type Service implements Node {
      id: ID!
      title: String!
      description: String!
      icon: String!
    }

    type Skill implements Node {
      id: ID!
      name: String!
      level: Int!
      category: String!
    }

    type BlogPost implements Node {
      id: ID!
      title: String!
      excerpt: String!
      content: String!
      date: Date!
      author: String!
      tags: [String!]!
      slug: String!
    }
  `;

  createTypes(typeDefs);
};
