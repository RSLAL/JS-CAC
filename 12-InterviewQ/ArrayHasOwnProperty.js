Array.prototype.extraProperty = "Lal"


const arr = [1,2,3,4];

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (let v in arr) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }

    if (arr.hasOwnProperty(v)) {
        console.log(v);
    }

    
}