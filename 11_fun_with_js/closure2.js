/*
A closure is the combination of a function bundled together(enclosed) with references 
to its surrounding state (the lexical environment)

A function inside another function can access the variables from the outer function ( parent function).


inner function can access the varaibles from the outer function.  

*/

// Simple code snippet 

/*
let hello = "Hello!";

function sayHelloWorld() {
  let world = "World!";

  function wish() {
    let year = "2024!";
    console.log("1: " + hello + " " + world + " " + year);
  }
  wish();
  
  //console.log("2: " + hello + " " + world + " " + year); // year is out of scope 
  console.log("2: " + hello + " " + world + " " + "year");
}

sayHelloWorld();
//console.log("3: " + hello + " " + world + " " + year); // world and year are out of scope 
console.log("3: " + hello + " " + "world" + " " + "year");
*/
/* 
Closures are created every time a function is created (at function-creation time). 
Every closure has three scopes 

- Local scope ( own scope )
- Outer functions scope 
- Global scope 

*/


// code to demonstrate closure 
let helloc = "Hello!";


let sayHelloWorld = function() {
    
  let worldc = "World!";

  function wish() {
    let yearc = "2024!";
    console.log(helloc + " " + worldc + " " + yearc);
  }
  //wish();
  return wish;

}
console.log(sayHelloWorld); // Function sayHelloWorld
console.log(sayHelloWorld()); // Function wish

let callFunc = sayHelloWorld();
callFunc();

/* 
The inner function wish() is returned from the outer function before it's executed. 
this happens becuase functions in JavaScript form closures 

-callFunc holds a reference to the function wish when sayHelloWorld runs 

-wish maintains a reference to its surrounding(lexical) environment 
where the variable world exists  
*/

/*
Natively, JavaScript does not support the creation of private variables and methods

A common and practical use of closure is to emulate private variables and methods and 
allow data privacy. Methods defined within the closure scope are privileged 

https://opensource.com/article/21/2/javascript-closures

*/


var resourceRecord = function(myName, myAddress) {
    var resourceName = myName;
    var resourceAddress = myAddress;
    var accessRight = "HR";
    return {
      changeName: function(updateName, privilege) {
        //only HR can change the name
        if(privilege === accessRight ) {
          resourceName = updateName;
          return true;
        } else {
          return false;
        }
      },   
      changeAddress: function(newAddress) {
        //any associate can change the address
        resourceAddress = newAddress;          
      },   
      showResourceDetail: function() {
        console.log ("Name:" + resourceName + " ; Address:" + resourceAddress);
      }
    }
   }
   //Create first record
   var resourceRecord1 = resourceRecord("Perry","Office");
   //Create second record
   var resourceRecord2 = resourceRecord("Emma","Office");
   //Change the address on the first record
   resourceRecord1.changeAddress("Home");
   resourceRecord1.changeName("Perry Berry", "Associate"); //Output is false as only an HR can change the name
   resourceRecord2.changeName("Emma Freeman", "HR"); //Output is true as HR changes the name
   resourceRecord1.showResourceDetail(); //Output - Name:Perry ; Address:Home
   resourceRecord2.showResourceDetail(); //Output - Name:Emma Freeman ; Address:Office



