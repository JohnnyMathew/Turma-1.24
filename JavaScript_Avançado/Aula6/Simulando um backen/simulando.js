var intervalId;

function startCommunication() {
    const log = document.getElementById('log');
    log.innerHTML = 'Iniciando comunicação com o servidor...<br>';
    
    let counter = 0;


    intervalId = setInterval(() => {
        counter++;
        log.innerHTML += `Comunicação ${counter}: Resposta do servidor recebida.<br>`;
        log.scrollTop = log.scrollHeight;


        if (counter === 5) {
            clearInterval(intervalId);
            log.innerHTML += 'Comunicação encerrada.<br>';
        }
    }, 2000);
}