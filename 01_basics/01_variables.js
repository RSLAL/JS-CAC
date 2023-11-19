const accountId = 1234567
let accountEmail = "lal@goo.com"
var accountPassword = "8967"
accountCity = "Nagpur"

let accountState;

//accountId = 10 // not allowed

accountEmail = "test@gmail.com"
accountPassword = "21212121"
accountCity = "Delhi"


console.log(accountId);

/*
Prefer not to use var 
becuase of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])