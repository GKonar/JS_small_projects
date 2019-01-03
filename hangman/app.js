// FIRST GAME
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guessesLeft')
const firstWord = new Hangman('Cat', 2)

puzzleEl.textContent = firstWord.getPuzzle()
guessesEl.textContent = firstWord.guessesLeft


// KEYPRESS EVENT LISTENER
window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    firstWord.guessPuzzel(guess)
    
    puzzleEl.textContent = firstWord.getPuzzle()
    guessesEl.textContent = firstWord.guessesLeft
    
    firstWord.getStatus()
}) 

