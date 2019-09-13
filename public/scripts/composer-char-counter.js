
$(document).ready(function() {


  $("textarea").on('input', function() { // on input it updates characters. Also if over or under character limit then add class for error notif
    let words = $(this).val();

    const counter = $(this).siblings(".flexNewTweetBottom").children(".counter");

    $(".flexNewTweetBottom p").hide();

    let num = 140 - words.length;

    counter.text(num);

    if (num < 0) {
      counter.addClass("over");
    } else if (num > -1) {
      counter.removeClass("over");
    }
    
  });

  // --- our code goes here ---
});

