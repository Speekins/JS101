//Welcome user
//Ask user for first number
//Ask user for second number
//Ask user for desired operation
//Perform operation on the two numbers
//Print result to console


const rdline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNum(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to THE CALCULATOR!');
while (true) {
  prompt('What is the first number?');
  let number1 = rdline.question();

  while (invalidNum(number1)) {
    prompt('Hmm... that does not appear to be a number.');
    number1 = rdline.question();
  }

  prompt('What is the second number?');
  let number2 = rdline.question();

  while (invalidNum(number2)) {
    prompt('Hmm... that does not appear to be a number.');
    number2 = rdline.question();
  }

  prompt(`${number1} and ${number2}`);

  prompt('What is your desired operation?\n1) Add 2) Subtract 3) Multiply 4) Divide 5) Remainder');
  let operation = rdline.question();

  while (!['1', '2', '3', '4', '5'].includes(operation)) {
    prompt('Please choose a valid operation 1 through 5');
    operation = rdline.question();
  }

  let result;
  switch (operation) {
    case '1':
      result = Number(number1) + Number(number2);
      break;
    case '2':
      result = Number(number1) - Number(number2);
      break;
    case '3':
      result = Number(number1) * Number(number2);
      break;
    case '4':
      result = Number(number1) / Number(number2);
      break;
    case '5':
      result = Number(number1) % Number(number2);
      break;
  }

  prompt(`The result of the operation is ${result}.`);

  prompt(`Would you like to perform another calculation? (y/n)`);
  let response = rdline.question();
  if (response[0].toLowerCase() === 'n') break;

  while (!['y', 'Y', 'yes', 'YES'].includes(response)) {
    prompt(`Please enter a valid input`);
    response = rdline.question();
  }
}