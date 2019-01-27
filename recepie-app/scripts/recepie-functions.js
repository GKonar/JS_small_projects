// Get recepies from local storage
const getSavedRecepies = () => {
    const recepiesJSON = localStorage.getItem('recepies')

    try {
        return recepiesJSON ? JSON.parse(recepiesJSON) : []
    } catch (e) {
        return []
    }
}

// Save recepies on local storage
const saveRecepies = recepies => {
    localStorage.setItem('recepies', JSON.stringify(recepies))
}

// Create recepies
const createRecepie = () => {
    let id = uuidv4()
    
    recepies.push({
        id: id,
        name: '',
        body: '',
        ingredients: []
    })
    
    location.assign(`./edit.html#${id}`)
}

// Remove recepie
const removeRecepie = (id) => {
    const recepieIndex = recepies.findIndex(recepie => recepie.id === id)

    if (recepieIndex > -1) { 
        recepies.splice(recepieIndex, 1)
    }
}

// Generate recepie DOM
const generateRecepieDOM = recepie => {
    
    // Create recepie DOM structure
    const recepieEl = document.createElement('p')
    const recepieTextEl = document.createElement('a')
    const recepieIngredientsEl = document.createElement('p')
    
    // Setup the recepie title
    if (recepie.name.length > 0) {
        recepieTextEl.textContent = recepie.name
    } else {
        recepieTextEl.textContent = 'Add new recepie'
    }
    
    recepieEl.appendChild(recepieTextEl)

    //Setup the link to recepie edit page
    recepieTextEl.href = `./edit.html#${recepie.id}`

    //Generate status message

    const unavailableIngredients = recepie.ingredients.filter(ingredient => !ingredient.isAvailable)
    recepieIngredientsEl.textContent = `You need ${unavailableIngredients.length} more ingredient for that dish`
    recepieEl.appendChild(recepieIngredientsEl)

    return recepieEl
} 

// Render recepies to the page
const renderRecepies = (recepies, filters) => {
    const recepiesEl = document.querySelector('#recepies')
    const filteredRecepies = recepies.filter(recepie => recepie.name.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    recepiesEl.innerHTML = '' // on every keystroke cleans html
    
    filteredRecepies.forEach(recepie => {
        const recepieElement = generateRecepieDOM(recepie)
        recepiesEl.appendChild(recepieElement)
    })
}

// ********** INGREDIENTS FUNCTIONS ********** //

// Render list of ingredients
const renderIngredients = (recepie) => {
    const IngredientsContainer = document.querySelector('#ingredients-container')
    
    IngredientsContainer.innerHTML = ''

    recepie.ingredients.forEach(ingredient => {
        IngredientsContainer.appendChild(generateIngredientDOM(ingredient))
    })
}

// Create new ingredient
const addNewIngredient = (ingredient) => {
    const newIngredient = {
        id: uuidv4(),
        name: ingredient,
        isAvailable: false
    }
    
    if(newIngredient.length === 0) {
        return
    } else {
        recepie.ingredients.push(newIngredient)
        renderIngredients(recepie)
        saveRecepies(recepies)
    }
}

// Ingredients functions
const removeIngredient = (ingredients, id) => {
    const ingredientIndex = ingredients.findIndex(ingredient =>  ingredient.id === id)

    if (ingredientIndex > -1) {
        ingredients.splice(ingredientIndex, 1)
        renderIngredients(recepie)
        saveRecepies(recepies)
    } 
}

// Generate Ingredient Todo
const generateIngredientDOM = (ingredient) => {
    // Creating DOM elements
    const ingredientEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const ingredientTextEl = document.createElement('span')
    const ingredientCheckbox = document.createElement('input')
    const ingredientButton = document.createElement('button')

    ingredientCheckbox.setAttribute('type', 'checkbox')
    ingredientCheckbox.checked = ingredient.isAvailable
    containerEl.appendChild(ingredientCheckbox)
    
    ingredientCheckbox.addEventListener('change', (e) => {
        ingredient.isAvailable = e.target.checked
        saveRecepies(recepies)
    })

    // Setup ingredientTextEl
    ingredientTextEl.textContent = ingredient.name
    containerEl.appendChild(ingredientTextEl)

    //Setup Containet
    ingredientEl.appendChild(containerEl)

    //Setup Button
    ingredientButton.textContent='remove'
    containerEl.appendChild(ingredientButton)
    ingredientButton.addEventListener('click', (e) => {
        removeIngredient(recepie.ingredients, ingredient.id)
    })

    return ingredientEl
}