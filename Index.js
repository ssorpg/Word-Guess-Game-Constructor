const word = require('./Word');
const inquirer = require('inquirer');

function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)]
}

function getGuess(wordToGuess) {
    inquirer
        .prompt([
            {
                name: 'guess',
                type: 'input',
                message: 'Guess a letter'
            }
        ])
        .then(input => {
            wordToGuess.CheckGuess(input.guess);
            console.log(wordToGuess);
        });
}

function init() {
    const words = ['rest', 'muscle', 'taste', 'chalk', 'share', 'door', 'curvy', 'upset', 'leg', 'spotty', 'stingy', 'argue'];

    let wordToGuess = new word.Word(getRandomWord(words));

    getGuess(wordToGuess);
}

init();