/*Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each 
line indented 1 space to the right of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...*/

let words = 'The Flintstones Rock!';

function log(statement) {
  let count = 0;
  while (count <= 10) {
    console.log(statement.padStart(statement.length + count));
    count++;
  }
}

log(words);

/*Solution:
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}*/