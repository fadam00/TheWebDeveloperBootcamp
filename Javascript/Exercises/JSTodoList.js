var todos = ["Buy a turtle"];
var stop = false;
while (stop === false){

	var input = prompt("What would you like to do?");

	if(input === "list"){

		todos.forEach(function(task, i){
			//first argument is the value of each index, the second argument is the index
			console.log(task);
		});
	} else if (input === "new"){
		
		//ask for new task
		var newTodo = prompt("Enter new task:");
		//add to todos array
		todos.push(newTodo);

	} else if (input === "quit"){
		console.log("Goodbye!");
		stop = true;
	}

}
