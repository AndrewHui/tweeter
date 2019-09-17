$(document).ready(function() {


  const renderTweets = (tweetData) => {
    $('#tweet-container').html("");
    $('.inputTweetText').val("");
    for (let par of tweetData) {
      const $htmlCode = createTweetElement(par);
      $('#tweet-container').append($htmlCode);
    }
  };

  const createTweetElement = function(tweetObject) {
  //returns a tweet article element containing the entire HTML structure of the tweet

    const {name, avatars, handle} = tweetObject.user;
    const {text} = tweetObject.content;
    let {created_at} = tweetObject;
    let timeDate = Math.round((Date.now() - created_at) / (1000 * 60 * 60 * 24));
  

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
    <p class="contentTweet" name="content">
    ${text}
    </p>
  </div>

  <footer class="footerFlex">
    <div class="daysLeft">
    ${timeDate} days ago
    </div>
    <div class="flexPic">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-thumbs-up"></i>
    </div>
  </footer>  
  </article>`;
  
  };

  const form = $('.tweetForm');

  form.on('submit', (event) => { // on form submit, prevent default function and create errors; otherwise send ajax 
    event.preventDefault();

    const inputVal = $(form.children("textarea")).val();

    if (inputVal.length === 0) {
      $(".flexNewTweetBottom p").show("slow");

    } else if (inputVal.length > 140) {
      $(".flexNewTweetBottom p").show("slow");
    
    }
    else {

      $.ajax({
        url: "/tweets",
        type: "POST",
        data: form.serialize(),
        success: loadTweets,
      });

  }
    
  });

  const loadTweets = function() { // Load tweets with a promise
    $.ajax("/tweets")
      .then(renderTweets);

  };

  loadTweets();

  const writeANewTweet = $('#birdFlex');
  

  writeANewTweet.click(() => { // on click the button for writing a tweet appears
    $(".tweetForm").slideToggle("slow");
    
  });

  $(".tweetForm").hide();
  $(".flexNewTweetBottom p").hide();

});



// Test / driver code (temporary)
// to see what it looks like
// to add it to the page so we can make sure it's got all

