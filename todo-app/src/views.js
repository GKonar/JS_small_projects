import { toggleTodo, saveTodos, getTodos, removeTodo } from './todos'
import { getFilters } from './filters';

//Get the DOM elements for an individual note
const generateTodoDOM = todo => {
    // Creating DOM elements
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoTextEl = document.createElement('span')
    const todoCheckbox = document.createElement('input')
    const todoButton = document.createElement('button')

    // Setup checkbox
    todoCheckbox.setAttribute('type', 'checkbox')
    todoCheckbox.checked = todo.completed  
    containerEl.appendChild(todoCheckbox)
    // Checkbox listener
    todoCheckbox.addEventListener('change', e => {
        toggleTodo(todo.id)
        saveTodos()
        renderTodos()
    })
    
    // Setup todoTextEl
    todoTextEl.textContent = todo.text
    containerEl.appendChild(todoTextEl)

    // Setup Container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup todoButton
    todoButton.textContent = 'remove'
    todoButton.classList.add('button', 'button--text')
    todoEl.appendChild(todoButton)
    // Removing todos on click
    todoButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos()
        renderTodos()
    })
     
    return todoEl
}

//Render application todos based on filters 
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()
    const todos = getTodos()
    const filteredTodos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    }) 
    
    const incompletedTodos = filteredTodos.filter(todo => !todo.completed) // filter method returns an ARRAY

    todoEl.innerHTML = ''
    generateSummaryDOM(incompletedTodos)

    if (filteredTodos.length === 0) {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No to-dos to show'
        todoEl.appendChild(emptyMessage)
    } else {
        filteredTodos.forEach(todo => todoEl.appendChild(generateTodoDOM(todo)))
    }
    
}

//Get DOM elements for list summary
const generateSummaryDOM = incompletedTodos => {
    const summary = document.querySelector('.todos-left')
    const plural = incompletedTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} left`

    return summary
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }