import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/global.scss';
import * as gatsbyMock from './__mocks__/gatsby.tsx';
import './gatsby-types';
import { iconArgType, pageNameArgType, buttonTypeArgType, phoneNumberArgType } from './types';

// Mock gatsby module
window.__GATSBY = {
  emitter: { on: () => {}, off: () => {} },
};

// Override the gatsby module with our mock
(window as any).gatsby = gatsbyMock;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // Global arg types for common props
  argTypes: {
    icon: iconArgType,
    pageName: pageNameArgType,
    buttonType: buttonTypeArgType,
    phoneNumber: phoneNumberArgType,
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement =>
      React.createElement('div', { style: { margin: '2em' } }, React.createElement(Story)),
  ],
};

export default preview;
