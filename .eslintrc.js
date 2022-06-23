module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', 'xxx', '**', '!', '?'], location: 'start' }
    ],
    'no-undef': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-use-before-define': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'vue/no-multiple-template-root': 0
  }
}
