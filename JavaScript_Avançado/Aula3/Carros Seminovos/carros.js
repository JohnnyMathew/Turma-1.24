const carros = [
    { montadora: 'Toyota', modelo: 'Corolla', ano: 2022 },
    { montadora: 'Honda', modelo: 'Civic', ano: 2019 },
    { montadora: 'Ford', modelo: 'Fusion', ano: 2020 },
    { montadora: 'Chevrolet', modelo: 'Malibu', ano: 2021 }
];

const currentYear = new Date().getFullYear();
const carListElement = document.getElementById('car-list');


carros.forEach(carro => {
    console.log(carro.montadora);
});


carros.forEach(carro => {
    if (currentYear - carro.ano < 3) {
        const li = document.createElement('li');
        li.textContent = `${carro.montadora} - ${carro.modelo} (${carro.ano})`;
        carListElement.appendChild(li);
    }
});