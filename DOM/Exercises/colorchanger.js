var button = document.getElementById("changer");
var body = document.querySelector("body");

//LONG VERSION

// isRed = false;


// button.addEventListener("click", function(){
// 	if(isRed){
// 		body.style.background = "white";
// 		isRed = false;
// 	} else {
// 		body.style.background = "red";
// 		isRed = true;
// 	}
// });


//SHORT VERSION USING CLASSLIST.TOGGLE ONCE THE RED CLASS HAS BEEN ADDED ON CSS
button.addEventListener("click", function(){
	document.body.classList.toggle("red");
})
