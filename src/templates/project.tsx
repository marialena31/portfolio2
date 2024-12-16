import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as styles from './project.module.scss';

interface ProjectData {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
  };
}

const ProjectTemplate: React.FC<PageProps<ProjectData>> = ({ data }) => {
  const project = data.project;

  return (
    <Layout>
      <SEO title={project.title} description={project.description} image={project.image} />
      <article className={styles.project}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <img src={project.image} alt={project.title} className={styles.image} />
          <p className={styles.description}>{project.description}</p>

          <div className={styles.links}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View on GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    project(id: { eq: $id }) {
      id
      title
      description
      image
      tags
      githubUrl
      liveUrl
    }
  }
`;

export default ProjectTemplate;
