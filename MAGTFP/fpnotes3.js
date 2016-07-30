/*eslint-disable */

/******* A pure function is a function that, given the same input, will always return
the same output and does not have any observable side effect *******/

// Functional programming emphasizes pure functions

// Impure
var minimum = 21;

var checkAge = function(age) {
  return age >= minimum;
}

// Because the checkAge function relies on minimum, which in this case is
// state that lives outside of and can be mutated, it is impure.

// Pure
var checkAge = function(age) {
  var minimum = 21; 
  return age >= minimum;
}

// Now all that this function relies on is the age passed to it.
// It does not have to rely on the fact that minimum never changes.
// It will always return whether the age is >= minimum.

/***** Side Effect = anything that occurs in our computation other than the calculation of a result. ******/
// It is not the effect that is bad it is the side part. 

/***** Memoization - is an optimization technique used primarlily to speed up programs by storing the results of 
expensive function calls and returning the cached result when the same inputs occur again. 
Etymology - derived from the Latin word memorandum (to be remembered). "turning the results of a function into somethin to be remembered."
*****/

// Pure functions make testing much easier. We don't have to setup and assert the state of the world after each test.
// We simply give the function input and assert output.

/**** Referential Transparency - when chunk of code can be substituted for its evalutated value without 
changing the behavior of the program ****/

/**** We can run pure functions in parallel since it does not need access to shared memory. ****/




