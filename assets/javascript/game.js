// The array of letters for the computer to choose.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Object that holds user's stats and guessed letters array.
var userStats = {
	wins: 0,
	losses: 0,
	guessesLeft: 9,
	guessedLettersArr: [],
}

// unassigned variables to pull the value once they are generated in the keyup event. This are later used in the fuctions below.
var computerLetter;
var userGuess;

// fuction that will take guess entry and add it to array to show on HTML page of guesses so far.
function addGuess(userGuess) {
	userStats.guessedLettersArr.push(userGuess);
	console.log('guesses:', userStats.guessedLettersArr);
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + userStats.guessedLettersArr.join(", ");
}

// Game reset to be used when user wins or losses.
function psychicReset() {
	userStats.guessesLeft = 9;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + userStats.guessesLeft;
	userStats.guessedLettersArr = [];
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + userStats.guessedLettersArr;
	randomLetter();
}

// Randomly chooses a choice from the options array. This is the Computer's guess.
function randomLetter() {
	computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//GAME STARTS TO RUN HERE

// Run the fuction to determine the random letter for the computer.
randomLetter();

// Once key is pressed, it will start the function.
document.onkeyup = function (event) {

	// Determines which key was pressed.
	var userGuess = event.key.toLowerCase();

	// Checks that the guess is a letter a-z by matching up with computer array.
	if (computerChoices.includes(userGuess)) {
		// Checks that the guess has not already been made by checking the user guess array.
		if (userStats.guessedLettersArr.includes(userGuess) == false) {
			document.querySelector("#notification").innerHTML = "";
			// Adds user guess into the array using 
			addGuess(userGuess);
			userStats.guessesLeft--;
			document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + userStats.guessesLeft;
			document.querySelector("#notification").innerHTML = "Nope! It wasn't " + userGuess;
			// Checks if the guess matches the random computer choice.
			if (userGuess === computerLetter) {
				userStats.wins++;
				document.querySelector("#wins").innerHTML = "Wins: " + userStats.wins;
				document.querySelector("#notification").innerHTML = "You win! It was " + userGuess;
				psychicReset();
			// Checks if the guess left becomes 0, if so the game resets.
			} else if (userStats.guessesLeft === 0) {
				userStats.losses++;
				document.querySelector("#losses").innerHTML = "Losses: " + userStats.losses;
				document.querySelector("#notification").innerHTML = "Sorry, you lost! It was " + computerLetter;
				psychicReset();
			}
		}
		// If guessed letter has already been used, give this notification.
		else {
			document.querySelector("#notification").innerHTML = "Please press a letter you haven't chosen yet.";
		}
	}
	// If guess was not a letter, it will give this notification.
	else {
		document.querySelector("#notification").innerHTML = "Please press a letter.";
	}
}

