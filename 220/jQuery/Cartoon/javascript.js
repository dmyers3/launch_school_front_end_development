$(function() {
  var $blinds = $('[id^=blind]');
  var speed = 250;
  var delay = 1500;
  
  function animate() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      var currentDelay = delay * i + speed
      $blind.delay(currentDelay).animate({
        top: "+=" + $blind.height(),
        height: 0,
      }, speed);
    });
  }
  
  animate();
 
  $('a').on('click', function(e) {
    e.preventDefault();
    $blinds.finish();
    $blinds.removeAttr("style");
    animate();
  });
});


