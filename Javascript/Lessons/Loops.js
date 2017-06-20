//LOOPS

//WHILE LOOPS
//Repeat code WHILE a condition is true

while(someCondition){
	//run some code
}

var count = 1;

while(count < 6) {
	console.log("count is: " + count);
	count++;
	//or whatever number count += 2; or count -= 3; etc.

//count is: 1, still less than 6 so its TRUE, console.log add 1 to count.
//count is: 2, still less than 6 so its TRUE, console.log add 1 to count.
//count is: 3, still less than 6 so its TRUE, console.log add 1 to count.
//count is: 4, still less than 6 so its TRUE, console.log add 1 to count.
//count is: 5, still less than 6 so its TRUE, console.log add 1 to count.
//count is: 6, the condition is now FALSE, BREAK LOOP.
}

//Printing each character in a string

//string we're looping over:
var str = "hello";

//first character is at index 0:
var count = 0; 

while(count < str.length) {
	console.log(str[count]);
	count++;
}

//"h"
//"e"
//"l"
//"l"
//"o"

//Infinite loops occur when the terminating condition in a loop is never true
var count = 0;

while(count < 10){
	console.log("Infinite loop!")
	//THIS WILL RUN INDEFINITELY. YOU MUST ADD AN INCREMENT/DECREMENT TO MAKE STATEMENT FALSE TO BREAK LOO
}

//Problem Sets
//Print all numbers between -10 and 19

var count = -10;

while(count < 20){
	console.log(count);
	count ++;
}