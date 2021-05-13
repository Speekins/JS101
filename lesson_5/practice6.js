//Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};

function printDetails(obj) {
  return Object.entries(obj).forEach(elem => {
    let name = elem[0];
    let age = elem[1].age;
    let gender = elem[1].gender;
    console.log(`${name} is a ${age}-year-old ${gender}`);
  });
}

printDetails(munsters);

/* Expected output pattern:
(Name) is a (age)-year-old (male or female).*/