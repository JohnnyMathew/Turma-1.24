const alunos = [
    { nome: 'João', presente: true },
    { nome: 'Maria', presente: false },
    { nome: 'Ana', presente: true },
    { nome: 'Pedro', presente: false }
];

const faltasElement = document.getElementById('faltas');
const faltas = alunos.filter(aluno => !aluno.presente).length;
faltasElement.textContent = `Faltas de hoje: ${faltas}`;