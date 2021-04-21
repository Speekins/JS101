/*Suppose we wanted to transform the numbers based on their position
in the array rather than their value? Try coding a solution that
doubles the numbers that have odd indices:*/

let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleByIndex(array) {
  let doubled = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (idx % 2 === 1) {
      doubled.push(array[idx] * 2);
    } else {
      doubled.push(array[idx]);
    }
  }
  return doubled;
}

console.log(doubleByIndex(myNumbers));
console.log(myNumbers);