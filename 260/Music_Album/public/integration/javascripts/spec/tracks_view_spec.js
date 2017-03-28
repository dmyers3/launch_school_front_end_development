var tracks = new Tracks([{
  "title": "Welcome To New York",
  "length": "3:32"
}, {
  "title": "Blank Space",
  "length": "3:51"
}, {
  "title": "Style",
  "length": "3:51"
}, {
  "title": "Out of the Woods",
  "length": "3:55"
}, {
  "title": "All You Had To Do Was Stay",
  "length": "3:13"
}, {
  "title": "Shake It Off",
  "length": "3:39"
}, {
  "title": "I Wish You Would",
  "length": "3:27"
}, {
  "title": "Bad Blood",
  "length": "3:31"
}, {
  "title": "Wildest Dreams",
  "length": "3:40"
}, {
  "title": "How You Get the Girl",
  "length": "4:07"
}, {
  "title": "This Love",
  "length": "4:10"
}, {
  "title": "I Know Places",
  "length": "3:15"
}, {
  "title": "Clean",
  "length": "4:31"
}]
);

jQuery.fx.off = true;

describe("Tracks view", function() {
  beforeEach(function() {
    this.tracksView = new TracksView({ collection: tracks, album: albums.toJSON()[1]});
  });
  
  afterEach(function() {
    this.tracksView.remove();
  });
  
  it("has a collection property assigned", function() {
    expect(this.tracksView.collection).toBeDefined();
    
  });
  
  it("has a Handlebars template compiled", function() {
    expect(this.tracksView.template).toBeDefined();
  });
  
  it("renders a modal to the body when render called", function() {
    this.tracksView.render();
    expect($('#tracks_modal li').length).toBe(tracks.length);
  });
  
  it("removes the view when fadeOut called", function() {
    this.tracksView.fadeOut();
    expect($("#tracks_modal").length).toBe(0);
  })
});