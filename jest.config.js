module.exports = {
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^gatsby-page-utils/(.*)$': 'gatsby-page-utils/dist/$1',
    '^gatsby-core-utils/(.*)$': 'gatsby-core-utils/dist/$1',
    '^gatsby-plugin-utils/(.*)$': ['gatsby-plugin-utils/dist/$1', 'gatsby-plugin-utils/$1'],
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '.storybook/__mocks__'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/types/**',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
};
