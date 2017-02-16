function concat(array1, secondArgument) {
  var concatArray = array1.slice();
  if (Array.isArray(secondArgument)) {
    for (var i = 0; i < secondArgument.length; i += 1) {
      concatArray.push(secondArgument[i]);
    }
  } else {
    concatArray.push(secondArgument);
  }
  return concatArray;
}

function pop(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    var lastElement = array[array.length - 1];
    array.splice(array.length - 1, 1);
  }
  return lastElement;
}