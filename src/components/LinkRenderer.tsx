import React from 'react';
import { Link } from 'gatsby';

interface LinkRendererProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const LinkRenderer: React.FC<LinkRendererProps> = ({ href, children, external = false }) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600 hover:text-blue-800"
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className="underline text-blue-600 hover:text-blue-800">
      {children}
    </Link>
  );
};

export default LinkRenderer;
