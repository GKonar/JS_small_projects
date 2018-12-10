let myBook = {
    title: '1984',
    auhotr: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.auhotr}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.auhotr}`);

// CHALLENGE

let person = {
    name: 'Grzegorz',
    age: 32,
    location: 'Danmark'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);