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

        renderTasks();
    };
});

function renderTasks() {
    todoList.innerHTML = '';

    tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-700';

        li.innerHTML = `
        <span class="text-sm text-slate-200">${task.text}</span>
        <button class="text-rose-400 hover:text-rose-300 text-cs font-medium transition">
          Excluir
          </button>
        `;

        todoList.appendChild(li);
    });
}

function removeTask(idForRemove){
    return tasks.filter(task => task.id !== idForRemove);
}