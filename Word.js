const makeLetter = require('./Letter.js');

function WordSetup(Word) {
    Word.GuessesRemaining = Math.max(16 - Word.SecretWord.length, 8);

    CreateLetters(Word);
    Word.SetDisplayWord();
    Word.PrintGameStatus();
}

function CreateLetters(Word) {
    for (let position = 0; position < Word.SecretWord.length; position++) {
        const letter = Word.SecretWord[position];

        Word.Letters.push(new makeLetter.Letter(letter));
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
        console.log('\nYou\'ve already guessed \'' + guess + '\'.');
        return;
    }
    if (guess.length !== 1 || !guess.match(/[a-z]/i)) {
        console.log('\nPlease guess a valid letter.');
        return;
    }

    this.Letters.forEach(letter => {
        letter.CheckGuess(guess);
    });

    if (!this.SecretWord.includes(guess)) {
        this.GuessesRemaining--;
    }

    this.LettersGuessed.push(guess);
    this.SetDisplayWord();
}

function PrintGameStatus() {
    console.log('\nLetters guessed: ' + this.LettersGuessed.join(', '));
    console.log('\nGuesses remaining: ' + this.GuessesRemaining);
    console.log('\n' + this.DisplayWord.split('').join(' '));
}

function Word(SecretWord) {
    let word = {
        SecretWord: SecretWord,
        DisplayWord: '',
        LettersGuessed: [],
        GuessesRemaining: 0,
        Letters: [],

        SetDisplayWord: SetDisplayWord,
        CheckGuess: CheckGuess,
        PrintGameStatus: PrintGameStatus
    }

    WordSetup(word);
    return word;
}

module.exports = {
    Word: Word
}