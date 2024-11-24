var numberOfCards = $(".cards").length;
var count = 0;
var numberOfButtons = $("button").length;
var cardsRemaining = 312;
var decksRemaining = 0;
var trueCount = count / decksRemaining;

// Function to update the true count
function updateTrueCount() {
  if (decksRemaining > 0) {
    trueCount = count / decksRemaining;
    $(".true-count").html("True Count: " + trueCount.toFixed(2)); // display with 2 decimals
  }
}

// Event listener for card clicks
for (var i = 0; i < numberOfCards; i++) {
  $(".cards")[i].addEventListener("click", function(e) {

    if ($(e.target).hasClass("high-cards")){
      count--;
      cardsRemaining--;
      $(".counter").html("Count: " + count);
    }
    else if ($(e.target).hasClass("low-cards")){
      count++;
      cardsRemaining--;
      $(".counter").html("Count: " + count);
    }
    else if ($(e.target).hasClass("neutral-cards")){
      count = count;  // No change in count for neutral cards
      cardsRemaining--;
      $(".counter").html("Count: " + count);
    }

    updateTrueCount();
  });
}

// Event listener for keyboard inputs
document.addEventListener("keydown", function(e) {

  if (e.key == "a" || e.key == "k" || e.key == "q" || e.key == "j" || e.key == "1" ) {
    count--;
    cardsRemaining--;
    $(".counter").html("Count: " + count);
  }
  else if (e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6") {
    count++;
    cardsRemaining--;
    $(".counter").html("Count: " + count);
  } else if (e.key == "7" || e.key == "8" || e.key == "9") {
    cardsRemaining--;
  }

  updateTrueCount();
});

// Determine the initial number of decks based on the number of cards remaining
function updateDecksRemaining() {
  if (cardsRemaining >= 261) {
    decksRemaining = 6;
  } else if (cardsRemaining <= 260 && cardsRemaining > 208) {
    decksRemaining = 5;
  } else if (cardsRemaining <= 208 && cardsRemaining > 156) {
    decksRemaining = 4;
  } else if (cardsRemaining <= 156 && cardsRemaining > 104) {
    decksRemaining = 3;
  } else if (cardsRemaining <= 104 && cardsRemaining > 52) {
    decksRemaining = 2;
  } else {
    decksRemaining = 1;
  }
  updateTrueCount();
}

// Reset button functionality
$(".btnReset").click(function() {
  count = 0;
  cardsRemaining = 312; // Reset to the total number of cards in your deck
  updateDecksRemaining(); // Update decks remaining based on the reset cards remaining
  $(".counter").html("Count: " + count);
  $(".true-count").html("True Count: " + trueCount.toFixed(2));
});
