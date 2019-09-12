$(document).ready(function(){
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



const renderTweets = (tweetData) => {
  $('#tweet-container').html("")
  for (let par of tweetData) {
    const $htmlCode = createTweetElement(par);
    $('#tweet-container').append($htmlCode);
  }
};

const createTweetElement = function(tweetObject) {
  //returns a tweet article element containing the entire HTML structure of the tweet
  console.log(tweetObject.content)
  const {name, avatars, handle} = tweetObject.user;
  const {text} = tweetObject.content;
  const {created_at} = tweetObject;

  return `<article class="tweets-container">
  <header class="tweetsBox" >     

    <img class="tweetImage" src=${avatars} </img>

    <p class="nameTweet" name="text">
    ${name}
    </p>


    <p class="handle">
    ${handle}
    </p>

  </header>
  <div class='content-area'>
    <textarea class="contentTweet" name="content">
    ${text}
    </textarea>
  </div>

  <footer class="footerFlex">
    <div class="daysLeft">
    ${created_at}
    </div>
  </footer>  
</article>`
  
}

  // renderTweets(tweetData);

  const form = $('.tweetForm');

  form.on('submit', (event) => {
  console.log("STOP")
  event.preventDefault();

  const inputVal = $(form.children("textarea")).val();

  if (inputVal.length === 0) {
    alert("YOU abusing my program")
  }
  else if (inputVal.length > 140) {
    alert("YOU abusing my program")
  }

  $.ajax({
    url: "/tweets",
    type: "POST",
    data: form.serialize(),
    success: loadTweets
  })
  })

const loadTweets = function() {
  $.ajax("/tweets")
    .then(renderTweets)

}

loadTweets();

});



// Test / driver code (temporary)
 // to see what it looks like
 // to add it to the page so we can make sure it's got all 

