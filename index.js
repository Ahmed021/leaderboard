
//
'use strict';

const fs = require('fs');

fs.readFile('readFile.json', (err, data) => {
	if (err) throw err;
	let student = JSON.parse(data);

	// sort the file based on points
	
	console.log(student);
})


console.log('This is after the read call..');