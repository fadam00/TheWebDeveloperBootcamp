//FUNCTIONS
//Functions are like variables for BLOCKS OF CODE. They're reusable bits of code

//DECLARING A FUNCTION
//function doSomething(){
	//console.log("Hello World!");}

//CALL THE FUNCTION
//doSomething();

function singSong(){
	console.log("All the small things");
	console.log("True care, truth brings");
	console.log("I'll take, one left, your right, best trip");
}

singSong();

//ARGUMENTS
//Often we want to write functions that take inputs
function square(num){
	console.log(num * num);
}

square(10); //prints 100
square(3); //prints 9
square(4); //prints 16

function sayHello(name){
	console.log("Hello there, " + name + "!");
}

sayHello("Frank");

//Functions can take multiple arguments, too!
function area(length, width){
	console.log(length * width);
}

area(10,15);

function greet(person1, person2, person3){
	console.log("Hey! " + person1)
	console.log("Hey! " + person2)
	console.log("Hey! " + person3)
}

greet("Harry", "Ron", "Hermione"); //If you were to forget to enter one of the arguments
//Javascript shows it as undefined, it doesn't break the function however, so be careful.

//THE RETURN KEYWORD
//Often we want a function to send back an output value
//We use the return keyword to output a value from a function
function square(x){
	console.log(x * x);
}

square(4)//This will only print the result, but it won't "capture" the result for it to be used
//in any other part of the code. In the console, it'll show as undefined.

//Example
"4 square is: " + square(4)//It will print 16 to the console but
//will result in "4 square is: undefined" because the resulting value isnt being returned

function square(x){
	return x * x;
}
//If we run it now, it will RETURN 16, not just print it and return undefined, in the console.
square(4)//16, not 16
//					undefined.
//You can have multiple returns within a function, but only the first return will be returned. Unless you're using IF statements.

//This function capitalizes the first letter and returns the whole string with the first letter capitalize
function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
	//str.charAt(0) takes the first letter and uppercases it.
	//str.slice(1) takes everything from index 1 onwards, and smashes it together with the plus sign after index 0.

}

var city = "paris" //"paris"
var capital = capitalize(city); //"Paris"

//we can caputure the returned value in a variable
//the return keyword stops execution of a function!!!

//FUNCTION DECLARATION VS FUNCTION EXPRESSION

//function declaration
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}
//The problem with function expression is that if you decide to change the variable containing it, the function will disappear.

