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
        alert("Game over!")
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
}

function reset() {
    turns = 10;
    lettersGuessed = [];
    document.querySelector("#turns").innerHTML = turns;
}

document.onkeyup = function (event) {
    var userGuess=event.key
    // if (compChoices.includes(event.key)){
    //     console.log(event.key)
    //     userChoice=event.key
    // }else {
    //     alert("Please guess a letter")
    // }
    
    console.log(userGuess)
    turns--;
    lettersGuessed.push(userGuess);

    document.querySelector("#turns").innerHTML = turns;
    document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;

    if (compGuess == userGuess) {
        wins++;
        reset();
        alert("You got lucky this time!  Try to guess again...");
        document.querySelector("#wins").innerHTML = wins;

    }
    else {
        checkTurns()
    }
    // function reset() {
    //     turns = 10;
    //     lettersGuessed = [];
    // }
    // function allReset() {
    //     turns = 10;
    //     lettersGuessed = []
}


// if (compChoices === userGuess) {
//     wins++;
//     alert("You got lucky this time!  Try to guess again...");
//     document.querySelector("#wins").innerHTML = wins
//     //call reset
// }
// else {
//     turns--;
//     lettersGuessed.push(userGuess);
//     checkTurns()
// }
//     else if (turns === 0) {
//     alert("YA BLEW IT!");
//     reset();
// }
// else if (wins === 10) {
//     alert(
//         "You're a wizard, Harry!!"
//     );
//     allReset();

// }
// else {
//     alert("That's not a letter jabroni!");


// }