import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

import { ProjectTemplateQueryQuery } from '../types/graphql-types';

type ProjectWithSeo = ProjectTemplateQueryQuery['portfolioProject'] & { descriptionSeo?: string };

const ProjectTemplate: React.FC<PageProps<ProjectTemplateQueryQuery>> = ({ data }) => {
  const project = data.portfolioProject as ProjectWithSeo;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.descriptionSeo || project.description}
        image={project.image}
        pageName="project"
      />
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag: string, index: number) => (
              <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose max-w-none mb-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full object-cover mb-4"
            />
          )}
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="flex gap-4 mt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary-dark transition-colors"
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary-dark transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    portfolioProject(id: { eq: $id }) {
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

export default ProjectTemplate;
