import { defineConfig } from 'eslint/config';

import js from './packages/base/index.mjs';
import ts from './packages/typescript/index.mjs';

export default defineConfig(js, ts);
