/*Given the following data structure, return a new array with
the same structure, but with the subarrays ordered -- alphabetically
or numerically as appropriate -- in ascending order.*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr.map(subarr => {
  if (typeof subarr[0] === "string") {
    return subarr.slice().sort();
  } else {
    return subarr.slice().sort((a, b) => a - b);
  }
}));

console.log(arr);