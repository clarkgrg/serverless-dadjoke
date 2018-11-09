'use strict';
const Twitter = require('twitter');
const config = require('./config');
const { fetchJoke } = require('./libs/fetch');

// Initialize Twitter
var T = new Twitter(config);

// Send a tweet
const sendTweet = async (joke) => {
  let tweet = await T.post('statuses/update', { status: joke });
  return tweet;
}

// Fetch and Tweet Dad Joke 
// Make the kids proud
module.exports.dadjoke = async (event, context) => {
  let joke='';
  try {
    joke = await fetchJoke();
    const tweet = await sendTweet(joke);
    console.log(tweet); 
  } catch(err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: joke
    }),
  };
};
