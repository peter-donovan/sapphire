module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		project: 'tsconfig.json',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		/* Disabled base rules to eliminate incorrect error reporting */
		'no-return-await': 'off',
		/* TypeScript */
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
		'@typescript-eslint/return-await': 'warn',
		/* Prettier */
		'prettier/prettier': 'warn',
	},
};
