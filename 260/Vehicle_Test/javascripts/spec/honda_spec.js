describe('Honda', function() {
  it('sets the model property when a valid model is passed in', function() {
    var car = new Honda('Civic');
    expect(car.model).toEqual('Civic');
  });
  
  it('inherits the Vehicle prototype', function() {
    var car = new Honda('Civic');
    expect(car.toString()).toEqual('Honda Civic');
  });
  
  it('throws an error if an invalid model is passed in', function() {
    function invalidCar() {
      var car = new Honda('Mustang');
    }
    
    expect(invalidCar).toThrowError('Model Mustang does not exist.');
  });
  
  it('returns a list of valid models', function() {
    expect(Honda.getModels().length).toBeDefined();
    expect(Honda.getModels()).toContain('Civic');
  });
  
  it('calls getPrice when a new car is created', function() {
    spyOn(Honda, "getPrice");
    var car = new Honda("Civic");
    
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('Civic');
  });
  
  it('returns a price for the passed in model', function() {
    var car = new Honda('Civic');
    expect(car.price).toBeGreaterThan(0);
  });
  
  it('returns a price less than 15000 when a Civic is created', function() {
    var car = new Honda('Civic');
    expect(car.price).toBeLessThan(15000);
  });
  
  it('returns a price greater than 10000 when a CR-Z is created', function() {
    var car = new Honda('CR-Z');
    expect(car.price).toBeGreaterThan(10000);
  });
});