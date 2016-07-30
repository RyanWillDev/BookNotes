/* eslint-disable */

// FP uses mathematical principles such as

// associative - You can add or multiply regardless of how the numbers are grouped
// grouped means how parenthesis are used.
add(add(x, y), z) === add(x, add(y, z));
// Adding z to the results of adding x and y is the same as 
// adding x to the results of adding y and z

// commutative - You can change the order of the numbers involved without changing the result
add(x, y) === add(y, x);
// adding x to y is the same as adding y to x

// identity - Any time you add 0 to a number or multiply by 1 the result or product is the 
// original number
add(x, 0) === x;
// x plus zero is just x

// disributive - mulitplication "distributes" over addition
// in layman's terms: 
// a(b + c) === ab + ac or 2(3 + 4) = 14 ==== 2 * 3 + 2 * 4 = 14
multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));
