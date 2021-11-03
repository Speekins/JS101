const WINNING_COMBOS = [
  [1, 2, 3], [4, 5, 6],
  [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const rdln = require('readline-sync');
const INITIAL_MARKER = ' ';
const MIDDLE_SQUARE = 5;
const MAX_WINS = 5;
let playerMarker;
let computerMarker;
let board;
let currentPlayer;
let playerMatchTotal = 0;
let computerMatchTotal = 0;
let totalGames = 0;


function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } else { return 'player' }
}

function attackSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === computerMarker).length === 2) {
    let openSpot = line.find(square => board[square] === INITIAL_MARKER);
    if (openSpot !== undefined) {
      return openSpot;
    }
  }
  return null;
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function computerChoosesSquare(board) {
  let square;
  square = computerStrategyMoves(board);
  if (!square) {
    if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
      square = MIDDLE_SQUARE;
    } else {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
      square = emptySquares(board)[randomIndex];
    }
  }
  board[square] = computerMarker;
}

function computerStrategyMoves(board) {
  let square;
  for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
    let line = WINNING_COMBOS[idx];
    if (attackSquare(line, board)) {
      square = attackSquare(line, board);
      break;
    } else if (findAtRiskSquare(line, board)) {
      square = findAtRiskSquare(line, board);
      break;
    }
  }
  return square;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    return computerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    return playerChoosesSquare(board);
  }
  return null;
}

function decideWinner(board) {
  for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[idx];
    if (
      board[sq1] === playerMarker &&
      board[sq2] === playerMarker &&
      board[sq3] === playerMarker
    ) {
      return 'Player';
    } else if (
      board[sq1] === computerMarker &&
      board[sq2] === computerMarker &&
      board[sq3] === computerMarker
    ) {
      return 'Computer';
    }
  }
  return null;
}

function displayBoard() {
  console.clear();

  console.log(`You are ${playerMarker}. Computer is ${computerMarker}`);

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

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === playerMarker).length === 2) {
    let openSpot = line.find(square => board[square] === INITIAL_MARKER);
    if (openSpot !== undefined) {
      return openSpot;
    }
  }
  return null;
}

function initializeBoard(board) {
  board = {};
  for (let idx = 1; idx <= 9; idx++) {
    board[idx] = INITIAL_MARKER;
  }
  return board;
}

function joinOr(array, delimiter = ', ', final = 'or') {
  if (array.length === 0 || array.length === 1) return array.join();
  if (array.length === 2) {
    return `${array[0]} ${final} ${array[1]}`;
  }
  return array.slice(0, array.length - 1).join(delimiter) +
    " " + final + " " + array.slice(array.length - 1);
}

function markerSelection(response) {
  prompt(`Please select your game symbol: 'X' or 'O'.`);
  response = rdln.question().trim().toUpperCase();
  while (true) {
    if (response === 'X') {
      playerMarker = 'X';
      computerMarker = 'O';
      break;
    } else if (response === 'O') {
      playerMarker = 'O';
      computerMarker = 'X';
      break;
    } else {
      prompt(`That is not a valid response. Please select either 'X' or 'O' as your symbol.`);
      response = rdln.question().trim().toUpperCase();
    }
  }
  return response;
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Select an open square: ${joinOr(emptySquares(board))}`);
    square = rdln.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt('Please select a valid square');
  }
  board[square] = playerMarker;
}

function prompt(message) {
  console.log(`\n=> ${message}\n`);
}

function randomizeFirstToPlay() {
  let number = Math.round(Math.random());

  if (number === 1) {
    currentPlayer = 'player';
  } else { currentPlayer = 'computer' }
}

function resetTotals() {
  playerMatchTotal = 0;
  computerMatchTotal = 0;
  totalGames = 0;
}

function someoneWon(board) {
  return !!decideWinner(board);
}

function validContinue(text) {
  let response;
  while (true) {
    prompt(text);
    response = rdln.question().trim().toLowerCase();
    if (response === 'c') break;
    prompt(`Invalid response. To continue, hit "C".`);
  }
}

function validReplay() {
  let response;
  while (true) {
    prompt(`Would you like to play another round? If so, hit 'Y'. Otherwise, hit 'N'.`);
    response = rdln.question().trim().toLowerCase();
    if (response === 'y') {
      resetTotals();
      break;
    }
    if (response === 'n') {
      prompt(`Thanks for playing! Bye!`);
      break;
    }
    prompt(`That is an invalid response. Please type 'Y' to play again, or 'N' to quit.`);
  }
  return response;
}

console.clear();
console.log(`\n${'*'.repeat(23)}\nWelcome to Tic-Tac-Toe!\n${'*'.repeat(23)}\n`);
markerSelection();
prompt(`You have been assigned ${playerMarker}. The computer will play using ${computerMarker}.\n 
For each game, it will be randomized who has the first move.\n
The first to win 5 games will be declared the ultimate winner!`);
validContinue(`When ready, please type "C" and the game will begin.`);

while (true) {

  board = initializeBoard();
  randomizeFirstToPlay();

  while (true) {

    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardIsFull(board)) break;
  }

  displayBoard(board);

  if (boardIsFull(board)) {
    prompt(`It's a tie!`);
  }
  if (someoneWon(board)) {
    prompt(`${decideWinner(board)} has won!`);
    totalGames += 1;
  }

  if (decideWinner(board) === 'Player') playerMatchTotal += 1;
  if (decideWinner(board) === 'Computer') computerMatchTotal += 1;

  if (totalGames < MAX_WINS) {
    prompt(`You have won ${playerMatchTotal} game(s). Computer has won ${computerMatchTotal} game(s).`);
    validContinue('In order to continue, type "C"');
  }

  if (playerMatchTotal === MAX_WINS) {
    prompt(`Congratulations! You were first to win 5 games!`);
    if (validReplay() === 'n') break;
  } else if (computerMatchTotal === MAX_WINS) {
    prompt(`You've been outmatched! Computer was first to 5 games won. Better luck next time!`);
    if (validReplay() === 'n') break;
  }
}