import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import * as styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<import('../types/graphql-types').SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return (
    <>
      <div className={styles.layout}>
        <>
          <Header />
          <main className={styles.main}>
            <div className={styles.container}>{children}</div>
          </main>
          <Footer />
        </>
      </div>
    </>
  );
};

export default Layout;
