var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var nGuess = 15;
var cGuess = [];

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var selection = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    if (selection.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            nGuess = 15;
            cGuess = [];
        }

        if (userGuess != computerGuess) {
            nGuess --;
            cGuess.push(userGuess);
        }

        if (nGuess === 0) {
            nGuess = 15;
            losses ++;
            cGuess = [];
        }

       
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        document.querySelector(".losses").innerHTML = "Losses: " + losses;
        document.querySelector(".guessleft").innerHTML = "Guesses Left: " + nGuess;
        document.querySelector(".yourguesses").innerHTML = "Your Guesses so far: " + cGuess;

    }
};