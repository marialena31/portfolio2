import React, { ReactNode } from 'react';
import * as styles from './layout.module.scss';
import Navigation from '../navigation';
import Footer from '../footer';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      <Navigation />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
