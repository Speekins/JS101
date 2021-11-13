//1. Initialize the card deck.
//2. Deal cards to player and dealer.
//3. Player turn: hit or stay. (Repeat this step until bust or stay)
//4. If player busts, dealer wins.
//5. Dealer turn: hit or stay. (Repeat until total >= 17)
//6. If dealer busts, player wins.
//7. Compare cards and declare winner.
const rdln = require('readline-sync');
let deck = [];
let playerCards = [];
let playerCardValues = [];
let playerHandTotal;
let dealerCards = [];
let dealerCardValues = [];
let dealerHandTotal;
let suits = ['♠', '♣', '♥', '♦'];
let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
let honors = ['J', 'Q', 'K', 'A'];

function prompt(message) {
  console.log(`=>${message}`);
}

function initializeDeck(deck) {
  for (let idx = 0; idx < suits.length; idx++) {
    cards.forEach(card => deck.push(card + suits[idx]));
    honors.forEach(honor => deck.push(honor + suits[idx]));
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

function validResponse() {
  let response;
  while (true) {
    prompt(`Would you like to hit? If so, press 'Y'. If not, press 'N'.`);
    response = rdln.question().trim().toUpperCase();
    if (response === 'Y' || response === 'N') break;
    prompt(`That is not a valid response.`);
  }
  return response;
}

shuffle();

function dealTwo(deck, playerCards, dealerCards) {
  for (let idx = 0; idx < 2; idx++) {
    playerCards.push(deck.splice(0, 1).toString());
    dealerCards.push(deck.splice(0, 1).toString());
  }
}
console.log(deck);
dealTwo(deck, playerCards, dealerCards);

function calculatePlayerCardValues(hand) {
  playerCardValues = hand
    .map(hand => {
      if (honors.includes(hand[0]) && hand[0] !== 'A') {
        return 10;
      } else if (hand[0] === 'A') {
        return 11;
      } else { return parseFloat(hand) }
    });
}


function calculateTotal(values) {
  let grandTotal = values.reduce((accumulator, number) => accumulator + number);

  return calculateAces(grandTotal);
}

function calculateAces(grandTotal) {
  if (grandTotal > 21 && playerCards.map(card => card[0]).includes('A')) {
    playerCardValues = playerCardValues.map(num => {
      if (num === 11) {
        return 1;
      } else { return num }
    });
    calculateTotal(playerCardValues);
  }
  return grandTotal;
}

function dealOne(deck, cards) {
  cards.push(deck.shift());
}

calculatePlayerCardValues(playerCards);
calculateTotal(playerCardValues);

prompt(`Your cards are ${playerCards} your card values are ${playerCardValues} and your total is ${calculateTotal(playerCardValues)}`);
prompt(`The dealer's visible card is ${dealerCards[1]}.`);

while (true) {

  if (validResponse() === 'Y') {
    dealOne(deck, playerCards);
    dealOne(deck, dealerCards);
    calculatePlayerCardValues(playerCards);
    calculatePlayerCardValues(dealerCards);
  } else { break }

  prompt(`Your cards are ${playerCards}. Your card values are ${playerCardValues}.
 Your total is ${calculateTotal(playerCardValues)}`);
}

while (calculateTotal(dealerCardValues) < 17) {
  dealOne(deck, dealerCards);
  calculatePlayerCardValues(dealerCards);
  calculateTotal(dealerCards);
}

prompt(`Your cards are ${playerCards} and your total adds up to ${calculatePlayerCardValues(playerCardValues)}`);
prompt(`Dealer's cards are ${dealerCards} totaling up to ${calculatePlayerCardValues(dealerCards)}`);

//determineWinner(playerHandTotal, dealerHandTotal){}
//announceWinner(playerHandTotal, dealerHandTotal){}