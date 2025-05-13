import React from 'react';
import * as aboutStyles from './about-page.module.scss';

interface ContentBlock {
  type: string;
  level?: number;
  children?: string;
  items?: string[];
  ordered?: boolean;
}

interface ContentRendererProps {
  content: ContentBlock[];
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  return (
    <section className={aboutStyles.aboutPage}>
      <div className={aboutStyles.aboutContainer}>
        {content.map((block, idx) => {
          switch (block.type) {
            case 'heading':
              if (block.level === 1) return <h1 key={idx}>{block.children}</h1>;
              if (block.level === 2) return <h2 key={idx}>{block.children}</h2>;
              if (block.level === 3) return <h3 key={idx}>{block.children}</h3>;
              return <h4 key={idx}>{block.children}</h4>;
            case 'paragraph':
              return <p key={idx}>{block.children}</p>;
            case 'list':
              if (block.ordered) {
                return <ol key={idx}>{block.items?.map((item, i) => <li key={i}>{item}</li>)}</ol>;
              }
              return <ul key={idx}>{block.items?.map((item, i) => <li key={i}>{item}</li>)}</ul>;
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};
