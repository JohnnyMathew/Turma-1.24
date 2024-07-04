var nomes = [];
var nome = prompt("Digite o nome do aluno:");

while (nome) {
    nomes.push(nome);
    nome = prompt("Digite o nome do aluno:");
}

console.log("Alunos presentes:", nomes);