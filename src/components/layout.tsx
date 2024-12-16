import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';
import * as styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
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
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

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
