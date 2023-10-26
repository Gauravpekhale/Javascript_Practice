"use strict"            // This is helps to tell node-env that i am using new version of javascript

 // alert(3+3)         -> We are using Node js and Not a Browser Console ... alert has used in difrent way 


 // Data Types 
 // number  -> Range 2^53 
 let iNO = 10;
 console.log(typeof(iNO))    // o/p -> number
 // bigInt -> to store Big number data 


 // string 
 let name = ""
 console.log(typeof(name))       // o/p -> string
 // null  -> its standlone value in Javascipt 
 let x =null
 console.log(typeof(null))        // o/p -> object
 // Undefined 
 let accountId;
 console.log(typeof(accountId))    // o/p -> undefined
 // Symbol --. To find uniquness the compnents ex. in Angular or in React 


 // object -> Instance of class




 /*
 Type Of Data Types 
 -> Primitive  -> 7 categories 
 -> Non - Primitive 
 
 
 * Primitive ( Always Call By Value)
 string  , number , boolean ,  null  , undefined , symbol , BigInt */
const id = Symbol("123")
const NewId = Symbol("123")
// id and NewId is not Equal ...


/* Non Premitive ( Call by refrence)
Array , Objects , Functions 
 */

let heros = ["aa","ac","xy"]
console.log("Array ")
console.log(heros)

let myObj={ 
    namer :"gaurav",
    age :22
}
console.log("Objects ")
console.log(myObj)


let myfun = function(){
    console.log("Jay Ganesha ");
}

myfun();