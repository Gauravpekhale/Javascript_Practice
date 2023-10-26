let name  = "gaurav"
let city  = "nashik"
let age  = 22

// console.log(`Hello My Name is ${name} , I am From ${city} and my age is ${age}`);


let gameName = new String("QWERTY")
// console.log(gameName)

// console.log(gameName[0])
// console.log(gameName.__proto__)



console.log(gameName.length) 
console.log(gameName.toUpperCase()) 
console.log(gameName.toLowerCase()) 

console.log(gameName.charAt(2)) 
console.log(gameName.indexOf('E')) 


const subSting  = gameName.substring(0,3)     
console.log(subSting)      // o/p -> QWE (includes 0,1,2 index)

const newString  = gameName.slice(0,4)     
console.log(newString)      // o/p -> QWER (includes 0,1,2,3 index)

gameName = "    Gaurav     "
console.log(gameName)       
console.log(gameName.trim())       



const url = "gaurav.pekhale@gaurav.com"
console.log(url.replace("gaurav","Ganesh"))
console.log(url.includes("g"))
console.log(url.split("a"))


