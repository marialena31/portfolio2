import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import ProjectForm from '../components/ProjectForm/ProjectForm';

const ProjectPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="pt-6 pb-6 bg-transparent">
        <ProjectForm />
      </section>
    </Layout>
  );
};

export default ProjectPage;

export const Head: HeadFC = () => (
  <SEO
    title="Déposez votre projet | Maria-Lena Planque"
    description="Déposez votre projet et obtenez un accompagnement personnalisé. Je vous recontacte sous 48h pour discuter de vos besoins et objectifs."
  />
);
