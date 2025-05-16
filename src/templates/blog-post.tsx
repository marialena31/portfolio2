import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from './blog-post.module.scss';

interface BlogPostData {
  blogPost: {
    title: string;
    date: string;
    author: string;
    content: string;
    excerpt: string;
    tags: string[];
    id: string;
    slug: string;
  };
}

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const post = data.blogPost;

  return (
    <Layout className="otherPages">
      <SEO title={post.title} description={post.excerpt} />
      <section className={styles.section}>
        <div className={styles.article}>
          <button
            onClick={() => window.history.back()}
            className={styles.backBtn}
            aria-label="Retour au blog"
            style={{
              marginBottom: '2rem',
              color: 'var(--color-primary)',
            }}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 8 }}
            >
              <path
                d="M13 5l-5 5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retour au blog
          </button>
          <header className={styles.header}>
            <h1>{post.title}</h1>
            <div className={styles.meta}>
              <time>{post.date}</time>
              <span className={styles.author}>par {post.author}</span>
            </div>
            <div className={styles.tags}>
              {post.tags.map(tag => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className={styles.contactCta}>
            <Link to="/contact" className={styles.contactLink}>
              Contactez-moi
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    blogPost(slug: { eq: $slug }) {
      id
      title
      date
      author
      content
      excerpt
      tags
      slug
    }
  }
`;

export default BlogPostTemplate;
