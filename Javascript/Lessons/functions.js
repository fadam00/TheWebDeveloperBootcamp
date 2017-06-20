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

sayHello("Frank")