function getYear(veiculo) {
    return veiculo.anoModelo || veiculo.anoDeFabricacao;
}


function formatVehicleDescription(marca, modelo, ano) {
    return `${marca} ${modelo} (${ano})`;
}


function calculateVehicleAge(ano) {
    const currentYear = new Date().getFullYear();
    return currentYear - ano;
}


function isAntique(ano) {
    return calculateVehicleAge(ano) > 20;
}


function displayVehicles(veiculos) {
    const vehicleList = document.getElementById('vehicleList');
    veiculos.forEach(veiculo => {
        const ano = getYear(veiculo);
        const li = document.createElement('li');
        li.textContent = formatVehicleDescription(veiculo.marca, veiculo.modelo, ano);


        const idade = calculateVehicleAge(ano);
        li.textContent += ` - Idade: ${idade} anos`;

        
        if (isAntique(ano)) {
            li.textContent += ' - Veículo Antigo';
        }

        vehicleList.appendChild(li);
    });
}


const veiculos = [
    { marca: 'Fiat', modelo: 'Uno', anoDeFabricacao: 1999 },
    { marca: 'Chevrolet', modelo: 'Corsa', anoModelo: 2005 },
    { marca: 'Tesla', modelo: 'Model S', anoModelo: 2022 }
];


displayVehicles(veiculos);