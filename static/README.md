# Static Directory

This directory contains static files that are copied directly to the `public` folder during build.

## Contents

- `favicon.ico`
- `robots.txt`
- `sitemap.xml`
- Other static assets that don't require processing

## Usage

Files in this directory are:

- Copied as-is to the public folder
- Publicly accessible at the root URL
- Not processed by Gatsby's build system

## Notes

- For images that need optimization, use the `src/images` directory instead
- For files that need processing, use the appropriate Gatsby plugin
- Keep this directory clean and organized
- Document any special files or configurations
