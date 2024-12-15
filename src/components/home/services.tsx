import React from 'react';
import * as styles from './services.module.scss';
import { homeData } from '../../data/home';
import { IconWrench, IconArrowUp, IconShield } from '../icons';

const iconMap = {
  wrench: <IconWrench />,
  'arrow-up': <IconArrowUp />,
  shield: <IconShield />,
};

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{homeData.services.title}</h2>
          <p className={styles.description}>
            Je propose une gamme complète de services pour répondre à vos besoins en développement Magento.
            De la maintenance à la sécurité, je vous accompagne dans la réalisation de vos projets.
          </p>
        </div>

        <div className={styles.list}>
          {homeData.services.items.map((service, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <h3 className={styles.itemTitle}>{service.title}</h3>
              <p className={styles.itemDescription}>{service.description}</p>
              <a 
                href={service.link}
                className={styles.link}
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
