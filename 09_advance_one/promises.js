//console.log("promises");

// // 1- Promise coding approach
// const promiseOne = new Promise( function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('1-Async task is complete');
//         resolve();
//     }, 1000)

// })

// promiseOne.then(function(){
//     console.log("1-Promise consumed");
// })

// // 2- Promise coding approach
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('2-Async task is complete');
//         resolve();
//     }, 1000)
// }).then(function() {
//     console.log("2-Async resolved");
// })

// // 3- Promise coding approach
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@eaxmple.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// 4- Promise coding approach
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;

//     if (!error) {
//       resolve({ username: "Lal", password: "12345" });
//     } else {
//       reject("ERROR: Something went wrong!");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

// 5- Promise coding approach

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//     try {

//         const response = await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// 6- fetch coding approach
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// 7- fetch coding approach
fetch('https://api.github.com/users/rslal')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
