var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"
                       "s", "t", "u", "v", "w", "x", "y", "z"];

for(var i = 0; i < alphabet.length; i++){
  //if the animal starts with c or o
  if(alphabet[i].charAt(0) === "c" || alphabet[i].charAt(0) === "o"){
  console.log(alphabet[i]);
  }
}

var userScore = 0;

document.onkeyup = function(event)
{
  console.log(event.key);
  var userGuess = event.key;
};

