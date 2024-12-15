import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Lisez nos derniers articles.</p>
    </Layout>
  );
};

export default BlogPage;
