// REQUIRES
const Game = require('./game.js');
const WinLossCount = require('./WinLossCount.js');

const inquirer = require('inquirer');
const randomWords = require('random-words');



// GLOBALS
const largeSpace = '\n\n\n\n\n';
var winLossCount = new WinLossCount();



// FUNCTIONS
function getGuess(game) {
	console.log('');

	if (game.guessesRemaining < 1) {
		gameOver(game, 'lose');
		return;
	}
	else if (game.wordToGuess.displayWord === game.wordToGuess.secretWord) {
		gameOver(game, 'win');
		return;
	}

	inquirer
		.prompt([
			{
				name: 'guess',
				type: 'input',
				message: 'Guess a letter'
			}
		])
		.then(input => {
			console.log(largeSpace);
			game.checkGuess(input.guess.toLowerCase());
			game.printGameStatus();
			getGuess(game);
		});

}

function gameOver(game, result) {
	if (result === 'lose') {
		console.log('You\'ve run out of guesses.');
		console.log('The word was: ' + game.wordToGuess.secretWord);
		winLossCount.losses++;
	}
	else if (result === 'win') {
		console.log('You guessed the word!');
		winLossCount.wins++;
	}

	playAgain();
}

function playAgain() {
	console.log('');

	inquirer
		.prompt([
			{
				name: 'restart',
				type: 'confirm',
				message: 'Play again?'
			}
		])
		.then(input => {
			if (input.restart) {
				init();
			}
			else {
				winLossCount.printStats();
			}
		});
}

function init() {
	console.log(largeSpace);

	let game = new Game(randomWords());

	getGuess(game);
}



// FUNCTION CALLS
init();
