import uuidv4 from 'uuid/v4'
import { renderTodos } from './views';
let todos = []

// Get existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos') //read data
    
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// Save todos to local storage
const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos))

// Expose todos from module
const getTodos = () => todos

// Create new todo
const createTodo = (todoText) => {
    const id = uuidv4()
    const newTodo = 
        { 
            id: id,
            text: todoText,
            completed: false
        }            
    
    if (newTodo.text.length === 0) {
        return
    } else {
        todos.push(newTodo)
        saveTodos(todos)
        renderTodos()
    }
}

// Remove todo from the list
const removeTodo = id => {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {   // check if element exist in the array 
        todos.splice(todoIndex, 1)
        saveTodos() 
    }
}

// Toggle a completed value for a given todo
const toggleTodo = id => {
    const todo = todos.find( todo => todo.id === id )// if that condition is true i found my match 
    
    if(todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }