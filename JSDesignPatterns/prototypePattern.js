/* eslint-disable */

/*===================================================================================
Prototype pattern - 
* Creates objects based on a template of an existing object through cloning

* The prototype object is used as a blueprint for each object the constructor creates

**************************************************************************************
* The benefit of using the prototype pattern is we are working with the protypal
* strengths of JavaScript, rather than attempting to imitate features of other languages
**************************************************************************************

* Protoype pattern can come with a performance boost. When defining a function in an 
  ** object they're all created by reference. This means that all child objects point
  ** to the same function and don't create their own copies.


I'm including this snippet from constructorPattern.js to show how you could use this pattern
*/

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
      // Because this is contained within private's closure variable or method defined here
      // will always have access to the data object, but no one else will.
      get: function(key) {
      return data[key];
      }
    };
  },
}

let ryanProps = {
  name: 'ryan',
  age: 26,
  SSN: 1234,
};


let ryan = Object.create(oPerson);
ryan.create(ryanProps);

console.log(ryan); // Object {name: "ryan", age: 26, private: Object}

console.log(ryan.private.get('SSN')); // 1234

