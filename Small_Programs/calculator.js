//Welcome user
//Ask user for first number
//Ask user for second number
//Ask user for desired operation
//Perform operation on the two numbers
//Print result to console

let json = require('./calculator_messages.json');
const rdline = require('readline-sync');
let language;

function languageChange() {
  console.log(json['Language']);
  let setLanguage = rdline.question().toLowerCase();
  while (!['en', 'es'].includes(setLanguage)) {
    console.log(json['validLanguage']);
    setLanguage = rdline.question().toLowerCase();
  }
  language = setLanguage;
}

function prompt(key) {
  let message = messages(key, language);
  console.log(`=> ${message}`);
}

function validNum(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    prompt('validNum');
    number = rdline.question();
  }
  return number;
}

function validOp(choice) {
  while (!['1', '2', '3', '4', '5'].includes(choice)) {
    prompt('validOp');
    choice = rdline.question();
  }
  return choice;
}

function validRepeat(choice) {
  while (!['y', 's', 'n'].includes(choice)) {
    prompt('validRepeat');
    choice = rdline.question().toLowerCase();
  }
  return choice;
}
function messages(message, lang = 'en') {
  return json[lang][message];
}

languageChange();

prompt('welcome');

while (true) {
  prompt('number1');
  let number1 = validNum(rdline.question());

  prompt('number2');
  let number2 = validNum(rdline.question());

  console.log(`${number1} & ${number2}.`);

  prompt('operation');
  let operation = validOp(rdline.question());

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

  console.log(`= ${result}`);

  prompt('repeat');
  let response = validRepeat(rdline.question().toLowerCase());
  if (response === 'n') {
    break;
  }
}