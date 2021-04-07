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
    'no-restricted-globals': [
      'error',
      {
        name: 'name',
        message: 'Use local parameter instead.'
      }
    ],
    'no-warning-comments': 'warn'
  }
}
