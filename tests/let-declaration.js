var expect = require('chai').expect;

describe('let declaration', function() {
	'use strict';

	it('can declare a variable like var', function() {
	let foo = 'bar'

	expect(foo).to.equal('bar');
	});

	it('restricts scope to the block', function() {
		let foo = 'bar';

		// let is block scoped, so foo will = bar, no matter that we're trying to set it to 'baz' right here
		if(true) {
			let foo = 'baz';

			expect(foo).to.equal('baz');
		}

		expect(foo).to.equal('bar');

	});
});





