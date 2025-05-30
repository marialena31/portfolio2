import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { brandsData } from '../../data';

interface BrandsProps {
  title: string;
}

const Brands: React.FC<BrandsProps> = ({ title }) => {
  const data = useStaticQuery<import('../../types/graphql-types').BrandsQueryQuery>(graphql`
    query BrandsQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "images/brands" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 220, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 100)
          }
        }
      }
    }
  `);

  const getImageByName = (imageName: string) => {
    const image = data.allFile.nodes.find(node => node.relativePath.endsWith(imageName));
    return image?.childImageSharp?.gatsbyImageData;
  };

  return (
    <section className="py-24 bg-background-alt relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 relative">
        <h2 className="text-center mb-16 text-3xl md:text-4xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {brandsData.map(brand => {
            const imageName = brand.imagePath.split('/').pop();
            if (!imageName) return null;
            const imageData = getImageByName(imageName);

            return imageData ? (
              <div
                key={brand.id}
                className="aspect-square bg-surface-primary rounded-lg p-8 flex items-center justify-center relative border border-primary/10 transition-all duration-400 shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:border-primary/20 focus-within:outline-primary focus-within:outline-2 focus-within:outline-offset-2"
              >
                <div className="w-full flex items-center justify-center">
                  <GatsbyImage image={imageData} alt={brand.alt} />
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
