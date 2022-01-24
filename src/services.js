const BOB = "bobesponja";
const BOB_PIC = "https://avatarfiles.alphacoders.com/833/thumb-1920-83315.png";
const HEDGE = "hedgy";
const HEDGE_PIC = "https://i.pinimg.com/736x/2d/00/2d/2d002d1e5aa86a0b274c4a9bf8a87b53--bubble-baths-hedge-hog.jpg";

const usersArray = [
  {
    username: HEDGE,
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    avatar: BOB_PIC
  }
];

const tweetsArray = [
  {
    username: BOB,
    tweet: "summer in the bikini bottom 00",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 01",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 02",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 03",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 04",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 05",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 06",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 07",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 08",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 09",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 10",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 11",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 12",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 13",
    avatar: HEDGE_PIC
  },
  {
    username: BOB,
    tweet: "summer in the bikini bottom 14",
    avatar: BOB_PIC
  },
  {
    username: HEDGE,
    tweet: "I saw the new sonic movie in 2.5x! 15",
    avatar: HEDGE_PIC
  },
];

function slicedTenTweets(page) {
  const head = 0 + 10*(page - 1);
  const tail = 10 + 10*(page - 1);
  return (tweetsArray.slice(head, tail).reverse());
}

function getUserAvatar(targetUserName) {
  const targetUserObj = usersArray.find( user => (
    user.username === targetUserName )
  );
  return targetUserObj.avatar;
}

function checkRequestInput(request) {
  const data = request.body;
  let validInput = false;
  
  if (data.hasOwnProperty('avatar')) {
    let isEmpty = ( (data.username.trim().replaceAll(' ', '') === "") || (data.avatar.trim() === "") );
    
    validInput = !isEmpty;
  }
  else {
    let isEmpty = ( (data.username.trim().replaceAll(' ', '') === "") || (data.tweet.trim() === "") );
    
    validInput = !isEmpty;
  }
  return validInput;
}

function formatInputData(request) {
  const data = request.body;
  const formattedInput = { username: data.username.trim().replaceAll(' ', '') };

  if (data.hasOwnProperty('avatar')) {
    formattedInput.avatar = data.avatar.trim().replaceAll(' ', '');
  }
  if (data.hasOwnProperty('tweet')) {
    formattedInput.tweet = data.tweet.trim();
  }
  return formattedInput;
}

function getUserTweets(targetUser, targetArray) {
  const tempArray = targetArray.filter ( tweet => (
    tweet.username === targetUser)
  );    
  return tempArray.reverse();
}

export { usersArray, tweetsArray, slicedTenTweets, getUserAvatar, checkRequestInput, formatInputData, getUserTweets };