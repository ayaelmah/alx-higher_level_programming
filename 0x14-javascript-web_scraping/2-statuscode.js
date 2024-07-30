#!/usr/bin/node

const request = require('request');

request(process.argv[2], function(err, res){
	if(err){
		console.log('Error:', err);
	}
	else{
		console.log('Code:', res.statusCode);
	}


});
