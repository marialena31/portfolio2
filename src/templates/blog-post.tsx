import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

interface BlogPostData {
  markdownRemark: {
    id: string;
    html: string;
    excerpt?: string;
    frontmatter: {
      title: string;
      date: string;
      author?: string;
      description?: string;
      tags?: string[];
      slug: string;
      cover?: { publicURL: string } | string;
      coverAlt?: string;
    };
  };
}

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const post = data.markdownRemark;
  const fm = post.frontmatter;

  return (
    <Layout className="otherPages">
      <SEO
        title={fm.title}
        description={
          fm.description ||
          post.excerpt ||
          `Découvrez un article inédit sur le e-commerce, Magento, pilotage digital, conseils et retours d'expérience par Maria-Lena Pietri.`
        }
        image={
          fm.cover && typeof fm.cover === 'object' && 'publicURL' in fm.cover
            ? fm.cover.publicURL
            : undefined
        }
      />
      <section className="pt-16 pb-16 bg-gradient-to-b from-primary-dark/95 to-primary/85">
        <div className="bg-white max-w-[64rem] w-full mx-auto px-4 md:px-[10rem] py-[5rem] shadow rounded-lg md:my-16 my-8 flex flex-col items-start text-left">
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
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-6 leading-tight">
              {fm.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <time>{fm.date}</time>
              {fm.author && <span className="ml-2">par {fm.author}</span>}
            </div>
            {fm.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {fm.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          {fm.cover && typeof fm.cover === 'object' && 'publicURL' in fm.cover && (
            <img
              src={fm.cover.publicURL}
              alt={fm.coverAlt || `Illustration de l’article : ${fm.title}`}
              className="w-full max-h-96 object-cover rounded-lg mb-8 shadow"
              loading="lazy"
            />
          )}
          <div
            className="blog-post-content prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        description
        tags
        slug
        cover {
          publicURL
        }
      }
    }
  }
`;

export default BlogPostTemplate;
