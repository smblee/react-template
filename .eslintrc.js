module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/prettier',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.{ts,tsx}', '**/*.test.{ts,tsx}', '**/__tests__/*'],
      },
    ],
    // React 17
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.stories.{ts,tsx}'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
