import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'
import { setFilters } from './filters';

renderTodos()

// Read value of the input
document.querySelector('#search-todo').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Add new todo to list
document.querySelector('#submit-todo').addEventListener('submit', e => { //submit event listener (submit handler)
    let todoText = e.target.elements.newTodo.value.trim()
    e.preventDefault()
        createTodo(todoText)
        e.target.elements.newTodo.value = ''
})

// On checkbox action render or hide Todo list
document.querySelector('#hide-checkbox').addEventListener('change', e => {
    setFilters({
        hideCompleted: e.target.checked
    })  
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if(e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})