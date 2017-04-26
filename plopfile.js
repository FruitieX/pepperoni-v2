module.exports = (plop) => {
	plop.setGenerator('module', {
		description: 'Generate a Redux connected module',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Name of module',
			validate: (value) => {
				if ((/.+/).test(value)) {
					return true;
				}

				return 'A name is required';
			}
		}],
		actions: [{
			type: 'add',
			path: 'modules/{{properCase name}}.js',
			templateFile: 'templates/module.js',
			abortOnFail: true
		}]
	});
};
