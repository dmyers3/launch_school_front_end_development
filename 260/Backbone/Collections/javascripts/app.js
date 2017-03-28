// var PostModel = Backbone.Model.extend({});

// var Posts = Backbone.Collection.extend({
//   model: PostModel,
//   url: "https://jsonplaceholder.typicode.com/posts"
// });

// var blog_roll = new Posts();
// blog_roll.fetch({
//   success: function() {
//     console.log(blog_roll.toJSON());
//   }
// });



// var users_data = [{
//   id: 1,
//   name: "Leanne Graham"
// }, {
//   id: 2,
//   name: "Ervin Howell"
// }, {
//   id: 3,
//   name: "Clementine Bauch"
// }];

// var User = Backbone.Model.extend({});
// var Users = Backbone.Collection.extend({
//   model: User
// });
// var blog_authors = new Users();

// blog_authors.reset(users_data);

// var first_post = blog_roll.get(1);

// blog_roll.set({
//   id: 1,
//   userId: 1,
//   title: "My First Post",
//   body: "This is my first blog post! Yay!"
// });

// // Now we can check the first_post to make sure the record was updated
// console.log(first_post.toJSON());



// Exercises

// User model
var User = Backbone.Model.extend({
  url: "https://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  url: "https://jsonplaceholder.typicode.com/users",
  model: User,
});

users = new Users();
users.fetch({
  success: function() {
    console.log(users.toJSON());
    users.create({name: "Daniel Myers", email: "daniel.p.myers@gmail.com"}, {
      success: function(model) {
        console.log(users.toJSON());
        users.fetch({
          reset: false,
          success: function() {
            console.log(users.length);
          }
        })
  }
});

  }
})


function removeSpaces(str) {
  return !!str.match(/[A-Za-z]{5,7}/);
}



