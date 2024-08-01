var segundos = 0;
var timer;
const cronometroElement = document.getElementById('cronometro');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const formatTime = (s) => {
    const hours = Math.floor(s / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const seconds = (s % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

const updateCronometro = () => {
    cronometroElement.textContent = formatTime(segundos);
};

startButton.addEventListener('click', () => {
    timer = setInterval(() => {
        segundos++;
        updateCronometro();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    segundos = 0;
    updateCronometro();
});