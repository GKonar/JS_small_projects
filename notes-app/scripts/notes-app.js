'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    
    location.assign(`/edit.html#${id}`) 
    
    saveNotes(notes)
})

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', e => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', e => { // storage event fires when any of the data in the local storage changes
    if (e.key === 'notes') {                      // only fires on the other pages
        notes = JSON.parse(e.newValue) // where the new storaged value for that key exists
        renderNotes(notes, filters)
    }
})




