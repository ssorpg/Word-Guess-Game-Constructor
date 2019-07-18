// REQUIRES
const Word = require('./word.js');



// FUNCTIONS
function gameSetup(game) {
	game.guessesRemaining = Math.max(14 - game.wordToGuess.secretWord.length, 8);
	game.printGameStatus();
}



// METHODS
function checkGuess(guess) {
	if (this.lettersGuessed.includes(guess)) {
		console.log('\nYou\'ve already guessed \'' + guess + '\'.');
		return;
	}
	else if (guess.length > 1 || !guess.match(/[a-z]/)) {
		console.log('\nPlease guess a valid letter.');
		return;
	}

	this.wordToGuess.letters.forEach(letter => {
		letter.checkGuess(guess);
	});

	if (!this.wordToGuess.secretWord.includes(guess)) {
		this.guessesRemaining--;
	}

	this.lettersGuessed.push(guess);
	this.wordToGuess.setDisplayWord();
}

function printGameStatus() {
	console.log('\nLetters guessed: ' + this.lettersGuessed.join(', '));
	console.log('\nGuesses remaining: ' + this.guessesRemaining);
	console.log('\n' + this.wordToGuess.displayWord.split('').join(' '));
}



// CONSTRUCTORS
function Game(randWord) {
	let game = {
		wordToGuess: new Word(randWord),
		lettersGuessed: [],
		guessesRemaining: 8,

		checkGuess: checkGuess,
		printGameStatus: printGameStatus
	};

	gameSetup(game);
	return game;
}



// EXPORTS
module.exports = Game;
