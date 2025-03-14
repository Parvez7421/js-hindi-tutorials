const accountId = 12345 //const always fix we cam't change the value once it initialized
let accountEmail ="paru@google.com"
var accountPassword = "par@123"
accountCity="Kolkata"
let accountState;//it will print undefined
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
accountPassword="2222221121"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


