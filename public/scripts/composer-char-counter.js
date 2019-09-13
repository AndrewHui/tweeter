
$(document).ready(function() {
  // console.log("SDFA")
  // const words = $("textarea").keypress(function() {
  //   let inputText = this.value;
  //   console.log(inputText, inputText.length)
    
  //   return inputText;
  // })

  $("textarea").on('input', function() {
    let words = $(this).val()
    // if (words.length > 140) { 
    // }  
    // const counter = $(this).siblings(".counter");
    const counter = $(this).siblings(".flexNewTweetBottom").children(".counter");

    $( ".flexNewTweetBottom p" ).hide();

    let num = 140 - words.length

    counter.text(num)

    if (num < 0) {
      counter.addClass("over")
    }
    else if (num > -1) {
      counter.removeClass("over") 
    }
    
  })

  // --- our code goes here ---
});

