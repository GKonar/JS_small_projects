const Hangman = function (word, guessesLeft) {
    this.word = word.toLowerCase().split('')
    this.guessesLeft = guessesLeft
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getStatusMessage = function () {
    const status = document.querySelector('#status')
    
    if(this.status === 'finished') {
        status.textContent = `Great work! U guessed the word!`
    } else if (this.status === 'failed') {
        status.textContent = `Nice try. The word was "${this.word.join('')}"`
    } else { 
        status.textContent = `Guesses left: ${this.guessesLeft}`
    }
}

Hangman.prototype.setStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    
    if (this.guessesLeft === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    this.getStatusMessage()
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.guessPuzzel = function (char) {
    char = char.toLowerCase()

    const isUnique = !this.guessedLetters.includes(char)
    const isBadGuess = !this.word.includes(char)


    if (isUnique) {
        this.guessedLetters.push(char) 
    } 

    if (isUnique && isBadGuess && this.guessesLeft > 0) { 
        this.guessesLeft--
    } 

    this.setStatus()
}