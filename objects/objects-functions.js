let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(otherBookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

let tempConverter = function (farenheit) {
    return {
        celsius: `${farenheit} ˚F in celsius is ${Math.floor((farenheit - 32) * 0.55)} ˚C`,
        kelvin: `${farenheit} ˚F in kelvin is ${Math.floor((farenheit + 459.67) * 0.55)} ˚K`
    }
}

let tempConverted = tempConverter(32);
let tempConverted_2 = tempConverter(68);

console.log(tempConverted.celsius);
console.log(tempConverted_2.celsius);

console.log(tempConverted.kelvin);
console.log(tempConverted_2.kelvin);
