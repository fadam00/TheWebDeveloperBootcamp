



function isEven(num){
	if(num % 2 === 0 ){
		//return true if even
		return true;
	}else {
		//return false if not
		return false;
	}
};

//Refactored Version

function isEven(num){
	return (num % 2 === 0)
}

isEven(4);


function factorial(num){
	if(num === 0){
		return 1
	} else {

		for(i = num; i > 1; --i){
			num = num * (i - 1);
		}

	return num

	}
}

factorial(5);

//Another way to do it

function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 1; i <= num; i++){
		result *= i;
	}

	return result;

}

factorial(5)



