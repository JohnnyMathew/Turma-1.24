const alunoNomeInput = document.getElementById('aluno-nome');
const cadastrarButton = document.getElementById('cadastrar');
const listaAlunosElement = document.getElementById('lista-alunos');

cadastrarButton.addEventListener('click', () => {
    const nome = alunoNomeInput.value.trim();
    if (nome !== '') {
        const li = document.createElement('li');
        li.textContent = nome.toUpperCase();
        listaAlunosElement.appendChild(li);
        alunoNomeInput.value = '';
    }
});