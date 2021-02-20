const rdln = require('readline-sync');
const RPS = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function compChoice(number) {
  number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return RPS[0];
  } else if (number === 1) {
    return RPS[1];
  } else {
    return RPS[2];
  }
}

function validRepeat(reply) {
  while (!['n', 'y'].includes(reply)) {
    prompt('Please enter a valid response - y or n');
    reply = rdln.question().toLowerCase();
  }
  return reply;
}

while (true) {
  prompt(`Choose one: ${RPS.join(', ')}`);
  let choice = rdln.question();

  while (!RPS.includes(choice)) {
    prompt('Please enter a valid response.');
    choice = rdln.question();
  }

  let comp = compChoice();

  prompt(`You chose ${choice}, computer chose ${comp}`);

  if ((choice === 'rock' && comp === 'scissors') ||
    (choice === 'paper' && comp === 'rock') ||
    (choice === 'scissors' && comp === 'paper')) {
    prompt('You win!');
  }

  if ((choice === 'scissors' && comp === 'rock') ||
    (choice === 'rock' && comp === 'paper') ||
    (choice === 'paper' && comp === 'scissors')) {
    prompt('Computer wins!');
  }

  if (choice === comp) {
    prompt(`It's a tie! How boring...`);
  }

  prompt(`Would you like to play again? Hit y or n`);
  let again = validRepeat(rdln.question().toLowerCase());
  if (again === 'n') {
    prompt('See ya!');
    break;
  }
}