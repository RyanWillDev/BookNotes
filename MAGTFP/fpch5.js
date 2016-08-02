/*eslint-disable*/

/**** Composition - (Direct from book) Composition feels like function husbandry. 
You, breeder of functions, select two with traits you'd like to combine and mash them together 
to spawn a brand new one. ****/

// An example of compose
var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};


var toUpperCase = function(x) {
  return x.toUpperCase();
};

var exclaim = function(x) {
  return x + '!';
};

var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");
//=> "SEND IN THE CLOWNS!"

function confusedExclaim(str) {
  return str + '?!';
}

// In the above example there is a right to left data flow f is called with the results from g.

// Composition is always associative, meaning it doesn't matter how you group two of them. (see fpch1 for associative def)

// EX. associativity. These two are equivalent.
var wtf = compose(confusedExclaim, compose(exclaim, toUpperCase));
// The inner compose call is executed first returning one function that is composed
// from the two and becomes the second or first argument to the outer compose call
var wtf = compose(compose(confusedExclaim, exclaim), toUpperCase);

wtf('I think I am getting it'); // I THINK I AM GETTING IT!?!

// Variadic Compose example
var compose = function() {
// Makes an array from all the provided arguments, which are the funcs to be composed.
 var funcs = Array.prototype.slice.call(arguments);
 // Calls reduce on the array taking the prev and next arguments
 return funcs.reduce(function(f, g) {
  // returns the results of calling each function with the provided arguments
  return function() { // the composed function is === function
    return f(g.apply(this, arguments));
  }
 }); 
};


/**** Pointfree - Pointfree functions never mention the data upon which they operate. ****/

//not pointfree because we mention the data: word
var snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

//pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);












