class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
}


class CarroEletrico extends Carro {
    constructor(marca, modelo, ano, bateria) {
        super(marca, modelo, ano);
        this.bateria = bateria;
    }

    descricao() {
        return `${super.descricao()} - Bateria: ${this.bateria} kWh`;
    }
}


const carros = [];


const carForm = document.getElementById('carForm');
const carList = document.getElementById('carList');
const tipoSelect = document.getElementById('tipo');
const bateriaInput = document.getElementById('bateria');
const bateriaLabel = document.getElementById('bateriaLabel');


function adicionarCarro(event) {
    event.preventDefault();


    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const tipo = tipoSelect.value;
    let novoCarro;

    if (tipo === 'eletrico') {
        const bateria = bateriaInput.value;
        novoCarro = new CarroEletrico(marca, modelo, ano, bateria);
    } else {
        novoCarro = new Carro(marca, modelo, ano);
    }


    carros.push(novoCarro);


    atualizarListaDeCarros();


    carForm.reset();
    bateriaInput.style.display = 'none';
    bateriaLabel.style.display = 'none';
}


function atualizarListaDeCarros() {

    carList.innerHTML = '';

    
    carros.forEach(carro => {
        const li = document.createElement('li');
        li.textContent = carro.descricao();
        carList.appendChild(li);
    });
}


tipoSelect.addEventListener('change', function() {
    if (tipoSelect.value === 'eletrico') {
        bateriaInput.style.display = 'block';
        bateriaLabel.style.display = 'block';
    } else {
        bateriaInput.style.display = 'none';
        bateriaLabel.style.display = 'none';
    }
});


carForm.addEventListener('submit', adicionarCarro);