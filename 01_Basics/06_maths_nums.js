const num = 101
const balance = new Number(100)
console.log(num)
console.log(balance)
console.log(balance.toString().length)

let newNum =  154.05585
console.log(newNum.toFixed(2))

console.log(newNum.toPrecision(3))


let hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))



//***************  MATH ***********************

// console.log(Math)
// console.log(Math.round(2.550))
console.log(Math.floor(2.550))
// console.log(Math.abs(-80))
// console.log(Math.sqrt(4))
// console.log(Math.min(4,8,0,50))
// console.log(Math.max(4,8,0,50))

console.log(Math.random())   // alaways gives from 0 to-> 1 
console.log((Math.random()*10) +1)


let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
