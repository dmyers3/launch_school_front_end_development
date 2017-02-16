// Merge Sorted Lists

// input: 2 sorted arrays;
// output: one array with all input elements sorted

// don't mutate input arrays

// create empty result array

// while both arrays have length > 0
//   compare first elements (since they are already sorted)
//     if element a > element b
//       push b to result array (it is smallest)
//       remove b from its array
//     else
//     push a to result array
//     remove a from its array
     
// if only a or b has elements
//   use for loop with length of the array
//   push each element to result array starting at index 0
  
// return result array

function merge(array1, array2) {
  var mergedArray = [];
  var array1Copy = array1.slice();
  var array2Copy = array2.slice();
  
  while (array1Copy.length > 0 && array2Copy.length > 0) {
    if (array1Copy[0] > array2Copy[0]) {
      mergedArray.push(array2Copy[0]);
      array2Copy.shift();
    } else {
      mergedArray.push(array1Copy[0]);
      array1Copy.shift();
    }
  }
  
  while (array1Copy.length > 0) {
    mergedArray.push(array1Copy[0]);
    array1Copy.shift();
  }
  
   while (array2Copy.length > 0) {
    mergedArray.push(array2Copy[0]);
    array2Copy.shift();
  }
  
  return mergedArray;
  
}

// Merge Sort

// make nested sub arrays

// input: array
// output: nested array with two elements - first half of input array in 1st
//   and second half in 2nd
  
// input array length / 2 rounded down in first array
//   start with empty array and concat index 0 to index Math.floor(array.length / 2)

// second array contains the rest

// keep doing this until first array has length 1

function nestArrays(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  var halfway = Math.floor(arr.length / 2);
  var leftArray = arr.slice(0, halfway);
  var rightArray = arr.slice(halfway);
  
  return [].concat([nestArrays(leftArray)], [nestArrays(rightArray)]);
}

// have nested arrays of one element each - each outer layer is two elements

function mergeSort(arr) {
  var nestedArrays = nestArrays(arr);
  return merge(nestedArrays[0], nestedArrays[1]);
}

