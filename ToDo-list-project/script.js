// SET ITEM METHOD for setting key value data in browser
// get item to access the written value
// localStorage.setitem() to store data
// localStorage.getitem() to get the stored data
// Here, localStorage is to access the localStorage object

// localStorage.setItem('name', 'John',);
// it will set name = john
// const scores = [100,20,50,70]; // will store in form of string normally
// const scoresJSON = JSON.stringify(scores) // JSON.stringfy changes to array
// localStorage.setItem('scores', scoresJSON)

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => { // submit- after submitting, e denotes event
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value // stores the input in todoText

    if (todo) { //if any todo exist there
        todoText = todo.text


    }

    if (todoText) {
        const todoE1 = document.createElement('li');
        if (todo && todo.completed) {
            todoE1.classList.add('completed')
        }

        todoE1.innerText = todoText;

        todoE1.addEventListener('click', () => {
            todoE1.classList.toggle('completed')
        })

        todoE1.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoE1.remove()
        })

        todosUL.appendChild(todoE1)

        input.value = ''

        updateLS()

    }

    // console.log(todoText);
}

function updateLS() {
    todoE1 = document.querySelectorAll('li')

    const todos = []

    todoE1.forEach(todoE1 => {
        todos.push({
            text: todoE1.innerText,
            completed: todoE1.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}