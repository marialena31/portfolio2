import React from 'react';

import { Icon } from './Icon';

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
      className={`rounded-xl shadow-md p-6 bg-white flex flex-col gap-4 mb-6 ${highlight ? 'border-2 border-primary bg-primary/5' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-2 ${highlight ? 'text-primary' : ''}`}>
        <h3 className="text-lg font-semibold flex items-center gap-2">
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
        {price && <div className="ml-auto text-primary font-bold text-base">{price}</div>}
      </div>
      <p className="text-gray-700 mb-2">{description}</p>
      <ul className="flex flex-col gap-2 mt-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <Icon name="check" className="text-primary w-4 h-4" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
