PrintStats = function () {
    console.log('\nGAME OVER');
    console.log('Wins: ' + this.Wins);
    console.log('Losses: ' + this.Losses);
}

WinLossCount = function () {
    let winLossCount = {
        Wins: 0,
        Losses: 0,

        PrintStats: PrintStats
    }

    return winLossCount;
}

module.exports = {
    WinLossCount: WinLossCount
}