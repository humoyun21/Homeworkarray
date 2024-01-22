/*
1.

function indexsmall(array) {
  let smallest = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      if (smallest === null || array[i] < smallest) {
        smallest = array[i];
      }
    }
  }

  return smallest;
}

let array = [1, 3, 4, 7, 2, 6, 9, 8];
let result = indexsmall(array);
console.log(result);

2.

function largestindex(array) {
  let largest = null;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
}

let array = [1, 5, 2, 6, 10, 8, 4];
let result = largestindex(array);
console.log(result);

3.

function largestindex(array) {
  let largest = null;

  for (let i = 1; i < array.length; i += 2) {
    if (largest === null || array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
}

let array = [1, 5, 2, 6, 10, 8, 4];
let result = largestindex(array);
console.log(result);

4.

function ortaarfimetik(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let ortacha = sum / array.length;

  return ortacha;
}

let array = [5, 10, 15, 20, 25];
let result = ortaarfimetik(array);
console.log(result);

5.

function toqindex(array) {
  let indexqosh = [];

  for (let i = 1; i < array.length; i = i + 2) {
    indexqosh.push(array[i]);
  }

  return indexqosh;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indexqosh = toqindex(array);
console.log(indexqosh);

6.

function findComplexNumbers(arr) {
  const complexNumbers = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      complexNumbers.push(i);
    }
  }
  
  return complexNumbers;
}

const arr = [1, 2, [3, 4], 5, [6, [7, 8]], 9];

const complexNumbers = findComplexNumbers(arr);
console.log(complexNumbers); 

7.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddValues = arr.filter(function(num) {
  return num % 2 !== 0;
});

console.log(oddValues);

8.

function findStringValues(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push(arr[i]);
    }
  }
  return result;
}

var a = [1, 2, '3', 'four', 5, 'six'];
var b = ['seven', 8, 'nine', 10];

var aStringValues = findStringValues(a);
var bStringValues = findStringValues(b);

console.log(aStringValues); 
console.log(bStringValues); 

9.

let a = [1, 2, 3, 4, 5];
let b = [2, 4, 6, 8, 10];

let commonValues = [];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      commonValues.push(a[i]);
    }
  }
}

console.log(commonValues);

10.

function kamayishTartibida(arr) {
  var indexedArr = arr.map(function(value, index) {
    return [value, index];
  });
  indexedArr.sort(function(a, b) {
    return a[1] - b[1];
  });
  return indexedArr.map(function(value) {
    return value[0];
  });
}
var inputArr = [5, 2, 8, 4, 0, 1];
var outputArr = kamayishTartibida(inputArr);
console.log(outputArr); // [ 4, 5, 1, 2, 8, 0 ]

*/
