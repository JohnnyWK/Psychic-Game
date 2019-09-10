var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var turns = 10;
var lettersGuessed = [];

var compGuess =
    compChoices[Math.floor(Math.random() * compChoices.length)];


function checkTurns() {
    if (turns === 0) {
        alert("Ya blew it Jabroni!  Try again.")
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
}

function reset() {
    turns = 10;
    lettersGuessed = [];
    document.querySelector("#turns").innerHTML = turns;
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
}
document.onkeyup = function (event) {
    var userGuess = event.key
    turns--;
    lettersGuessed.push(userGuess);

    document.querySelector("#turns").innerHTML = turns;
    document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;

    if (compGuess === userGuess) {
        wins++;
        reset();
        alert("You got it right!  You might not be a jabroni afterall!");
        alert("If you smell what the Rock is cooking then guess again!")
        document.querySelector("#wins").innerHTML = wins;
    }
    if (!compChoices.includes(userGuess)) {
        alert("I said a letter, jabroni!  That's not a letter...");

    }
    else {
        checkTurns()
    }

}