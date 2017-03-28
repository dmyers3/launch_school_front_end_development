
function Honda(model) {
  if (!this.verify(model)) {
    throw new Error('Model ' + model + " does not exist.");
    return undefined;
  }
  
  this.make = 'Honda';
  this.model = model;
  this.price = Honda.getPrice(this.model);
}


(function() {
  var AVAILABLE_MODELS = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
  var PRICES = [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];
  
  Honda.prototype = Object.create(Vehicle.prototype);
  Honda.prototype.constructor = Honda;
  Honda.prototype.verify = function(model) {
    return AVAILABLE_MODELS.indexOf(model) >= 0;
  }
  
  Honda.getPrice = function(model) {
    var index = AVAILABLE_MODELS.indexOf(model);
    return PRICES[index];
  }
  
  Honda.getModels = function() {
    var models = [];
    AVAILABLE_MODELS.forEach(function(model) {
      models.push(model);
    });
    return models;
  }
})();
