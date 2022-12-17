/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  ignorePatterns: ['*.cjs', '*.js'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'unused-imports', 'tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
