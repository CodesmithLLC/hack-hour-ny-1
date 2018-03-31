/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function getScore(hand) {
  // Generate an object to represent card frequency
  const cardCount = hand.reduce((a, c) => {
    a.hasOwnProperty(c) ? a[c] += 1 : a[c] = 1;
    return a;
  }, {});

  // Accumulate scores of card count frequency
  let score = 0;

  for (const card in cardCount) {
    switch (cardCount[card]) {
      case 4: score += 500; break;
      case 3: score += 300; break;
      case 2: score += 100; break;
      default: break;
    }
  }

  // straight
  hand.sort((a, b) => b - a);
  if (score === 0 && hand[0] - hand[4] === 4) score += 350
  // add high card
  return score + hand[0];
}

function poker(hand1, hand2) {
  const player1 = getScore(hand1);
  const player2 = getScore(hand2);

  if (player1 === player2) return 'Draw';
  return player1 > player2 ? 'Player 1 wins' : 'Player 2 wins';
}

module.exports = poker;
