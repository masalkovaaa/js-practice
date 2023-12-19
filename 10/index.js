let predictions = [
    { text: 'Сегодня у вас будет отличный день!', type: 'good' },
    { text: 'Будьте осторожны, возможны трудности.', type: 'bad' },
    { text: 'Ожидаются приятные события!', type: 'good' },
    { text: 'Ожидается что-то плохое...', type: 'bad' },
];

let timerElement = document.getElementById('timer');
let textElement = document.getElementById('text');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

let predictionTimer;
let predictionIndex;

startButton.addEventListener('click', () => {
    startButton.classList.remove('active');
    stopButton.classList.add('active');

    predictionTimer = setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        timerElement.textContent = randomNumber;
    }, 100);
});
stopButton.addEventListener('click', () => {
    stopButton.classList.remove('active');
    clearInterval(predictionTimer);

    let randomNumber = parseInt(timerElement.textContent);
    predictionIndex = randomNumber % predictions.length;

    displayPrediction();
});

function displayPrediction() {
    let prediction = predictions[predictionIndex];
    textElement.textContent = prediction.text;
    textElement.className = prediction.type;
    hideButtons();
}

function hideButtons() {
    startButton.style.display = 'none';
    stopButton.style.display = 'none';
}
