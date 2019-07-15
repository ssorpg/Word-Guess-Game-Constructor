// METHODS
CheckGuess = function (guess) {
    if (this.SecretLetter === guess) {
        this.DisplayLetter = this.SecretLetter;
    }
};



// CONSTRUCTORS
Letter = function (SecretLetter) {
    let letter = {
        SecretLetter: SecretLetter,
        DisplayLetter: '_',
        CheckGuess: CheckGuess
    };

    return letter;
};



// EXPORTS
module.exports = {
    Letter: Letter
};