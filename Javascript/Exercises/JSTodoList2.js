var arrTasks = [];
var stop = false;

while (stop == false){

	var input = prompt("What would you want to do?");

	if(input === "new"){
		newTask();
	} else if (input === "list"){
		listTasks();
	} else if (input === "delete"){
		deleteTask();
	} else if (input == "quit"){
		console.log("Goodbye!");
		stop = true;
	}
}

function listTasks(){
	console.log("**************");
		arrTasks.forEach(function(task, i){
			console.log( i + ": " + task);	
		});
		console.log("**************");
}

function newTask(){
	var newTask = prompt("Enter new task");
		arrTasks.push(newTask);
		console.log("Added task");
}

function deleteTask(){
		//ask for item to be deleted
		var index = prompt("Enter index of task to be deleted");
		//delete that todo using splice();
		arrTasks.splice(index,1);
		//first argument is where to start the currentTarget
		//second arguments is how many items you want to delete following that index
}