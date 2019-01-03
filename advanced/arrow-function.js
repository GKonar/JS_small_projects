// const square = (num) => num * num
// console.log(square(5))

const people = [
    {
        name: 'Greg',
        age: 32
    },
    {
        name: 'Tymon',
        age: 1
    },
    {
        name: 'Janek',
        age: 29
    },
    {
        name: 'Zenon',
        age: 22
    }
]

const under30 = people.filter((person) => person.age < 30)
// console.log(under30)

const just22 = people.find((person) => person.age === 22)
console.log(just22.name)