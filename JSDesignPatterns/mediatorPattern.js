/* eslint-disable */

/*===============================================================================
Mediator pattern -
* Centeral point of control that components communicate through
* Decouples systems by having component interactions handled through the Mediator
  ** Think airport traffic control. All communication is done from plane to tower
  ** instead of plane to plane.
===============================================================================*/

/* Event Aggregator and Mediator share commonalities
* Both use a third party object to facilitate communication
  ** The Event Aggregator is the third party
* The difference comes down to where the logic is coded
* EA uses a "fire and forget it" model of communication
  ** It does not care if there are any Subscribers 
* Mediator pays attention to the events and facilitates additional behavior
  ** with a known set of actors.

                                When To Use Which
                              ---------------------
* EA is best suited for a large number of Subscribers or totally unrelated objects
* A mediator is best applied when two or more objects have an indirect working relationship, 
  ** and business logic or workflow needs to dictate the interactions and coordination of these objects.
* Can be combined!

                              **** Advantages ****
                            ------------------------
* Reduces communication channels between objects from many to many to just many to one

                            **** Disadvantages ****
                           --------------------------
* Can introduce a single point of failure
* Can cause a performance hit due to indirect communication

========================================================================================================*/
