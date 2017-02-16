function lastInArray(arr) {
  return arr[arr.length - 1];
}

function rollCall(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// rollCall(['Dan', 'Kevin', 'Sarah']);

var numbers = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  var reversedArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

function firstIndex(val, arr) {
  var position = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      position = i;
      break;
    }
  }

  return position;
}

function arrayToString(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    str += arr[i].toString();
  }

  return str;
}

function push(arr, value) {
  var length = arr.length;
  arr[length] = value;
  return arr.length;
  
}

var arr = [1,2,3];

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
}

function sortDescending(arr) {
  var arrCopy = arr.slice();
  return arrCopy.sort(function(a,b) {
    return b - a;
  });
}

// var numbers = [1,5,9,4,15];

// console.log(sortDescending(numbers));
// console.log(numbers);

function missing(array) {
  var missingInts = [];
  var numToAdd;
  
  for (var i = 1; i < array.length; i++) {
    numToAdd = array[i - 1] + 1;
    while (numToAdd < array[i]) {
        missingInts.push(numToAdd);
        numToAdd++;
    }
  }
  return missingInts;
}

// console.log(missing([-3, -2, 1, 5]));

function shift(array) {
  var firstElement = array[0];
  for (var i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }
  array.pop();
  return firstElement;
}

function areArraysEqual(array1, array2) {
  return arraysEqual(array1.sort(), array2.sort());
}
