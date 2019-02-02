module.exports = {
  extends: [
    require.resolve('eslint-config-standard')
  ],
  env: {
    browser: true
  },
  rules: {
    'no-warning-comments': 'warn'
  }
}
