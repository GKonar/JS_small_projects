import { initializeEditPage, generateNoteDetails } from './views'
import { updateNote, removeNote } from './notes'

const noteTitle = document.querySelector('#note-title')
const noteDetails = document.querySelector('#note-details')
const noteBody = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

// Note title event handlers
noteTitle.addEventListener('input' , e => {
    const note = updateNote(noteId , {
        title: e.target.value
    })
    noteDetails.textContent = generateNoteDetails(note.updatedAt)
})

// Note body event handlers 
noteBody.addEventListener('input', e => {
    const note = updateNote(noteId , {
        body: e.target.value
    }) 
    noteDetails.textContent = generateNoteDetails(note.updatedAt)
})

// Remove button event handlers
removeButton.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/index.html')
})

// global storage listener, updating data ad hoc listener for note
window.addEventListener('storage', function (e) { //storage event only fires on the other pages
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})
