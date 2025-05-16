import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTools as faToolsIcon,
  faCompass,
  faSync,
  faLink,
  faGlobe,
  faBook,
  faCloud,
  faScrewdriverWrench,
  faUserTie,
  faArrowsRotate,
  faServer,
  faDatabase,
  faCloudArrowUp,
  faCubes,
  faShieldAlt,
  faFireExtinguisher,
  faSearchDollar,
  faHandshake,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconDefinition> = {
  check: faCheck,
  tools: faToolsIcon,
  compass: faCompass,
  sync: faSync,
  link: faLink,
  globe: faGlobe,
  book: faBook,
  cloud: faCloud,
  wrench: faScrewdriverWrench,
  'user-tie': faUserTie,
  rotate: faArrowsRotate,
  server: faServer,
  database: faDatabase,
  'cloud-upload': faCloudArrowUp,
  cubes: faCubes,
  'shield-alt': faShieldAlt,
  'fire-extinguisher': faFireExtinguisher,
  'search-dollar': faSearchDollar,
  handshake: faHandshake,
  medal: faMedal,
};

interface IconProps {
  name: keyof typeof iconMap;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2x';
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 'sm' }) => {
  const icon = iconMap[name] || faCheck;
  return <FontAwesomeIcon icon={icon} className={className} size={size} />;
};

export default Icon;
