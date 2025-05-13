import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { brandsData } from '../../data';
import * as styles from './brands.module.scss';

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
            gatsbyImageData(width: 150, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
          }
        }
      }
    }
  `);

  const getImageByName = (imageName: string) => {
    const image = data.allFile.nodes.find(
      node => node.relativePath === `images/brands/${imageName}`
    );
    return image?.childImageSharp?.gatsbyImageData;
  };

  return (
    <section className={styles.brands}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {brandsData.map(brand => {
            const imageName = brand.imagePath.split('/').pop();
            if (!imageName) return null;
            const imageData = getImageByName(imageName);

            return imageData ? (
              <div key={brand.id} className={styles.brandItem}>
                <div className={styles.brand}>
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
