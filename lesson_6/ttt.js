//Create Tic-Tac-Toe board
//Ask user for input (the user's initial symbol placement)
//Have computer randomize among the remaining quandrants and place accordingly
//Display the updated board
//If the board is not full (i.e. the game is not over) loop back to the start of the program
//Continue this process until there is a winner/loser or the game is tied
//Display the game results
//Ask the user if they would like to play again
//If so, start the program over. Otherwise, let the user know the program is concluded.

let rdln = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
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

  for (let square = 1; square <= 9; square++) {
    board[square] = ' ';
  }
  return board;
}

let board = initializeBoard();

function playerChoosesSquare(board) {
  let square;
  let emptySquares = Object.keys(board).filter(key => board[key] === ' ');
  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')}):`);
    square = rdln.question().trim();

    if (emptySquares.includes(square)) break;

    prompt('Please make a valid selection');
  }
  board[square] = 'X';
}

displayBoard(board);

playerChoosesSquare(board);

displayBoard(board);