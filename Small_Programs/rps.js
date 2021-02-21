const rdln = require('readline-sync');
const RPS = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line consistent-return
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

// eslint-disable-next-line complexity
function displayWinner(choice, comp) {
  if ((choice === 'rock' && (comp === 'scissors' || comp === 'lizard')) ||
    (choice === 'paper' && (comp === 'rock' || comp === 'spock')) ||
    (choice === 'scissors' && (comp === 'paper' || comp === 'lizard')) ||
    (choice === 'spock' && (comp === 'rock' || comp === 'scissors')) ||
    (choice === 'lizard' && (comp === 'paper' || comp === 'spock'))) {
    prompt('You win!');
  } else if ((choice === 'scissors' && (comp === 'rock' || comp === 'spock')) ||
    (choice === 'rock' && (comp === 'paper' || comp === 'spock')) ||
    (choice === 'paper' && (comp === 'scissors' || comp === 'lizard')) ||
    (choice === 'spock' && (comp === 'paper' || comp === 'lizard')) ||
    (choice === 'lizard' && (comp === 'scissors' || comp === 'rock'))) {
    prompt('Computer wins!');
  } else {
    prompt(`It's a tie! How boring...`);
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
  prompt(`Choose one: ${RPS.join(', ')}`);
  let choice = rdln.question();

  while (!RPS.includes(choice)) {
    prompt('Please enter a valid response.');
    choice = rdln.question();
  }

  let comp = compChoice();

  prompt(`You chose ${choice}, computer chose ${comp}`);

  displayWinner(choice, comp);

  prompt(`Would you like to play again? Hit y or n`);
  let again = validRepeat(rdln.question().toLowerCase());
  if (again[0] === 'n') {
    prompt('See ya!');
    break;
  }
}