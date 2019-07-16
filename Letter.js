// METHODS
function CheckGuess(guess) {
	if (this.SecretLetter === guess) {
		this.DisplayLetter = this.SecretLetter;
	}
}



// CONSTRUCTORS
function Letter(SecretLetter) {
	let letter = {
		SecretLetter: SecretLetter,
		DisplayLetter: '_',
		CheckGuess: CheckGuess
	};

	return letter;
}



// EXPORTS
module.exports = {
	Letter: Letter
};