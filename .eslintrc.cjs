module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ignorePatterns: ['.eslintrc.cjs'],
    parser: {
      js: 'espree',
      ts: '@typescript-eslint/parser',
      '<template>': 'espree'
    },
    requireConfigFile: false
  },
  plugins: ['no-relative-import-paths', 'vue', 'prettier', 'unused-imports'],
  // include: ['./src/auto-imports.d.ts'],
  overrides: [
    {
      files: ['components/**/*.js', 'components/**/*.vue', 'src/**/*.js', 'src/**/*.vue']
    }
  ],
  rules: {
    'space-infix-ops': 'error',
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below'
      }
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-api-style': ['error', ['script-setup']], // Use script setup
    'vue/component-name-in-template-casing': ['error', 'PascalCase'], // PascalCase component names
    'vue/v-for-delimiter-style': ['error', 'in'], // Use 'in' delimiter for v-for
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: false,
        disallowVue3BuiltInComponents: false
      }
    ],
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    radix: ['error', 'always'], // Enforce radix when using parseInt()
    curly: 1, // Enforce curly braces for control statements
    'ordered-imports': [0], // Allow/disallow ordered imports
    'object-literal-sort-keys': [0], // Allow/disallow sorting of object literal keys
    'new-parens': 1, // Enforce parentheses with 'new'
    'no-bitwise': 1, // Disallow bitwise operators
    'no-cond-assign': 1, // Disallow assignment within conditionals
    'no-trailing-spaces': 0, // Allow/disallow trailing spaces
    'eol-last': 1, // Enforce newline at end of files
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Enforce function style
    'no-var': 2, // Disallow 'var' keyword
    'prettier/prettier': 'warn', // Integrate Prettier and warn about style discrepancies
    'no-void': ['error', { allowAsStatement: true }], // Disallow 'void' operator, except as a statement
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src', prefix: '@' }
    ], // No relative imports
    // Find and remove unused ES6 module imports.
    'no-unused-vars': 'off', // Disable ESLint's 'no-unused-vars'
    'unused-imports/no-unused-imports': 'error', // Disallow unused imports
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ], // Disallow unused variables and arguments
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always']
  }
}
