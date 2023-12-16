// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//() ->Function definiation ()->function execution
//()()
// 2 IIFE fails becuase of missing ; in first IIFE
// missing scope of first IIFE
( (name1) => {
    console.log(`DB CONNECTED TWO ${name1}`);
})('Lal')