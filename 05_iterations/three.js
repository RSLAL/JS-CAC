// for of 

// ["", "", ""]

//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
//    console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
 //console.log(`Each char is ${greet}`);
}

// array.forEach(element => {
    
// });

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const iterator of object) {
    
// }

// Maps , it is for unique values

const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

//console.log(map);

for (const key of map) {
 //   console.log(key);
}

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

