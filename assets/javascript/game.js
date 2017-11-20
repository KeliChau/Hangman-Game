//Array of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array of words for the game
var words = ["creeper", "enderman", "biome"];

//Array for randomizing the words for players to guess
var word = words[Math.floor(Math.random()*words.length];

//Array for player's guesses
var playerGuess = [];

//Loop
for (var i = 0; i < word.length; i++){
  playerGuess[i] = "_";
}

//Remaining letters that the player hasn't used yet
var remainingAlphabet = word.length;




//Add a case string converter by using the toLowerCase method so players can type in capital or lowercase letters
