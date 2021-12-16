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
let playerHandTotal = 0;
let dealerCards = [];
let dealerCardValues = [];
let dealerHandTotal = 0;
let suits = ['♠', '♣', '♥', '♦'];
let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
let honors = ['J', 'Q', 'K', 'A'];
let welcomeMessage = '***Welcome to the Game of 21***';

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

function shuffle(array = []) {
  for (let index = deck.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    array.push(deck.splice(randomIndex, 1).toString());
  }
  deck = array;
}

function validResponse(statement) {
  let response;
  while (true) {
    prompt(statement);
    response = rdln.question().trim().toUpperCase();
    if (response === 'Y' || response === 'N') break;
    prompt(`That is not a valid response.`);
  }
  return response;
}

function validContinue(statement) {
  let response;
  while (true) {
    prompt(statement);
    response = rdln.question().trim().toUpperCase();
    if (response === 'C') break;
    prompt(`That is not a valid response.`);
  }
  return response;
}

function validReplay(statement) {
  let response;
  while (true) {
    prompt(statement);
    response = rdln.question().trim().toUpperCase();
    if (response === 'Y' || response === 'N') break;
    prompt(`That is not a valid response.`);
  }
  return response;
}

function dealTwo(deck, playerCards, dealerCards) {
  for (let idx = 0; idx < 2; idx++) {
    playerCards.push(deck.splice(0, 1).toString());
    dealerCards.push(deck.splice(0, 1).toString());
  }
}

function calculateCardValues(hand) {
  let valueArray = hand.map(card => {
    if (honors.includes(card[0]) && card[0] !== 'A') {
      return 10;
    } else if (card[0] === 'A') {
      return 11;
    } else { return parseFloat(card) }
  });
  if (hand === playerCards) playerCardValues = valueArray;
  if (hand === dealerCards) dealerCardValues = valueArray;
  return undefined;
}

function calculateHandTotal(values) {
  let total = values.reduce((accumulator, number) => accumulator + number);

  if (values === playerCardValues) {
    playerHandTotal = calculateAces(values, total);
  } else { dealerHandTotal = calculateAces(values, total) }

  return total;
}

function clearTotalsForReplay() {
  deck = [];
  playerCards = [];
  playerCardValues = [];
  playerHandTotal = 0;
  dealerCards = [];
  dealerCardValues = [];
  dealerHandTotal = 0;
}

function calculateAces(values, total) {
  if (total > 21 && values.includes(11)) {
    let newValues = values.map(num => {
      if (num === 11) {
        return 1;
      } else { return num }
    })
    if (values === playerCardValues) {
      playerCardValues = newValues;
      return calculateHandTotal(playerCardValues);
    } else {
      dealerCardValues = newValues;
      return calculateHandTotal(dealerCardValues);
    }
  };
  return total;
}

function dealOne(deck, cards) {
  cards.push(deck.shift());
}

function announceWinner(playerHandTotal, dealerHandTotal) {
  console.clear();
  if (dealerHandTotal > 21) {
    return prompt(`Dealer busted! You win!`)
  }
  if (playerHandTotal > dealerHandTotal) {
    return prompt(`You win! Your cards ${playerCards} total ${playerHandTotal}. Dealer's cards ${dealerCards} total ${dealerHandTotal}.`)
  }
  if (dealerHandTotal > playerHandTotal) {
    return prompt(`The dealer won with ${dealerCards} totaling ${dealerHandTotal}. Your cards ${playerCards} total ${playerHandTotal}.`)
  }
}

do {
  console.clear();
  prompt(`***Welcome to THE GAME OF 21***\n\nThe player (you or dealer) who comes closest to 21, without exceeding 21, wins`);
  validContinue(`If you're ready to continue, type 'C'.`);

  initializeDeck(deck);
  shuffle();

  dealTwo(deck, playerCards, dealerCards);
  calculateCardValues(dealerCards);
  calculateCardValues(playerCards);
  calculateHandTotal(dealerCardValues);
  calculateHandTotal(playerCardValues);

  console.clear();
  prompt(`Your starting hand is ${playerCards} totaling ${playerHandTotal}. Dealer's visible card is ${dealerCards[0]}.`);

  do {
    if (validResponse(`Would you like to hit? If so, press 'Y'. If not, press 'N'.`) === 'Y') {
      console.clear();
      dealOne(deck, playerCards);
      calculateCardValues(playerCards);
      calculateHandTotal(playerCardValues);
      prompt(`Playerhand: ${playerCards} Player total: ${playerHandTotal} Dealer's hand: ${dealerCards[0]}.`);
    } else { break }
  } while (true && playerHandTotal <= 21);

  if (playerHandTotal > 21) {
    prompt('You busted! Game Over :(');
    break;
  }

  while (dealerHandTotal < 17 && !(dealerHandTotal > 21)) {
    if (dealerHandTotal > 17) break;
    dealOne(deck, dealerCards);
    calculateCardValues(dealerCards);
    calculateHandTotal(dealerCardValues);
  }
  announceWinner(playerHandTotal, dealerHandTotal);
  clearTotalsForReplay();
} while (validReplay(`Would you like to play again? Type 'Y' for 'Yes' or 'N' for 'No'.`) === 'Y');

console.clear()
prompt('Thanks for playing THE GAME OF 21');