
//
'use strict';

const fs = require('fs');

fs.readFile('readFile.json', (err, data) => {
	if (err) throw err;
	let parsedData = JSON.parse(data);

	// sort the file based on points
	
	console.log(parsedData);
})


console.log('This is after the read call..');