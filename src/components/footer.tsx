import React from 'react';
import * as styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            Maria-Lena PIETRI &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
