console.log("\n Number Conversion");

let score = 33

console.log(score);
console.log(typeof score);

score = "33"         

console.log(score);    // o/p -> "33"
console.log(typeof score);  // string


score = Number("123");      // Easily Convertibleee
console.log(score);         // 123
console.log(typeof score); // number

score = Number("123a");   // not convertible return NAN
console.log(score);         // NAN -> Not A Number 
console.log(typeof score);    // Number


console.log("\n Boolean");


let isLoggedIN = 0 ;
let isLoggedOUT = 1 ;

let booleanConverted = Boolean(isLoggedIN)
console.log(booleanConverted + " - From Number");         // false 
console.log(typeof booleanConverted);    // boolean


booleanConverted = Boolean(isLoggedOUT)

console.log(booleanConverted + " - From Number");         // true
console.log(typeof booleanConverted);    // boolean


booleanConverted = Boolean("")

console.log(booleanConverted + " - From String" );         // false
console.log(typeof booleanConverted);    // boolean

booleanConverted = Boolean(" ")

console.log(booleanConverted+ " - From String");         // true
console.log(typeof booleanConverted);    // boolean

booleanConverted = Boolean("Gaurav")

console.log(booleanConverted + " - From String");         // true
console.log(typeof booleanConverted);    // boolean



console.log("\nString Conversion");


let someNUmber = 33         

console.log(someNUmber);    // o/p -> 33
console.log(typeof someNUmber);  // NUmber

let myString = String(someNUmber)
console.log(myString);    // o/p -> "33"
console.log(typeof myString);  // string
