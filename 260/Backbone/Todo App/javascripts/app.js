// var TodoModel = Backbone.Model.extend({
  
// });

// var TodoCollection = Backbone.Collection.extend({
//   model: TodoModel
// });

// var TodoView = Backbone.view.extend({
//   collection: todos
// });

// var todos = new TodoCollection();





var b = {
  arr: [1],
  c: 3,
}

var d = {
  forEach: function(func) {
    console.log(this);
    func();
  },
  a: 5,
}



var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    console.log(this);
    d.forEach(function(number) {
      console.log(this);
    }.bind(b));
  },
};

obj.foo();