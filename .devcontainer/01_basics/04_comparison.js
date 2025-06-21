console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// these two comparisons are unpredictible
//  so always try to avoid them writing in the code.


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an equality check == and comparisons > < >= <=
// work differently.
// comparisons convert null to a number, treating it as 0.
// that's why (3) null>=0 is true and (1) null > 0  is false 


console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)


// ===

console.log("2" === 2);