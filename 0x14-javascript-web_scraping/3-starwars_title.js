#!/usr/bin/node

const request = require('require');
const movieId = process.argv[2];
const starWarsUrl = 'https://swapi-api.hbtn.io/api/films/'.concat(process.argv[2]);

request(starWarsUrl, function(_err,_res, body){
	body = JSON.parse(body);
  console.log(body.title);

});
