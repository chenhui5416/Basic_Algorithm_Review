// Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).
// This function takes one parameter which is an array of strings that represent each card in the hand. Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"
// It returns a number which is the score of the hand. Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
// Scoring rules: In Blackjack number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.
// Examples:
// scoreHand(["A"]); //=> 11
// scoreHand(["A", "J"]); //=> 21
// scoreHand(["A", "10", "A"]); //=> 12
// scoreHand(["5", "3", "7"]); //=> 15
// scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25

function scoreHand(cards) {
	var sum = 0;
	var aCount = 0;
	cards.forEach(function(item, index, arr) {
		var temp = Number(item);
		if (temp) {
			sum += temp;
		} else if (item == 'A'){
			aCount ++;
		} else {
			sum += 10;
		}
	});
	if (aCount == 0) {
		return sum;
	} else {
		while (aCount) {
			aCount --;
			var temp = sum + 11 + aCount;
			if (temp<=21) {
				sum += 11;
			} else {
				sum += 1;
			}
		}
		return sum;
	}
}
/**
 * 大神解法，我想的还是太少了，多深入想想复杂问题
 */
function scoreHand(cards) {
  var aces = 0
    , score = cards.reduce(function (s, c) {
        if (c === 'A') { aces++; return s + 11 }
        return /\d/.test(c) ? s + parseInt(c) : s + 10
      }, 0)
  while (aces-- && score > 21) score -= 10
  return score
}
