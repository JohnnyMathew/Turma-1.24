const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const allTasksBtn = document.getElementById('all-tasks');
const pendingTasksBtn = document.getElementById('pending-tasks');
const completedTasksBtn = document.getElementById('completed-tasks');

const API_URL = 'http://localhost:3000/tarefas';


document.addEventListener('DOMContentLoaded', fetchTasks);


taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newTask = {
        title: taskTitle.value,
        description: taskDesc.value,
        completed: false
    };
    
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });

    if (response.ok) {
        fetchTasks();
        taskForm.reset();
    }
});


async function fetchTasks(filter = 'all') {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    
    taskList.innerHTML = '';

    tasks.filter(task => {
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    }).forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (task.completed) taskItem.classList.add('completed');

        taskItem.innerHTML = `
            <span>${task.title}</span>
            <div class="task-actions">
                <button onclick="editTask(${task.id})">Editar</button>
                <button onclick="deleteTask(${task.id})">Excluir</button>
                <button onclick="toggleComplete(${task.id}, ${task.completed})">${task.completed ? 'Desmarcar' : 'Concluir'}</button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}


async function editTask(id) {
    const newTitle = prompt('Editar título da tarefa:');
    const newDescription = prompt('Editar descrição da tarefa:');
    if (newTitle !== null && newDescription !== null) {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newTitle,
                description: newDescription,
                completed: false
            })
        });
        fetchTasks();
    }
}


async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTasks();
}


async function toggleComplete(id, completed) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !completed })
    });
    fetchTasks();
}


allTasksBtn.addEventListener('click', () => fetchTasks('all'));
pendingTasksBtn.addEventListener('click', () => fetchTasks('pending'));
completedTasksBtn.addEventListener('click', () => fetchTasks('completed'));
completedTasksBtn.onclick = () => renderTasks('completed');
