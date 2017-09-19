//JS Arrays

var friend1 = "Charlie";
var friend2 =	"Mathias";
var friend3 =	"Liz";
var friend4 =	"David";
var friend5 =	"Laura";

//Arrays let us group data together  

var friends = ["Charlie", "Mathias", "Liz", "David", "Laura"];
//var friends = [   0    ,    1     ,    2,    3     ,   4];

//You can also change values of a given index in an array
friends[0] = "Chuck";
friends[3] = "Teresa";

//You can add new data, as well by adding an index that doesn't exist
friends[5] = "Molly";
//There is a better way to add data to arrays.

//We can initiate an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

//Arrays can hold any type of data
var randomCollection = [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45,65,4,6,4,3];
nums.length // 5

//ARRAY METHODS

//6 Most Important Methods

//PUSH AND POP
//Push is used to "push" data into an array.

var colors = ["red", "orange", "yellow"];
colors.push("green");//Adds it to the END of the array.

//Pop removes the LAST item in an array and takes no argument
colors.pop() //removes green

//SHIFT and UNSHIFT(the opposite of push and pop)

//Unshift ADDS to the BEGINNING of an array
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");
//["infrared", "red", "orange", "yellow"];

//Shift removes the FIRST item of the array
colors.shift(); //returns the removed element infrared
//shift() also returns the removed element
var col = colors.shift(); //infrared

//INDEXOF
//Use indexOf() to find the index of an item in an array
var colors = ["red", "orange", "yellow"];
colors.indexOf("orange") // 2
//if it returns -1, it means it's not previousElementSibling

//SLICE
//Used to copy different parts of an array

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends(3)

var citrus = fruits.slice(1,3);
//first index is where to start cutting and second index is where to end
//this does not alter the original array
//citrus contains ['Orange', 'Lemon'];
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

//You can also use slice() to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();

//both arrays are [1,2,3];

//NESTED ARRAYS
var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs"]
];

console.log(friendGroups[2][0]); //"Mooney "


 
 //ARRAY ITERATION
 //Use for loops to loop over an array.
 //We make use of the array's length property.


var colors = ["red", "green", "blue", "orange"];

for(var i = 0; i < colors.length; i++){
	alert(colors[i]);
}

//forEach provides built-in way of iterating over an array
//Kinda like the one for Ruby
//You pass the iteration method a function
// the argument is the item in the array
//to do something WITH EACH ITEM in the array
//Syntax : arr.forEach(function(color){
	// the argument is the item in the array


var colors = ["red", "green", "blue", "orange"];

colors.forEach(function(){
	//if you don't pass it an argument it will iterate the following block of 
	//code by the number of items in the array
	console.log("Hello"); //It will console.log it 4 separate times.
})

colors.forEach(function(color){
	//If you pass it an argument, the argument will hold
	//the value of each item in the array iterate each item.
	console.log(color);
})

//You can also pass it an outside function
function printColor(color){
	console.log("********");
	console.log(color);
	console.log("********");
}

//Instead of typing a function in the loop, you just pass it one.
colors.forEach(printColor//It doesn't get parentheses right after because JS would run it immediately. You want the loop to run it);
	


