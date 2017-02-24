$(function() {
  $('nav ul').on('click', 'a', function(e) {
    e.preventDefault();
    $target = $(e.target);
    if ($target !== $('a.active')) {
      $('a.active').removeClass('active')
      $target.addClass('active')
    }
    
    localStorage.setItem('activeNav', JSON.stringify($target));
    console.log(JSON.parse(localStorage.getItem('activeNav')));
    
  });
  
 
});