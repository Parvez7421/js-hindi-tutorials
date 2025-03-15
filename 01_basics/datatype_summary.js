/*primitive Data Type:
7 type: String,Number,Boolean,null.undefined
Symbol,BigInt
*/

/*
Reference(Non Primitive)::
Array, Object,Function

*/ 
const score =100
const scoreValue=100.33
const isLoggedIn = false
const outSideTemp =null
let userEmail;
const id=Symbol("123")
const anotherId =Symbol("123")
console.log(id===anotherId)//false alway create unique

const bigNumber = 3443434344n

//arrays
const heros =["Iron Man","Saktiman","AntMan"]

let myObj={
    name : "Parvez",
    age : 22
}

const myFunction =function(){
    console.log("Hello World!")
}

console.log(typeof myFunction)//function
console.log(typeof myObj)
console.log(typeof bigNumber)
console.log(typeof heros)
//https://262.ecma-international.org/5.1/#sec-11.4.3