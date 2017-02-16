$(function() {
  
  var $output = $('p');
  
  $('form').on('submit', function(e) {
    e.preventDefault();
    var value1 = parseInt($('#val1').val(),10);
    var value2 = parseInt($('#val2').val(),10);
    var operator = $('select').val();
    if (operator === '+') {
      $output.text(value1 + value2);
    } else if (operator === '-') {
      $output.text(value1 - value2);
    } else if (operator === '*') {
      $output.text(value1 * value2);
    } else {
      $output.text(value1 / value2);
    }
  });
});