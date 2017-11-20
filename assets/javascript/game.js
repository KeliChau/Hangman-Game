var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"
                       "s", "t", "u", "v", "w", "x", "y", "z"];

for(var i = 0; i < alphabet.length; i++){
  //if the animal starts with c or o
  if(alphabet[i].charAt(0) === "c" || alphabet[i].charAt(0) === "o"){
  console.log(alphabet[i]);
  }
}

var wins = 0;
var guessRemaining = 12;

document.onkeyup = function(event)
{
  console.log(event.key);
  var userGuess = event.key;
};

for( var i = 0; i< word.length; i++)
  {
    console.log ("The loop ran")
    $(."word-one").append("<span>___</span>");
  };

     //Use Key Events for letters the Player will type
    // Use onkeyup event listening
    // create a variable for the current key pressed
    //Create a loop that looks through an array
    //Compare the currentakeypressed and see if it equals the letter at the index

   // Log your wins. Number of times user get the word right.
    // Create a variable for wins
    // Set the variable to 0
        //var wins = 0
    // Number of guesses remaining for users
    // Create a for guesses
    // Set the variable to 12 (options)

   // If the player misses a letter, decreased by 1
        //var playersWins = function() {
        //win++;
   // }

   // Display letter users guessed
    // Get element by ID
    // append to that element
  //  see note on incation
    // Create a variable for the word
    // Display a dash, for each letter of the word
    // Use.length to the length of the word.
    // Create a for loop that puts as many dashes the are letters
   // $(document).ready(function(){

  // for( var i = 0; i< word.length; i++){
    //     console.log ("The loop ran")
     //    $(."word-one").append("<span>___</span>");

   // append a new _____ space every time the loops
