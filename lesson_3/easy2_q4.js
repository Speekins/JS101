/*Starting with the string below, show two different 
ways to put the expected "Four score and " in front of it.*/

//method 1

let famousWords = "seven years ago...";

let arr = famousWords.split(' ');

arr.splice(0, 0, 'Four', 'score', 'and');

console.log(arr.join(' '));

//method 2

console.log("Four score and" + " " + famousWords);

//method 3

console.log("Four score and ".concat(famousWords));