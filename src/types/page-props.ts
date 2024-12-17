import type { PageProps as GatsbyPageProps } from 'gatsby';

export interface ProjectQuery {
  portfolioProject: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
  };
}

export interface PortfolioQuery {
  allProject: {
    nodes: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
      tags: string[];
      githubUrl: string;
      liveUrl: string;
      slug: string;
    }>;
  };
}

export type ProjectPageProps = GatsbyPageProps<ProjectQuery>;
export type PortfolioPageProps = GatsbyPageProps<PortfolioQuery>;

// Example usage in a component:
/*
import type { ProjectPageProps } from '../types/page-props';

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const project = data.portfolioProject;
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    
    </div>
  );
};
*/
