import React from 'react';
import * as styles from './service-card.module.scss';
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
    <div className={`${styles.serviceCard} ${highlight ? styles.highlight : ''}`}>
      <div className={`${styles.card} ${highlight ? styles.highlightCard : ''}`}>
        <h3 className={`${styles.cardTitle} cardTitle`}>
          {typeof title === 'string' ? (
            <>
              {emoji && (
                <span className={styles.emoji} role="img" aria-hidden="true">
                  {emoji}
                </span>
              )}
              {title}
            </>
          ) : (
            title
          )}
        </h3>
        {price && <div className={styles.price}>{price}</div>}
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <Icon name="check" className={styles.checkmark} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
