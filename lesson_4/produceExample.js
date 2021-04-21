//Created a function that will return only the fruits from the produce object.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

//Solution #1:
function selectFruit(object) {
  let tempData = {};
  for (let index in object) {
    if (object[index] === "Fruit") {
      tempData[index] = object[index];
    }
  }
  return tempData;
}

//Solution #2:
function selectFruit1(obj) {
  let produceArr = Object.keys(obj);
  let fruits = {};
  for (let idx = 0; idx < produceArr.length; idx++) {
    let produceKey = produceArr[idx];
    let currentVal = obj[produceKey];

    if (currentVal === 'Fruit') {
      fruits[produceKey] = currentVal;
    }
  }
  return fruits;
}

//Solution #3:
function selectFruit2(obj) {
  let produceArr = Object.entries(obj);
  let fruit = {};
  for (let idx = 0; idx < produceArr.length; idx++) {
    let produceKey = produceArr[idx][0];
    let value = obj[produceKey];

    if (value === 'Fruit') {
      fruit[produceKey] = value;
    }
  }
  return fruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(selectFruit1(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(selectFruit2(produce)); // => { apple: 'Fruit', pear: 'Fruit' }