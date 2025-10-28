let x = 1
let y = 2


console.log("SUBTRACT", subtract(x, y))
console.log("MULTIPLY", multiply(x, y))
console.log("DIVIDE", divide(x,y))
console.log("SQUARE", square(x))

 
function subtract(x,y){
  return x-y
}
function multiply(x,y){
  return x*y
}
function divide(x,y){
  return x/y
}
function square(x){
  return x*x
}
