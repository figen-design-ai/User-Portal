import js from '@eslint/js'
import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import prettierConfig from 'eslint-config-prettier'

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				React: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			'react-hooks': reactHooks,
			prettier: prettierPlugin,
			'@next/next': nextPlugin,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...prettierConfig.rules,
			'prettier/prettier': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			eqeqeq: ['error', 'always'],
			'no-console': 'warn',
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/rules-of-hooks': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowInterfaces: 'always',
				},
			],
			'max-len': [
				'warn',
				{
					code: 100,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
				},
			],
			'max-lines': [
				'warn',
				{
					max: 100,
					skipBlankLines: true,
					skipComments: true,
				},
			],
			'@next/next/no-html-link-for-pages': 'error',
			'@next/next/no-img-element': 'warn',
		},
	},
	{
		files: ['*.js', '*.cjs'],
		languageOptions: {
			globals: {
				require: 'readonly',
				module: 'readonly',
				exports: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
			},
		},
	},
	{
		ignores: [
			'.next/**',
			'out/**',
			'build/**',
			'node_modules/**',
			'*.min.js',
			'*.min.css',
		],
	},
]
