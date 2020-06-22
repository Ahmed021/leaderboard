
//
'use strict';

const fs = require('fs');

const program = (req, res) => {
	fs.readFile('leaderboard.json', (err, data) => {
		if (err) throw err;
		let parsedData = JSON.parse(data);


		parsedData.sort((a, b) =>
			(a.totalPoints > b.totalPoints) ? -1 : ((b.totalPoints > a.totalPoints) ? 1 : 0));

		res.send(parsedData)
	});



}


module.exports = program