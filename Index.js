const makeWord = require('./Word');
const makeWinLoss = require('./WinLossCount');
const inquirer = require('inquirer');

var WinLossCount = new makeWinLoss.WinLossCount();

function getGuess(wordToGuess) {
    console.log('');

    if (wordToGuess.GuessesRemaining < 1) {
        gameOver(wordToGuess, 'lose');
        return;
    }

    if (wordToGuess.DisplayWord !== wordToGuess.SecretWord) {
        inquirer
            .prompt([
                {
                    name: 'guess',
                    type: 'input',
                    message: 'Guess a letter'
                }
            ])
            .then(input => {
                console.log('\n\n\n\n\n');
                wordToGuess.CheckGuess(input.guess);
                wordToGuess.PrintGameStatus();
                getGuess(wordToGuess);
            });
    }
    else {
        gameOver(wordToGuess, 'win');
        return;
    }
}

function gameOver(wordToGuess, result) {
    if (result === 'lose') {
        console.log('You\'ve run out of guesses.');
        console.log('The word was: ' + wordToGuess.SecretWord);
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
    console.log('\n\n\n\n\n');

    let wordToGuess = new makeWord.Word();

    getGuess(wordToGuess);
}

init();