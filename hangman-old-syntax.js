const Hangman = function (word, guessesLeft) {
    this.word = word.toLowerCase().split('')
    this.guessesLeft = guessesLeft
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getStatusMessage = function () {
   if(this.status === 'finished') {
        return `Great work! U guessed the word!`
    } else if (this.status === 'failed') {
        return `Nice try. The word was "${this.word.join('')}"`
    } else { 
        return `Guesses left: ${this.guessesLeft}`
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

    if (this.status !== 'playing') {
        return                          // return undefined
    }

    if (isUnique) {
        this.guessedLetters.push(char) 
    } 

    if (isUnique && isBadGuess) { 
        this.guessesLeft--
    } 

    this.setStatus()
}