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

// In the above example there is a right to left data flow f is called with the results from g.

// Composition is always associative, meaning it doesn't matter how you group two of them. (see fpch1 for associative def)

/**** Pointfree - Pointfree functions never mention the data upon which they operate. ****/

//not pointfree because we mention the data: word
var snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
};

//pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);












