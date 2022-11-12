/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		require.resolve('eslint-config-standard')
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	env: {
		browser: true
	},
	rules: {
		indent: ['error', 'tab'],
		'no-console': 'error',
		'no-restricted-globals': [
			'error',
			{
				name: 'name',
				message: 'Use local parameter instead.'
			}
		],
		'no-tabs': 'off',
		'no-warning-comments': 'warn'
	}
}
