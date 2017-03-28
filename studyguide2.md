Data Attributes
  can use data-(something)="(something_else)" in HTML
  can get value of data using $(element).data('(data_name)')
  if you use setter part of jQuery data it won't change HTML
  probably easier to use .attr() method instead
  
  
Handlebars
  <script id='productTemplate' type='text/x-handlebars'>
    <li>
      <h3>{{name}}</h3>
      <dl>
        <dt>Quantity:</dt>
        <dd>{{quantity}}</dd>
        <dt>Price:</dt>
        <dd>
          ${{price}}
          {{#if on_sale}}
          <strong>SALE!</strong>
          {{/if}}
        </dd>
      </dl>
    </li>
  </script>
  
  <script id='productsList' type='text/x-handlebars'>
    {{#each items}}
    {{> productTemplate}}
    {{/each}}
  </script>
  
  // Compile both templates for use later
  var productsList = Handlebars.compile($('#productsList').html());
  var productTemplate = Handlebars.compile($('#productTemplate').html());
  
  // Also register the product template as a partial
  Handlebars.registerPartial('productTemplate', $('#productTemplate').html());
  
  // Write the current list to the page
  $list.html(productsList({ items: products }));
  
  // Create a new product
  var newProduct = {
    name: 'Soup',
    quantity: 1,
    price: 1.29,
  };
  
  // Render the new product with the product template
  $list.append(productTemplate(newProduct));
    
Client-side Storage
  localStorage vs sessionStorage
    session lasts current session (until tab or window closed) - local stays until browser deletes it
    
  stores it as string - so to store objects need to convert to string using JSON.stringify
  to return to object use JSON.parse
    function setPerson(personToSave) {
      localStorage.setItem('person', JSON.stringify(personToSave));
    }
    
    function getPerson() {
      return JSON.parse(localStorage.getItem('person'));
    }
  
Factory Functions
  functions that create objects based on template
    function createPerson(firstName, lastName) {
      var person = {};
      person.firstName = firstName;
      person.lastName = lastName || '';
      person.fullName = function() {
        return (this.firstName + ' ' + this.lastName).trim();
      }
    
      return person;
    }
  
  downside is that each object created has all methods (not efficient if many shared methods)
  no linkage between created objects (i.e. no "type")
  
Constructur Functions
  intended to be called with new keyword - otherwise just regular function
  first letter capitalized by convention
  
  When a function is called with the new keyword, the following happens:
  
  1) A new object is created
  2) "this" in the function is pointed to the new object
  3) the code in the function is executed
  4) "this" is returned if there's not an explicit return
  5) new object has constructor property that points back to function that it's created from
  
  every object still has all methods though
  
Prototypes
  Every object has a __proto__ property that points to another object, which is the object it's basically
  created from
  
  Object.getPrototypeOf(obj) - gets prototype of obj
  obj.isPrototypeOf(foo) - checks if obj is prototype object of foo
  
  Object.create creates objects that form prototype chain
    Object.prototype object is at end of chain - if object isn't created from prototype then its prototype is the Object.protype object.
    
  obj.__proto__ is object that created obj
  function.prototype is object that is used to create other objects
    this object has constructor property that points back to function
  
  objects inherit properties/methods from all objects on its prototype chain
    this allows us to not duplicate shared behavior and only have to update methods in one spot
    called Prototypal Inheritance or Behavior Delegation
    
  Object.getOwnPropertyNames
  object.hasOwnProperty(prop)
  
Pseudo-classical Pattern
  combines constructor functions and prototype - constructor sets state and prototype contains shared methods
  use instanceOf to check if one obj is a type of other object (i.e. pointA instanceof Point)
  
  var Point = function(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  
  Point.prototype.example = function() {
    return this.x;
  }
  
  var samplePoint = new Point(5, 3);
  
OLOO (Objects Linking to Other Objects)
  uses Object.create(obj) to create new objects
  use Object.getPrototypeOf(obj) or obj.isPrototypeOf(foo)
  shares methods on the prototype object

  var parent = {
    x: 5,
    y: 6,
    
    init: function(a,b) {
      this.a = a;
      this.b = b;
      return this;
    },
  }
  
  var child = Object.create(parent).init(1,2);