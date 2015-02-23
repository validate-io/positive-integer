/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isPositiveInteger = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-positive-integer', function tests() {

	it( 'should export a function', function test() {
		expect( isPositiveInteger ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isPositiveInteger( 5 );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			0,
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			Math.PI,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isPositiveInteger( value );
		}
	});

});
