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

//DOM MANIPULATION
	//Changing an element's style
	//adding/removing classes
	//changing the content of a tag
	//changing tag's attributes(src,href,etc)

//STYLE
//The style property is one way to manipulate an element's style

//Select
var tag = document.getElementById("highlight");

//Manipulate
tag.style.color = "blue";
tag.style.border = "10 px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//Separation of Concerns
//STRUCTURE - HTML / BEHAVIOR - JS / PRESENTATION - CSS
//It is recommended for styles to be defined in a separate file. The style property 
//allows for quick styling, for example for testing purposes.
//Rather than directly manipulating style with JS, we can define a CSS class and then toggle
//it on and off with JS

//INSTEAD OF THIS:

var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10 px solid red";

/*DEFINE A CLASS IN CSS*/
.some-class {
	color: blue;
	border: 10px solid red;
}

var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");

//classList
//A read-only list that contains classes for a given element. 
//IT IS NOT AN ARRAY!!

/*DEFINE A CLASS IN CSS*/
.some-class {
	color: blue;
	border: 10px solid red;
}


var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");

//REMOVE A CLASS
tag.classList.remove("some-class");

//TOGGLE A CLASS
tag.classList.toggle("some-class");

//textContent
//Returns a string of all the text contained in a given element

//<p> This is an <strong>awesome</strong> paragraph </p>

//Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContanct:
tag.textContent //"This is an awesome paragraph"

//Alter the textConent:
tag.textContent = "blah blah blah";

//Need to be careful what's inside of the text.
//It will overwrite all tags within the text...to keep the tags intact use:


//innerHTML
//Similar to textContent, except it returns a string of all the HTML contained in a given
//element

//<p> This is an <strong>awesome</strong> paragraph </p>

//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//<p> This is an <strong>awesome</strong> paragraph </p>


