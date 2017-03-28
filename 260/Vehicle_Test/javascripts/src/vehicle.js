function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype = {
  constructor: Vehicle,
  toString: function() {
    return this.make + ' ' + this.model;
  },
  honkHorn: function() {
    return "Beep beep!"
  }
}