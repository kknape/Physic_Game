// Javascript file for Psychic
// -----START OF GAME-----
//start of game, the Page displays values of 0 for Wins, Losses and 9 for Attempts
var wins = 0;
var losses = 0;
var attemptsLeft = 9;
    document.getElementById ("attemptsLeft").textContent = "Guesses left: " + attemptsLeft;
var guessSoFar = [];
var guess = 0;
var guessedLetter = "";
var letter = "";

// App randomly picks a letter
function randomLetter() {
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
letter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

randomLetter();

//User keys in a letter, recognize what the user keyed in


function userGuess(event) {

            guess = event.keyCode; 
        //check if guess is a letter
             if(guess >= 65 && guess <= 90) {
              var guess = String.fromCharCode(guess);
       //     document.getElementById("guessSoFar").innerHTML = "The pressed key was: " + guess;
                }

                 //if the guess isn't a letter, ask them to choose a letter.
                         else {
                                 alert ("Please pick a letter.")
                                 }


        //if guess equals the randowm letter, add one to the wins, pick a new random letter
            if (guess == letter) {
                alert ("Good guess! You win!");
                document.getElementById("wins").innerHTML = ("Wins: " + (wins++));
                var replay = confirm("Play again?");
                    
                if (replay) {
                        randomLetter ();
                    }
                }
        
        //if quess does not equal the random letter, subtract 1 from attempts left, add the guessed letter to Guesses so far
        //user guesses again
            else {
                if (attemptsLeft = 0)
                { 
                    losses++;
                    document.getElementById ("losses").innerHTML = " " + losses;

       //             guessSoFar.push(guess);
      //              document.getElementById("guessSoFar").innerHTML = "  " + guessSoFar.join(",");

                }
                else {
                    attemptsLeft = (attemptsLeft - 1);
                    document.getElementById ("attemptsLeft").innerHTML = " " + attemptsLeft;

                    userGuess;
                }
            }    
    }

 document.onkeyup = function(event){
    userGuess(event);
}   