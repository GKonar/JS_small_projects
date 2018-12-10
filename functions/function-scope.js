let convertFarenheitToCelcius = function (farenheit) {
    let celcius = Math.floor((farenheit - 32) * 0.55);

    if (celcius <= 0) {
        let isFreezing = true;
    }

    return celcius;
}

let convertedTemperature = convertFarenheitToCelcius(32);
let convertedTemperature_2 = convertFarenheitToCelcius(68);

console.log(convertedTemperature);
console.log(convertedTemperature_2);


