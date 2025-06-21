// Primitive


// 7 types : String,Number,boolean,null,undefined,Symbol,
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23444444468798990n
// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}



// ******************************************************


// Stack (Primitive) , Heap (Non-primitive)


let myYoutubename = "harshtiwaridotcom"

let anothername = myYoutubename
anothername = "chaiaurcode" 
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);