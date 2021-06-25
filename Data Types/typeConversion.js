/**
 * 1. Implicit type conversion - automatic type conversion.
 * 2. Explicit type conversion - manual type conversion.
 */

/// Implicit type conversion- number to string.
/// when we try to add a number to a string it becomes string.

console.log('4' + 2); // output: 42

/// But in (-, *, /) it becomes number!

console.log('4' - 2); // output: 2
console.log('4' * 3); // output: 12
console.log(12 / '4'); // output: 3

/// Implicit Boolean conversion to number.

console.log('5' - true); // output: 4

/// Explicit conversion - to Number.

console.log(Number("321")); // output: 321
console.log(Number(true)); // output: 1
console.log(Number(null)); // output: 0
console.log(Number(undefined)); // output: NaN
console.log(Number("hasibul")); // output: NaN

/// Explicit conversion - to String.

console.log(String(321)); // output: "321"
console.log(String(true)); // output: "true"
console.log(String(undefined)); // output: "undefined"
console.log((456).toString()); // output: 456

/// Explicit conversion - to Boolean.

console.log(Boolean('')); // output: false
console.log(Boolean(0)); // ouput: false
console.log(Boolean(undefined)); // output: false
console.log(Boolean(null)); // output: false
console.log(Boolean(NaN)); // output: false

console.log(Boolean(32)); // output: true
console.log(Boolean('hasibul')); // output: true
console.log(Boolean(1)); // output: true

let num1 = 10;

console.log(num1);