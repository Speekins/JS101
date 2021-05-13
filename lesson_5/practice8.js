/*Using the forEach method, write some code to output all vowels
from the strings in the arrays. Don't use a for or while loop.*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

let pulledVowels = Object.values(obj).flat().forEach(elem => {
  elem.split('').forEach(char => {
    if (vowels.includes(char.toLowerCase())) {
      console.log(char);
    }
  });
});

console.log(pulledVowels);