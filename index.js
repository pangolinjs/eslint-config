module.exports = {
  root: true,
  extends: [
    require.resolve('eslint-config-standard')
  ],
  env: {
    browser: true
  },
  rules: {
    'no-console': 'error',
    'no-warning-comments': 'warn'
  }
}
