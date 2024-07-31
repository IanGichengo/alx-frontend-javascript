module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

