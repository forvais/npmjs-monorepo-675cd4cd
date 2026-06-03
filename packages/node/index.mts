import { defineConfig } from 'eslint/config';

import n from 'eslint-plugin-n';

export default defineConfig(
  {
    name: 'forvais/plugin/node',
    files: ['**/*.ts'],
    plugins: { n },
    extends: ['n/flat/recommended'],
  },
  {
    name: 'forvais/plugin/node/mts',
    files: ['**/*.mts'],
    plugins: { n },
    extends: ['n/flat/recommended-module'],
  },
  {
    name: 'forvais/plugin/node/cts',
    files: ['**/*.cts'],
    plugins: { n },
    extends: ['n/flat/recommended-script'],
  },
);
