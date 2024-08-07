function iniciarTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById('mensagem').textContent = "Oferta encerrada";
        }
    }, 1000);
}

window.onload = function() {
    const quatroMinutos = 60 * 4,
          display = document.getElementById('timer');
    iniciarTimer(quatroMinutos, display);
};