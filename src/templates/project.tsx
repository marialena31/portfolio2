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
  }
}

const ProjectTemplate: React.FC<PageProps<ProjectData>> = ({ data }) => {
  const { project } = data;

  return (
    <Layout>
      <SEO 
        title={project.title} 
        description={project.description}
        image={project.image}
      />
      <article className={styles.project}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.tags}>
            {project.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} className={styles.image} />
          </div>

          <div className={styles.description}>
            <p>{project.description}</p>
          </div>

          <div className={styles.links}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir sur GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.primary}`}
              >
                Voir le site
              </a>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($id: String!) {
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
