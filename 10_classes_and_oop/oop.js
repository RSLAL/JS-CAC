//Object literal
const user = {
    username: "Lal",
    loginCount: 100,
    singedIn: true,

    getUserDetails: function(){
        //console.log("Got details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


//Constructor function
//new syntax creates empty object 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}


const userOne = new User("Lal", 34, true);
const userTwo = new User("Chai", 2, false);
console.log(userOne.constructor);
console.log(userOne instanceof User);
//console.log(userTwo);

