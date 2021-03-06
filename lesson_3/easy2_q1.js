//Given a string, return a new string that replaces every occurrence of the word "important" with "urgent"

let advice = "Few things in life are as important as house training your pet dinosaur.";
let quote = "It has long been an axiom of mine that the little things are infinitely the most important.";
let tooMany = `It's important to look important and act important and fake like you're important.`;

//let newAdvice = advice.replace('important', 'urgent');

//console.log(newAdvice);

function replace(string) {
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'important') {
      arr.splice(i, 1, 'urgent');
    } else if (arr[i] === 'important.') {
      arr.splice(i, 1, 'urgent.');
    }
  }
  return arr.join(' ');
}

console.log(replace(advice));
console.log(replace(quote));
console.log(replace(tooMany));


