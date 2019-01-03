'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(filters, todos)

// Read value of the input
document.querySelector('#search-todo').addEventListener('input', e => {
    filters.searchText = e.target.value 
    renderTodos(filters, todos)
})

// Add new todo to list
document.querySelector('#submit-todo').addEventListener('submit', e => { //submit event listener (submit handler)
    e.preventDefault()
    const newTodo = 
    { 
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    }            
    todos.push(newTodo)
    saveTodos(todos)
    renderTodos(filters, todos)
    e.target.elements.newTodo.value = ''    
})

// On checkbox action render or hide Todo list
document.querySelector('#hide-checkbox').addEventListener('change', e => {
    filters.hideCompleted = e.target.checked  
    renderTodos(filters, todos)
})


