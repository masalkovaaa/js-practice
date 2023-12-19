let characters = "1234567890йцукенгшщзхъфывапролджэячсмитьбю";
let capsLock = false;
let inputField = document.getElementById("inputField");

let keyboard = document.getElementById("keyboard");
for (let i = 0; i < characters.length; i++) {
    let button = document.createElement("button");
    button.textContent = characters[i];
    button.addEventListener("click", function() {
        let char = this.textContent;
        inputField.value += capsLock ? char.toUpperCase() : char.toLowerCase();
    });
    keyboard.appendChild(button);
}

let capsLockButton = document.createElement("button");
capsLockButton.textContent = "Caps Lock";
capsLockButton.addEventListener("click", function() {
    capsLock = !capsLock;
});
keyboard.appendChild(capsLockButton);
