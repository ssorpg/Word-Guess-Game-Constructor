CheckGuess = function (guess) {
    if (this.SecretLetter === guess) {
        this.IsGuessed = true;
    }
}

Letter = function (SecretLetter) {
    let letter = {
        SecretLetter: SecretLetter,
        DisplayLetter: '_',
        IsGuessed: false,
        CheckGuess: CheckGuess
    }

    return letter;
}

module.exports = {
    Letter: Letter
}