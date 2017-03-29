var fs = require("fs");
var path = require("path");
var filePath = path.resolve(path.dirname(__dirname), "data/albums.json")

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    // returns string that reprensents content of the file
    // path normalizes file path so you don't need to be aware of relative location
    res.render('index', { 
      title: 'Music Albums',
      albums: getAlbums().data,
    });
  });
}

