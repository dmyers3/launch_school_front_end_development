$(function() {
  $a = $('a');
  $article = $('article');
  
  $a.on('click', function(e) {
    e.preventDefault();
    $target = $(this);
    var targetBlock = $target.data('block');
    
    $article.each(function(i) {
      if ($article.eq(i).data('block') === targetBlock) {
        $article.eq(i).show();
      } else {
        $article.eq(i).hide();
      }
    });
    
  }); 
});

