const { rules } = require('./utils/rules');

// See: https://github.com/eslint/eslint/issues/3458
// @ts-expect-error No types package available
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    '@vercel/style-guide/eslint/typescript',
  ].map((config) => require.resolve(config)),
  ignorePatterns: ['**/.next/**', '**/.eslintrc.js'],
  overrides: [
    {
      files: [
        'pages/**',
        'src/pages/**',
        'next.config.js',
        'app/**/{head,layout,page,error,not-found}.tsx',
        'src/app/**/{head,layout,page,error,not-found}.tsx',
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
  rules,
};
