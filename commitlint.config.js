module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'style',
				'refact',
				'test',
				'config',
				'del',
				'dep_add',
				'dep_rm',
				'gitingore',
				'docs',
				'perf',
				'start',
				'moving',
				'assets',
			],
		],
	},
};
