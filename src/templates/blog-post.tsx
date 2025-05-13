import React from 'react';
import { graphql, PageProps } from 'gatsby';
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
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <time>{post.date}</time>
            <span className={styles.author}>by {post.author}</span>
          </div>
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
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
