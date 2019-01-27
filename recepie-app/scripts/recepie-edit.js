const recepieTitle = document.querySelector('#recepie-title')
const recepieBody = document.querySelector('#recepie-body')
const removeRecepieButton = document.querySelector('#remove-recepie')
const submitIngredient = document.querySelector('#submit-ingredient')

const recepieId = location.hash.substring(1) 

let recepies = getSavedRecepies()
let recepie = recepies.find((recepie) => {
    return recepie.id === recepieId
})

// Render ingredients on the page load
renderIngredients(recepie)

if (!recepie) {
    location.assign('./index.html')
}

recepieTitle.value = recepie.name
recepieBody.value = recepie.body

recepieTitle.addEventListener('input', e => {
    recepie.name = e.target.value
    saveRecepies(recepies)
})

recepieBody.addEventListener('input', e => {
    recepie.body = e.target.value
    saveRecepies(recepies)
})

// Ingredients Array Events

removeRecepieButton.addEventListener('click', e => {
    removeRecepie(recepie.id)
    saveRecepies(recepies)
    location.assign('./index.html')
})

submitIngredient.addEventListener('submit', e => {
    e.preventDefault()
    let ingredient = e.target.elements.newIngredient.value.trim()
    addNewIngredient(ingredient)
    e.target.elements.newIngredient.value = ''
})
