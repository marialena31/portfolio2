# Data Management Guide

This document outlines the best practices for managing data in our Gatsby project.

## Data Structure

All data in this project is managed through TypeScript files in the `src/data` directory. This ensures type safety and better development experience.

### File Organization

```
src/
├── data/           # Data files directory
│   ├── index.ts    # Exports all data
│   ├── home.ts     # Home page data
│   ├── brands.ts   # Brands data
│   └── ...         # Other data files
├── types/          # Type definitions
│   ├── index.ts    # Main types file
│   ├── data.ts     # Data-specific types
│   └── ...         # Other type files
├── images/         # Image assets
│   ├── brands/     # Brand logos
│   └── ...         # Other image directories
```

## Adding New Data

Follow these steps when adding new data to the project:

1. **Define Types**

   - Add new interfaces to `src/types/index.ts` or `src/types/data.ts`
   - Example:
     ```typescript
     export interface Brand {
       id: string;
       name: string;
       imagePath: string; // Just the filename, e.g., "example.png"
       alt: string;
     }
     ```

2. **Create Data File**

   - Create a new TypeScript file in `src/data/`
   - Export the data with proper typing
   - Example (`brands.ts`):

     ```typescript
     import { Brand } from '../types';

     export const brandsData: Brand[] = [
       {
         id: 'example-brand',
         name: 'Example Brand',
         imagePath: 'example.png', // Just the filename
         alt: 'Logo Example Brand',
       },
     ];
     ```

3. **Export in Index**

   - Add the export to `src/data/index.ts`
   - Example:
     ```typescript
     export * from './brands';
     ```

4. **Using Images with Data**
   When working with images in Gatsby components:

   ```typescript
   import { GatsbyImage, getImage } from 'gatsby-plugin-image';
   import { graphql, useStaticQuery } from 'gatsby';

   // In your component:
   const data = useStaticQuery(graphql`
     query {
       allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "your-directory" } }) {
         nodes {
           relativePath
           childImageSharp {
             gatsbyImageData(width: 200, placeholder: BLURRED)
           }
         }
       }
     }
   `);

   // Helper function to get image data
   const getImageByName = (imageName: string) => {
     const image = data.allFile.nodes.find(
       (node: any) => node.relativePath === `subdirectory/${imageName}`
     );
     return image?.childImageSharp?.gatsbyImageData;
   };

   // Usage in JSX
   <GatsbyImage
     image={getImageByName(item.imagePath)}
     alt={item.alt}
   />
   ```

## Best Practices

1. **Type Safety**

   - Always define interfaces for your data structures
   - Use TypeScript's type checking to catch errors early
   - Avoid using `any` type

2. **File Naming**

   - Use kebab-case for file names
   - Use descriptive names that reflect the data content

3. **Data Organization**

   - Keep related data together in the same file
   - Split large data sets into separate files
   - Use meaningful property names

4. **Images**

   - Store images in `src/images/` directory (not in `static/`)
   - Use Gatsby's image optimization features
   - In data files, store only the filename
   - Use `gatsby-plugin-image` for rendering
   - Follow a consistent naming pattern

5. **Maintenance**
   - Keep data files small and focused
   - Document any special cases or requirements
   - Update types when data structure changes

## Common Issues

1. **Missing Types**

   - Always define and export interfaces for new data structures
   - Ensure all data properties have proper types

2. **Image Handling**

   - Don't use direct image paths or `require()`
   - Always use Gatsby's image optimization through `gatsby-plugin-image`
   - Store images in `src/images/` for proper processing
   - Use `GatsbyImage` component for rendering
   - Query images using GraphQL

3. **Data Updates**
   - Remember to rebuild the site after data changes
   - Test data changes in development environment first

Remember to follow these guidelines to maintain consistency and prevent errors in the project.
