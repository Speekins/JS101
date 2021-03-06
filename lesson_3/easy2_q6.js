let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

//Create a new array that contains all of the above values, but in an un-nested format:

//Expected Output: [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

/*let newFlintstones = flintstones.concat(flintstones[2], flintstones[3]);

newFlintstones.splice(2, 2);

console.log(newFlintstones);*/

//ANSWER:

flintstones = [].concat(...flintstones);