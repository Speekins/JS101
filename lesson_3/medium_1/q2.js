/*Starting with the string below,
return a new string that swaps the case of all of the letters:*/
let munstersDescription = "The Munsters are creepy and spooky.";
//expected return: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`


let letters = munstersDescription.split('').map(function (char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

console.log(letters);
