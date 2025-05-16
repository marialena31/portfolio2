import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from '../components/about-page.module.scss';
import { BlogListQueryQuery } from '../types/graphql-types';

const BlogPage: React.FC<PageProps<BlogListQueryQuery>> = ({ data }) => {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <SEO title="Blog" pageName="blog" />
      <div className={styles.aboutPage}>
        <div className={styles.aboutContainer}>
          <h1>Blog</h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem',
              width: '100%',
            }}
          >
            {posts.map(post => (
              <article
                key={post.id}
                style={{
                  background: '#fff',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.5rem',
                    margin: '0 0 1rem 0',
                    color: '#000' /* Texte en noir */,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  <time>{post.date}</time>
                  <span>{post.author}</span>
                </p>
                <p
                  style={{
                    color: '#000' /* Texte en noir */,
                    flexGrow: 1,
                    marginBottom: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        background: 'var(--color-primary)' /* Fond bleu */,
                        color: '#fff' /* Texte blanc */,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        display: 'inline-block',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="blog-read-more"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    marginTop: 'auto',
                    color: 'var(--color-primary)' /* Texte bleu */,
                    fontWeight: 600,
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                    padding: '0.5rem 0',
                    transition: 'opacity 0.2s, text-decoration 0.2s',
                  }}
                >
                  Lire l&apos;article
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: '0.5rem' }}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogListQuery {
    allBlogPost {
      nodes {
        id
        title
        excerpt
        date
        author
        tags
        slug
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <SEO title="Blog" description="Read our latest articles and insights" />;
