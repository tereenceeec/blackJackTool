var numberOfCards = $(".cards").length;
var count = 0;
var numberOfButtons = $("button").length;

for (var i=0; i<numberOfCards; i++) {
  $(".cards")[i].addEventListener("click", function(e) {

    if ($(e.target).hasClass("high-cards")){
      count--;
      $(".counter").html("Count: " + count);
    }
    else if ($(e.target).hasClass("low-cards")){
      count++;
      $(".counter").html("Count: " + count);
    }
    else if ($(e.target).hasClass("neutral-cards")){
      count=count;
      $(".counter").html("Count: " + count);
    }
  });
}


document.addEventListener("keydown", function(e) {

  if (e.key == "a" || e.key == "k" || e.key == "q" || e.key == "j" || e.key == "1" ) {
    count--;
    $(".counter").html("Count: " + count);
  }
  else if (e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6"){
    count++;
    $(".counter").html("Count: " + count);
  }

});


for (var i=0; i<numberOfButtons; i++) {
  $("button")[i].addEventListener("click", function(e) {
    if ($(e.target).hasClass("btn1")){
      $(".true-count").html("True Count: " + count);
  }
  else if ($(e.target).hasClass("btn2")){
    $(".true-count").html("True Count: " + count/2);
}
  else if ($(e.target).hasClass("btn3")){
    $(".true-count").html("True Count: " + (count/3).toFixed(2));
}
  else if ($(e.target).hasClass("btn4")){
    $(".true-count").html("True Count: " + (count/4).toFixed(2));
}
  else if ($(e.target).hasClass("btn5")){
    $(".true-count").html("True Count: " + (count/5).toFixed(2));
}
  });
}
