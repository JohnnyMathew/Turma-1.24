var alunos = [
    { nome: "Ana", modulo: "JavaScript", nota_4: 7, nota_6: 8 },
    { nome: "Bruno", modulo: "JavaScript", nota_4: 5, nota_6: 6 },
    { nome: "Carlos", modulo: "JavaScript", nota_4: 9, nota_6: 8 },
    { nome: "Daniel", modulo: "JavaScript", nota_4: 6, nota_6: 5 },
    { nome: "Eduardo", modulo: "JavaScript", nota_4: 4, nota_6: 3 }
];


function corrigirAvaliacao(aluno) {
    var media = (aluno.nota_4 + aluno.nota_6) / 2;
    var resultado = media >= 6 ? "aprovado" : "reprovado";
    console.log(`Aluno: ${aluno.nome}, Módulo: ${aluno.modulo}, Média: ${media.toFixed(2)}, Resultado: ${resultado}`);
}

for (var i = 0; i < alunos.length; i++) {
    corrigirAvaliacao(alunos[i]);
}