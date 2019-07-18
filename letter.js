// METHODS
function checkGuess(guess) {
	if (this.secretLetter === guess) {
		this.displayLetter = this.secretLetter;
	}
}



// CONSTRUCTORS
function Letter(secretLetter) {
	let letter = {
		secretLetter: secretLetter,
		displayLetter: '_',
		
		checkGuess: checkGuess
	};

	return letter;
}



// EXPORTS
module.exports = Letter;
