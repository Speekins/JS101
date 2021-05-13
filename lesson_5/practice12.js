/*Given the following data structure, use a combination of methods,
including filter, to return a new array identical in structure to
the original, but containing only the numbers that are multiples of 3.*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

function multiples(array) {
  return array.map(elem => {
    return elem.filter(number => {
      if (number % 3 === 0) {
        return number;
      }
    });
  });
}

console.log(multiples(arr));