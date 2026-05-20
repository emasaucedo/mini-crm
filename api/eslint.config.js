import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';

export default defineConfig({
  ignores: ['dist', 'node_modules', '.eslintrc.cjs', '.eslintrc.json', 'eslint.config.js'],
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
    prettier: prettierPlugin,
  },
  extends: [js.configs.recommended, tseslint.configs['flat/recommended']],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
    ],
  },
});
