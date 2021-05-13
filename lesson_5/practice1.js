/*How would you order the following array of number strings by 
descending numeric value (largest number value to smallest)?*/

let arr = ['10', '11', '9', '7', '8'];

let sorted = arr.sort((a, b) => {
  if (Number(a) > Number(b)) {
    return -1;
  } else if (Number(a) < Number(b)) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sorted);
sorted.forEach(elem => console.log(typeof (elem)));