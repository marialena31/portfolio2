import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as styles from './project.module.scss';
import { ProjectTemplateQueryQuery } from '../types/graphql-types';

const ProjectTemplate: React.FC<PageProps<ProjectTemplateQueryQuery>> = ({ data }) => {
  const project = data.portfolioProject;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        pageName="project"
      />
      <article className={styles.project}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.tags}>
            {project.tags?.map((tag: string, index: number) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          {project.image && (
            <img src={project.image} alt={project.title} className={styles.image} />
          )}
          <p className={styles.description}>{project.description}</p>

          <div className={styles.links}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
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
