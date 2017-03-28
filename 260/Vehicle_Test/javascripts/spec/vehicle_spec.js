// describe('Scrabble', function() {
//   it("scores an empty word as zero",function() {
//     expect(Scrabble("")).toEqual(0);
//   });

//   it("scores a null as zero",function() {
//     expect(Scrabble(null)).toEqual(0);
//   });

//   it("scores a very short word",function() {
//     expect(Scrabble("a")).toEqual(1);
//   });

//   it("scores the word by the number of letters",function() {
//     expect(Scrabble("street")).toEqual(6);
//   });

//   it("scores more complicated words with more",function() {
//     expect(Scrabble("quirky")).toEqual(22);
//   });

//   it("scores case insensitive words",function() {
//     expect(Scrabble("MULTIBILLIONAIRE")).toEqual(20);
//   });
// });

describe('Vehicle', function() {
  beforeEach(function() {
    this.testVehicle = new Vehicle('Ford', 'Mustang');
  })
  
  it("sets the make and model properties when an object is passed in", function() {
    expect(this.testVehicle.make).toEqual('Ford');
    expect(this.testVehicle.model).toEqual('Mustang');
  });
  
  it("returns a concatenated string with make and model", function() {
    console.log(this.testVehicle);
    expect(this.testVehicle.toString()).toEqual('Ford Mustang');
    this.testVehicle.model = "Escape";
    expect(this.testVehicle.toString()).toEqual('Ford Escape');
  });
  
  it("returns a message when the horn is honked", function() {
    expect(this.testVehicle.honkHorn()).toMatch('Beep beep!');
  });
  
  
});