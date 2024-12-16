import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  webpackFinal: async config => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      gatsby: path.resolve(__dirname, './__mocks__/gatsby.tsx'),
    };

    if (!config.module) {
      config.module = { rules: [] };
    }

    // Ensure TypeScript recognizes module.rules as defined
    const moduleRules = (config.module.rules = config.module.rules || []);

    // Add babel-loader for TypeScript and JavaScript files
    moduleRules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-private-methods', { loose: true }],
              ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
            ],
          },
        },
      ],
    });

    // Add SCSS support
    moduleRules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    });

    return config;
  },
};

export default config;
