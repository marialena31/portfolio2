import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './brands.module.scss';

interface BrandsProps {
  title: string;
}

const Brands: React.FC<BrandsProps> = ({ title }) => {
  return (
    <section className={styles.brands}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/bonpoint.png" alt="Logo Bonpoint" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/cac-40.png" alt="Logo CAC 40" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/chausson-materiaux.png" alt="Logo Chausson Matériaux" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/eram-group.png" alt="Logo Eram Group" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/france-air.png" alt="Logo France Air" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/hamilton.png" alt="Logo Hamilton" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/la-maison-du-whisky.png" alt="Logo La Maison du Whisky" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/ludilabel.png" alt="Logo Ludilabel" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/maisons-du-monde.png" alt="Logo Maisons du Monde" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/maps-system.png" alt="Logo Maps System" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/marjanemall.png" alt="Logo Marjane Mall" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/maurice-lacroix.png" alt="Logo Maurice Lacroix" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/mountnpass.png" alt="Logo Mount'n Pass" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/nicoll.png" alt="Logo Nicoll" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/nutrixo.png" alt="Logo Nutrixo" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/openclassrooms.png" alt="Logo OpenClassrooms" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/planet-cards.png" alt="Logo Planet Cards" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/pro-a-pro.png" alt="Logo Pro à Pro" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/sopra-steria.png" alt="Logo Sopra Steria" className={styles.logo} />
          </div>
          <div className={styles.brandItem}>
            <StaticImage src="../../images/brands/valrhona.png" alt="Logo Valrhona" className={styles.logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
