import React from 'react';
import { Project } from '../types/data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="bg-white rounded-xl shadow-md border border-primary/10 p-6 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary">
      <div className="flex flex-col gap-3 grow">
        <div className="w-full h-[172px] overflow-hidden bg-white rounded-lg mb-2 flex items-center justify-center shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
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
