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
        const li = document.createElement('li');
        li.textContent = formatVehicleDescription(veiculo.marca, veiculo.modelo, veiculo.ano);


        const idade = calculateVehicleAge(veiculo.ano);
        li.textContent += ` - Idade: ${idade} anos`;


        if (isAntique(veiculo.ano)) {
            li.textContent += ' - Veículo Antigo';
        }

        vehicleList.appendChild(li);
    });
}


const veiculos = [
    { marca: 'Fiat', modelo: 'Uno', ano: 1999 },
    { marca: 'Chevrolet', modelo: 'Corsa', ano: 2005 },
    { marca: 'Tesla', modelo: 'Model S', ano: 2022 }
];


displayVehicles(veiculos);