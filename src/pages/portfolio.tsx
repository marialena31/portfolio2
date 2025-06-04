import React, { useState } from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import Tabs from '../components/Tabs';
import CustomPdfViewerNoSSR from '../components/CustomPdfViewerNoSSR';

import CaseStudyCard from '../components/CaseStudyCard';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { caseStudies } from '../data/caseStudies';
import { portfolio } from '../data/projects';

const PDF_URL = '/docs/portfolio.pdf'; // Place ton PDF dans /static/portfolio.pdf

const CASES_PER_PAGE = 6;

const PortfolioPage: React.FC = () => {
  const [visible, setVisible] = useState(CASES_PER_PAGE);
  const [tabIndex, setTabIndex] = useState(0);
  const showMore = () => setVisible(v => v + CASES_PER_PAGE);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHash = () => {
        if (window.location.hash === '#etudes-de-cas') {
          setTabIndex(1);
        } else {
          setTabIndex(0);
        }
      };
      handleHash();
      window.addEventListener('hashchange', handleHash);
      return () => window.removeEventListener('hashchange', handleHash);
    }
  }, []);

  return (
    <Layout>
      <SEO title="Portfolio & Études de cas" pageName="portfolio" />
      <h1 className="text-4xl font-bold text-primary text-center mb-12 mt-8 pt-16 md:pt-24">
        Portfolio & Études de cas
      </h1>
      <div className="max-w-[64rem] mx-auto px-4">
        <Tabs
          tabs={[
            {
              label: 'Portfolio',
              content: (
                <div className="py-8">
                  <p className="text-lg text-gray-700 text-center max-w-2xl mb-6 mx-auto">
                    Découvrez un aperçu de mes réalisations, missions et preuves de livrables.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio
                      .filter((_, idx) => idx !== 3)
                      .map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                  <div className="mt-12">
                    <CustomPdfViewerNoSSR url={PDF_URL} className="min-h-[600px]" />
                    <div className="mt-4 text-center">
                      <a
                        href={PDF_URL}
                        download
                        className="inline-block px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Télécharger le PDF
                      </a>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              label: 'Études de cas',
              content: (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.slice(0, visible).map(study => (
                      <CaseStudyCard key={study.id} study={study} />
                    ))}
                  </div>
                  {visible < caseStudies.length && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={showMore}
                        className="px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Charger plus d’études de cas
                      </button>
                    </div>
                  )}
                </>
              ),
            },
          ]}
          activeTab={tabIndex}
          onTabChange={setTabIndex}
        />
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <SEO title="Portfolio & Études de cas" pageName="portfolio" />;
