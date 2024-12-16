import type { PageProps as GatsbyPageProps } from 'gatsby';
import type { ProjectQuery, AllProjectsQuery, SkillQuery, AllSkillsQuery } from './graphql-types';

export type ProjectPageProps = GatsbyPageProps<ProjectQuery>;
export type ProjectsPageProps = GatsbyPageProps<AllProjectsQuery>;
export type SkillPageProps = GatsbyPageProps<SkillQuery>;
export type SkillsPageProps = GatsbyPageProps<AllSkillsQuery>;

// Example usage in a component:
/*
import type { ProjectPageProps } from '../types/page-props';

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const project = data.project;
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    
    </div>
  );
};
*/
