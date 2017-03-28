// create handlebar templates
// create itemModel
// on Pageload create two models for items_json
// set up collection array to hold models
//   use array length to set new id's for models added to collection
// sort collection by name (use underscore sortBy)

// create event handlers for clicking on delete item, delete all, submit new, sort headers

// delete item 
//   will call remove method on collection
//   located item by data-id on delete anchor
//   create new array without that model and set it to new collection array
//   re-render items

// delete all
//   empty collection array and re-render template

// submit new
//   create new model, push to end of collection array, render new array from 
//   partial and append to table body
  
// sort headers
//   sort collection by property clicked and re-render
  

var ItemModel = Backbone.Model.extend({
  idAttribute: "id"
});

var Items = {
  $body: $("tbody"),
  collection: [],
  create: function(itemData) {
    itemData.id = this.collection.length + 1;
    var item = new ItemModel(itemData);
    
    this.collection.push(item);
    
    return item;
  },
  
  render: function() {
    Items.$body.html(template({
      items: this.collection
    }));
  },
  seedCollection: function() {
    items_json.forEach(this.create.bind(this));
  },
  sortBy: function(prop) {
    this.collection = _(this.collection).sortBy(function(m) {
      return m.attributes[prop];
    });
    this.render();
  },
  empty: function() {
    this.collection = [];
    this.render();
  },
  remove: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget);
    var model = _(this.collection).findWhere({id: +$e.attr("data-id")});
    
    this.collection = _(this.collection).without(model);
    this.render();
  },
  bind: function() {
    this.$body.on("click", "a", this.remove.bind(this));
  },
  init: function() {
    this.seedCollection();
    this.render();
    this.bind();
  }
};

var template = Handlebars.compile($("#items").html());

Handlebars.registerPartial("item", $("#item").html());

$("form").on("submit", function(e) {
  e.preventDefault();
  var inputs = $(this).serializeArray();
  var attrs = {};
  var item;
  
  inputs.forEach(function(input) {
    attrs[input.name] = input.value;
  });
  
  item = Items.create(attrs);
  Items.$body.append(Handlebars.partials.item(item.toJSON()));
  this.reset();
});

$("th").on("click", function() {
  var prop = $(this).attr("data-prop");
  Items.sortBy(prop);
})

$("p a").on("click", function(e) {
  e.preventDefault();
  Items.empty();
})

Items.init();








