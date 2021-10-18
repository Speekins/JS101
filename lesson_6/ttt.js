// eslint-disable-next-line max-len
const WINNING_COMBOS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
const rdln = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
let board;
let currentPlayer;
let playerMatchTotal = 0;
let computerMatchTotal = 0;
let totalGames = 0;




function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } else { return 'player' };
}

function attackSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === COMPUTER_MARKER).length === 2) {
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

  for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
    let line = WINNING_COMBOS[idx];
    square = attackSquare(line, board);
    if (square) break;
  }

  if (!square) {
    for (let idx = 0; idx < WINNING_COMBOS.length; idx++) {
      let line = WINNING_COMBOS[idx];
      square = findAtRiskSquare(line, board);
      if (square) break;
    }
  }

  if (!square) {
    if (board[5] === INITIAL_MARKER) {
      square = 5;
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    return computerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    return playerChoosesSquare(board);
  }
}

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
  return null;
}

function displayBoard() {
  console.clear();

  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);

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

  if (markersInLine.filter(val => val === PLAYER_MARKER).length === 2) {
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

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Select an open square: ${joinOr(emptySquares(board))}`);
    square = rdln.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt('Please select a valid square');
  }
  board[square] = PLAYER_MARKER;
}

function prompt(message) {
  console.log(`=> ${message}`);
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

function validContinue() {
  let response;
  while (true) {
    prompt('To continue, hit "C".');
    response = rdln.question().trim().toLowerCase();
    if (response === 'c') break;
    prompt(`Invalid response. To continue, hit 'C'.`)
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
    prompt(`That is an invalid response. Please type 'Y' to play again, or 'N' to quit.`)
  }
  return response;
}




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
    prompt(`It's a tie!`)
  }
  if (someoneWon(board)) {
    prompt(`${decideWinner(board)} has won!`);
    totalGames += 1;
  }

  if (decideWinner(board) === 'Player') playerMatchTotal += 1;
  if (decideWinner(board) === 'Computer') computerMatchTotal += 1;

  if (totalGames < 5) {
    prompt(`You have won ${playerMatchTotal} game(s). Computer has won ${computerMatchTotal} game(s).`);
    validContinue();
  }

  if (playerMatchTotal === 5) {
    prompt(`Congratulations! You were first to 5 games won!`);
    if (validReplay() === 'n') break;
  } else if (computerMatchTotal === 5) {
    prompt(`You've been outmatched! Computer was first to 5 games won. Better luck next time!`);
    if (validReplay() === 'n') break;
  }
}