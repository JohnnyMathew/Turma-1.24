function capitalizeFrase(frase) {
    let palavras = frase.split(' ');
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        if (palavra.length > 0) {
            palavras[i] = palavra[0].toUpperCase() + palavra.slice(1);
        }
    }
    return palavras.join(' ');
}


var frase = prompt('Digite uma frase:');
var resultado = capitalizeFrase(frase);
alert(resultado);