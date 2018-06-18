module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: "babel-eslint",
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-closing-tag-location': 'off',
    'import/prefer-default-export': 'off',
  },
  globals: {
    document: true,
  },
};
