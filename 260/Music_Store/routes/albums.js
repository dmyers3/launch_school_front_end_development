var fs = require("fs");
var path = require("path");
var filePath = path.resolve(path.dirname(__dirname), "data/albums.json")

// returns string that reprensents content of the file
// path normalizes file path so you don't need to be aware of relative location

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

var albums = getAlbums();

module.exports = function(router) {
  /* GET new album page. */
  router.get('/albums/new', function(req, res, next) {
    res.render('new', { 
      title: 'Submit New Album',
    });
  });
  
  /* Post new album page. */
  router.post('/albums', function(req, res, next) {
    var album = req.body;
    album.id = albums.last_id;
    albums.last_id += 1;
    albums.data.push(album);
    
    fs.writeFileSync(filePath, JSON.stringify(albums), "utf8");
    res.json(album);
  });
}



