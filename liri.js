var keys = require('./keys.js');

var Twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');
var fs = require('fs');

var action = process.argv[2];
var input = formatUserInput();

run();

function run() {
	switch (action) {
		case 'my-tweets':
			myTweets();
			break;
		case 'spotify-this-song':
			spotifyThisSong();
			break;
		case 'movie-this':
			myovieThis();
			break;
		case 'do-what-is-says':
			doWhatItSays();
			break;
		default:
			break;		
	}
}
function myTweets() {
	var client = new Twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});
	client.get('statuses/user_timeline.json?count=%20', function(error, tweets, response) {
	 if(error) {
		console.log(error)
	 } else {
		for (var i = 0; i < tweets.length; i++) {
			var data = `
			Tweet: ${tweets[i].text}
			Created: ${tweets[i].created_at}
			`;
			console.log(data);
		}
	}
 });
}
