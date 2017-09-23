//The Document Object Model is the interface between JS and HTML + CSS
//The browser turns every HTML tag into an object that we can manipulate
//Everything is stored inside of the document object. That's how we can select with jQuery.
//use console.dir(document) on any given website to see the document object in object syntax.

//THE PROCESS OF MANIPULATING THINGS
//SELECT an element and then MANIPULATE

//Here's how you SELECT
var h1 = document.querySelector("h1");//var h1 is just any var you want

//Here's how you manipulate
h1.style.color = "pink";

//Select the <body> and change its background color every second

// var body = document.querySelector("body"); //SELECT
// var isBlue = false;

// setInterval(function(){ //MANIPULATE
// 	if(isBlue){
// 		body.style.background = "white";
// 	} else {
// 		body.style.background = "#3498db";
// 	}

// 	isBlue = !isBlue;
// }, 1000);

//DOM Selectors

//5 Main methods for selecting elements.

// document.getElementById();

//	var tag = document.getElementById("highlight");
	//<li id="highlight">List Item 1</li>

// document.getElementsByClassName();

// var tags = document.getElementsByClass("bolded");
	//[
	//<li class="bolded">List Item 2</li>,
	//<li class="bolded">List Item 3</li>
	//]
	//Works like an array but it isn't an array. You can use
	//.length and call by index number, but cant use loops.

// document.getElementsByTagName();
	//var tags = document.getElementsByTagName
	//Returns a list of all elements of a given tag name, like <li> or <h1>

// document.querySelector();
// Returns the first element that matches a given CSS-Style Selector
	// select by class
	// var tag = document.querySelector(".bolded"); //Returns the FIRST element with the .bolded class.
	// var tag = document.querySelector("h1")

// document.querySelectorAll();
	// va lis = document.querySelectorAll("li"); 