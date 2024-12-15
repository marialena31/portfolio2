import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';
import { Helmet } from 'react-helmet';
import * as styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.container}>
            <Navigation />
          </div>
        </header>
        
        <main className={styles.main}>
          <div className={styles.container}>
            {children}
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <p className={styles.copyright}>
                {data.site.siteMetadata.title} &copy; {new Date().getFullYear()}, Built
                with <a href="https://www.gatsbyjs.com">Gatsby</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
