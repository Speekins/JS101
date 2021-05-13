//Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

//Solution #1:
function maleAgeTotal(obj) {
  let total = 0;
  for (let person in obj) {
    if (obj[person]['gender'] === 'male') {
      total += obj[person].age;
    }
  }
  return total;
}

console.log(maleAgeTotal(munsters));

//Solution #2:
let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});