import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faLock,
  faBug,
  faUserCog,
  faChartLine,
  faExclamationTriangle,
  faCogs,
  faSyncAlt,
  faUsers,
  faQuestionCircle,
  faBoxOpen,
  faLightbulb,
  faBullseye,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

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
  icon?: string; // Ajout pour permettre une icône FontAwesome optionnelle
}

export interface ContentRendererProps {
  content: ContentBlock[];
  className?: string;
  containerClassName?: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
  className = '',
  containerClassName,
}) => {
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

  // Map icon string to FontAwesome icon object
  const iconMap: Record<string, any> = {
    faBolt,
    faLock,
    faBug,
    faUserCog,
    faChartLine,
    faExclamationTriangle,
    faCogs,
    faSyncAlt,
    faUsers,
    faQuestionCircle,
    faBoxOpen,
    faLightbulb,
    faBullseye,
    faHandshake,
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
        if (block.level === 1)
          return (
            <h1
              key={key}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-primary to-primary-green bg-clip-text text-transparent mb-6 leading-tight text-left"
            >
              {renderContent(block.children)}
            </h1>
          );
        if (block.level === 2)
          return (
            <h2
              key={key}
              className="text-2xl md:text-3xl font-bold mb-8 mt-12 text-primary leading-tight border-l-4 border-primary pl-4 bg-primary/5 transition-colors duration-200 text-left shadow-sm flex items-center gap-3"
            >
              {block.icon && iconMap[block.icon] && (
                <FontAwesomeIcon icon={iconMap[block.icon]} className="text-primary mr-2" />
              )}
              {renderContent(block.children)}
            </h2>
          );
        if (block.level === 3)
          return (
            <h3
              key={key}
              className="text-xl font-semibold mb-2 mt-6 text-primary-dark transition-colors duration-200 text-left"
            >
              {renderContent(block.children)}
            </h3>
          );
        return <h4 key={key}>{renderContent(block.children)}</h4>;

      case 'paragraph':
        return (
          <p
            key={key}
            className="text-gray-700 text-base leading-relaxed mb-6 text-left"
            dangerouslySetInnerHTML={{
              __html: typeof block.children === 'string' ? block.children : '',
            }}
          />
        );

      case 'list':
        if (block.ordered) {
          return (
            <ol key={key} className="list-decimal pl-6 my-6 text-left">
              {block.items?.map((item, i) => (
                <li key={`${key}-${i}`} className="mb-2 text-gray-700">
                  {renderContent(item)}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <ul key={key} className="list-disc pl-6 my-6 text-left">
            {block.items?.map((item, i) => (
              <li key={`${key}-${i}`} className="mb-2">
                {renderContent(item)}
              </li>
            ))}
          </ul>
        );

      case 'table':
        if (!block.header || !block.rows) return null;
        return (
          <div key={key} className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
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
          <figure key={key} className="my-6 flex flex-col items-center">
            <img
              src={block.src}
              alt={block.alt || ''}
              loading="lazy"
              className="rounded shadow max-w-full h-auto"
            />
            {block.caption && <figcaption>{renderContent(block.caption)}</figcaption>}
          </figure>
        );

      case 'quote':
        return (
          <blockquote
            key={key}
            className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4 text-left"
          >
            <p>{renderContent(block.children)}</p>
            {block.cite && <footer>{renderContent(block.cite)}</footer>}
          </blockquote>
        );

      case 'divider':
        return <hr key={key} className="my-8 border-t border-gray-200" />;

      default:
        return null;
    }
  };

  return (
    <div
      className={
        containerClassName
          ? containerClassName
          : 'bg-white rounded-lg shadow-md pt-8 pb-16 p-6 mx-auto max-w-[75rem] flex flex-col items-start text-left'
      }
    >
      {sections.length > 0 ? (
        <div className="space-y-8 w-full text-left">
          {sections.map((section, index) => (
            <div key={index} className="mb-8 w-full text-left">
              {section.title &&
                renderBlock(
                  { type: 'heading', level: 2, children: section.title },
                  `section-title-${index}`
                )}
              {section.content.map((block, blockIndex) =>
                renderBlock(block, `${index}-${blockIndex}`)
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-8">
          <p>Aucun contenu disponible.</p>
        </div>
      )}
    </div>
  );
};
