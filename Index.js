const word = require('./Word');
const inquirer = require('inquirer');

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
                wordToGuess.PrintCurrentState();
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
    }
    else if (result === 'win') {
        console.log('You guessed the word!')
    }

    console.log('The word was: ' + wordToGuess.SecretWord);
}

function init() {
    let wordToGuess = new word.Word();

    getGuess(wordToGuess);
}

init();