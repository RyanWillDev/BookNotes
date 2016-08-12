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

// You can use the Constructor pattern to simulate classes and private variables and methods
function Person(props) {
  this.name = props.name;
  this.age = props.age;
  let SSN = props.SSN;
  this.getSSN = function() {
    console.log(SSN);
  }
};

let ryan = new Person({name: 'ryan', age: 26, SSN: 1234});

console.log(ryan.SSN); // undefined

ryan.getSSN(); // 1234


// Using the OLOO pattern poplarized by Kyle Simpson.
// I even spent the time to figure out how to simulate private data
const oPerson = {
  create: function(props) {
    ({ name: this.name, age: this.age  } = props);
    this.private = this.private(props); // Calls the private function inherited from oPerson
    // and stores the results in the newly created objects private key.
  }, 
  private: function(props) {
    let data = {
      SSN: props.SSN,
      accNumber: Math.floor(Math.random() * 2345),
    };
     return {
      // Because this is contained within privates closure variable or method defined here
      //will always have access to the data object, but no one else will.
      get: function(key) {
      return data[key];
      }
    };
  },
}

let ryanProps = {
  name: 'ryan',
  age: 24,
  SSN: 1234,
};


let ryan = Object.create(oPerson);
ryan.create(ryanProps);

console.log(ryan); // Object {name: "ryan", age: 24, private: Object}

console.log(ryan.private.get('SSN')); // 1234











