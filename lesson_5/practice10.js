/*Perform the same transformation of sorting the subarrays we did in the
previous exercise with one difference; sort the elements in descending order.*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr.map(subarr => {
  if (typeof subarr[0] === "string") {
    return subarr.slice().sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return subarr.slice().sort((a, b) => b - a);
  }
}));

console.log(arr);