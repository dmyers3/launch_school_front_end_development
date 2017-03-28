var post_html = $("#post").html();

function renderPost(model) {
  var $post = $(post_html);
  $post.find("h1").text(model.get("title"));
  $post.find("header p").text("By " + model.get("user").get("name"));
  $post.find("header + p").text(model.get("body"));
  $(document.body).html($post);
}

var PostModel = Backbone.Model.extend({
  urlRoot: "https://jsonplaceholder.typicode.com/posts",
  setUser: function() {
    var self = this;
    var user = new UserModel({id: this.get("userId")});
    
    user.fetch({
      success: function(model) {
        self.set("user", model);
        console.log(self.toJSON());
      }
    });
  },
  initialize: function() {
    var self = this;
    console.log(self);
    this.on('change:userId', this.setUser);
    this.on('change', function(model) {
      model.has("user") && renderPost(model);
    });
    this.has("userId") && this.setUser();
  },
});

var UserModel = Backbone.Model.extend({
  urlRoot: "https://jsonplaceholder.typicode.com/users"
});

var initialPost = new PostModel({
  id: 1
})

initialPost.fetch();

var post2 = new PostModel({
  id: 2,
  title: "New Blog Post",
  body: "Enjoy my new post!",
  userId: 2,
});










