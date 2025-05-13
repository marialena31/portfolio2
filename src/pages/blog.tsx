import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from './blog.module.scss';
import { BlogListQueryQuery } from '../types/graphql-types';

const BlogPage: React.FC<PageProps<BlogListQueryQuery>> = ({ data }) => {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <section className={'section ' + styles.blogSection}>
        <div className={styles.container}>
          <h1 className={'sectionTitle ' + styles.title}>Blog</h1>
          <div className={styles.grid}>
            {posts.map(post => (
              <article key={post.id} className={styles.post}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.meta}>
                  <time>{post.date}</time> • <span>{post.author}</span>
                </p>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/blog/${post.slug}`} className={styles.readMore}>
                  <span>Lire l’article</span>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: 8, verticalAlign: 'middle' }}
                  >
                    <path
                      d="M5 9h8m0 0-3-3m3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
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
