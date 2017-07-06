var todos = ["Buy a turtle"];

var input = prompt("What would you like to do?");


while (input !== "quit"){

	if(input === "list"){
		console.log(todos);

	} else if (input === "new"){
		
		//ask for new task
		var newTodo = prompt("Enter new task:");
		//add to todos array
		todos.push(newTodo);
	}

	//ask for new input
	var input = prompt("What would you like to do?");
}
console.log("Goodbye!");