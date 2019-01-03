'use strict'

// Get existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes') // read data

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

//Save notes to localStorage
const saveNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note form the list
const removeNote = id => {
    const noteIndex = notes.findIndex( (note) => note.id === id)
    
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = note => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    
    // Setup the remove-note button 
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if(note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.href = `/edit.html#${note.id}`
    noteEl.appendChild(textEl)

    return noteEl
}

// Sort your notes by one of 3ree ways
const sortNotes = (notes, sortBy) =>  {
    if(sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {  // things in the past smaller numbers , future bigger numbers
                return 1 
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {  // things in the past smaller numbers , future bigger numbers
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "alphabetical") {
        return notes.sort((a, b) =>{
            if(a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}

// Render aplication notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(note => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Generate last edited message

const generateNoteDetails = timestamp => `Last update: ${moment(timestamp).fromNow()}`
