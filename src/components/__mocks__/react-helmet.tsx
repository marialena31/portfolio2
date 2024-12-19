import React from 'react';

interface HelmetProps {
  htmlAttributes?: React.HTMLAttributes<HTMLHtmlElement>;
  title?: string;
  meta?: Array<{ name?: string; property?: string; content: string }>;
  link?: Array<{ rel: string; href: string }>;
}

interface HelmetStatic extends React.FC<HelmetProps> {
  peek: () => {
    title: string;
    metaTags: Array<{ name?: string; property?: string; content: string }>;
    linkTags: Array<{ rel: string; href: string }>;
    baseTag: Array<{ href: string }>;
    scriptTags: Array<{ src?: string; type?: string; innerHTML?: string }>;
    styleTags: Array<{ cssText: string; type?: string }>;
    titleAttributes: Record<string, string | number | boolean | null | undefined>;
  };
  rewind: () => {
    base: Array<{ href: string }>;
    bodyAttributes: Record<string, string | number | boolean>;
    htmlAttributes: Record<string, string | number | boolean>;
    link: Array<{ rel: string; href: string }>;
    meta: Array<{ name?: string; property?: string; content: string }>;
    noscript: Array<{ innerHTML: string }>;
    script: Array<{ src?: string; type?: string; innerHTML?: string }>;
    style: Array<{ cssText: string; type?: string }>;
    title: string;
    titleAttributes: Record<string, string | number | boolean | null | undefined>;
  };
}

let currentHelmet = {
  title: '',
  metaTags: [] as Array<{ name?: string; property?: string; content: string }>,
  linkTags: [] as Array<{ rel: string; href: string }>,
};

const peek = () => ({
  ...currentHelmet,
  baseTag: [],
  scriptTags: [],
  styleTags: [],
  title: currentHelmet.title,
  titleAttributes: {},
});

const rewind = () => ({
  base: [],
  bodyAttributes: {},
  htmlAttributes: {},
  link: currentHelmet.linkTags,
  meta: currentHelmet.metaTags,
  noscript: [],
  script: [],
  style: [],
  title: currentHelmet.title,
  titleAttributes: {},
});

const Helmet: HelmetStatic = Object.assign(
  // eslint-disable-next-line react/display-name
  React.forwardRef<HTMLDivElement, HelmetProps>((props, ref) => {
    const { meta = [], link = [] } = props;
    // Update the current helmet state
    currentHelmet = {
      title: props.title || '',
      metaTags: meta.map(tag => ({
        name: tag.name,
        property: tag.property,
        content: tag.content,
      })),
      linkTags: link.map(tag => ({
        rel: tag.rel,
        href: tag.href,
      })),
    };

    // Return a mock div element
    return <div ref={ref} data-testid="react-helmet-mock" />;
  }),
  {
    peek,
    rewind,
  }
);

Helmet.displayName = 'Helmet';

export { Helmet };
export default Helmet;
