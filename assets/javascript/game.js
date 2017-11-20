//Create an array of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create an array for alphabet the player already used
var usedAlphabet = [];
//Create an array of words for players to guess
var words = ["creeper", "enderman", "diamond sword"];
//Make it so that it'll pick a random word
var chosenWord = words[Math.floor(Math.random() * words.length)];
//Use onkeyup so that players can press any key to start the game
document.onekeyup = function(event){
  for (i = 0; i < chosenWord.length; i++) {
    if (chosenWord.charAt(i) == " ") {
      dashes += " ";
    } else {
      dashes += "-";
    }
  }
}
//Create an answer array
//Remaining letters 
//Letters players have already guessed
//Update with answer 
//Alert player that they passed or to play again