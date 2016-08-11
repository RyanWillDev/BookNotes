/* eslint-disable */

/****======================================================================== 
Observer pattern - 
** an object (known as a subject) maintains a list of objects 
** that depend on it. automatically notyifying them of any changes to state.
========================================================================****/

/****=================================================================================================== 
Components of the Observer pattern 
* Subject - maintains a list of observers, facilitates adding or removing them
* Observer - provides an update interface for objects that need to be notified of Subject's state changes
* Concrete Subject - broadcasts notifications to observers on changes, stores state of Concrete Observers
* Concrete Observer - stores reference to ConcreteSubject, implements update interface for the Subject's 
* state is consistent with its own
===================================================================================================****/

// Example from the book
function ObserverList(){
  this.observerList = [];
}
 
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
 
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
 
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
 
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
 
ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};


// Following the advice of Kyle Simpson from the YDKJS series you could also do it this way
let ObserverList = {
  // list: [], moved to init to avoid changing the inherited list
  init: function() {
    this.list = [];
  },
  addObserver: function(obj) {
    return this.list.push(obj);
  },
  count: function() {
    return this.list.length;
  },
  get: function(index) {
    if (index > -1 && index < this.list.length) {
      return this.list[index];
    }
  },
  indexOf: function(obj, startIndex) {
    return this.list.indexOf(obj);
  },
  removeObserver: function() {
    this.list.splice(index, 1);
  }
};


let Subject = Object.create(ObserverList);
Subject.init(); // initialize list
