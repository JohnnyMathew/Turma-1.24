const municipiosRJ = [
    {
        "id": 3300100,
        "nome": "Angra dos Reis",
        "microrregiao": {
            "id": 33003,
            "nome": "Angra dos Reis",
            "mesorregiao": {
                "id": 3301,
                "nome": "Sul Fluminense",
                "UF": {
                    "id": 33,
                    "nome": "Rio de Janeiro",
                    "sigla": "RJ",
                    "regiao": {
                        "id": 3,
                        "nome": "Sudeste",
                        "sigla": "SE"
                    }
                }
            }
        }
    },
    
];


const municipiosSerrana = [
    "Petrópolis", 
    "Teresópolis", 
    "Nova Friburgo", 
    "Cachoeiras de Macacu", 
    "Sumidouro", 
    "São José do Vale do Rio Preto", 
    "Bom Jardim", 
    "Carmo", 
    "Guapimirim"
];


const serranaRJ = municipiosRJ.filter(municipio => 
    municipiosSerrana.includes(municipio.nome)
);


const municipiosList = document.getElementById('municipiosList');

serranaRJ.forEach(municipio => {
    const li = document.createElement('li');
    li.textContent = municipio.nome;
    municipiosList.appendChild(li);
});