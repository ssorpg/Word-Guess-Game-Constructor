// REQUIRES
const makeLetter = require('./Letter.js');



// FUNCTIONS
function wordSetup(word) {
    word.CreateLetters();
    word.SetDisplayWord();
}



// METHODS
function CreateLetters() {
    for (let position = 0; position < this.SecretWord.length; position++) {
        const letter = this.SecretWord[position];

        this.Letters.push(new makeLetter.Letter(letter));
    }
}

function SetDisplayWord() {
    this.DisplayWord = '';

    this.Letters.forEach(letter => {
        this.DisplayWord += letter.DisplayLetter;
    });
}



// CONSTRUCTORS
function Word(Word) {
    let word = {
        SecretWord: Word,
        DisplayWord: '',
        Letters: [],

        CreateLetters: CreateLetters,
        SetDisplayWord: SetDisplayWord
    };

    wordSetup(word);
    return word;
}



// EXPORTS
module.exports = {
    Word: Word
};