var NewAlbumView = Backbone.View.extend({
  id: 'album_new',
  template: App.templates.newAlbum,
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  },
  events: {
    "submit": "createAlbum"
  },
  createAlbum: function(e) {
    e.preventDefault();
    var $f = this.$("form");
    
    $.ajax({
      url: $f.attr("action"),
      type: $f.attr("method"),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.indexView();
      }
    });
  }
});