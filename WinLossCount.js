// METHODS
PrintStats = function () {
    console.log('\nGAME OVER');
    console.log('Wins: ' + this.Wins);
    console.log('Losses: ' + this.Losses);
};



// CONSTRUCTORS
WinLossCount = function () {
    let winLossCount = {
        Wins: 0,
        Losses: 0,

        PrintStats: PrintStats
    };

    return winLossCount;
};



// EXPORTS
module.exports = {
    WinLossCount: WinLossCount
};