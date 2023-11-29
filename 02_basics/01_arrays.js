// array

const myArr = [0, 2, 4, 6, 8, 10]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4 )

//console.log(myArr[4]);
//console.log(myArr.length);
//console.log(myArr[myArr.length -1]);
//console.log(myHeros);

// Array methods

// myArr.push(1000);
// myArr.pop();

//myArr.unshift(77)
// myArr.shift()
// myArr.shift()
// myArr.shift()
// myArr.shift()
// myArr.shift()
// myArr.shift()
// myArr.unshift(34)
// myArr.unshift(43)

// console.log(myArr.includes(56));
//console.log(myArr.indexOf(2));

// const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);