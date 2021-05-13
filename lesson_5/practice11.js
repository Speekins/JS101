/*Given the following data structure, use the map method to
return a new array identical in structure to the original but,
with each number incremented by 1. Do not modify the original data structure.*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr.map(obj => {
  let incremented = {};
  for (let item in obj) {
    incremented[item] = obj[item] + 1;
  }
  return incremented;
}));

console.log(arr);