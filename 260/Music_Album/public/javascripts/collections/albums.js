// Collection

var Albums = Backbone.Collection.extend({
  model: Album,
  url: "https://launch-school-front-end-development-dmyers3.c9users.io/albums.json"
});