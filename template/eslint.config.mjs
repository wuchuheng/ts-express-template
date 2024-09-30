import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { files: ['src/**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'arrow-body-style': ['error', 'as-needed'],
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
    },
  },
];
