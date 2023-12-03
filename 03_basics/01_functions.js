function sayMyName() {
  console.log("L");
  console.log("A");
  console.log("L");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     console.log("S")
//     return result
//     console.log("Lal"); // not print 
// }

function addTwoNumbers(number1, number2) {
    return ( number1 + number2 );
    console.log("Lal"); // not print 
}


const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

// function loginUserMessage(username) {
//     // if (username === undefined) {
//     //     console.log("Please enter a username");
//     //     return
//     // }
//     if (!username) {
//         console.log("Please enter a username");
//         return
//     }

//     return `${username} just logged in`
// }


// with default value
function loginUserMessage(username = "SLal") {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}


// console.log(loginUserMessage("Lal"));
// console.log(loginUserMessage());

//rest , spread operator 

// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 800));

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 800));

const user = {
    username: "Slal",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 500]));