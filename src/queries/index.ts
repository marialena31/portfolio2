import { graphql } from 'gatsby';

export const projectQuery = graphql`
  query ProjectQuery($id: String!) {
    project(id: { eq: $id }) {
      id
      title
      description
      image
      tags
      githubUrl
      liveUrl
      slug
    }
  }
`;

export const allProjectsQuery = graphql`
  query AllProjectsQuery {
    allProjects {
      nodes {
        id
        title
        description
        image
        tags
        githubUrl
        liveUrl
        slug
      }
    }
  }
`;

export const skillQuery = graphql`
  query SkillQuery($id: String!) {
    skill(id: { eq: $id }) {
      id
      name
      level
      category
      icon
    }
  }
`;

export const allSkillsQuery = graphql`
  query AllSkillsQuery {
    allSkills {
      nodes {
        id
        name
        level
        category
        icon
      }
    }
  }
`;
