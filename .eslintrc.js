module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-standard')
  ],
  env: {
    browser: true
  },
  rules: {
    'no-warning-comments': 'warn',
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  }
}
