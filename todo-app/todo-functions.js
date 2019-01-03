'use strict'

// Fetch existing todos from localStorage 
const getSavedTodos  = function () {
    const todosJSON = localStorage.getItem('todos') //read data
    
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }

    
}

// Save todos to localStorage 
const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos))


// Remove todo from the list
const removeTodo = id => {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {   // check if element exist in the array 
        todos.splice(todoIndex, 1) 
    }
}

// Toggle a completed value for a given todo
// const toggleTodo = function(e, todo) { 
//     todo.completed = e.target.checked 
// }
const toggleTodo = id => {
    const todo = todos.find( todo => todo.id === id )// if that condition is true i found my match 
    
    if(todo) {
        todo.completed = !todo.completed
    }
}

//Get the DOM elements for an individual note
const generateTodoDOM = todo => {
    
    // Creating DOM elements
    const todoEl = document.createElement('div')
    const todoTextEl = document.createElement('span')
    const todoCheckbox = document.createElement('input')
    const todoButton = document.createElement('button')

   // Setup checkbox
    todoCheckbox.setAttribute('type', 'checkbox')
    todoCheckbox.checked = todo.completed  
    todoEl.appendChild(todoCheckbox)
    todoCheckbox.addEventListener('change', e => {
        // toggleTodo(e, todo)
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(filters, todos)
    })
    
    // Setup todoTextEl
    todoEl.appendChild(todoTextEl)
    todoTextEl.textContent = todo.text

    //Setup todoButton
    todoButton.textContent = 'x'
    todoEl.appendChild(todoButton)
    todoButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(filters, todos)
    })
    
    return todoEl
}

//Render application todos based on filters 
const renderTodos = (filters, todos) => {
    const filteredTodos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    }) 
    
    const incompletedTodos = filteredTodos.filter(todo => !todo.completed) // filter method returns an ARRAY

    document.querySelector('#todos').innerHTML = ''
    generateSummaryDOM(incompletedTodos)

    filteredTodos.forEach(todo => document.querySelector('#todos').appendChild(generateTodoDOM(todo)))
}

//Get DOM elements for list summary
const generateSummaryDOM = incompletedTodos => {
    const summary = document.querySelector('h2')
    summary.textContent = `You have ${incompletedTodos.length} todos left`

    return summary
}