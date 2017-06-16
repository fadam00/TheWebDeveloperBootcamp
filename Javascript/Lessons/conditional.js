//Conditionals
//Making decisions with code

//If, Else If, Else

var age = 29;

if(age < 18) {
	console.log("Sorry, you're not old enough to enter the venue.");
}

else if (age < 21) {
	console.log("You cant enter, but can't drink");
}

else {
	console.log("Come on in, you can drink.");
}

//If any of the conditionals is TRUE, it will stop there. If any of them is false it will keep going until it reaches the else statement

//Exercise

if(age < 0){
	console.log("Please enter a valid age.");
}

else if(age === 21){
	console.log("Happy 21st! Have a shot on us.");
}

else if((age % 2) === 1){
	console.log("Your age is odd!");
}

else if(age % Math.sqrt(age) === 0){
	console.log("Perfect square!")
}

else {
	console.log("Y'all ain't got nuffin'!");
}
