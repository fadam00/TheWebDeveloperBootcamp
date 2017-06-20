var response = prompt("Are we there yet?");

//Only stops loop after "yes" or "yea" is entered

//Annoyomatic v1
// while(response !== "yes" && response !== "yea"){
// 	var response = prompt("Are we there yet?");
// }

// alert("Yay we finally made it!");

//What if you'd want it to stop once a response that INCLUDES yes is entered?
//Annoyomatic v2

while(response.indexOf("yes") === -1){//.indexOf method searches for the word/character given and returns the index found. If none, it returns -1{

	var response = prompt("Are we there yet?");
}

alert("Yay we finally made it!");



