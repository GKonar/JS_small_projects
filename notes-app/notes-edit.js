const noteTitle = document.querySelector('#note-title')
const noteDetails = document.querySelector('#note-details')
const noteBody = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')

const noteId = location.hash.substring(1) 
let notes = getSavedNotes()
let note = notes.find(function(note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
noteDetails.textContent = generateNoteDetails(note.updatedAt)

// Note title event handlers
noteTitle.addEventListener('input' ,function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    noteDetails.textContent = generateNoteDetails(note.updatedAt)
    saveNotes(notes)
})

// Note body event handlers 
noteBody.addEventListener('input', function (e) {
    note.body = e.target.value 
    note.updatedAt = moment().valueOf() // when U start to type or update a message time is also updated
    noteDetails.textContent = generateNoteDetails(note.updatedAt)
    saveNotes(notes)
})

// Remove button event handlers
removeButton.addEventListener('click', function() {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// global storage listener, updating data ad hoc listener for note
window.addEventListener('storage', function (e) { //storage event only fires on the other pages
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(function(note) {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        noteTitle.value = note.title
        noteBody.value = note.body
        noteDetails.textContent = generateNoteDetails(note.updatedAt)
    }
})
