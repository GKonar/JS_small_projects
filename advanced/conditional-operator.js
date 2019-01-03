// const myAge = 32    
// const message = myAge >= 18 ? 'You can vote!' : 'You can not vote.'
// console.log(message)

const myAge = 20

const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Show the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage() // conditiom ? true : false
console.log(message)

//Challange

const team = ['Greg', 'Jan', 'Mike', 'Strue', 'Pol']

team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log(`Too many people in your team`)