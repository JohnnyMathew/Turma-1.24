var sapatos = ["Tênis", "Bota", "Sandália", "Mocassim", "Sapatilha"];


var numeroEspaco = parseInt(prompt("Digite o número do espaço:"));


if (numeroEspaco >= 1 && numeroEspaco < sapatos.length) {

  console.log("Nome do sapato:", sapatos[numeroEspaco]);
} else {
  console.log("Número do espaço inválido.");
}