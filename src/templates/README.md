# Templates Directory

This directory contains template components used for programmatically generated pages in Gatsby.

## Usage

Templates are used to:

- Generate project detail pages
- Create blog post pages
- Build dynamic content pages

## Structure

Each template should:

- Accept page context as props
- Include SEO component
- Handle loading and error states
- Be responsive and accessible

## GraphQL

Templates typically use GraphQL queries to:

- Fetch page-specific data
- Access site metadata
- Load dynamic content

## Examples

- `project-template.tsx` - Template for individual project pages
- `blog-post.tsx` - Template for blog posts
- `category.tsx` - Template for category pages
