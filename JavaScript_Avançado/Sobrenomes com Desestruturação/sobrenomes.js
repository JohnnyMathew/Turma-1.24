const nomeCompleto = "Ana Maria Silva Oliveira";


const nomes = nomeCompleto.split(" ");


const nomeLista = document.getElementById("nome-lista");
nomes.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    nomeLista.appendChild(li);
});


const primeiroNome = nomes[0];
const totalSobrenomes = nomes.length - 1;

console.log("Primeiro Nome:", primeiroNome);
console.log("Total de Sobrenomes:", totalSobrenomes);