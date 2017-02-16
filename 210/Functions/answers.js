function sum(arrayArg) {
  var total = 0;
  for (var i = 0, length = arrayArg.length; i < length; i++) {
    total += arrayArg[i];
  }
  
  return total;
}

function average(arrayArg) {

  return sum(arrayArg) / arrayArg.length;
}

console.log(average([1, 2, 3, 4, 10]));

var temperatures = [68, 74, 87, 78, 81];

console.log(average(temperatures));