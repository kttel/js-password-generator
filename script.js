let characters = [];
let len = 15;
let passFirst = document.querySelector("#first-pass");
let passSecond = document.querySelector("#second-pass");
let genButton = document.querySelector("#generate-btn");

function generatePassword() {
    let passArray = [];
    for (let i = 0; i < len; i++) {
        passArray.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    return passArray.join("");
}

genButton.addEventListener("click", function() {
    characters = formCharacters();

    passFirst.textContent = generatePassword();
    passSecond.textContent = generatePassword();
});

function formCharacters() {
    const letters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const symbols = [
        "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",
        "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
    ];

    let lettersChk = document.querySelector("#letters").checked;
    let numbersChk = document.querySelector("#numbers").checked;
    let symbolsChk = document.querySelector("#symbols").checked;

    let chars = lettersChk ? letters : [];
    if (numbersChk) chars = chars.concat(numbers);
    if (symbolsChk) chars = chars.concat(symbols);
    return chars;
}