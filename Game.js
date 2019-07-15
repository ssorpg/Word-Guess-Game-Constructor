// REQUIRES
const makeWord = require('./Word.js');



// FUNCTIONS
function gameSetup(game) {
    game.GuessesRemaining = Math.max(14 - game.WordToGuess.SecretWord.length, 8);
    game.PrintGameStatus();
}



// METHODS
function CheckGuess(guess) {
    if (this.LettersGuessed.includes(guess)) {
        console.log('\nYou\'ve already guessed \'' + guess + '\'.');
        return;
    }
    else if (guess.length > 1 || !guess.match(/[a-z]/)) {
        console.log('\nPlease guess a valid letter.');
        return;
    }

    this.WordToGuess.Letters.forEach(letter => {
        letter.CheckGuess(guess);
    });

    if (!this.WordToGuess.SecretWord.includes(guess)) {
        this.GuessesRemaining--;
    }

    this.LettersGuessed.push(guess);
    this.WordToGuess.SetDisplayWord();
}

function PrintGameStatus() {
    console.log('\nLetters guessed: ' + this.LettersGuessed.join(', '));
    console.log('\nGuesses remaining: ' + this.GuessesRemaining);
    console.log('\n' + this.WordToGuess.DisplayWord.split('').join(' '));
}



// CONSTRUCTORS
function Game(Word) {
    let game = {
        WordToGuess: new makeWord.Word(Word),
        LettersGuessed: [],
        GuessesRemaining: 8,

        CheckGuess: CheckGuess,
        PrintGameStatus: PrintGameStatus
    };

    gameSetup(game);
    return game;
}



// EXPORTS
module.exports = {
    Game: Game
};