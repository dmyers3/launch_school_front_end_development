$('nav').on('click', 'a', function(e) {
  e.preventDefault();
  var currentArticle = $(e.target).attr('href');
  displayArticle(currentArticle, e);
  history.pushState({ id: currentArticle }, currentArticle, window.location.pathname + currentArticle);
  
});

function displayArticle(name) {
  $('.active').removeClass('active');
  $("nav a[href='" + name + "']").addClass('active');
  
  $("article[id='" + name + "']").addClass('active');
}

if (location.hash) {
  displayArticle(location.hash);
}

$(window).on('popstate', function(e) {
  var state = e.originalEvent.state;
  displayArticle(state === null ? "#article_1" : state.id);
})