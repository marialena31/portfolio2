import React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { caseStudies, CaseStudy } from '../data/caseStudies';

interface CaseStudyPageContext {
  slug: string;
}

const CaseStudyPage: React.FC<PageProps<object, CaseStudyPageContext>> = ({ pageContext }) => {
  const { slug } = pageContext;
  const study = caseStudies.find(cs => cs.slug === slug);

  if (!study) {
    return (
      <Layout>
        <div className="max-w-[64rem] mx-auto bg-white rounded-lg shadow-md p-20 my-16 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Étude de cas introuvable</h1>
          <Link to="/portfolio" className="text-primary underline">
            Retour au portfolio
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={study.title} description={study.excerpt} />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85 min-h-screen">
        <div className="max-w-[64rem] mx-auto bg-white rounded-lg shadow-md p-20 flex flex-col gap-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium mb-4"
            aria-label="Retour au portfolio"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 8 }}
            >
              <path
                d="M13 5l-5 5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retour au portfolio
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-4 leading-tight">
                {study.title}
              </h1>
              <div className="mb-4 text-gray-600 text-sm">
                <span className="font-semibold">Client :</span> {study.clientType}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <section className="mb-4">
                <h2 className="text-xl font-semibold text-primary mb-2">Enjeux</h2>
                <p className="text-gray-800">{study.context}</p>
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-semibold text-primary mb-2">Mon rôle</h2>
                <p className="text-gray-800">{study.role}</p>
              </section>
              <section className="mb-4">
                <h2 className="text-xl font-semibold text-primary mb-2">Résumé</h2>
                <p className="text-gray-800">{study.excerpt}</p>
              </section>
              {/* Placeholders for Actions, Result, Testimonial, etc. */}
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-60 object-cover rounded-lg shadow mb-4"
              />
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary underline text-sm text-center mt-2"
                >
                  Voir le livrable
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyPage;
