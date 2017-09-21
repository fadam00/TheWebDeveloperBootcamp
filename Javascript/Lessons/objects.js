//Suppose I want to model a single person: name, age, and city

//I could use an array like this:
var person = ["Cindy", 32, "Missoula"];

//to retrieve the person's hometown:
person[2] //this is not very meaningul code

//what if I accidentally reversed the order?
var person2 = ["Travis"]

//Perfect case to use an object!

var person = {
	//Uses curly brackets
	name : "Cindy",
	//uses commas to separate key:value pairs
	age: 32,
	city: "missoula"
}

//Unlike arrays, objects have no order.

//To retrieve data you can use bracket and dot notation
console.log(person["name"]);
console.log(person.name);

//You can't use dot notation in some cases:

//If the key name starts with a number
someObject.1blah //invalid
someObject["1blah"] //valid

//If you're retrieving data using a variable. It evaluates the variable and retrieve the value of the key within the variable.

var str = "name";
someObject.str //invalid
someObject[str] //valid

//if the value has a space in it

someObject.fav color //invalid
someObject.["fav color"] //valid

//UPDATING DATA

//Access a property and reassign it

person["age"] += 1;

person.city = "London"; 

//Objects can hold all sorts of data

var junkObject = {
	age: 57, //number
	color: "purple", //string
	isHungry: true, //boolean
	friends: ["Horatio", "Hamlet"], //array
	pet: {
		name: "Rusty",
		species: "dog", 	//object
		age: 2
	}

};

someObject.friends[0].name
//Arrays vs Objects

//Arrays are a list bound to order by index. Objects is just a huge unordered collection of key:value pairs
//An array is a very special type of an object...the keys are always numbers (the indexes), for actual object you can
//name your key.
//To add stuff to an array you need methods. For objects you can just use bracket or dot notation to add any key and any value you want.

//NESTED ARRAYS AND OBJECTS
//We can nest objects inside of arrays and vice-versa

var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["Awesome post", "terrible post"]
	},

	{
		title: "Cats are actually awesome",
		author: "Cat Lover",
		comments: ["I don't like you", "Right..."]
	}
]

//Retrieve second comment from first post
//posts[0].comments[1]