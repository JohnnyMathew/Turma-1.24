const atualizarRelogio = () => {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const relogio = document.getElementById('clock');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
};


setInterval(atualizarRelogio, 1000);


atualizarRelogio();