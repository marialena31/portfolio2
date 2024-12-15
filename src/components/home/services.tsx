import React from 'react';
import * as styles from './services.module.scss';
import { IconWrench, IconArrowUp, IconShield } from '../icons';

const iconMap = {
  wrench: <IconWrench />,
  'arrow-up': <IconArrowUp />,
  shield: <IconShield />,
};

interface ServicesProps {
    title: string;
    items: Array<{
        title: string;
        description: string;
        icon: string;
        link: string;
    }>; 
}

const Services: React.FC<ServicesProps> = ({ title, items }) => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <div className={styles.list}>
                    {items.map((service, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.icon}>
                                {iconMap[service.icon as keyof typeof iconMap]}
                            </div>
                            <h3 className={styles.itemTitle}>{service.title}</h3>
                            <p className={styles.itemDescription}>{service.description}</p>
                            <a href={service.link} className={styles.link}>
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
