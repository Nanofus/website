module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/prettier',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser'
    }
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
