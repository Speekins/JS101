//1. Welcome user
//2. Ask for the loan amount
//3. Ask for the interest rate (number only)
//4. Ask for term in months
//5. Write function for loan calculation
//6. Apply given arguments to function
//7. Return monthly payment;

let rdline = require('readline-sync');
let message = require('./mortgage_messages.json');

function langSelect(response) {
  let choice;
  if (response === 'ES') {
    choice = 'ES';
  } else {
    choice = 'EN';
  }
  return choice;
}

function valNum(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    console.log(message["invalNum"]);
    number = rdline.question();
  }
  return number;
}

function validRepeat(response) {
  while (!['y', 'n', 's'].includes(response)) {
    console.log(message["validRepeat"]);
    response = rdline.question().toLowerCase();
  }
  return response;
}
console.log(message["language"]);
let language = langSelect(rdline.question().toUpperCase());

console.log(message[language]["welcome"]);

while (true) {
  console.log(message[language]["lnAmnt"]);
  let lnAmnt = valNum(rdline.question());

  console.log(message[language]["intRt"]);
  let intRt = valNum(rdline.question());

  console.log(message[language]["duration"]);
  let duration = valNum(rdline.question());

  let payment = lnAmnt *
    ((intRt * .01 / 12) /
      (1 - Math.pow((1 + (intRt * .01 / 12)), (-duration))));

  let amount = payment.toFixed(2);
  console.log(message[language]["total"] + `${amount}` + ".");

  console.log(message[language]["repeat"]);
  let redo = validRepeat(rdline.question().toLowerCase());
  if (redo === 'n') {
    break;
  }
}

