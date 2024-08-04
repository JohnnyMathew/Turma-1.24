function classificarVeiculo() {
    const ano = parseInt(document.getElementById('ano').value);
    const anoAtual = new Date().getFullYear();
    var classificacao = '';

    if (!isNaN(ano)) {
        if (anoAtual - ano <= 2) {
            classificacao = 'seminovo';
        } else {
            classificacao = 'usado';
        }
        document.getElementById('resultado').innerHTML = `O veículo é ${classificacao}.`;
    } else {
        alert('Por favor, insira um ano válido.');
    }
}