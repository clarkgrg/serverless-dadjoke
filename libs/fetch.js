let axios = require('axios');

const fetchJoke = async () => {
  const queryUrl = "https://icanhazdadjoke.com/";
  const response = await axios.get(queryUrl, { headers: { "Accept": "application/json", "User-Agent": "Dadbot (https://github.com/clarkgrg/serverless-dadjoke.git)" } });
  console.log(response.data);
  return response.data.joke;
}

module.exports = {
  fetchJoke,
}