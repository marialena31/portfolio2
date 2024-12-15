import React from 'react';
import { Link } from 'gatsby';
import * as styles from './services.module.scss';
import { IconWrench, IconArrowUp, IconShield, IconCode } from '../icons';

interface ServicesProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
    icon: string;
    link: string;
  }>;
}

const iconMap = {
  wrench: IconWrench,
  'arrow-up': IconArrowUp,
  shield: IconShield,
  code: IconCode,
};

const Services: React.FC<ServicesProps> = ({ title, items }) => {
  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Link to={item.link} className={styles.serviceCard} key={index}>
                <div className={styles.icon}>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
