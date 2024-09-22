let tasks = [];  // Lista de tarefas

// Simulando API Fake com Local Storage
const fetchTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para renderizar as tarefas
const renderTasks = (filter = 'all') => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';  // Limpar a lista antes de renderizar

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${task.title} - ${task.description}</span>
      <div>
        <button onclick="toggleCompletion(${index})">${task.completed ? 'Desmarcar' : 'Marcar'}</button>
        <button onclick="editTask(${index})">Editar</button>
        <button onclick="deleteTask(${index})">Excluir</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Função para adicionar nova tarefa
document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-desc').value;

  tasks.push({ title, description, completed: false });
  saveTasks();
  renderTasks();

  e.target.reset();  // Limpar o formulário
});

// Função para editar tarefa
const editTask = (index) => {
  const newTitle = prompt('Novo título', tasks[index].title);
  const newDesc = prompt('Nova descrição', tasks[index].description);

  if (newTitle && newDesc) {
    tasks[index].title = newTitle;
    tasks[index].description = newDesc;
    saveTasks();
    renderTasks();
  }
}

// Função para excluir tarefa
const deleteTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Função para marcar/desmarcar tarefa como concluída
const toggleCompletion = (index) => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Função para filtrar tarefas
document.getElementById('task-filter').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const filter = e.target.dataset.filter;
    renderTasks(filter);
  }
});

// Inicializar tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  tasks = fetchTasks();
  renderTasks();
});
