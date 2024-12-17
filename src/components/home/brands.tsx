import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { brandsData } from '../../data';
import * as styles from './brands.module.scss';

interface BrandsProps {
  title: string;
}

interface FileNode {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

const Brands: React.FC<BrandsProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query BrandsQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "brands" } }
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
      (node: FileNode) => node.relativePath === `brands/${imageName}`
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
