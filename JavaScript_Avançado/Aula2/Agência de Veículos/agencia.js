const vehicles = [
    { marca: 'Toyota', modelo: 'Corolla', ano: 2015, valorCompra: 50000, valorAtual: 45000, cor: 'Preto' },
    { marca: 'Honda', modelo: 'Civic', ano: 2020, valorCompra: 60000, valorAtual: 55000, cor: 'Prata' },
    { marca: 'Ford', modelo: 'Fiesta', ano: 2010, valorCompra: 30000, valorAtual: 25000, cor: 'Vermelho' }
];


const calcularLucro = valorCompra => valorCompra * 0.03;
const calcularIPVA = valorAtual => valorAtual * 0.04;
const calcularLicenciamento = ano => {
    const anoAtual = new Date().getFullYear();
    return (anoAtual - ano <= 10) ? 160 : 0;
};


const gerarTabela = () => {
    const tabela = document.getElementById('vehicles-table').getElementsByTagName('tbody')[0];
    vehicles.forEach(veiculo => {
        const row = tabela.insertRow();
        row.insertCell().textContent = veiculo.marca;
        row.insertCell().textContent = veiculo.modelo;
        row.insertCell().textContent = veiculo.ano;
        row.insertCell().textContent = `R$ ${veiculo.valorCompra.toFixed(2)}`;
        row.insertCell().textContent = `R$ ${veiculo.valorAtual.toFixed(2)}`;
        row.insertCell().textContent = veiculo.cor;
        row.insertCell().textContent = `R$ ${calcularLucro(veiculo.valorCompra).toFixed(2)}`;
        row.insertCell().textContent = `R$ ${calcularIPVA(veiculo.valorAtual).toFixed(2)}`;
        row.insertCell().textContent = `R$ ${calcularLicenciamento(veiculo.ano).toFixed(2)}`;
    });
};


window.onload = gerarTabela;