const descontoPar = valor => valor * 0.10;
const descontoImpar = valor => valor * 0.20;


const calcularDesconto = () => {
    const minuto = parseInt(document.getElementById('minute').value, 10);
    const valorOriginal = 100;
    let desconto;


    if (minuto % 2 === 0) {
        desconto = descontoPar(valorOriginal);
    } else {
        desconto = descontoImpar(valorOriginal);
    }


    document.getElementById('resultado').textContent = `Desconto aplicado: R$ ${desconto.toFixed(2)}`;
};