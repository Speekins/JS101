/*write some code that returns an object where the key is the first
item in each subarray, and the value is the second.*/

let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//Solution #1:
console.log(Object.fromEntries(arr));

//A more drawn out solution:
let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});