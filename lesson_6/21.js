//1. Initialize the card deck.
//2. Deal cards to player and dealer.
//3. Player turn: hit or stay. (Repeat this step until bust or stay)
//4. If player busts, dealer wins.
//5. Dealer turn: hit or stay. (Repeat until total >= 17)
//6. If dealer busts, player wins.
//7. Compare cards and declare winner.
const rdln = require('readline-sync');
let deck = [];
let playerCards = ['AD', 'AH'];
let playerCardValues = [];
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
    if (rdln.question() === 'Y'.trim().toUpperCase() || rdln.question() === 'N'.trim().toUpperCase()) break;
    prompt(`That is not a valid response. Please press 'Y' or 'N'.`);
    response = rdln.question();
  }
  return response;
}

shuffle();

function dealTwo(deck, playerCards) {
  for (let idx = 0; idx < 2; idx++) {
    playerCards.push(deck.splice(0, 1).toString());
  }
}

//dealTwo(deck, playerCards);

//function calculatePlayerCardValues();

function calculateTotal(hand) {
  let convertedNums = [];
  hand.map(card => card[0])
    .forEach(num => {
      if (honors.includes(num) && num !== 'A') {
        convertedNums.push(10);
      } else if (num === 'A') {
        convertedNums.push(11);
      } else { convertedNums.push(parseInt(num)) }
    });
  let grandTotal = convertedNums.reduce((accumulator, number) => accumulator + number);

  return calculateAces(grandTotal);
};

function calculateAces(grandTotal) {
  if (grandTotal > 21 && playerCards.map(card => card[0]).includes('A')) {
    playerCards = playerCards.map(card => {
      if (card[0] === 'A') {
        return card = '1'
      } else { return card }
    })
    calculateTotal(playerCards);
  };
  return grandTotal;
}
console.log(calculateTotal(playerCards));
prompt(`Your cards are ${playerCards}, your card values are ${playerCardValues}, and your total is ${calculateTotal(playerCards)}`);
