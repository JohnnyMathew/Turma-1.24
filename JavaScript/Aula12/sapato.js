const gavetas = {
    gaveta1: ['Tênis', 'Sandália', 'Sapatilha'],
    gaveta2: ['Sapato Social', 'Bota', 'Chinelo'],
    gaveta3: ['Tênis Esportivo', 'Mocassim', 'Rasteirinha']
};

function encontrarGaveta(calçado) {
    for (let gaveta in gavetas) {
        for (let i = 0; i < gavetas[gaveta].length; i++) {
            if (gavetas[gaveta][i] === calçado) {
                return `O calçado ${calçado} está na ${gaveta}.`;
            }
        }
    }
    return `O calçado ${calçado} não foi encontrado.`;
}

var calçadoDesejado = prompt('Digite o nome do calçado desejado:');
var resultado = encontrarGaveta(calçadoDesejado);
alert(resultado);