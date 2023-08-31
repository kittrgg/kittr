const { rules } = require('./utils/rules');

module.exports = {
  extends: [
    'turbo',
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/react',
      '@vercel/style-guide/eslint/next',
      '@vercel/style-guide/eslint/typescript',
    ].map((config) => require.resolve(config)),
  ],
  ignorePatterns: ['**/.next/**', '**/.eslintrc.js'],
  overrides: [
    {
      files: ['**/route.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
        'jsx-a11y/alt-text': 'off',
      },
    },
    {
      files: ['**/og/route.tsx'],
      rules: {
        '@next/next/no-img-element': 'off',
        'jsx-a11y/alt-text': 'off',
        // This is to allow us to use `tw` as a styling property.
        'react/no-unknown-property': 'off',
      },
    },
    {
      files: [
        'pages/**',
        'src/pages/**',
        'next.config.js',
        'app/**/{head,layout,page,error,not-found}.tsx',
        'src/app/**/{head,layout,loading,page,error,not-found}.tsx',
        'src/app/**/*.page.tsx',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parserOptions: {
    tsconfigRootDir: `${__dirname}/tsconfig.json`,
  },
  root: true,
  rules: {
    ...rules,
    // We'll undo this rule after we make it to Vercel Blob
    "@next/next/no-img-element": "off"
  },
};
