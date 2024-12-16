import React from 'react';

interface GatsbyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  getProps?: (props: { isCurrent: boolean; isPartiallyCurrent: boolean }) => object;
  innerRef?: React.Ref<HTMLAnchorElement>;
  partiallyActive?: boolean;
  to: string;
  replace?: boolean;
}

const noop = () => {};

const Link = ({
  activeClassName,
  activeStyle,
  getProps,
  innerRef,
  partiallyActive,
  replace,
  to,
  ...rest
}: GatsbyLinkProps) =>
  React.createElement('a', {
    ...rest,
    href: to,
    ref: innerRef,
  });

const StaticImage = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) =>
  React.createElement('img', {
    src: src,
    alt: alt,
    ...props,
  });

// Mock site metadata
const mockSiteMetadata = {
  site: {
    siteMetadata: {
      title: 'Portfolio Site',
      description: 'My portfolio site built with Gatsby',
      author: 'Your Name',
      siteUrl: 'http://localhost:6007',
      image: '/images/default.jpg',
      twitterUsername: '@yourtwitterhandle',
      pageMetadata: {
        home: {
          description: 'Welcome to my portfolio site',
        },
        about: {
          description: 'Learn more about me',
        },
        services: {
          description: 'Services I offer',
        },
        portfolio: {
          description: 'Check out my work',
        },
        contact: {
          description: 'Get in touch with me',
        },
      },
    },
  },
};

// Export gatsby mocks using ES modules syntax
export { Link, StaticImage };

export const graphql = noop;
export const StaticQuery = noop;
export const useStaticQuery = () => mockSiteMetadata;
export const navigate = noop;
