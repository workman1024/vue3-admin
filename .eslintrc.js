
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-recommended'
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser:'@typescript-eslint/parser',
		sourceType:'module'
	},
	overrides:[{
		files: ["*.vue"],
		rules: {
			"vue/max-attributes-per-line": ["error", {
				"singleline": 3,
				"multiline": {
					"max": 1,
					"allowFirstLine": false
				}
			}],
		}
	}],
	plugins:['vue','@typescript-eslint'],
	rules: {
		"indent": ["warn", "tab"],
		"vue/multi-word-component-names":0
	}
}
