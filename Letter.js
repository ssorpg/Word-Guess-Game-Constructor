CheckGuess = function (guess) {
    if (this.SecretLetter === guess) {
        this.DisplayLetter = this.SecretLetter;
        return true;
    }
    return false;
}

Letter = function (SecretLetter) {
    let letter = {
        SecretLetter: SecretLetter,
        DisplayLetter: '_',
        CheckGuess: CheckGuess
    }

    return letter;
}

module.exports = {
    Letter: Letter
}