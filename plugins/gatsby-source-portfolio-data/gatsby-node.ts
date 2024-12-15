import { GatsbyNode } from 'gatsby';
import { createSchemaCustomization } from './schema';
import {
  projects,
  services,
  skills,
  blogPosts,
} from '../../src/data/mockData';

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Create nodes for projects
  projects.forEach(project => {
    const nodeMeta = {
      id: createNodeId(`project-${project.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Project',
        contentDigest: createContentDigest(project),
      },
    };

    createNode({ ...project, ...nodeMeta });
  });

  // Create nodes for services
  services.forEach(service => {
    const nodeMeta = {
      id: createNodeId(`service-${service.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Service',
        contentDigest: createContentDigest(service),
      },
    };

    createNode({ ...service, ...nodeMeta });
  });

  // Create nodes for skills
  skills.forEach(skill => {
    const nodeMeta = {
      id: createNodeId(`skill-${skill.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Skill',
        contentDigest: createContentDigest(skill),
      },
    };

    createNode({ ...skill, ...nodeMeta });
  });

  // Create nodes for blog posts
  blogPosts.forEach(post => {
    const nodeMeta = {
      id: createNodeId(`post-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'BlogPost',
        contentDigest: createContentDigest(post),
      },
    };

    createNode({ ...post, ...nodeMeta });
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  createSchemaCustomization(actions);
};
