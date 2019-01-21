import Hangman from './hangman' 
import getPuzzle from './requests' 

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guessesLeft')
let firstWord

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    firstWord.guessPuzzel(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = '' 
    guessesEl.textContent = firstWord.statusMessage

    const puzzleArray = firstWord.puzzle.split('')
    puzzleArray.forEach(letter => {
        const puzzleElement = document.createElement('span')
        puzzleElement.textContent = letter
        puzzleEl.appendChild(puzzleElement)
    })
    
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    firstWord = new Hangman(puzzle, 5)
    render()
}
 
document.querySelector('#reset').addEventListener('click', startGame)

startGame()
