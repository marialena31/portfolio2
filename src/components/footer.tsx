import React from 'react';
import { Link } from 'gatsby';
import * as styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>Maria-Lena PIETRI &copy; {new Date().getFullYear()}</p>
          <div className={styles.legalLinks}>
            <Link to="/mentions-legales" className={styles.legalLink}>
              Mentions légales
            </Link>
            <span className={styles.separator}>|</span>
            <Link to="/politique-confidentialite" className={styles.legalLink}>
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
