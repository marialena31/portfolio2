import React from 'react';
import { IconName } from '../types/data';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
  const style = {
    width: size,
    height: size,
    color: color || 'currentColor',
  };

  const commonProps: React.SVGProps<SVGSVGElement> = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style,
    className,
  };

  switch (name) {
    case 'wrench':
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'arrow-up':
      return (
        <svg {...commonProps}>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'code':
      return (
        <svg {...commonProps}>
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case 'api':
      return (
        <svg {...commonProps}>
          <path d="M4 17V7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );
    case 'consulting':
      return (
        <svg {...commonProps}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'typescript':
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M3 3h18v18H3V3zm14.5 12.5v-2.1h-4.2v6.9h-2.1v-6.9H7v-2.1h8.4v2.1h2.1zm-9.1 0v-1.2H9v1.2h2.1v2.1H9.2c-.4 0-.7-.1-1-.4-.3-.3-.4-.6-.4-1v-1.2c0-.4.1-.7.4-1 .3-.3.6-.4 1-.4h2.1v-2.1H7v2.1h1.2v-1.2h2.1v2.1H8.2c-.4 0-.7.1-1 .4-.3.3-.4.6-.4 1v1.2c0 .4.1.7.4 1 .3.3.6.4 1 .4h2.1v-2.1H8.4z" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35C3.3 6.63 3 7.15 3 7.7v8.6c0 .55.3 1.07.78 1.35l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.35V7.7c0-.55-.3-1.07-.78-1.35l-7.44-4.3c-.23-.13-.5-.2-.78-.2zm0 4.45c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2z" />
        </svg>
      );
    case 'graphql':
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18.5L4 17v-7l8 4v6.5zm0-8.5L4 8l8-4 8 4-8 4zm8 1v7l-8 3.5V14l8-4z" />
        </svg>
      );
    case 'react':
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      );
    case 'github':
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...commonProps} style={style} className={className} stroke="currentColor">
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="2"
            y="9"
            width="4"
            height="12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="4"
            cy="4"
            r="2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...commonProps} style={style} className={className} stroke="currentColor">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    // Add other icon cases as needed
    default:
      return null;
  }
};
