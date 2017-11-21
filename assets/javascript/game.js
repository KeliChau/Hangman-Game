$(document).ready(function(){
	//Make it so that it'll pick a random word
	//Create an array of the alphabet
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	console.log(alphabet.length);

	//Create an array for alphabet the player already used
	var usedAlphabet = [];
	console.log(usedAlphabet.length);

	//Array of words for the game
	var words = ["creeper", "enderman", "biome", "diamond", "zombie pigman"];
	console.log(words.length);
	//Loop
	for (var i = 0; i < words.length; i++){
	  console.log(words[i]);
	  playerGuess[i] = "_";
	}

	//Array for randomizing the words for players to guess
	var word = words[Math.floor(Math.random() * words.length];

	//Array for player's guesses
	var playerGuess = [];
	console.log(playerGuess.length);

	//Remaining letters that the player hasn't used yet
	var remainingAlphabet = word.length;

	//Hint section for players, connected to the according words in the array

	//Add letters that the players have already guessed

	//Update player with answer

	//Alert the player that they won or to play again 

	//Add a case string converter by using the toLowerCase method so players can type in capital or lowercase letters

	//Reset button for players to refresh the game
};