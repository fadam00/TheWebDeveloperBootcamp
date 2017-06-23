



function isEven(num){
	if(num % 2 === 0 ){
		console.log(true);
	}else {
		console.log(false);
	}
};

isEven(4);

// function factorial(num){
// 	for(var i = num; i > 1; i--){
// 		console.log(i *= (num - 1));
// 	}
// }


// factorial(5); //Don't know...
function factorial(num){
	if(num === 0){
		return 1
	} else {

		for(i = num; i > 1; --i){
			num = num * (i - 1);
		}

	console.log(num);

	}
}

factorial(0);


