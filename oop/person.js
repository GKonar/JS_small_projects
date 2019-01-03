//Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age 
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    }) 

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Grzegorz', 'Konarski', 32, ['Cooking' ,'Relaxing'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Justyna', 'Konarska', 32)
console.log(person2.getBio())

// hello this is a comment