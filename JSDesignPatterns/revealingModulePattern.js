/* eslint-disable */

// Revealing Module pattern returns an anonymous object with pointers to the private functionality

var myRevealingModule = (function () {
 
        var privateVar = "Ben Cherry",
            publicVar = "Hey there!";
 
        function privateFunction() {
            console.log( "Name:" + privateVar );
        }
 
        function publicSetName( strName ) {
            privateVar = strName;
        }
 
        function publicGetName() {
            privateFunction();
        }
 
 
        // Reveal public pointers to
        // private functions and properties
 
        return {
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };
 
    })();
 
myRevealingModule.setName( "Ryan Will" );


/**** Advantages **** 
* Allows for more consistent syntax in our code
* Clearly distinguishes public variables and methods
********************/

/**** Disadvantages ****
* Can't overwrite public functions that a private function points to ?The private function will "remember" the public function?
* *********************/

