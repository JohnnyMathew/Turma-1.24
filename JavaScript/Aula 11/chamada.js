var alunos = [];
fazerChamada();

function fazerChamada() {
  while (true) {

    var nome = prompt("Digite o nome do aluno (ou deixe em branco para terminar):");
    

    if (nome === "") {
      break;
    }
    

    alunos.push(nome);
  }
  

  console.log("Lista de alunos:", alunos);
}