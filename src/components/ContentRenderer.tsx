import React from 'react';
import * as aboutStyles from './about-page.module.scss';

export interface ContentBlock {
  type: string;
  level?: number;
  children?: string | React.ReactNode;
  items?: string[];
  ordered?: boolean;
  cite?: string;
  src?: string;
  alt?: string;
  caption?: string;
  header?: string[];
  rows?: string[][];
}

interface ContentRendererProps {
  content: ContentBlock[];
  className?: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content, className = '' }) => {
  const renderContent = (content: string | React.ReactNode) => {
    if (typeof content === 'string') {
      // Convertir les sauts de ligne en balises <br />
      return content.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return content;
  };

  // Fonction pour regrouper le contenu par section (basé sur les titres h2)
  const groupContentIntoSections = (blocks: ContentBlock[]) => {
    const sections: { title: string | React.ReactNode; content: ContentBlock[] }[] = [];
    let currentSection: { title: string | React.ReactNode; content: ContentBlock[] } | null = null;

    blocks.forEach(block => {
      if (block.type === 'heading' && block.level === 2) {
        // Nouvelle section
        currentSection = { title: block.children || 'Section', content: [] };
        sections.push(currentSection);
      } else if (currentSection) {
        // Ajouter au contenu de la section actuelle
        currentSection.content.push(block);
      } else {
        // Contenu avant la première section
        if (!sections.length) {
          sections.push({ title: '', content: [] });
          currentSection = sections[0];
        }
        currentSection?.content.push(block);
      }
    });

    return sections;
  };

  const sections = groupContentIntoSections(content);

  const renderBlock = (block: ContentBlock, key: string) => {
    switch (block.type) {
      case 'heading':
        if (block.level === 1) return <h1 key={key}>{renderContent(block.children)}</h1>;
        if (block.level === 2) return <h2 key={key}>{renderContent(block.children)}</h2>;
        if (block.level === 3) return <h3 key={key}>{renderContent(block.children)}</h3>;
        return <h4 key={key}>{renderContent(block.children)}</h4>;

      case 'paragraph':
        return (
          <p
            key={key}
            className={aboutStyles.paragraph}
            dangerouslySetInnerHTML={{
              __html: typeof block.children === 'string' ? block.children : '',
            }}
          />
        );

      case 'list':
        if (block.ordered) {
          return (
            <ol key={key} className={aboutStyles.list}>
              {block.items?.map((item, i) => (
                <li key={`${key}-${i}`} className={aboutStyles.listItem}>
                  {renderContent(item)}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <ul key={key} className={aboutStyles.list}>
            {block.items?.map((item, i) => (
              <li key={`${key}-${i}`} className={aboutStyles.listItem}>
                {renderContent(item)}
              </li>
            ))}
          </ul>
        );

      case 'table':
        if (!block.header || !block.rows) return null;
        return (
          <div key={key} className={aboutStyles.tableWrapper}>
            <table className={aboutStyles.table}>
              <thead>
                <tr>
                  {block.header.map((cell, i) => (
                    <th key={i}>{renderContent(cell)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{renderContent(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'image':
        return (
          <figure key={key} className={aboutStyles.figure}>
            <img
              src={block.src}
              alt={block.alt || ''}
              loading="lazy"
              className={aboutStyles.image}
            />
            {block.caption && <figcaption>{renderContent(block.caption)}</figcaption>}
          </figure>
        );

      case 'quote':
        return (
          <blockquote key={key} className={aboutStyles.blockquote}>
            <p>{renderContent(block.children)}</p>
            {block.cite && <footer>{renderContent(block.cite)}</footer>}
          </blockquote>
        );

      case 'divider':
        return <hr key={key} className={aboutStyles.divider} />;

      default:
        return null;
    }
  };

  return (
    <main className={`${aboutStyles.aboutPage} ${className}`}>
      <div className={aboutStyles.aboutContainer}>
        {sections.length > 0 ? (
          <div className={aboutStyles.content}>
            {sections.map((section, index) => (
              <div key={index} className={aboutStyles.section}>
                {section.title && <h2>{renderContent(section.title)}</h2>}
                {section.content.map((block, blockIndex) =>
                  renderBlock(block, `${index}-${blockIndex}`)
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={aboutStyles.noContent}>
            <p>Aucun contenu disponible.</p>
          </div>
        )}
      </div>
    </main>
  );
};
