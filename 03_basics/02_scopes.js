let a = 10
const b = 20



if (true) {
    let a = 400
    var c = 30
//    console.log("inner a is :" , a);
//    console.log(b);
}

c = 300

// console.log("global a is :" , a);
// console.log(c);


function one(){
    const username = "SLAL"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

     //two()

}

//one()

// if (true) {
//     const username = "SLAL"
//     if (username === "SLAL") {
//         const website = " youtube"
//         //console.log(username + website);
//     }
//     //console.log(website);
// }

// //console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++



// console.log(addone(5))
// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }
