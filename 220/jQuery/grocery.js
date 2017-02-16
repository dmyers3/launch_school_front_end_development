$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#item').val();
    var quantity = $('#quantity').val() || '1';
    
    var new_li = $("<li></li>").text(quantity + ' ' + name);
    $('ul').append(new_li);
    $('form')[0].reset();
  });
  
  // $('form').on('reset', function(e) {
  //   e.preventDefault();
  //   $('form').hide();
  // });
});