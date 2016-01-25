var expect = require('chai').expect;

describe('template strings', function () {
	it('should be just a string', function () {
		var string = `abc`;

		expect(string).to.be.a('string');
	});
	it('can evaluate the variables', function() {
		var bar = 'baz';
		var string = `foo${bar}`;

		expect(string).to.equal('foobaz');
	});
	it('can exectue functions', function() {
		var string = `The date is: ${new Date()}`;
		var date = new Date();

		expect(string).to.equal("The date is: " + date);
	});

	// evaluate expressions using template strings
	it('can evaluate expressions using template strings', function() {
		var a = 5;
		var b = 60;
		var template = `the total is: ${a + b}`;

		expect(template).to.equal('the total is: ' + (a + b));
	});

	// multi-line strings using template strings
	it('can evaluate multi-line strings' , function() {
		var string = `ello
 wurrrrld`;

		expect(string).to.equal('ello\n wurrrrld');
	});


});
