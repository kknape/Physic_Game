// Javascript file for Psychic
// -----START OF GAME-----
//start of game, the Page displays values of 0 for Wins, Losses and 9 for Attempts
var wins = 0;
var losses = 0;
var attemptsLeft = 9;
var guessSoFar = [];
var guess = 0;
var guessedLetter = "";

// App randomly picks a letter
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    

//User keys in a letter, recognize what the user keyed in
   

function userGuess(event) {

    guess = event.keyCode;
             if(guess >= 65 && guess <= 90) {
             var guess = String.fromCharCode(guess);
             document.getElementById("guessSoFar").innerHTML = "The pressed key was: " + guess;
             }

             else {
                 alert ("Please pick a letter.");

             }
   }

   //     if(guess >= 65 &&  =< 91) {

  //      document.getElementById("guessSoFar").innerHTML = "The pressed key was: " + guess;

//Compare their input to  the correct answer that was randomly generated by the app

//If the guess matches the correct answer
    //Add 1 to the Wins and reset the game--set Guesses Left to 9, set Guesses so far to 0
 //while (guess !== letter) {
    
  //  for (i=0; i < 9; i++) { 
  //          losses = losses + 1;
  //          document.getElementById("losses").text = " " + losses;
  //          guessSoFar = + guess;
  //          document.getElementById("guessSoFar").text = " " + guessSoFar;
   //         attemptsLeft = attemptsLeft - 1;
  //          document.getElementById("attemptsLeft").text = " " + attemptsLeft;
   //         alert ("Guess another letter.");
 //           userGuess(event);
  //      }

// if (guess === letter) {

 //   wins = wins + 1;
 //   document.getElementById("wins").innerHTML = " " + wins;
  //  attemptsLeft = 9;
 //   document.getElementById("attemptsLeft").innerHTML = " " + attemptsLeft;
 //   guessSoFar = [];
 //   document.getElementById("guessSoFar").innerHTML = " " + guessSoFar;
  //      }
 //}

 document.onkeyup = function(event){
    userGuess(event);
}   
//Else update the "Guesses Left" --reduce the number of attempts left by 1
//AND Add the guess to the "Your guesses so far"
 
    
// }

//IF user doesn't guess the correct answer after 9 attempts, then 
//Add 1 to the Losses and reset the game--set Guesses Left to 9, set Guesses so far to 0 (null)
//