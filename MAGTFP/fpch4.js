/*eslint-disable */

/**** Currying - You can call a function with less arguments than it expects.
It returns a function that takes the remaining arguments ****/

// This function takes one argument, x, and returns a function that expects another var
function add(x) {
  return function(y) {
    return x + y;
  }
}

var increment = add(1); // increment now = function(y) { return 1 + y; }
// So you can call increment with any number and it will return the number incremented by one
// This is because increment remembers that x = 1 due to closure

increment(2); // returns 3 because 2 becomes the value of y

/**** Arity - The arity of a function is the number of arguments that function accepts.
Addition takes two arguments therefore it is a binary function or a function with an arity
of 2. A function that takes a variable number of arguments is known as variadic. ****/

