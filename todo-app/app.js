let tasks = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const taskCounter = document.getElementById('task-counter');

todoForm.addEventListener('submit', function (event){
    event.preventDefault();

    const text = todoInput.value.trim();

    if (text !== '') {

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        tasks.push(newTask);

        todoInput.value = '';

        console.log(tasks);
    };
});