//1. Initialize the card deck.
//2. Deal cards to player and dealer.
//3. Player turn: hit or stay. (Repeat this step until bust or stay)
//4. If player busts, dealer wins.
//5. Dealer turn: hit or stay. (Repeat until total >= 17)
//6. If dealer busts, player wins.
//7. Compare cards and declare winner.
let deck = [];
let playerCards = [];
let suits = ['♠', '♣', '♥', '♦'];
let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function initializeDeck(deck) {
  for (let idx = 0; idx < suits.length; idx++) {
    cards.forEach(card => deck.push(card + suits[idx]));
  }
  return deck;
}

initializeDeck(deck);

function shuffle(array = []) {
  for (let index = deck.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    array.push(deck.splice(randomIndex, 1).toString());
  }
  deck = array;
}

shuffle();

console.log(deck);

function dealTwo(deck, playerCards) {
  for (let idx = 0; idx < 2; idx++) {
    playerCards.push(deck.splice(0, 1).toString());
  }
}

dealTwo(deck, playerCards);