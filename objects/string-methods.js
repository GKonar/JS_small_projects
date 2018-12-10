// let name = "    Grzegorz Konarski"

// console.log(name.length)

// console.log(name.toUpperCase())

// console.log(name.toLowerCase())

// let password = 'abc123dsad098'
// console.log(password.includes('password'))

// console.log(name.trim())

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password') // ! returnes oposite value of boolean
}

let passCheck = isValidPassword('dupazbita');
let passCheck_1 = isValidPassword('dupazbipasswordta');
let passCheck_2 = isValidPassword('dupapasswordzbita');
let passCheck_3 = isValidPassword('dupa');

console.log(passCheck);
console.log(passCheck_1);
console.log(passCheck_2);
console.log(passCheck_3);
