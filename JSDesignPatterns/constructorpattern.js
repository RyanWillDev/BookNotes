/* eslint-disable */

// Classical object-oriented languages use a constructor to initialize a new object once memory has been
// allocated for it.

// In JS almost everything is an object, therefore we focus on object constructors

/**** Ways to create objects in JS ****/

// Object Literal 
let newObj = {};

// Object.create() method
let newObj = Object.create(prototypeObject); // This method is used for prototypal inheritance 

// Object constructor
let newObj = new Object(); // Creates an object wrapper for a specific value. If no value creates and returns empty object.

// JS does not support classes, but it does support constructor functions that work with objects

function Car(model, year, miles) { // Constructor function
  // this references the new object being created
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() { 
    return `${this.model} has done ${this.miles} miles`;
  }
}

let civic = new Car('Honda Civic', 2009, 20000);

// The Constructor pattern above creates a new toString method for each instantiated object
// Since almost all objects contain prototype it is possible to extend the Car prototype to 
// let all instantiated objects have access to the toString method

function Car(model, year, miles) { // Constructor function
  // this references the new object being created
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function() { // This single instance of toString will be accessed by all
  return `${this.model} has done ${this.miles} miles`; // instantiated Car objects
}

let civic = new Car('Honda Civic', 2009, 20000);













