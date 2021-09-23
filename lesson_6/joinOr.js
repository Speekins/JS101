console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

function joinOr(array, delimiter = ', ', final = 'or') {
  if (array === [] || array.length === 1) return array.join();
  if (array.length === 2) {
    return `${array[0]} ${final} ${array[1]}`;
  }
  return array.map(elem => {
    if (elem === array.length) {
      return final + " " + elem;
    } else {
      return elem + delimiter;
    }
  })
    .join('');
}

function joinOr1(array, delimiter = ', ', final = 'or') {
  if (array.length === 1) return array.join();
  if (array.length === 2) {
    return `${array[0]} ${final} ${array[1]}`;
  }
  return array.slice(0, array.length - 1).join(delimiter) +
    " " + final + " " + array.slice(array.length - 1);
}