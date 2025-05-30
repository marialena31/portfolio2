import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

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
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="prose max-w-none mb-6">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium mb-8"
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
          <header className="mb-6">
            <h1>{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <time>{post.date}</time>
              <span className="ml-2">par {post.author}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            >
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
