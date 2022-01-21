import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const usersArray = [];
const tweetsArray = [];

function latestTenTweets(targetArray) {
  const newArray = [];
  for (let i = targetArray.length - 1; i > targetArray.length - 11; i--) {
    newArray.push(targetArray[i]);
  }
  return newArray;
}

server.post('/sign-up', (req, resp) => {
  console.log(req.body);
  usersArray.push(req.body);
  resp.send('OK');
});

server.post('/tweets', (req, resp) => {
  console.log(req.body);
  tweetsArray.push(req.body);
  resp.send('OK');
});

server.get('/tweets', (req, resp) => {

  resp.send('wip');
});

const serverPort = 5000;
server.listen(5000, () => {
  console.log('server listening on port :' + serverPort);
  let testArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  console.log(latestTenTweets(testArray));
});
