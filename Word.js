const letterConstructer = require('./Letter.js');

function WordSetup() {
    const words = ['rest', 'muscle', 'taste', 'chalk', 'share', 'door', 'curvy', 'upset', 'leg', 'spotty', 'stingy', 'argue'];

    this.SecretWord = words[Math.floor(Math.random() * words.length)];
    this.GuessesRemaining = this.SecretWord.length * 2;

    this.CreateLetters();
    this.SetDisplayWord();
}

function CreateLetters() {
    for (let position = 0; position < this.SecretWord.length; position++) {
        const letter = this.SecretWord[position];

        this.Letters.push(new letterConstructer.Letter(letter));
    }
}

function SetDisplayWord() {
    this.DisplayWord = '';

    this.Letters.forEach(letter => {
        this.DisplayWord += letter.DisplayLetter;
    });
}

function CheckGuess(guess) {
    if (this.LettersGuessed.includes(guess)) {
        console.log('\nYou\'ve already guessed that letter.');
        return;
    }
    if (guess.length !== 1 || !guess.match(/[a-z]/i)) {
        console.log('\nPlease guess a valid letter.');
        return;
    }

    let found;

    this.Letters.forEach(letter => {
        found = letter.CheckGuess(guess);
    });

    if (!found) {
        this.GuessesRemaining--;
    }

    this.LettersGuessed.push(guess);
    this.SetDisplayWord();
}

function PrintCurrentState() {
    console.log('\nLetters guessed: ' + this.LettersGuessed.join(', '));
    console.log('\nGuesses remaining: ' + this.GuessesRemaining);
    console.log('\n' + this.DisplayWord.split('').join(' '));
}

function Word() {
    let word = {
        SecretWord: '',
        DisplayWord: '',
        LettersGuessed: [],
        GuessesRemaining: 0,
        Letters: [],

        WordSetup: WordSetup,
        CreateLetters: CreateLetters,
        SetDisplayWord: SetDisplayWord,
        CheckGuess: CheckGuess,
        PrintCurrentState: PrintCurrentState
    }

    word.WordSetup();
    return word;
}

module.exports = {
    Word: Word
}