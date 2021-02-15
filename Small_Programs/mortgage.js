//1. Welcome user
//2. Ask for the loan amount
//3. Ask for the interest rate (number only)
//4. Ask for term in months
//5. Write function for loan calculation
//6. Apply given arguments to function
//7. Return monthly payment;

let rdline = require('readline-sync');

function valNum(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    console.log(`Please enter a valid integer.`);
    number = rdline.question();
  }
  return number;
}

console.log('Welcome to the Loan Calculator!');

console.log('What is the loan amount?');
let lnAmnt = rdline.question();
valNum(lnAmnt);

console.log('What is the interest rate?');
let intRt = rdline.question();
while (Number.isNaN(Number(intRt)) || intRt.trimStart() === '') {
  console.log(`Please enter a valid integer and exlude symbols.`);
  intRt = rdline.question();
}

console.log('What is the duration of the loan in months?');
let duration = rdline.question();
valNum(duration);

let payment = lnAmnt * ((intRt * .01 / 12) /
  (1 - Math.pow((1 + (intRt * .01 / 12)), (-duration))));

let amount = payment.toFixed(2);
console.log(`The total monthly payment is $${amount}`);

