//BOOLEAN LOGIC

//Everything starts with the idea that a statement is either True or False
//Then we can combine those initial statements that also evaluate to True or False

//Equality Operations

var x = 99;
x == "99" //true
x === "99" //false

var y = null;
y == undefined //true
y === undefined //false

// "==" performs type coercion, whereas "===" does not.
//Try using "===" as much as possible for specificity

//Logical Operators, used to chain boolean logic
//Assuming x = 5
// && is AND ex: x < 10 && x !== 5 results in false // both conditions must be true for the result to be true
//|| is OR ex: y > 9 || x === 5 results in true //only one condition needs to be true for the result to be true
//! is NOT ex: !(x === y) results in true //the inside is flase but the ! negates the whole thing and becomes true

//Mini-Exercise
var x = 10;
var y = "a";

y == "b" || x >= 10 //TRUE
