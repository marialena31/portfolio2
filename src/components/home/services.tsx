import React from 'react';

import { Icon } from '../icons';
import { IconName } from '../../types/data';

interface ServicesProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
    icon: IconName;
    link: string;
  }>;
}

const Services: React.FC<ServicesProps> = ({ title, items }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" id="services">
      <div className="text-center max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {items.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-primary/10 dark:border-gray-700 transition-transform duration-200 relative flex flex-col items-center text-center gap-4 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-primary dark:hover:border-primary group"
            >
              <div className="w-12 h-12 text-primary transition-transform duration-200 mb-4 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={service.icon} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base text-center">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-block mt-auto px-6 py-2 bg-black dark:bg-primary text-white no-underline rounded-md font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:hover:bg-white dark:hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
