var assert = require('assert');

var calc = require('../calc.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests3', function() {
	// And then we describe our testcases.
	it('returns 1+1=2', function(done) {
		setTimeout(() => {
			assert.equal(calc.add(1, 1), 2);
			// Invoke done when the test is complete.
			done();
		}, 300)
	});

	it('returns 2*2=4', function(done) {
		assert.equal(calc.mul(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
});