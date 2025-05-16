import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import * as styles from './blog.module.scss';
import * as tagStyles from './blog-tags.module.scss';
import { BlogListQueryQuery } from '../types/graphql-types';

type BlogPageProps = PageProps<BlogListQueryQuery>;

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <SEO title="Blog" pageName="blog" />
      <div className={styles.aboutPage}>
        <div className={styles.aboutContainer}>
          <h1>Blog</h1>
          <div className={styles.grid}>
            {posts.map(post => (
              <article className={styles.post} key={post.id}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.meta}>
                  <time>{post.date}</time>
                  <span>{post.author}</span>
                </p>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.tags}>
                  <div className={tagStyles.blogTags}>
                    {post.tags.map((tag: string) => (
                      <span key={tag} className={tagStyles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
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
