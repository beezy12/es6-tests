var expect = require('chai').expect;

describe('arrow functions', function() {
	it('is shorter to write', function() {
		var fn = () => {
			return 'hello world'
		};

		expect(fn()).to.equal('hello world');
	});

	it('one parameter can be written without parens', function() {
		var fn = param => {
			return `hello ${param}`;
		};

		expect(fn('brian')).to.equal('hello brian');
	});

	it('shorten function writing using fat arrow', function() {
		var short = () => 5*10;

		expect(short()).to.equal(50);
	});

	it('binds "this" to the function', function() {
		this.foo = 'bar';

		var fn = () => {
			return this.foo;
		};

		expect(fn()).to.equal('bar');
	});
});


