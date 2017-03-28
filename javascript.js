var Factory = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

var sampleFunction = function() {
  return 1;
}

Factory.prototype.printX = function() {
  console.log("X is equal to " + this.x);
}

var test1 = new Factory(20,30);

test1.printX();

var testObject = {
  x: 5,
  method1: function() {
    [1,2,3].forEach(function(num) {
      console.log(this.x);
    }.bind(testObject));
  },
}

testObject.method1();

$(function() {
  $('p').fadeOut(1000).delay(600).fadeIn(1000).slideUp(1000).delay(600).slideDown(600);
}) 