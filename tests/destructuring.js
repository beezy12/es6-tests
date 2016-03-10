// var expect = require('chai').expect;
//this is what destructuring does
// takes a property from an object and sets it to a variable name
var { expect } = require('chai');

describe('destructuring', function() {
	describe('arrays', function() {
		it('can extract from arrays', function() {
			var [foo, bar] = ['wut', 'hey'];

			expect(foo).to.equal('wut');
			expect(foo).to.equal('hey');
		});

		it('can handle leading commas', function() {

		})


	})
})
