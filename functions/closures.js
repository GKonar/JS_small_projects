const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
// console.log(counter.get())

//Adder 
const createAdder = (a) => {
    return (b) => {
        return a + b 
    }
}

// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))


// Tipper
const createTipper = (percent) => {
    return (amount) => {
        return amount * percent 
    }
} 

const tip15 = createTipper(.15)
const tip10 = createTipper(.10)
const tip20 = createTipper(.20)
console.log(tip15(200))
console.log(tip15(125))
console.log(tip10(98))
console.log(tip10(112))
console.log(tip20(100))
console.log(tip20(222))

