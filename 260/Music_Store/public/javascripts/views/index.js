var IndexView = Backbone.View.extend({
  id: 'index',
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  },
  events: {
    "click footer a": "addAlbum"
  },
  addAlbum: function(e) {
    e.preventDefault();
    this.trigger("add_album");
  }
});