// create Product Model constructor

var formTemplate = Handlebars.compile($('#form').html());
var productTemplate = Handlebars.compile($('#product').html());

function renderPage() {
  $('article').html(productTemplate(product.toJSON()));
  $('fieldset').html(formTemplate(product.toJSON()));
}

function createObjectFromSerializedArray(values) {
  var object = {};
  for (var i = 0; i < values.length; i++){
    object[values[i]['name']] = values[i]['value'];
  }
  return object;
}



var ProductModel = Backbone.Model.extend({
  initialize: function() {
    this.set("date", new Date());
    this.set("datetime", new Date());
    this.set("date_formatted", new Date());
  }
})

var product = new ProductModel({
  "name": "Bananas",
  "date": (new Date()).valueOf(),
  "description": "A fruit, usually yellow or green, with a soft flesh and a thick rind that is peeled off before consuming.",
  "categories": ["fruit", "berry", "starch", "potassium"]
});

renderPage();

$('form').on('submit', function(e) {
  e.preventDefault();
  var values = $(this).serializeArray();
  var object = createObjectFromSerializedArray(values);
  product.set(object);
  product.set({
    date: new Date(),
    datetime: new Date(),
    date_formatted: new Date(),
  })
  renderPage();
  console.log(product.toJSON());
  
})






