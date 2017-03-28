describe("Tracks collection", function() {
  it("successfully fetches correct tracks", function(done) {
    var tracks = new (Tracks.extend( {url: "/albums/1989.json"}))();
    tracks.fetch({
      success: function() {
        expect(tracks.toJSON().length).toBeDefined();
        expect(tracks.toJSON()[0].title).toBeDefined();
        expect(tracks.toJSON()[0].length).toBeDefined();
        done();
      }
    });
  });
});