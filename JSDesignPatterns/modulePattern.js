/* eslint-disable */

// Modules keep the code in a project seaparated and organized
// Options for implementing modules Module Pattern, Object literal notation, AMD and Commonjs, ECMAScript Harmony

// The Module pattern is based on object literals

// Object literals can assist in encapsulating and organizing code.

// The Module pattern was originally defined as a way to provide both private and public encapsulation. 
// In JS this pattern is used to define public and private methods and variables inside a single object.
// This shields our code from causing or falling victim to conflicts in the global scope.

// There is no true privacy in JS. Instead, this concept is simulated using closures created by function
// scope. Methods and or variables declared in the module are only availabe inside the module. Anything inside
// the returning object are available to everyone.

const testModule = (function () {
 
  let counter = 0; // Since this is declared within the function's scope it is not accessible from outside.
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log(`counter value prior to reset: ${counter}`);
      counter = 0;
    }
  };
 
})();

testModule.incrementCounter(); // counter = 1;
testModule.resetCounter(); // counter value prior to reset 1

/**** Advantages ****
* Clean and easy to organize
* Supports private data
********************/


/**** Disadvantages ****
* Different ways to acess public and private members
* Can't access private members from methods added to the module at a later time
* Can't test private members
***********************/