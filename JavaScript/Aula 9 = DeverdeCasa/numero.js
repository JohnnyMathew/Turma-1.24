function gerarTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}


var numeroUsuario = prompt("Digite um número para ver a tabuada:");


numeroUsuario = parseInt(numeroUsuario);


if (!isNaN(numeroUsuario)) {
    gerarTabuada(numeroUsuario);
} else {
    console.log("Por favor, insira um número válido.");
}