var Generator = require('yeoman-generator');

class ReactGenerator extends Generator {
	// The name `constructor` is important here
	constructor(args, opts) {
	    // Calling the super constructor is important so our generator is correctly set up
	    super(args, opts);

	    // This makes `appname` a required argument.
	    this.argument('appname', { type: String, required: true });

	    // Next, add your custom code
	    this.option('babel'); // This method adds support for a `--babel` flag

	    this.helperMethod = function () {
	        console.log('won\'t be called automatically');
	    };
	}

	initializing() {
		this.log('initializing');
	}

	prompting() {
		return this.prompt([{
	      	type    : 'input',
	      	name    : 'name',
	      	message : 'Your project name',
	      	default : this.options.appname,
			store   : true
	    }, {
	      	type    : 'confirm',
	      	name    : 'cool',
	      	message : 'Would you like to enable the Cool feature?',
	      	default : false,
	      	store   : true
	    }]).then((answers) => {
	      	this.log('app name', answers.name);
	      	this.log('cool feature', answers.cool);
	    });
	}

	configuring() {
		this.log('configuring');
	}
	writing() {
		this.log('writing');
	}
	conflicts() {
		this.log('conflicts');
	}
	install() {
		this.log('install');
		this.installDependencies({
	      	npm: false,
	      	bower: false,
	      	yarn: true
	    });
	}
	end() {
		this.log('end');
	}


	method1() {
	    this.log('method1');
	}

	method2() {
	    this.log('method2');
	}

	_private_method() {
      console.log('private method');
    }
}

module.exports = ReactGenerator;