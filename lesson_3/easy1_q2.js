//How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function lastChar(str) {
  return ((str.charAt(str.length - 1) === '!') ? 'yes' : 'no');
}

console.log(lastChar(str1));
console.log(lastChar(str2));

str1.endsWith('!');
str2.endsWith('!');