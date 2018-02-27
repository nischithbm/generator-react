var Generator = require('yeoman-generator');

class ReactGenerator extends Generator {
	// The name `constructor` is important here
	constructor(args, opts) {
	    // Calling the super constructor is important so our generator is correctly set up
	    super(args, opts);

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
		this.log('prompting');
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