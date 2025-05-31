import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

import { BlogListQueryQuery } from '../types/graphql-types';

type BlogPageProps = PageProps<BlogListQueryQuery>;

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <SEO title="Blog" pageName="blog" />
      <div className="bg-gradient-to-br from-primary to-primary-dark py-24 min-h-[calc(100vh-4rem-6rem)] pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-white text-center text-3xl font-bold mb-10 drop-shadow">Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl">
            {posts.map(post => (
              <article
                className="bg-white rounded-lg shadow-md border border-primary/10 p-6 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary flex flex-col h-full"
                key={post.id}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-2 leading-snug transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Lire l'article : ${post.title}`}
                >
                  {post.title}
                </Link>
                <p className="text-gray-500 text-sm mb-2 flex gap-2 items-center">
                  <time>{post.date}</time>
                  <span>{post.author}</span>
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex flex-col grow justify-end gap-3 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:underline group transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                </div>
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
