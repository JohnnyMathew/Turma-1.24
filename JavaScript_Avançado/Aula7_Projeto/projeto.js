var tarefas = [];


const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const allTasksBtn = document.getElementById('all-tasks');
const pendingTasksBtn = document.getElementById('pending-tasks');
const completedTasksBtn = document.getElementById('completed-tasks');


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = {
        id: Date.now(),
        title: taskTitle.value,
        description: taskDesc.value,
        completed: false
    };

    tarefas.push(newTask);
    taskForm.reset();
    renderTasks();
});


function renderTasks(filter = 'all') {
    taskList.innerHTML = '';

    tarefas
        .filter(task => {
            if (filter === 'pending') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        })
        .forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task.title}: ${task.description}`;
            if (task.completed) {
                taskItem.style.textDecoration = 'line-through';
                taskItem.style.color = 'gray';
            }

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.onclick = () => editTask(task.id);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.onclick = () => deleteTask(task.id);

            const toggleBtn = document.createElement('button');
            toggleBtn.textContent = task.completed ? 'Desmarcar' : 'Concluir';
            toggleBtn.onclick = () => toggleComplete(task.id, task.completed);

            taskItem.appendChild(editBtn);
            taskItem.appendChild(deleteBtn);
            taskItem.appendChild(toggleBtn);

            taskList.appendChild(taskItem);
        });
}


function editTask(id) {
    const newTitle = prompt('Novo título da tarefa:');
    const newDescription = prompt('Nova descrição da tarefa:');

    if (newTitle && newDescription) {
        const task = tasks.find(t => t.id === id);
        task.title = newTitle;
        task.description = newDescription;
        renderTasks();
    }
}


function deleteTask(id) {
    tarefas = tarefas.filter(task => task.id !== id);
    renderTasks();
}


function toggleComplete(id, completed) {
    const task = tarefas.find(t => t.id === id);
    task.completed = !completed;
    renderTasks();
}


allTasksBtn.onclick = () => renderTasks('all');
pendingTasksBtn.onclick = () => renderTasks('pending');
completedTasksBtn.onclick = () => renderTasks('completed');