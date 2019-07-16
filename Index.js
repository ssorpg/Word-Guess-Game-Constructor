// REQUIRES
const makeGame = require('./Game.js');
const makeWinLoss = require('./WinLossCount.js');

const inquirer = require('inquirer');
const randomWords = require('random-words');



// GLOBALS
const largeSpace = '\n\n\n\n\n';
var WinLossCount = new makeWinLoss.WinLossCount();



// FUNCTIONS
function getGuess(game) {
	console.log('');

	if (game.GuessesRemaining < 1) {
		gameOver(game, 'lose');
		return;
	}

	if (game.WordToGuess.DisplayWord === game.WordToGuess.SecretWord) {
		gameOver(game, 'win');
		return;
	}
	else {
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
				game.CheckGuess(input.guess.toLowerCase());
				game.PrintGameStatus();
				getGuess(game);
			});
	}
}

function gameOver(game, result) {
	if (result === 'lose') {
		console.log('You\'ve run out of guesses.');
		console.log('The word was: ' + game.WordToGuess.SecretWord);
		WinLossCount.Losses++;
	}
	else if (result === 'win') {
		console.log('You guessed the word!');
		WinLossCount.Wins++;
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
				WinLossCount.PrintStats();
			}
		});
}

function init() {
	console.log(largeSpace);

	let game = new makeGame.Game(randomWords());

	getGuess(game);
}



// FUNCTION CALLS
init();