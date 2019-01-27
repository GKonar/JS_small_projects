let recepies = getSavedRecepies()
const filters = {
    searchText: ''
}

renderRecepies(recepies, filters)

// Input Event Listener to filter recepies
document.querySelector('#search-recepies').addEventListener('input' , (e) => {
    filters.searchText = e.target.value
    renderRecepies(recepies, filters)
})

// Create Recepie Event Listener 
document.querySelector('#add-recepie').addEventListener('click', (e) => {
    createRecepie()
    saveRecepies(recepies)
})
