'use strict';
const Twitter = require('twitter');
const config = require('./config');
const { fetchJoke } = require('./libs/fetch');

var T = new Twitter(config);

const Tweet = async (joke) => {
  let tweet = await T.post('statuses/update', { status: joke });
  console.log(tweet);
  return tweet;
}

module.exports.dadjoke = async (event, context) => {
  try {
    const dadjoke = await fetchJoke();
    const tweet = Tweet(dadjoke);
    console.log(tweet); 
  } catch(err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: dadjoke
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
