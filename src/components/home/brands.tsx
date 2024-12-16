import React from 'react';
import * as styles from './brands.module.scss';
import { HomeBrandItem } from '../../types/data';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

interface BrandsProps {
  title: string;
  items: HomeBrandItem[];
}

interface FileNode {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: unknown;
  };
}

const Brands: React.FC<BrandsProps> = ({ title, items }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "brands" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
          }
        }
      }
    }
  `);

  const getImageByPath = (imagePath: string) => {
    const image = data.allFile.nodes.find(
      (node: FileNode) => node.relativePath === `brands/${imagePath}`
    );
    return image?.childImageSharp?.gatsbyImageData;
  };

  return (
    <section className={styles.brands}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((brand, index) => {
            const imageData = getImageByPath(brand.logo);
            return (
              <div key={index} className={styles.brandItem}>
                {imageData && (
                  <GatsbyImage
                    image={imageData}
                    alt={brand.alt || `${brand.name} logo`}
                    className={styles.logo}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
