// let num = 183.941

// console.log(num.toFixed(10)) 

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let min = 0
// let max = 20
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(randomNum);

//Challange area 

let makeGuess = function(num) {
    let min = 0
    let max = 5
    
    return  Math.floor(Math.random() * (max - min + 1)) + min === num
}

console.log(makeGuess(1))
// console.log(makeGuess(2))
// console.log(makeGuess(3))
// console.log(makeGuess(4))
// console.log(makeGuess(5))
