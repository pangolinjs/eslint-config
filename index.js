module.exports = {
  root: true,
  extends: [
    require.resolve('eslint-config-standard')
  ],
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-warning-comments': 'warn',
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  }
}
