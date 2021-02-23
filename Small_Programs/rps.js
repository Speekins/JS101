const rdln = require('readline-sync');
const RPS = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const matchWin = 5;

let computerWins = 0;
let userWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function validChoice(choice) {
  while (!RPS.includes(choice)) {
    prompt('Please enter a valid response.');
    choice = rdln.question().toLowerCase();
  }
  return choice;
}

function compChoice() {
  let random = Math.floor(Math.random() * 5);
  return RPS[random];
}

function decideWinner(choice, comp) {
  if ((choice === 'rock' && (comp === 'scissors' || comp === 'lizard')) ||
    (choice === 'paper' && (comp === 'rock' || comp === 'spock')) ||
    (choice === 'scissors' && (comp === 'paper' || comp === 'lizard')) ||
    (choice === 'spock' && (comp === 'rock' || comp === 'scissors')) ||
    (choice === 'lizard' && (comp === 'paper' || comp === 'spock'))) {
    return 'userWin';
  } else if (choice === comp) {
    return 'tie';
  } else {
    return 'compWin';
  }
}


function displayWinner(result) {
  if (result === 'userWin') {
    prompt(`That's a W for you!`);
  } else if (result === 'compWin') {
    prompt(`Here's your L.`);
  } else if (result === 'tie') {
    prompt(`It's a tie! How boring...`);
  }
}

function scoreKeeper(result) {
  if (result === 'userWin' && userWins < matchWin) {
    userWins++;
  } else if (result === 'compWin' && computerWins < matchWin) {
    computerWins++;
  }
}

function grandChampion() {
  if (userWins === matchWin) {
    prompt('First to 5! You are the grand champion!');
    return true;
  } else if (computerWins === matchWin) {
    prompt('First to 5! Computer wins!');
    return true;
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
  prompt(`Welcome to ROCK/PAPER/SCISSORS/SPOCK/LIZARD\nWhoever (you or the computer) is first to 5 total wins is the GRAND CHAMPION!\n`);
  while (true) {
    prompt(`Choose one: ${RPS.join(', ')}`);
    let choice = validChoice(rdln.question().toLowerCase());

    let comp = compChoice();

    prompt(`You chose ${choice}, computer chose ${comp}`);

    let result = decideWinner(choice, comp);

    displayWinner(result);

    scoreKeeper(result);

    prompt(`Your score: ${userWins}. Computer score: ${computerWins}.`);

    if (grandChampion() === true) {
      break;
    }
  }
  prompt(`Would you like to play another round? Hit y or n`);
  let again = validRepeat(rdln.question().toLowerCase());
  if (again[0] === 'n') {
    prompt('See ya!');
    console.clear();
    break;
  } else if (again[0] === 'y') {
    computerWins = 0;
    userWins = 0;
    console.clear();
  }
}