/*sort the array so that the sub-arrays are ordered based
on the sum of the odd numbers that they contain.*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
//Expected output: [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let sortByOdds = arr.sort((a, b) => {
  let oddA = a.filter(num => num % 2 === 1)
    .reduce((accum, val) => accum + val);
  let oddB = b.filter(num => num % 2 === 1)
    .reduce((accum, val) => accum + val);
  return oddA - oddB;
});

console.log(sortByOdds);