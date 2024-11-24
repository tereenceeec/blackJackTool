var numberOfCards = $(".cards").length;
var count = 0;
var cardsRemaining = 312;
var decksRemaining = 6; // Set initial decks remaining based on 312 cards (6 decks)
var trueCount = count / decksRemaining;

// Function to update the true count
function updateTrueCount() {
  // Ensure no division by zero
  if (decksRemaining > 0) {
    trueCount = count / decksRemaining;
  } else {
    trueCount = 0;
  }
  $(".true-count").html("True Count: " + trueCount.toFixed(2)); // display with 2 decimals
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

    // Update decks remaining and true count
    updateDecksRemaining();
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

  // Update decks remaining and true count
  updateDecksRemaining();
  updateTrueCount();
});

// Determine the number of decks remaining based on the number of cards left
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
}

// Reset button functionality
$(".btnReset").click(function() {
  count = 0;
  cardsRemaining = 312; // Reset to the total number of cards in your deck
  decksRemaining = 6; // Reset decks to 6
  $(".counter").html("Count: " + count);
  
  // Update true count after reset
  updateTrueCount();
});
