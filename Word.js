const letterConstructer = require('./Letter.js');

function CreateLetters() {
    for (let position = 0; position < this.Word.length; position++) {
        const letter = this.Word[position];
        
        this.Letters.push(new letterConstructer.Letter(letter));
    }
}

function CheckGuess(guess) {
    this.Letters.forEach(letter => {
        letter.CheckGuess(guess);
    });
}

function Word(Word) {
    let word = {
        Word: Word,
        Letters: [],
        CreateLetters: CreateLetters,
        CheckGuess: CheckGuess
    }

    word.CreateLetters();
    return word;
}

module.exports = {
    Word: Word
}