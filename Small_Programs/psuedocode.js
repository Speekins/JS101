//1)a function that returns the sum of two numbers
//2)a function that takes an array of strings, and returns a string that is all those strings concatenated together
//3)a function that takes an array of integers, and returns a new array with every other element

/*1)
START

SET function named 'sum'
Give function 'sum' parameters 'a' & 'b'

Function 'sum' code block should execute param 'a' + param 'b'
return

PRINT sum with desired arguments (i.e. 2 & 4) - expected output is 6

END*/

/*2)
START

SET stringArray = [a set of strings];

SET function named 'combine'
Give function 'combine' parameter of 'array'
Function 'combine' code block should return array.join('')

Call function 'combine' with argument of 'stringArray'

RETURN 'combine'*/

/*3)
START

SET numbers = [set of numbers]
SET empty = []
SET iterator = 0

SET function 'everyOther'
Give function 'everyOther' parameter of 'array'
Function 'everyother' code block should return the following:
WHILE iterator <= length of numbers
IF numbers[iterator] is an odd array Element
Push that array element to empty[]

iterator = iterator + 1

PRINT empty

END*/

//)3 Attempt

let numbers = [1, 2, 3, 4, 5, 6, 7];

let empty = [];

let iterator = 0;

function everyOther(array) {
  while (iterator <= array.length) {
    if ((array[iterator] % 2) === 1) {
      empty.push(array[iterator]);
    }
    iterator += 1;
  }
}

everyOther(numbers);

console.log(empty);