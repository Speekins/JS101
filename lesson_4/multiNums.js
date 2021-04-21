/*Expanding on the doubling function, write a new function that returns 
a new array by multiplying each of its elements by the number passed as 
an argument. This function should take two arguments, meaning you will 
need to include two parameters.*/

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiplyNumbers(array, number) {
  let multiplied = [];
  for (let idx = 0; idx < array.length; idx++) {
    multiplied.push(array[idx] * number);
  }
  return multiplied;
}

console.log(multiplyNumbers(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]