
//
'use strict';

const fs = require('fs');

fs.readFile('leaderboard.json', (err, data) => {
	if (err) throw err;
	let parsedData = JSON.parse(data);

	// sort the file based on total points
	parsedData.sort((a,b) => 
		(a.totalPoints > b.totalPoints) ? -1 : ((b.totalPoints > a.totalPoints) ? 1 : 0));
	
	console.log(parsedData);
});


console.log('This is after the read call..');