// Object : via literals or   via Constructor (Singleton)


// singleton Pattern
// Object.create
/* 
Share a single global instance throughout our application 
with the Singleton Pattern , we restrict the instantiation of certain classes to one single instance. 
This single instance is unmodifiable, and can be accessed globally throughout the application.
Singleton gets created via constructor 
*/


// object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Lal",
    "full name": " S Lal",
    [mySym]: "myKey1",
    location: "New",
    email: "h@goo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// //console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "Lal@yahoo.com"
//Object.freeze(JsUser);
JsUser.email ="L@mm.com"

//console.log(JsUser);

JsUser.greeting = function(){
 console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
   }

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


