const clientes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];
const saldos = [1500.50, 250.75, -300.00, 0.00, 1234.56];


function encontrarSaldo(nomeCliente) {
    nomeCliente = nomeCliente.toLowerCase();
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].toLowerCase() === nomeCliente) {
            return `O saldo do cliente ${clientes[i]} é R$${saldos[i].toFixed(2)}.`;
        }
    }
    return `Cliente ${nomeCliente} não encontrado.`;
}


var nomeCliente = prompt('Digite o nome do cliente:');
var resultado = encontrarSaldo(nomeCliente);
alert(resultado);