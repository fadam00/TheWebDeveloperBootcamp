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

//Unshift ADDS to the FRONT of an array
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
 
 

