import express from 'express';
import cors from 'cors';

import { usersArray, tweetsArray, latestTenTweets, getUserAvatar, checkRequestInput, formatInputData } from './services.js';

const server = express();
server.use(express.json());
server.use(cors());


server.post('/sign-up', (req, resp) => {
  if (checkRequestInput(req)) {
    const validInputData = formatInputData(req);
    usersArray.push( {
      username: validInputData.username,
      avatar: validInputData.avatar
     });
    resp.status(201).send('OK');
    console.log('SIGNUP: ', usersArray);
  }
  else {
    resp.status(400).send("Todos os campos são obrigatórios!");
    console.log('invalid signup data!');
  }
});

server.post('/tweets', (req, resp) => {
  if (checkRequestInput(req)) {
    const validInputData = formatInputData(req);
    const targetAvatar = getUserAvatar(validInputData.username);

    tweetsArray.push( {
      username: validInputData.username,
      avatar: targetAvatar,
      tweet: validInputData.tweet
    });
    resp.status(201).send('OK');
  }
  else {
    resp.status(400).send("Todos os campos são obrigatórios!");
    console.log('invalid tweet data!');
  }
});

server.get('/tweets', ( _, resp) => {
  resp.send(latestTenTweets(tweetsArray));
});

server.get('/tweets/:userName', (req, resp) => {
  const targetUser = req.params.userName;
  
  resp.sendStatus(501);
})

const serverPort = 5000;
server.listen(5000, () => {
  console.log(`\n>>> server listening, http://localhost:${serverPort}`);
});