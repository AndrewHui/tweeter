
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
    const counter = $(this).siblings(".counter");

    let num = 140 - words.length
    console.log(num)

    counter.text(num)

    if (num < 0) {
      counter.addClass("counter over")
    }
    // else if (num > -1 && counter.find("counter over")) {
    //   counter.removeClass("counter over") // not working
    // }
    
  })

  // --- our code goes here ---
});

