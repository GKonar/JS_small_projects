Hangman.prototype.guessPuzzel = function (char) {
    char = char.toLowerCase()
    const isUnique = !this.guessedLetters.includes(char)


    if (isUnique && this.word.includes(char)) {
        this.guessedLetters.push(char)
        console.log(`Well done, ${this.guessesLeft} remaining`)   
    } else if (this.guessedLetters.includes(char)) {
        console.log(`Duplicate, ${this.guessesLeft} remaining. Pass uniqe letter`)
    } else {
        this.guessesLeft -= 1
        console.log(`Wrong letter, ${this.guessesLeft} remaining`)
    } 
}