var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"
                       "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I",
                       "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var guessRemaining = 12;
var words = ["Creeper", "Steve", "Alex", "Biome", "Enderman", "Nether", "Creative", "Surival", "Mob", "Mojang", "Redstone", "Torch"
              "Server", "Birchtree", "Jungle", "Desert"];
var hints = ["Green and explodes", "Human version of zombie", "Girl in green shirt", "Desert, jungle, forest, snow", "Don't look in his eyes"]

document.onkeyup = function(event)
{
  console.log(event.key);
  var userGuess = event.key;
};

var word = words[Math.floor(Math.random() * words.length)];

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }

    var remainingLetters = word.length;
        while (remainingLetters > 0) {
