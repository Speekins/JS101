//1. Welcome user
//2. Ask for the loan amount
//3. Ask for the interest rate (number only)
//4. Ask for term in months
//5. Write function for loan calculation
//6. Apply given arguments to function
//7. Return monthly payment;

let rdline = require('readline-sync');
let message = require('./mortgage_messages.json');

function valNum(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    console.log(message["invalNum"]);
    number = rdline.question();
  }
  return number;
}

function validRepeat(response) {
  while (!['y', 'n'].includes(response.toLowerCase())) {
    console.log('Please enter a valid response - y or n.');
    response = rdline.question();
  }
  return response;
}

console.log(message["welcome"]);

while (true) {
  console.log(message["lnAmnt"]);
  let lnAmnt = valNum(rdline.question());

  console.log(message["intRt"]);
  let intRt = valNum(rdline.question());

  console.log(message["duration"]);
  let duration = valNum(rdline.question());

  let payment = lnAmnt * ((intRt * .01 / 12) / (1 - Math.pow((1 + (intRt * .01 / 12)), (-duration))));

  let amount = payment.toFixed(2);
  console.log(message["total"] + `${amount}` + ".");

  console.log(message["repeat"]);
  let redo = validRepeat(rdline.question().toLowerCase());
  if (redo === 'n') {
    break;
  }
}

