let a: number = 5
let b: string = "5"
let c: number = 5.0

console.log(a + c)
console.log(a + b)
console.log(b + c.toString())

// All of it worked. Second and third got casted to string. And first, well, first is the number.