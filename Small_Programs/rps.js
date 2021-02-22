const rdln = require('readline-sync');
const RPS = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

console.clear();

let computerWins = [];
let userWins = [];
let ties = [];

function prompt(message) {
  console.log(`=> ${message}`);
}

function compChoice() {
  let random = Math.floor(Math.random() * 5);
  switch (true) {
    case random === 0:
      return RPS[0];
    case random === 1:
      return RPS[1];
    case random === 2:
      return RPS[2];
    case random === 3:
      return RPS[3];
    case random === 4:
      return RPS[4];
  }
}

function displayWinner(choice, comp) {
  if ((choice === 'rock' && (comp === 'scissors' || comp === 'lizard')) ||
    (choice === 'paper' && (comp === 'rock' || comp === 'spock')) ||
    (choice === 'scissors' && (comp === 'paper' || comp === 'lizard')) ||
    (choice === 'spock' && (comp === 'rock' || comp === 'scissors')) ||
    (choice === 'lizard' && (comp === 'paper' || comp === 'spock'))) {
    let userWin = 1;
    return userWin;
  } else if (choice === comp) {
    prompt(`It's a tie! How boring...`);
  } else {
    let compWin = 2;
    return compWin;
  }
}

function validRepeat(reply) {
  while (!['n', 'y', 'no', 'yes'].includes(reply)) {
    prompt('Please enter a valid response - y or n');
    reply = rdln.question().toLowerCase();
  }
  return reply;
}

while (true) {
  console.clear();
  for (let counter = 1; counter < 6; counter++) {

    prompt(`Choose one: ${RPS.join(', ')}`);
    let choice = rdln.question();

    while (!RPS.includes(choice)) {
      prompt('Please enter a valid response.');
      choice = rdln.question();
    }

    let comp = compChoice();

    prompt(`You chose ${choice}, computer chose ${comp}`);

    let result = displayWinner(choice, comp);

    if (result === 1) {
      userWins.push(1);
    } else if (result === 2) {
      computerWins.push(1);
    } else {
      ties.push(1);
    }

    prompt(`Your score: ${userWins.length}. Computer score: ${computerWins.length}.`);

    if (userWins.length === 3) {
      prompt('Best of 5! You win!');
      break;
    } else if (computerWins.length === 3) {
      prompt('Best of 5! Computers wins!');
      break;
      // eslint-disable-next-line max-len
    } else if ((ties.length === 1 && (userWins.length === 2 && computerWins.length === 2)) ||
      (ties.length === 3 && (userWins.length === computerWins.length))) {
      prompt('This round is a tie :/');
      break;
    }
  }

  prompt(`Would you like to play another round? Hit y or n`);
  let again = validRepeat(rdln.question().toLowerCase());
  if (again[0] === 'n') {
    prompt('See ya!');
    break;
  } else if (again[0] === 'y') {
    computerWins = [];
    userWins = [];
    ties = [];
  }
}