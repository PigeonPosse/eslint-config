/**
 * LINTER FILE
 * 
 * Set linter config
 * 
 * since version 1.0.0
 */

module.exports = {
	'env' : {
		'browser'  : true,
		'node'     : true,
		'commonjs' : true,
		'es2022'   : true,
		'jquery'   : true,
	},
	'extends' : [ 
		'eslint:recommended', 
		'plugin:promise/recommended', 
	],
	'plugins' : [ 
		'html', 
		'align-import', 
		'align-assignments', 
		'promise', 
	],
	'parserOptions' : {
		'ecmaVersion' : 'latest',
		'sourceType'  : 'module',
	},
	'rules' : {
		'align-import/align-import'           : 'error',
		'align-assignments/align-assignments' : [
			'error',
			{ 'requiresOnly': false },
		],
		'camelcase'   : [ 'warn' ],
		'key-spacing' : [
			'error',
			{
				'multiLine' : {
					'beforeColon' : true,
					'afterColon'  : true,
				},
				'align' : {
					'beforeColon' : true,
					'afterColon'  : true,
					'on'          : 'colon',
				},
			},
		],
    	'switch-colon-spacing' : [
    		'error', {
    			'after'  : true, 
	    		'before' : true,
	    	},
	    ],
	    'comma-dangle'            : [ 'error', 'always-multiline' ],
		'no-multiple-empty-lines' : [
			'error',
			{ 'max': 1, 'maxEOF': 1, 'maxBOF': 1 },
		],
		'padded-blocks' : [ 'error', 'always' ],
		'one-var'       : [
			'error', 
			{
				'var'   : 'always',
				'let'   : 'always',
				'const' : 'never',
			},
		],
		'vars-on-top'           : 'warn',
		'space-in-parens'       : [ 'error', 'always' ],
		'object-curly-spacing'  : [ 'error', 'always' ],
		'array-bracket-spacing' : [ 'error', 'always' ],
		'indent'                : [ 'error', 'tab' ],
		'linebreak-style'       : [ 'error', 'unix' ],
		'quotes'                : [ 'error', 'single' ],
		'semi'                  : [ 'error', 'always' ],
		'no-inline-comments'    : 'error',
	},
};
