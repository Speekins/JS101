const rdln = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_COMBOS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
[2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 5, 9]];
let playerWins = 0;
let compWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  prompt(`You have won ${playerWins} game(s). Computer has won ${compWins} game(s).`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let idx = 1; idx <= 9; idx++) {
    board[idx] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(object) {
  return Object.keys(object).filter(key => object[key] === INITIAL_MARKER);
}

function joinOr(array, delimiter = ', ', final = 'or') {
  if (array.length === 1) return array.join();
  if (array.length === 2) {
    return `${array[0]} ${final} ${array[1]}`;
  }
  return array.slice(0, array.length - 1).join(delimiter) +
    " " + final + " " + array.slice(array.length - 1);
}

function playerChoosesSquare(board) {
  prompt(`Select a square (${joinOr(emptySquares(board))})`);
  let response = rdln.question();
  while (true) {
    if (emptySquares(board).includes(response)) {
      board[response] = PLAYER_MARKER;
      break;
    } else {
      prompt(`Invalid response. Select a square (${joinOr(emptySquares(board))})`);
      response = rdln.question();
    }
  }
}

function computerChoosesSquare(board) {
  let random = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[random];

  board[square] = COMPUTER_MARKER;
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

// eslint-disable-next-line max-lines-per-function
function decideWinner(board) {

  for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[idx];
    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return false;
}

function scoreKeeper(board) {
  if (decideWinner(board) === 'Player') playerWins += 1;
  if (decideWinner(board) === 'Computer') compWins += 1;
}

function advance() {
  if (playerWins === 5 || compWins === 5) return false;
  prompt(`When ready for next game hit 'c'.`);
  let response = validNextGame(rdln.question().toLowerCase());
  return response;
}

function decideGrandChampion() {
  if (playerWins === 5) {
    prompt(`Game. Set. Match. You are the grand champion!`);
  } else if (compWins === 5) {
    prompt(`Computer is the grand champion!`);
  }
}

function validRepeat(response) {
  if (response !== 'y' && response !== 'n') {
    prompt(`Please enter a valid response. y or n`);
    response = validRepeat(rdln.question().toLowerCase());
  }
  return response;
}

function validNextGame(response) {
  if (response !== 'c') {
    prompt(`Please enter 'c' when ready to continue.`);
    response = validNextGame(rdln.question().toLowerCase());
  }
  return response;
}

while (true) {

  while (playerWins < 5 && compWins < 5) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (decideWinner(board) || boardIsFull(board)) break;

      computerChoosesSquare(board);
      if (decideWinner(board) || boardIsFull(board)) break;
    }

    if (decideWinner(board)) {
      prompt(`${decideWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    scoreKeeper(board);

    displayBoard(board);

    if (advance()) continue;
  }

  decideGrandChampion();

  prompt(`Would you like to play another round? y/n`);
  let response = validRepeat(rdln.question().toLowerCase());

  if (response === 'y') {
    playerWins = 0;
    compWins = 0;
  }
  if (response === 'n') break;

}