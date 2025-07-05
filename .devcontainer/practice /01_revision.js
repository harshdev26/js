// console.log("Harsh")
// const accountId = 144553
// let accountEmail = "harsh@google.com"
// var accountPassword = "12345"
// accountCity = "Jaipur"


// // accountEmail = "harsh@gmail.com"
// accountPassword = "123"
// console.log(accountPassword)


// var and let keywords can be changed after define.


// const score = 400

// console.log(score.toString().length);

// Dates:

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString())

// let myDate = new Date(2023, 7, 5, 4, 37);
//console.log(myDate);

// let newDate = new Date("05-07-2025")
// console.log(Math.floor(newDate.getTime()/1000))


// Object :

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUsername = {
    email: "Harsh@google.com",
    fullname: {
        name: "Harsh",
        surname: "Tiwari"
    }

}

console.log(regularUsername.fullname.name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

console.log(Object.keys(obj3))
console.log(Object.values(obj3))