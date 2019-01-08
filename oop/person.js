//Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        }) 

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(points) {
        return this.grade += points
    }
    getBio() {
        //  const status = this.grade >= 70 ? 'passing' : 'failing'
        //  return `${this.firstName} is ${status} the class.`
        return this.grade <= 69 ? `${this.firstName} is failing the class.` : `${this.firstName} is passing the class.`
    }
}

const me = new Employee('Grzegorz', 'Konarski', 32, 'Student', ['Learning JS, Cooking'] )
me.fullName = 'Józef Konarski'
console.log(me.getBio())
// me.updateGrade(-25)
// console.log(me.getBio())
