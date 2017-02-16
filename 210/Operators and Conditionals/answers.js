var apples = 3;
var bananas = undefined;
var areEqual = (apples === bananas);
var eitherOr = apples || bananas;

if (apples === bananas) {
  console.log("Two are equal!");
} else  {
    if (apples == bananas) {
      console.log("different type but equal");
    } else {
      console.log("not equal");
    }
}

console.log(areEqual);
console.log(eitherOr);

var lastName;
var familyMessage;

lastName = 'Myers';

familyMessage = lastName === 'Myers' ? "You're part of the family" : "You're not family";
console.log(familyMessage);