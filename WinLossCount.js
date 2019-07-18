// METHODS
function printStats () {
	console.log('\nGAME OVER');
	console.log('Wins: ' + this.wins);
	console.log('Losses: ' + this.losses);
}



// CONSTRUCTORS
function WinLossCount() {
	let winLossCount = {
		wins: 0,
		losses: 0,

		printStats: printStats
	};

	return winLossCount;
}



// EXPORTS
module.exports = WinLossCount;