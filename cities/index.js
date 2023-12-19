let cities = [];

function playGame() {
let field = document.querySelector('#field');
let message = document.querySelector('#message');
    
let inputCity = field.value.trim();
    
if (cities.length > 0 && inputCity.charAt(0).toUpperCase() !== cities[cities.length - 1].slice(-1).toUpperCase()) {
    showMessage("неверно.");
    return;
}

if (cities.includes(inputCity.toUpperCase())) {
    showMessage("город уже был");
    return;
}

cities.push(inputCity.toUpperCase());
field.value = "";
    
}

function showMessage(msg) {
let message = document.querySelector('#message');
message.textContent = msg;
}

let field = document.querySelector('#field');
field.addEventListener('keydown', function (event) {
if (event.key === 'Enter') {
    playGame();
}
});