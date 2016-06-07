/**
 * Shuffle Deck
 *
 * Given an array containing a deck of cards, implement a function that shuffles the deck.
 * Note:
 * A shuffled deck should be completely random.
 * That means that a given card should be as likely as any other to appear in a given deck index,
 * completely independent of the order of the input deck.
 * Think carefully about how to be sure your algorithm generates a properly shuffled deck
 * – it is easy to accidentally create a biased algorithm.
 *
 */

var shuffleDeck = function(deck) {
  var result = new Array(deck.length);
  var rngSize = deck.length;

  var rng = function(range) {
    return Math.floor(Math.random() * range);
  }
  for (var i = 0; i < result.length; i++) {
    var x = rng(rngSize);
    result[i] = deck[x];
    deck.splice(x,1);
    rngSize--;
  }
  return result;
}
