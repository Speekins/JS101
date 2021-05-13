/*Given the following data structure write some code to return an
array containing the colors of the fruits and the sizes of the vegetables.
The sizes should be uppercase, and the colors should be capitalized.*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
//Expected output: [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

function logItems(object) {
  let details = [];
  for (let item in object) {
    if (object[item].type === 'fruit') {
      details.push(object[item].colors
        .map(elem => elem[0].toUpperCase() + elem.slice(1)));
    } else {
      details.push(object[item].size.toUpperCase());
    }
  }
  return details;
}

console.log(logItems(obj));