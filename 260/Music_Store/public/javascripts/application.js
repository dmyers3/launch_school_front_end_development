var App = {
  templates: JST,
  $el: $('main'),
  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  renderAlbumView: function(album) {
     new AlbumView({
       model: album
     });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, "add_album", this.newAlbum);
  },
  newAlbum: function() {
    new NewAlbumView();
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});