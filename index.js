
//
// 'use strict';

const fs = require('fs');
const program = (req, res) => {
	fs.readFile('leaderboard.json', (err, data) => {
		if (err) throw err;
		let student = JSON.parse(data);

		res.send(student)
	})

}






module.exports = program