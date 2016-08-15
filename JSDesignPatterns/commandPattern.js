/* eslint-disable */

/*==============================================================================================
Command pattern -
* aims to encapsulate method invocation, requests, or operations into a single object.
* gives us the ability to parameterize and pass method calss around 
* decouples objects invoking the action from the objects whcih implement them
  ** this gives a greater degree of overall flexibility in swapping out objects

                            **** Concrete vs Abstract classes ****
                          ------------------------------------------
                    Abstract                                        Concrete
                   ----------                                     ------------
 * Defines an interface not implementation              * Implements missing functionality                                                                          
 * Base class from which others are derived

***********************************************************************************************
The idea behind the Command pattern is to provide a means to separate the responsibilities
of issuing commands from anything executing the commands. Delegating that responsibility to 
different objects instead. 

* Simple command objects bind together both an action and the object wishing to invoke the obect
* Command objects can be swapped as needed. This is one of the larger benefits of the pattern.
***********************************************************************************************/

(function(){
 
  var carManager = {
 
    // request information
    requestInfo: function( model, id ){
      return "The information for " + model + " with ID " + id + " is foobar";
    },
 
    // purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },
 
    // arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }
 
  };
 
})();