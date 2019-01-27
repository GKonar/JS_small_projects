class Hangman {
    constructor(word, guessesLeft) {
        this.word = word.toLowerCase().split('')
        this.guessesLeft = guessesLeft
        this.guessedLetters = []
        this.status = 'playing'
    }
    get statusMessage() {
        if(this.status === 'finished') {
            return `Great work! U guessed the word!`
        } else if (this.status === 'failed') {
            return `Nice try. The word was "${this.word.join('')}"`
        } else { 
            return `Guesses left: ${this.guessesLeft}`
        }
    }
    setStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ') //consider space as a match as well
    
        if (this.guessesLeft === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
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
    guessPuzzel(char) {
        char = char.toLowerCase()

        const isUnique = !this.guessedLetters.includes(char)
        const isBadGuess = !this.word.includes(char)

        if (this.status !== 'playing') {
            return                          // return undefined
        }

        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, char]
        } 

        if (isUnique && isBadGuess) { 
            this.guessesLeft--
        } 

        this.setStatus()
    }
}

export { Hangman as default }








