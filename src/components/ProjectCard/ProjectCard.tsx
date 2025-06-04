import React, { useState } from 'react';
import { Project } from '../../types/data';
import { portfolio } from '../../data/projects';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  // Trouve l'index de ce projet dans le portfolio
  const currentIndex = portfolio.findIndex(p => p.id === project.id);
  // Slides = toutes les images du portfolio qui existent
  const slides = portfolio.filter(p => !!p.image).map(p => ({ src: p.image, alt: p.title }));
  return (
    <article className="bg-white rounded-xl shadow-md border border-primary/10 p-6 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary">
      <div className="flex flex-col gap-3 grow">
        {project.image && (
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
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-200 hover:scale-105"
              />
            </div>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={slides}
              index={currentIndex}
            />
          </>
        )}
        <h2 className="text-xl font-semibold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-2">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
