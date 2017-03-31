var fs = require("fs");
var path = require("path");
var Albums = require(path.resolve(path.dirname(__dirname), "public/local_modules/album_node"));
var underscore = require('underscore');

module.exports = function(router) {
  /* GET new album page. */
  router.get('/albums/new', function(req, res, next) {
    res.render('new', { 
      title: 'Submit New Album',
      albums: Albums.get()
    });
  });
  
  /* Post new album page. */
  router.post('/albums', function(req, res, next) {
    var album = req.body;
    album.id = Albums.getLastID();
    Albums.set(album);
    res.json(album);
  });
  
  // * Edit album
  router.put('/albums', function(req, res, next) {
    Albums.update(req.body);
    res.json(album);
  });
  
  // * Delete album
  router.delete('/albums', function(req, res, next) {
    Albums.delete(req.body);
    res.status(200).end();
  });
  
}



