import React from 'react';

import { Icon } from '../Icon';

interface ServiceCardProps {
  title: string | React.ReactNode;
  price?: string;
  description: string;
  features: string[];
  emoji?: string;
  highlight?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  features,
  emoji = '✨',
  highlight = false,
}) => {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between gap-4 mb-4 md:mb-8 transition-all duration-200
        bg-white
        ${highlight ? 'border-4 border-primary shadow-xl' : 'border border-gray-100'}
        hover:shadow-2xl hover:-translate-y-1`}
    >
      <div className="flex items-center gap-3 mb-4">
        <h3
          className="text-lg md:text-xl font-bold flex items-center gap-3 text-gray-900"
          {...(typeof title === 'string' ? { 'aria-label': title } : {})}
        >
          {typeof title === 'string' ? (
            <>
              {emoji && (
                <span className="mr-2 text-2xl" role="img" aria-hidden="true">
                  {emoji}
                </span>
              )}
              {title}
            </>
          ) : (
            title
          )}
        </h3>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-gray-800 text-base md:text-lg mb-2 leading-relaxed">{description}</p>
        <ul className="flex flex-col gap-3 mt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4 text-base md:text-lg text-gray-800">
              <Icon name="check" className="text-primary w-5 h-5 flex-shrink-0" />
              <span className="align-middle">
                {feature
                  .split(/(-|\|)/g)
                  .map((part, idx) =>
                    ['-', '|'].includes(part) && idx !== 0 ? <br key={idx} /> : part
                  )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {price && (
        <>
          <hr className="border-t border-primary/30 mt-8 mb-4" />
          <div className="text-center mt-2">
            <span className="text-lg md:text-xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent drop-shadow-md">
              {price
                .split(/(-|\|)/g)
                .map((part, idx) =>
                  ['-', '|'].includes(part) && idx !== 0 ? <br key={idx} /> : part
                )}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
