/* eslint-disable */

// Singleton pattern restricts instantiation of a class to a single object. 
// The Singleton pattern is implemented by creating a class with a metod that 
// creates a new instance if one doesn't already exist.
// If one does exist it returns a reference to the object.

const mySingleton = (function () {
  // Instance stores a reference to the Singleton
  let instance;
 
  function init() {
    // Singleton
 
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
 
    const privateVariable = "Im also private";
 
    const privateRandomNumber = Math.random();
 
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };
 
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  }; 
})();
 
/****=================================================================================================
Singletons can have valid uses, but often in JS they are a sign you my need to re-evaluate your design.
They tend to increase tight coupling of you or is overly spread.
=================================================================================================****/






