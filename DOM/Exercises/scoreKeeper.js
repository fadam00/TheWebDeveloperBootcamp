//VARIABLES

var p1Button = document.getElementById("p1"); 
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.getElementById("p1display");
var p2Display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningDisplay = document.querySelector("#wscore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5; 

//FUNCTIONS

function reset(){

	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	gameOver = false;
};

//Player 1 Button and Score
//Displays score for P1, and continues to add 1pt per click until winning score is reached

p1Button.addEventListener("click", function(){
		if(!gameOver){

		p1Score++; //For each click of the p1 button, it adds 1 point toward p1 score.
		console.log(p1Score, winningScore);
			if(p1Score === winningScore){
				p1Display.classList.add("winner");
				gameOver = true;
			}//gameOver becomes true, and prevents from adding more to score.

		p1display.textContent = p1Score; //Displays P1 Score
		
	};
});

//Player 2 Button and Score
//Displays score for P2, and continues to add 1pt per click until winning score is reached

p2Button.addEventListener("click", function(){
			if(!gameOver){
			p2Score++; 

				if(p2Score === winningScore){
					p2Display.classList.add("winner");
					gameOver = true;
				}
			p2display.textContent = p2Score; 
		}
});

//Reset Button

resetButton.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	gameOver = false;
})

//Winning Score Input

numInput.addEventListener("change", function(){ //A change event runs everytime the value changes.
 winningDisplay.textContent = this.value; //Value property shows the value of the input
 winningScore = Number(this.value);//Due to "===" in previous conditionals there's no type coercion, so 
 //the input value must be converted to number, otherwise it'll be interpreted as a string.
 reset();
})

