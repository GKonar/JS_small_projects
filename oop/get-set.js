// const data = {
//     locations: [],
//     get location() { // overwrite what happens when someone try to fetch the value
//         return this._location // the value which user should get when try to read property
//     },
//     set location(value) {
//         this._location = value.trim()
//         this.locations.push(this._location)
//     }
// }

// //code that uses the data object
// data.location = '   Copenhagen  ' 
// data.location = '   New York  ' 
// console.log(data)

const data = {
    locations: [],
    get location() { // overwrite what happens when someone try to fetch the value
        return this._location// the value which user should get when try to read property
    },
    set location(value) {
        this._location = value.trim()
    }
}

//code that uses the data object
data.location = '   Copenhagen  ' 
console.log(data.location)