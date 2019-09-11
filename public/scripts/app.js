// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// // let $ = require('jQuery');





// // testObject =  {
// //   "user": {
// //     "name": "Newton",
// //     "avatars": "https://i.imgur.com/73hZDYK.png",
// //       "handle": "@SirIsaac"
// //     },
// //   "content": {
// //       "text": "If I have seen further it is by standing on the shoulders of giants"
// //     },
// //   "created_at": 1461116232227
// // }


// // console.log(createTweetElement(testObject))


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const renderTweets = (tweetData) => {
  for (let par of tweetData) {
    const $htmlCode = createTweetElement(par);
    $('#tweet-container').append($htmlCode);
  }
};

const createTweetElement = function(tweetObject) {
  //returns a tweet article element containing the entire HTML structure of the tweet
  const {name, avatars, handle} = tweetObject.user;
  const {text} = tweetObject.content;
  const {created_at} = tweetObject;
  
  return `<article class ="tweets-container">
  <header class="tweetsBox"> 

    <img class=tweetImage src='${avatars}'> </img>
    
    <textarea class="nameTweet" name="text">
      ${name}
    </textarea>
    <textarea class="contentTweet" name="content">
        ${text}
      </textarea>
      <div class="borderUnder">
        
      </div>

      <div class="handle">
      ${handle}
      </div>
      
      <div class="daysLeft">
        ${created_at}
      </div>

    </header>
</article>`
}

$(document).ready(function(){

  renderTweets(tweetData);

});


// Test / driver code (temporary)
 // to see what it looks like
 // to add it to the page so we can make sure it's got all 

