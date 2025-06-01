import React, { useState } from 'react';
import { Link } from 'gatsby';
import { CaseStudy } from '../data/caseStudies';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="bg-white rounded-xl shadow-md border border-primary/10 p-6 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary">
      <div className="flex flex-col gap-3 grow">
        {study.image && (
          <>
            <div
              className="w-full h-[172px] overflow-hidden bg-white rounded-lg mb-2 flex items-center justify-center shadow-lg cursor-zoom-in"
              onClick={() => setOpen(true)}
              title="Voir l'image en grand"
              tabIndex={0}
              role="button"
              aria-label="Voir l'image en grand"
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
              />
            </div>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[{ src: study.image, alt: study.title }]}
            />
          </>
        )}
        <h2 className="text-xl font-semibold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-2">
          {study.title}
        </h2>
        <p className="text-gray-500 text-xs mb-1">{study.clientType}</p>
        <p className="text-gray-700 mb-2 line-clamp-3">{study.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {study.stack.map(tech => (
            <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/portfolio/${study.slug}`}
        className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors text-sm font-semibold self-start"
        aria-label={`Voir l'étude de cas : ${study.title}`}
      >
        Voir l’étude de cas
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: '0.5rem' }}
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </article>
  );
};

export default CaseStudyCard;
