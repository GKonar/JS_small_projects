const products = []
const product = products[0]

// Falsy values : false, empty string, undefined, 0, null, NaN
//if any of these show in boolean context it is gonna be defined as false

if (null) { // Js is gonna see that we have none boolean value and its gonna try to convert this value to boolean
    console.log('product found')
}   else {
    console.log('product not found')
}

// Oceniane w kontekście bolinowskim (evaluated)