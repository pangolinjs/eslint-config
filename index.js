/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		'eslint-config-standard'
	],
	plugins: [
		'eslint-plugin-simple-import-sort'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	env: {
		browser: true
	},
	rules: {
		// Built-in
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
		'no-warning-comments': 'warn',

		// simple-import-sort
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error'
	}
}
