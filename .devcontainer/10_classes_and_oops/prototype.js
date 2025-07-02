// let myName = "harsh     "
// let mychannel = "chai   "
// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    console.log(`Harsh is present in all objects`);
}

// heroPower.harsh()
// myHeros.harsh()


Array.prototype.heyHarsh  = function(){
    console.log(`harsh says hello`);
}

// heroPower.harsh()
// myHeros.harsh()

myHeros.heyHarsh()
// heroPower.heyHarsh()

// inheritance(Prototyple inheritance)


const User = {
  name: "chai",
  email: "chai@google.com"
}


const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiaurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}


anotherUsername.trueLength()
"harsh".trueLength()