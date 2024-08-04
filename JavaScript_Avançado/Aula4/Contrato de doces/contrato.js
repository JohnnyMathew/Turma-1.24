const pessoa = {
    nome: "João Silva",
    cpf: "123.456.789-00",
    endereco: "Rua das Flores, 123, São Paulo, SP"
};

const servico = {
    descricao: "Manutenção de sistemas de informática",
    duracao: "6 meses",
    valor: "R$ 2.500,00"
};

const contratoTemplate = `
    Eu, ${pessoa.nome}, CPF ${pessoa.cpf}, residente no endereço ${pessoa.endereco}, 
    declaro que estou contratando o serviço de ${servico.descricao} pelo período de 
    ${servico.duracao} pelo valor de ${servico.valor}.

    Este contrato tem validade a partir da data de sua assinatura e está sujeito às 
    condições especificadas no acordo de prestação de serviços.

    São Paulo, 4 de agosto de 2024.
`;

document.getElementById('contrato').innerHTML = contratoTemplate;