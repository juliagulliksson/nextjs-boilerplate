module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Parsing of modern ECMAScript features
    sourceType: 'module', // Usage of imports
    ecmaFeatures: {
      jsx: true, // Parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', // Enables rules that report common problems
    'plugin:@typescript-eslint/recommended', // Enables all the recommended rules
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // ESLint rules. Can be used to overwrite rules specified from the extended configs
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['CustomLabel'],
        labelAttributes: ['inputLabel'],
        controlComponents: ['CustomInput'],
        assert: 'either',
        depth: 3,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
