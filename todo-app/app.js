let tasks = JSON.parse(localStorage.getItem('minhasTarefas')) || [];

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
        updateCounter();
        saveToLocalStorage();
    };
});

function renderTasks() {
    todoList.innerHTML = '';

    tasks.forEach(function (task) {
        const li = document.createElement('li');
        li.id = task.id;
        li.className = 'flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-700';

        const completedClass = task.completed ? 'line-through opacity-50' : '';
        li.innerHTML = `
        <input class= "checkTask cursor-pointer" type="checkbox" ${task.completed ? 'checked' : ''}>
        <span class="text-sm text-slate-200 ${completedClass}">${task.text}</span>
        <button class="delete-btn text-rose-400 hover:text-rose-300 text-cs font-medium transition">
          Excluir
          </button>
        `;

        todoList.appendChild(li);
    });
}

function removeTask(idForRemove){
    tasks = tasks.filter(task => task.id !== idForRemove);
}

document.addEventListener('click', function(e) {

    if (e.target.classList.contains('delete-btn')){
    const idButton = Number(e.target.parentElement.id);

    removeTask(idButton);
    renderTasks(tasks);
    updateCounter();
    saveToLocalStorage();
}

    if(e.target.classList.contains('checkTask')){
        const idTask = Number(e.target.closest('li').id);

        const task = tasks.find(t => t.id === idTask);

        if (task) {
            task.completed = e.target.checked;

            renderTasks();
            updateCounter();
            saveToLocalStorage();
        }
    }
});


function updateCounter(){
    let counter = tasks.filter(task => task.completed === false).length;
    return taskCounter.innerText = `${counter} tarefas restantes`;
}

function saveToLocalStorage(){
    localStorage.setItem('minhasTarefas', JSON.stringify(tasks));
}

renderTasks();
updateCounter();