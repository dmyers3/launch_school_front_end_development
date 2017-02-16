$(function() {
  var $navHeader = $('header').eq(1);
  var $navH1 = $('h1').eq(0);
  $('main').prepend($navHeader);
  $('nav').prepend($navH1);
});