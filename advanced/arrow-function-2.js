const add = function (a, b) {
    return arguments[0] + arguments[1]
} 

console.log(add(21, 24, 43, 56))

const car = {
    color: 'red',
    getSummary: function() {
        return `Car is ${this.color}`
    }
}

console.log(car.getSummary())