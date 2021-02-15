//1. Welcome user
//2. Ask for the loan amount
//3. Ask for the interest rate (number only)
//4. Ask for term in months
//5. Write function for loan calculation
//6. Apply given arguments to function
//7. Return monthly payment;

let rdline = require('readline-sync');

console.log('Welcome to the Loan Calculator!');

console.log('What is the loan amount?');
let lnAmnt = Number(rdline.question());

console.log('What is the interest rate?');
let intRt = rdline.question() * .01 / 12;
while ((Number.isNaN(Number(intRt))) || (intRt.typeOf === 'string')) {
  console.log(`Please enter a valid integer and exlude symbols.`);
  intRt = rdline.question() * .01 / 12;
}

console.log('What is the duration of the loan in months?');
let duration = Number(rdline.question());

let payment = lnAmnt * (intRt / (1 - Math.pow((1 + intRt), (-duration))));
let amount = payment.toFixed(2);
console.log(`The total monthly payment is $${amount}`);

