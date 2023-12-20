const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//console.log(myObject);

for (const key in myObject) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    //console.log(key);
    //console.log(key, ': ', myObject[key]);
//console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//console.log(programming[key]);
}


// const map = new Map();

// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('Fr', 'France')
// map.set('IN', 'India')

// map is not iterable , so no result comes in console  
// for (const key in map) {
//      console.log(key);
// }