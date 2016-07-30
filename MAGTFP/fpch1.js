/* eslint-disable */

// First Class functions means we can treat functions as any other data type
// they may be stored in arrays, passed around, assigned to vars.

var hi = function(name) {
  return 'Hi ' + name;
};

var greeting = function(name) {
  return hi(name);
};

// In the example above we use the greeting function as a means to call
// hi. This is redundant as hi is already a function that expects on argument.
// This example can be rewritten:

var greeting = hi;

// When greeting is called with a String as the name arg
// it will return 'Hi + name'

greeting('Ryan'); // Hi Ryan

// When there is a function whose sole purpose is to call a function and pass it 
// and argument you can just set that function to a variable
// So this:

function callBack(json) {
  console.log(json);
}

function ajaxCall(callback) {
  var json = 'Done!';
  return callback(json);
}

function getServerStuff(callback) {
  // This portion is the same as just having ajaxCall
  // call the callback funtiion and pass in json as the argument
  return ajaxCall(function(json) {
    return callback(json);
  });
}


getServerStuff(callBack);


// Can be rewritten as this:
function callBack(json) {
  console.log(json);
}

function ajaxCall(callback) {
  var json = 'Done!';
  return callback(json);
}


var getServerStuff = ajaxCall;


getServerStuff(callBack);
