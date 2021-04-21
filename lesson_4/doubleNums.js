//Write a function that mutates an array by doubling each of its elements.

function doubleNumbers(array) {
  for (let idx = 0; idx < array.length; idx++) {
    array[idx] = array[idx] * 2;
  }
  return array;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]