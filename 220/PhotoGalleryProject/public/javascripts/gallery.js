
$(function() {
  var photosInfo;
  var currentPhotoID;
  function renderPhotos() {
    $('#slides').html(photoTemplate({ 'photos': photosInfo }));
  }
  
  function renderPhotosInfo(idx) {
    $('section > header').html(photoInfoTemplate( photosInfo[idx] ));
  }
  
  function renderPhotoComments(idx) {
    firstPhotoID = photosInfo[idx].id;
    $.ajax({
      url: "/comments?photo_id=" + firstPhotoID,
      type: "GET",
      dataType : "json",
      }).done(function( json ) {
          comments = json;
          $('#comments ul').html(commentsTemplate({ 'comments': comments }));
    }); 
  }
  
  photoTemplate = Handlebars.compile($('#photos').html());
  photoInfoTemplate = Handlebars.compile($('#photo_information').html());
  commentsTemplate = Handlebars.compile($('#comments_script').html());
  commentTemplate = Handlebars.compile($('#comment').html());
  
  Handlebars.registerPartial('comment', $('#comment').html());
  
  // get photos and info for 1st photo
  $.ajax({
    url: "/photos",
    type: "GET",
    dataType : "json",
    }).done(function( json ) {
        photosInfo = json;
        renderPhotos();
        renderPhotosInfo(0);
        renderPhotoComments(0);
        currentPhotoID = photosInfo[0].id;
        addPrevPhotoEventListener();
        addNextPhotoEventListener();
        addLikePhotoEventListener();
        addFavoritePhotoEventListener();
    });
    
    function addPrevPhotoEventListener() {
      $('a.prev').on('click', function(e) {
        e.preventDefault();
        previousPhotoID = currentPhotoID - 1;
        if (previousPhotoID === 0) {
          previousPhotoID = photosInfo[photosInfo.length - 1].id;
        }
        $('figure[data-id=' + currentPhotoID + ']').fadeOut(500);
        $('figure[data-id=' + previousPhotoID + ']').fadeIn(500);
        
        PhotoIDIndex = photosInfo.findIndex(function(photo) {
          return photo.id === previousPhotoID;
        });
        renderPhotosInfo(PhotoIDIndex);
        renderPhotoComments(PhotoIDIndex);
        currentPhotoID = previousPhotoID;
      });
    }
    
    function addNextPhotoEventListener() {
      $('a.next').on('click', function(e) {
        e.preventDefault();
        nextPhotoID = currentPhotoID + 1;
        if (nextPhotoID > photosInfo[photosInfo.length - 1].id) {
          nextPhotoID = photosInfo[0].id;
        }
        $('figure[data-id=' + currentPhotoID + ']').fadeOut(500);
        $('figure[data-id=' + nextPhotoID + ']').fadeIn(500);
        
        PhotoIDIndex = photosInfo.findIndex(function(photo) {
          return photo.id === nextPhotoID;
        });
        renderPhotosInfo(PhotoIDIndex);
        renderPhotoComments(PhotoIDIndex);  
        currentPhotoID = nextPhotoID;
      });
    }
    
    function addLikePhotoEventListener() {
      $('section > header').on('click', 'a.like', function(e){
        e.preventDefault();
        var photoId = $('figure:visible').data('id');
        console.log(photoId);
        $.ajax({
          url: "/photos/like",
          data: photoId,
          type: "POST",
          dataType : "json",
          }).done(function( json ) {
              comments = json;
              console.log(comments);
              // $('#comments ul').html(commentsTemplate({ 'comments': comments }));
        }); 
      });
    }
    
    function addFavoritePhotoEventListener() {
      $('section > header').on('click', 'a.favorite', function(e){
        e.preventDefault();
        console.log('favorite PRESS!')
      });
    }
});