//Write a function that takes no arguments and returns a string that contains a UUID.

function createUUID() {
  let UUID = '';
  let characters = 'abcdef0123456789';
  let idxPos = [8, 13, 18, 23];
  let charLength = characters.length;
  for (let idx = 0; idx < 36; idx++) {
    if (idxPos.includes(idx)) {
      UUID += '-';
      continue;
    }
    UUID += (characters.charAt(Math.floor(Math.random() * charLength)));
  }
  return UUID;
}

console.log(createUUID());
console.log(createUUID());
console.log(createUUID());