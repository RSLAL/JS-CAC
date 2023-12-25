let myName = "lal      "

//console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.lal = function(){
    console.log(`lal is present in all objects`);
}

Array.prototype.heyLal = function(){
    console.log(`Lal says hello to Array`);
}

// heroPower.lal()
// myHeros.lal()

//heroPower.heyLal()
//myHeros.heyLal()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//console.log(TASupport.isAvailable);

//Teacher.__proto__ = User
//console.log(Teacher.name);

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Lal".trueLength()
"iceTea".trueLength()