import React from 'react';
import { jest } from '@jest/globals';

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
    src,
    alt,
    ...props,
  });

// Mock site metadata
const mockSiteMetadata = {
  site: {
    siteMetadata: {
      title: 'ExpertEcom',
      description: 'Expert en développement e-commerce',
      author: 'Maria-Lena PIETRI',
      siteUrl: 'https://example.com',
    },
  },
};

const useStaticQuery = jest.fn().mockReturnValue(mockSiteMetadata);
const graphql = jest.fn();
const StaticQuery = jest.fn();

export { Link, StaticImage, useStaticQuery, graphql, StaticQuery, noop as navigate };
