//How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

//Solution #1:
console.log(words.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (b.length > a.length) {
    return -1;
  } else {
    return 0;
  }
}));

//Solution #2:
words.sort((a, b) => a.length - b.length);