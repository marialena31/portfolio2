import React from 'react';
// Imports non utilisés, supprimés
import * as styles from './layout.module.scss';
import Navigation from './navigation';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  isHomePage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  fullWidth = false,
  isHomePage = false,
}) => {
  return (
    <div
      className={`${styles.layout} ${className} ${isHomePage ? styles.homePage : styles.otherPages}`}
    >
      <Navigation />
      <main className={`${styles.main} ${fullWidth ? styles.fullWidth : ''}`}>
        {!fullWidth && <div className={styles.container}>{children}</div>}
        {fullWidth && children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
