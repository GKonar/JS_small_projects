const todos = [
    {
        text: 'Find new job',
        completed: false
    },
    {
        text: 'Spend more time with Tymon',
        completed: true
    },
    {
        text: 'Push on with programming',
        completed: true
    },
    {
        text: 'Show love to your wife',
        completed: true
    }
]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }

    console.log(index)
}

// deleteTodo(todos, 'Spend more time w1ith Tymon')
// console.log(todos)

const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false // !todo.completed
    })
}
// console.log(getThingsToDo(todos))

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (a.completed === false && b.completed) {
            return -1 // if a comes first
        } else if (b.completed === false && a.completed === true) {
            return 1 // if b comes first, a comes after
        } else {
            return 0 // if nthg changes
        }
    })
}


sortTodos(todos)
console.log(todos)