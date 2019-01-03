const Hangman = function (word, guessesLeft, guessedLetters = [], status = 'playing') {
    this.word = word.toLowerCase().split('')
    this.guessesLeft = guessesLeft
    this.guessedLetters = []
    this.status = status
}

Hangman.prototype.guessPuzzel = function (char) {
    char = char.toLowerCase()
    const isUnique = !this.guessedLetters.includes(char)
    const isBadGuess = !this.word.includes(char)


    if (isUnique) {
        this.guessedLetters.push(char) 
    } 

    if (isUnique && isBadGuess) {
        this.guessesLeft--
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

Hangman.prototype.getStatus = function () {
    let guessed = ''
    
    if (this.guessesLeft >= 1) {
        this.status = 'playing'
        console.log(this.status)
    }

    if (this.guessesLeft === 0) {
        this.status = 'failed'
        console.log(this.status)
    }

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            guessed += letter
        }
    })

    if(guessed.length === this.word.length) {
        this.status = 'finished'
        console.log(this.status)
    }
}




