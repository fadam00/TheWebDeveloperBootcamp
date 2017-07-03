function sing(){
	console.log("Twinkle twinkle");
	console.log("Little star");
}

//Example of higher order function



setInterval(sing, 1000);
//We do not need parentheses for sing because setInterval is calling the function. 
//When setInterval is ran, it returns a number which you can use as an arg in clearInterval() to stop it

//You can also use setInterval without a predefined function

setInterval(function(){
	console.log("I am an anonymous function!");
	console.log("It's awesome!");
}, 2000)