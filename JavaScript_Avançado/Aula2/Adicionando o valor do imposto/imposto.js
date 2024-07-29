function calcularIPVAConvencional() {
    const valorAtual = parseFloat(document.getElementById('valorAtual').value);
    const aliquota = 0.04;
    const ipva = valorAtual * aliquota;
    document.getElementById('resultado').textContent = `IPVA (Convencional): R$ ${ipva.toFixed(2)}`;
}


const calcularIPVAArrow = () => {
    const valorAtual = parseFloat(document.getElementById('valorAtual').value);
    const aliquota = 0.04;
    const ipva = valorAtual * aliquota;
    document.getElementById('resultado').textContent = `IPVA (Arrow Function): R$ ${ipva.toFixed(2)}`;
};