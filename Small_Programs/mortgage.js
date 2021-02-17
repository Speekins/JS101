//1. Ask user preferred language
//2. Welcome user
//3. Ask for the loan amount
//4. Ask for the interest rate (number only)
//5. Ask for term in months
//6. Write function for loan calculation
//7. Apply given arguments to function
//8. Return monthly payment;

let rdline = require('readline-sync');
let message = require('./mortgage_messages.json');
let language;

function prompt(reply) {
  console.log(`\n=> ${message[language][reply]}\n`);
}

function langSelect() {
  console.log(message["langChoice"]);
  let choice = rdline.question().toLowerCase();
  while (!['es', 'en'].includes(choice)) {
    console.log(message["valLang"]);
    choice = rdline.question().toLowerCase();
  }
  language = choice;
}

function valAmnt(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0) {
    prompt("invalAmnt");
    number = rdline.question();
  }
  return number;
}

function valNum(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    prompt("invalNum");
    number = rdline.question();
  }
  return number;
}

function validRepeat(response) {
  while (!['y', 'n', 's'].includes(response)) {
    prompt("validRepeat");
    response = rdline.question().toLowerCase();
  }
  return response;
}

function monthly(loan, rate, time) {
  let payment;
  if (Number(rate) === 0) {
    payment = loan / time;
  } else {
    payment = loan * ((rate * .01 / 12) /
      (1 - Math.pow((1 + (rate * .01 / 12)), (-time))));
  }
  return payment.toFixed(2);
}

langSelect();

prompt("welcome");

while (true) {
  prompt("lnAmnt");
  let lnAmnt = valAmnt(rdline.question());

  prompt("intRt");
  let intRt = valNum(rdline.question());

  prompt("duration");
  let duration = valNum(rdline.question());

  let amount = monthly(lnAmnt, intRt, duration);

  console.log(message[language]["total"] + `${amount}` + ".");

  prompt("repeat");
  let redo = validRepeat(rdline.question().toLowerCase());
  if (redo === 'n') {
    prompt("break");
    break;
  }
}

