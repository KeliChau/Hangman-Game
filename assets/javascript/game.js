//Beginning of document ready function
$(document).ready(function(){

	//Empty array for letters used
	var usedAlphabet = [];

	//Array with words for player to guess
	var words = ["creeper", "enderman", "biome", "diamond", "zombie pigman", "alex", "steve", "tnt", "skeleton", "grass block", 
				"ender dragon", "iron sword", "coal", "ore", "clay", "ghast", "zombie", "gold", "bow", "boat", "glass", "birch tree", 
				"crafting table", "potion", "pig", "cow", "realm", "mob", "nether", "mojang", "redstone", "sandbox", "server", "skin", 
				"block", "brewing", "cheats", "hack", "dungeon", "farming", "furnace", "hopper", "lava", "minecon", "mining", 
				"netherrack", "obsidian", "spawn", "spawn egg", "tools", "texture packs", "temple", "wither" ];
	
	//Array for resetGame
	var word;

	//Array to add underscore at beginning of guess
	var underscore = "";

	//Number guesses for player
	var playerGuess = 12;

	//Function to reset game/word whenever player loses
	function resetGame(){
		word = words[Math.floor(Math.random() * words.length)];	
		underscore = "";	
		for (var i = 0; i < word.length; i++){
			underscore += "_ "
		} 
		playerGuess = 12;
		$("#remain").text(playerGuess);		
		$("#right").text("");
		$("#right").text(underscore);		
	}
	resetGame(); 

	//Beginning of keyup function for keyboard click
	$(document).keyup(function(events){

		//Array to split word spaces	
		var wordArray = word.split(""); 

		//Empty array for indices
		var indices = [];
		
		//Beginning of for loop for word length
		for (var i = 0; i < wordArray.length; i++){
			if (events.key === wordArray[i]){
				indices.push(i)
			}
		}

		if (indices.length > 0) {	
			var stringArray = $("#right").text().split(" ");
			for (var i = 0; i < indices.length; i++){
				stringArray.splice(indices[i], 1, events.key);
			}
			var prettyString = stringArray.join(" ");
			$("#right").text(prettyString);
		} else {
			$("#wrong").append(events.key);
			playerGuess-- 
			//If player guess equals to 0, reset game
			if(playerGuess === 0){
				resetGame();
			} else{ //Else, number of guesses remaining will decrease
				$("#remain").text(playerGuess);
			}

		}	

	});

	// //Beginning of hint function
	// hint.onclick = function(){
	// 	//Array with word hints
	// 	hints = ["Blows up when you least expect it", "Don't look into his eyes", "Community of plants and animals", 
	// 			"One of the most valuable resources for tools and armours", "Leave them alone and they won't bother you",
	// 			"The main female protagonist", "The main male protagonist", "Explodes after ignition", "They're made of bones", "You can plant flowers on this",
	// 			"You fight this mob in The End", "This is one of the first sharp fighting tool you can craft", "You use this to make the furnace heat up",
	// 			"Coal, diamond, emerald, nether quartz, lapis lazuli, and redstone are this", "You need this to make brick", "Mob that lives in the nether and shoots fireballs",
	// 			"Looks like an undead Steve"];

	// 	var hintIndex = 

	// };


}); //End of document ready function