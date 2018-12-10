// let greetUser = function () {
//     console.log('Welcome user!');
// }

// greetUser();
// greetUser();
// greetUser();

// let square = function (num) {
//     let result = num * num;
//     return result;
// }

// let value = square(3);
// console.log(value);
// square(10);
// let otherValue = square(10);
// console.log(otherValue);


let convertFarenheitToCelcius = function (farenheit) {
    let celcius = Math.floor((farenheit - 32) * 0.55);
    return celcius;
}

let convertedTemperature = convertFarenheitToCelcius(32);
let convertedTemperature_2 = convertFarenheitToCelcius(68);

console.log(convertedTemperature);
console.log(convertedTemperature_2);
