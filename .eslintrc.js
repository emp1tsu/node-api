module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
