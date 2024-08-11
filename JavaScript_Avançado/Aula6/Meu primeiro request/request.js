function makeRequest() {
    const result = document.getElementById('result');
    result.textContent = 'Fazendo requisição...';

    
    const apiUrl = 'https://reqbin.com/echo/get/json';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            result.textContent = 'Requisição bem-sucedida: ' + JSON.stringify(data, null, 4);
        })
        .catch(error => {
            result.textContent = 'Erro: ' + error.message;
        });
}