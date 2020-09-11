module.exports = {
  root: true,
  extends: [
    require.resolve('eslint-config-standard')
  ],
  env: {
    browser: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-warning-comments': 'warn'
  }
}
