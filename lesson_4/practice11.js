//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

//Expected output: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

function countLetters(string) {
  let arr = string.split('').filter(letter => letter !== ' ');
  let totals = {};
  for (let idx = 0; idx < arr.length; idx++) {
    totals[arr[idx]] = totals[arr[idx]] || 0;
    totals[arr[idx]] += 1;
  }
  return totals;
}

console.log(countLetters(statement));