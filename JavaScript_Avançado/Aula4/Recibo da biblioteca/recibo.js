function gerarRecibo() {
    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;

    if (nome && quantidade) {
        const reciboTexto = `Recibo de Empréstimo de Livros<br><br>
                             Nome: ${nome}<br>
                             Quantidade de Livros Emprestados: ${quantidade}`;
        document.getElementById('recibo').innerHTML = reciboTexto;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}