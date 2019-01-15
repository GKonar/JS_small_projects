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

// const getCountryOld = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest() // --> e.target

//         countryRequest.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const data = JSON.parse(e.target.responseText)
//                 const myCountry = data.find((country) => country.alpha2Code === countryCode)
//                 resolve(myCountry)
//             } else if (e.target.readyState === 4) {
//                 console.log('Unable to fetch data')
//                 reject('An error has taken place')
//             }
//         })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })              

// using XMLHttpRequest and promise

// getMyLocation = () => new Promise((resolve, reject) => {
//     const ipRequest = new XMLHttpRequest() 

//     ipRequest.addEventListener('readystatechange', (e) => { // reponse is e.target
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data)
//         } else if (e.target.readyState === 4) {
//             console.log('Unable to fetch data')
//             reject('An error has taken place')
//         }
//     })

//     ipRequest.open('GET', 'https://ipinfo.io/json')
//     ipRequest.send()
// })


// const getPuzzleOLD = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle //return Promise
//     })
// }

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => { 
//         if(response.status === 200) {
//             return response.json() //another promise --> remember
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data) => {
//         const myCountry = data.find((country) => country.alpha2Code === countryCode)
//         return myCountry.name  // return Promise
//     })
// }

// const getMyLocationOld = () => {  //shit API always 429
//     return fetch('https://ipinfo.io/json').then((response) => {
//         if(response.status === 200) {
//             return response.json() 
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     })
// }


//requests.js

// const getCurrentCountry = async () => {
//     const location = await getMyLocation()
//     const country = await getCountry(location.country)
//     return country
// }

// const getCountry = async (countryCode) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all')
//         if(response.status === 200) {
//             const data = await response.json() //another promise --> remember
//             const myCountry = data.find((country) => country.alpha2Code === countryCode)
//             return myCountry.name  // return Promise
//         } else {
//             throw new Error('Unable to fetch data')
//         }
// }

// const getMyLocation = async () => {
//     const response = await fetch('https://ipinfo.io/json')
//         if(response.status === 200) {
//             const data = await response.json() 
//             return data
//         } else {
//             throw new Error('Unable to fetch data')
//         }
// }

// app.js

// getPuzzle('2').then((puzzle) =>{
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// getCountry('PL').then((country) => {
//     console.log(country)
// }).catch((error) => {
//     console.log(error)
// })

// getCurrentCountry().then((country) => {
//     console.log(country)
// }).catch((err) => {
//     console.log(err)
// }) 

// getMyLocation().then((location) => {
//     return getCountry(location.country)
// }).then((location) => {
//     console.log(location)
// }).catch((err) => {
//     console.log(err)
// })