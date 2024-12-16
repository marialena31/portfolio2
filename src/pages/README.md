# Pages Directory

This directory contains the page components for the Gatsby site. Each file automatically becomes a route based on its filename.

## Structure

- `index.tsx` - Home page
- `404.tsx` - Not found page
- `about.tsx` - About page
- `contact.tsx` - Contact page
- `projects.tsx` - Projects showcase page

## Routing

Gatsby automatically creates routes based on files in this directory:

- `/` → `index.tsx`
- `/about` → `about.tsx`
- `/contact` → `contact.tsx`
- `/projects` → `projects.tsx`

## SEO

Each page component includes SEO metadata using the `SEO` component.
