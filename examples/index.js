'use strict';

var isPositiveInteger = require( './../lib' );

console.log( isPositiveInteger( 5 ) );
// returns true

console.log( isPositiveInteger( 0 ) );
// returns false

console.log( isPositiveInteger( Math.PI ) );
// returns false

console.log( isPositiveInteger( -5 ) );
// returns false
