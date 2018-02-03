var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var userStats = {
	wins: 0,
	losses: 0,
	guessesLeft: 9,
	guessedLettersArr: [],
}

// Take guess entry and add it to array to show on HTML page of guesses so far.

function addGuess(userGuess) {
	userStats.guessedLettersArr.push(userGuess);
	console.log('guesses:', userStats.guessedLettersArr);
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + userStats.guessedLettersArr.join(", ");
}

// Reset, I think
function psychicReset() {
	userStats.guessesLeft = 9;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + userStats.guessesLeft;
	userStats.guessedLettersArr = [];
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + userStats.guessedLettersArr;
	randomLetter();
}

var computerLetter;
var userGuess;

// Randomly chooses a choice from the options array. This is the Computer's guess.
function randomLetter() {
	computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	document.querySelector("#test").innerHTML = "Computer Choice: " + computerLetter;
}

// create functions/variables above "when key is entered" which can then be called later in those if fuctions.





randomLetter();


document.onkeyup = function (event) {

	// Determines which key was pressed.
	var userGuess = event.key.toLowerCase();
	console.log('userGuess:', userGuess);



	console.log(computerLetter);
	console.log(userStats.guessedLettersArr.includes(userGuess));
	console.log(userStats.guessedLettersArr);

	if (computerChoices.includes(userGuess)) {

		if (userStats.guessedLettersArr.includes(userGuess) == false) {
			console.log(userStats.guessedLettersArr.includes(userGuess));
			addGuess(userGuess);
			userStats.guessesLeft--;
			document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + userStats.guessesLeft;
			if (userGuess === computerLetter) {
				userStats.wins++;
				document.querySelector("#wins").innerHTML = "Wins: " + userStats.wins;
				psychicReset();
				console.log(userGuess === computerLetter);
				console.log(userStats.guessedLettersArr.includes(userGuess));
				console.log(userStats.guessedLettersArr);
			} else if (userStats.guessesLeft === 0) {
				userStats.losses++;
				document.querySelector("#losses").innerHTML = "Losses: " + userStats.losses;
				psychicReset();
			}
		}
	}
}


	// 		if (userGuess === computerLetter) {
	// 			// if the user guesses correctly, wins increases by 1 and guesses reset.
	// 			userStats.wins++;
	// 			psychicReset();
	// 		} 
	// 		else if (userGuess !== computerLetter) { 
	// 			userStats.guessesLeft--;
	// 			if (userStats.guessesLeft === 0) {
	// 				userStats.losses++;
	// 				psychicReset();
	// 			};
	// 		}
	// 	}
	// }




	// example of innerHTML text












// computer chooses random letter
// user enters their guess
// computer determines
//   if it is a match, wins increased by 1 and game resets with new random choice and array is cleared.
// 	 next (else if)
//	 if it is already in the array, ignore it
//	 otherwise, add it to the array
//	 guesses are also reduced by 1
//	 next (else if)
// 	 if guesses left now equals 0, losses are increased by 1 and game is reset with new random choice and array is cleared