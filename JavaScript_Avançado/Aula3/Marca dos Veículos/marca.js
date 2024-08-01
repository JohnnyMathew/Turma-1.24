const carros = [
    { montadora: 'Toyota', modelo: 'Corolla', ano: 2022 },
    { montadora: 'Honda', modelo: 'Civic', ano: 2019 },
    { montadora: 'Ford', modelo: 'Fusion', ano: 2020 },
    { montadora: 'Chevrolet', modelo: 'Malibu', ano: 2021 }
];

carros.forEach(carro => {
    console.log(carro.montadora);
});