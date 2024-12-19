import React from 'react';
import { IconName } from '../../types/data';

interface IconProps {
  name: IconName;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24 }) => (
  <span data-testid={`icon-${name}`} style={{ width: size, height: size }} />
);
