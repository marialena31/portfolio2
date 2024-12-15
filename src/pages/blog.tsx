import React from 'react';
import { PageProps, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import * as styles from './blog.module.scss';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

interface BlogPageData {
  allBlogPost: {
    nodes: BlogPost[];
  };
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Blog</h1>
          <p>Découvrez nos derniers articles sur le développement web, le design et plus encore.</p>
        </header>

        <div className={styles.posts}>
          {posts.map(post => (
            <article key={post.id} className={styles.post}>
              <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                <h2>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <time>{post.date}</time>
                  <span className={styles.author}>{post.author}</span>
                </div>
                <div className={styles.tags}>
                  {post.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
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
