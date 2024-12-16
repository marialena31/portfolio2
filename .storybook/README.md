# Storybook Configuration

This directory contains Storybook configuration files for the portfolio website.

## Files

- `main.ts` - Main Storybook configuration (addons, webpack config)
- `preview.tsx` - Global decorators and parameters
- `__mocks__/gatsby.tsx` - Gatsby-specific mocks for Storybook
- `tsconfig.json` - TypeScript configuration for Storybook

## Usage

Run `npm run storybook` to start the Storybook development server.

## Features

- TypeScript support
- SCSS modules support
- Gatsby mocks for components like Link and StaticImage
- Automatic documentation through @storybook/addon-docs
