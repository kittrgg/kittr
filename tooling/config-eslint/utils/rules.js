module.exports = {
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/sort-type-constituents': 'warn',
    'no-floating-decimal': 'warn',
    'unicorn/filename-case': 'off',
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['PORT', 'CI', 'PLAYWRIGHT_BASE_URL'],
      },
    ],
  },
};
