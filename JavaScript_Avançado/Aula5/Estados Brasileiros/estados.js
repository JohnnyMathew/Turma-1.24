const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';


const ufList = document.getElementById('ufList');
const fetchUfsButton = document.getElementById('fetchUfs');


async function fetchUfs() {
    try {

        const response = await fetch(url);
        

        if (!response.ok) {
            throw new Error('Erro na requisição à API do IBGE');
        }
        

        const ufs = await response.json();
        

        displayUfs(ufs);
    } catch (error) {
        console.error('Erro:', error);
    }
}


function displayUfs(ufs) {

    ufList.innerHTML = '';

    ufs.forEach(uf => {
        const li = document.createElement('li');
        li.textContent = `${uf.sigla} - ${uf.nome}`;
        ufList.appendChild(li);
    });
}


fetchUfsButton.addEventListener('click', fetchUfs);