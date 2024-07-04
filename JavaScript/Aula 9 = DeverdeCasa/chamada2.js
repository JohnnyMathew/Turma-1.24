var nomes = [];
var nome;

do {
    nome = prompt("Digite o nome do aluno (ou deixe vazio para terminar):");
    if (nome) {
        nomes.push(nome);
    }
} while (nome);

console.log("Alunos presentes:", nomes);