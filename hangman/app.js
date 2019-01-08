const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guessesLeft')
const firstWord = new Hangman('Car Parts', 2)


puzzleEl.textContent = firstWord.puzzle
guessesEl.textContent = firstWord.statusMessage
// console.log(firstWord.status)

// KEYPRESS EVENT LISTENER
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    firstWord.guessPuzzel(guess)
    
    puzzleEl.textContent = firstWord.puzzle
    guessesEl.textContent = firstWord.statusMessage
    console.log(firstWord.status)
})

getPuzzle('2').then((puzzle) =>{
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})

getCountry('PL').then((country) => {
    console.log(country)
}).catch((error) => {
    console.log(error)
})

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//         return response.json() //from calling .json() we get Promise
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })



