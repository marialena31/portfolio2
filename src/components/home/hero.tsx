import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './hero.module.scss';
import { HomeButton } from '../../types/data';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: HomeButton;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <StaticImage
          src="../../images/banner.png"
          alt="Background banner"
          placeholder="blurred"
          layout="fullWidth"
          className={styles.bannerImage}
        />
        <div className={styles.overlay} />
      </div>
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
