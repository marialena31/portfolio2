/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './gatsby-browser.js', './src/**/*.html'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        primary: {
          css: {
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
              marginTop: '3rem',
              marginBottom: '2rem',
              color: '#0056b3', // primary
              borderLeftWidth: '4px',
              borderLeftColor: '#0056b3',
              paddingLeft: '1rem',
              backgroundColor: '#e9f2fd', // un bleu très clair
              boxShadow: '0 1px 4px 0 rgba(0,86,179,0.04)',
              lineHeight: '1.2',
            },
            h3: {
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#003b7a', // primary-dark
            },
          },
        },
      }),
      colors: {
        primary: '#0056b3',
        'primary-dark': '#003b7a',
        'primary-green': '#008f89',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        accent: '#ff4757',
        'gray-light': '#e9ecef',
        'gray-lighter': '#f8f9fa',
        white: '#ffffff',
        'surface-primary': '#ffffff',
        'surface-secondary': '#f8f9fa',
        'surface-tertiary': '#f1f5f9',
        'table-background': '#f7fafc',
        'table-border': '#e2e8f0',
        text: '#333',
        'text-light': '#666',
        'text-muted': '#999',
        'text-tertiary': '#444',
        'text-secondary': '#666',
        background: '#ffffff',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
