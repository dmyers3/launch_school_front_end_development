var path = require("path");
var Albums = require(path.resolve(path.dirname(__dirname), "public/local_modules/album_node"));

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: Albums.get(),
    });
  });
}



