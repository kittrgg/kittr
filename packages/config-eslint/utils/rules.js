module.exports = {
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/sort-type-constituents': 'warn',
    'no-floating-decimal': 'warn',
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
    'unicorn/filename-case': 'off',
  },
};
