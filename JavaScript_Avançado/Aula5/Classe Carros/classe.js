class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}


const carros = [];


const carForm = document.getElementById('carForm');
const carList = document.getElementById('carList');


function adicionarCarro(event) {
    event.preventDefault();


    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;


    const novoCarro = new Carro(marca, modelo, ano);


    carros.push(novoCarro);


    atualizarListaDeCarros();

    // Limpando o formulário
    carForm.reset();
}


function atualizarListaDeCarros() {

    carList.innerHTML = '';


    carros.forEach(carro => {
        const li = document.createElement('li');
        li.textContent = `${carro.marca} ${carro.modelo} (${carro.ano})`;
        carList.appendChild(li);
    });
}


carForm.addEventListener('submit', adicionarCarro);