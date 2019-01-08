const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if(response.status === 200) {
            return response.json() //another promise --> remember
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        const myCountry = data.find((country) => country.alpha2Code === countryCode)
        return myCountry.name 
    })
}


// USING FILTER METHOD
                // let myCountry   
                // data.filter((country) => {
                //     if (country.alpha2Code === countryCode) {
                //         myCountry = country.name
                //     }
                // })
                // console.log(myCountry)

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