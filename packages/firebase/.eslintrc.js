module.exports = {
  root: true,
  extends: [require.resolve('@kittr/lint/node')],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  overrides: [
    {
      files: '*',
      rules: {
        '@typescript-eslint/ban-types': [
          'warn',
          {
            types: {
              // un-ban a type that's banned by default
              Function: false,
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
};
