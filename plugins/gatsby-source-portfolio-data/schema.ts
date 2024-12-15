import { Actions } from 'gatsby';

export const createSchemaCustomization = ({ createTypes }: Actions): void => {
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
      date: String!
      slug: String!
      featuredImage: String
      tags: [String!]!
    }
  `;

  createTypes(typeDefs);
};
