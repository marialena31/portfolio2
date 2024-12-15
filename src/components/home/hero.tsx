import React from 'react';
import { Link } from 'gatsby';
import * as styles from './hero.module.scss';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.cta}>
          <Link to={cta.link} className={styles.primaryButton}>
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
