var numberOfCards = $(".cards").length;
var count = 0;
var numberOfButtons = $("button").length;
var cardsRemaining = 312;
var decksRemaining = 0;
var trueCount = count/decksRemaining;

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

if (cardsRemaining >= 261)
{
  decksRemaining = 6
} else if (cardsRemaining <= 260 && cardsRemaining > 208) {
  decksRemaining = 5
} else if (cardsRemaining <= 208 && cardsRemaining > 156) {
  decksRemaining = 4
} else if (cardsRemaining <= 156 && cardsRemaining > 104) {
  decksRemaining = 3
} else if (cardsRemaining <= 104 && cardsRemaining > 52) {
  decksRemaining = 2
} else {
  decksRemaining = 1
}

$(".true-count").html("True Count: " + trueCount);