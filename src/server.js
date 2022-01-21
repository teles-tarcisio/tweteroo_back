import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const usersArray = [
  {
    username: "hedgy",
    avatar: "https://i.pinimg.com/736x/2d/00/2d/2d002d1e5aa86a0b274c4a9bf8a87b53--bubble-baths-hedge-hog.jpg"
  },
  {
    username: "bobesponja",
    avatar: "https://avatarfiles.alphacoders.com/833/thumb-1920-83315.png"
  }
];

const tweetsArray = [
  {
    username: "0000",
    tweet:"tweet 0000",
    avatar: "https://image.shutterstock.com/image-photo/black-number-0000-on-white-260nw-2001074579.jpg"
  },
  {
    username: "0001",
    tweet:"tweet 0001",
    avatar: "https://i.ytimg.com/vi/HYE6E3MYyAc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJagHxrSk7wxUZmr9kGmnK2WbTRg"
  },
];

function latestTenTweets(targetArray) {
  const newArray = [];
  for (let i = targetArray.length - 1; i > targetArray.length - 11; i--) {
    newArray.push(targetArray[i]);
  }
  return newArray;

  /* // >>> SLICE vs SPLICE !!!
  const testArray = [
    { id:1, name:"01" }, { id:2, name:"02"}, { id:3, name:"03"}, { id:4, name:"04"}, { id:5, name:"05"}, { id:6, name:"06"}];
  
  console.log(testArray.slice(testArray.length -6, testArray.length));
  */
}

function getUserAvatar(targetUserName) {
  const targetUserObj = usersArray.find( user => (
    user.username === targetUserName )
  );
  
  return targetUserObj.avatar;
}

server.post('/sign-up', (req, resp) => {
  
  usersArray.push(req.body);
  resp.send('OK');
});

server.post('/tweets', (req, resp) => {
  const targetName = req.body.username;
  const targetAvatar = getUserAvatar(targetName);
  tweetsArray.push(
    { username: req.body.username,
      avatar: targetAvatar,
      tweet: req.body.tweet} );
  resp.send('OK');
});

server.get('/tweets', (req, resp) => {
  console.log('tweetsArray: ', tweetsArray);
  resp.send(latestTenTweets(tweetsArray));
});

const serverPort = 5000;
server.listen(5000, () => {
  console.log(`server listening, http://localhost:${serverPort}`);
});


/*
  { username: "hedgy", avatar: "https://i.pinimg.com/736x/2d/00/2d/2d002d1e5aa86a0b274c4a9bf8a87b53--bubble-baths-hedge-hog.jpg" };
  */