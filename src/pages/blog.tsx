import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as styles from './blog.module.scss';
import { BlogPost } from '../types';

interface BlogPageData {
  allBlogPost: {
    nodes: BlogPost[];
  };
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <SEO 
        title="Blog"
        description="Read our latest articles and insights"
      />
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Blog</h1>
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
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read More
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
