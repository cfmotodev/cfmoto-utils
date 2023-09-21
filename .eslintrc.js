export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },

  // extends: 'standard',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {},
};
