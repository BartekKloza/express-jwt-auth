module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: [
    'prettier'
  ],
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 0
  },
};
