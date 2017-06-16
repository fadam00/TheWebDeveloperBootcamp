//Create secretNumber

var secretNumber = Math.floor(Math.random()*5) + 1;//Random number from 1 to 5.

//Ask user for guess

var guess = Number(prompt("Guess a number"));//prompt saves variables as a string.
alert(guess);

//Check guess

if(guess === secretNumber){
	alert("You got it!");
}

else if(guess > secretNumber){
	alert("Go lower.");
}


else{
	alert("Go higher.");
}

//Nothing will show up because prompt() saves the variable
//as a string. We must make it a number. The way you do so is by 
//enclosing the variable in Number()