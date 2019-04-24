const https = require('https');
const username = 'francisco';

function printMessage(username, badgeCount, point){
  const message = `${username}'s points: ${badgeCount} and badge count: ${point}`
  console.log(message);
};

printMessage('fortiz',32,34);

//connect to the the api
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  console.dir(response);
  //READ THE DATA
  //PARSE THE DATA
  //PRINT THE DATA
    });



