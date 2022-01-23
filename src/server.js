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
    resp.status(200).send('OK');
  }
  else {
    console.log('falta tratar erro no post tweet');
    resp.sendStatus(501);
  }

});

server.get('/tweets', ( _, resp) => {
  resp.send(latestTenTweets(tweetsArray));
});

const serverPort = 5000;
server.listen(5000, () => {
  console.log(`\n>>> server listening, http://localhost:${serverPort}`);
});