import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:8000/___graphql`,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/types/graphql-types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: false,
        maybeValue: 'T | null',
        enumsAsTypes: true,
        skipTypename: true,
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          enumValues: 'upper-case#upperCase',
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
