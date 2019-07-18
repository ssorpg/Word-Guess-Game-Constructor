// REQUIRES
const Letter = require('./letter.js');



// FUNCTIONS
function wordSetup(word) {
	word.createLetters();
	word.setDisplayWord();
}



// METHODS
function createLetters() {
	for (let position = 0; position < this.secretWord.length; position++) {
		const letter = this.secretWord[position];

		this.letters.push(new Letter(letter));
	}
}

function setDisplayWord() {
	this.displayWord = '';

	this.letters.forEach(letter => {
		this.displayWord += letter.displayLetter;
	});
}



// CONSTRUCTORS
function Word(randWord) {
	let word = {
		secretWord: randWord,
		displayWord: '',
		letters: [],

		createLetters: createLetters,
		setDisplayWord: setDisplayWord
	};

	wordSetup(word);
	return word;
}



// EXPORTS
module.exports = Word;