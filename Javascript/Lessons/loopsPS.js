//Problem Sets
//Print all numbers between -10 and 19

var count = -10;

while(count < 20){
	console.log(count);
	count ++;
}

//For Loop Version

for(var i = -10; i <= 19; i++){
	console.log(i);
}


//Print all even numbers between 10 and 40

var count = 10;

while (count <= 40){
	console.log(count);
	count += 2;
}

//For Loop Version

for(var i = 10; i <= 40; i += 2){
	console.log(i);
}


//Print all odd numbers between 300 and 333;

var count = 300;

while(count <= 333){
	if(count % 2 === 1){
		console.log(count)
	}
	count++;
}

//For Loop Version

for(var i = 300; i <= 333; i++){
	if(i % 2 === 1){
		console.log(i);
	}
}
//Print all numbers divisible by 5 AND 3 between 5 and 50
var count = 5;

while(count <= 50){
	if(count % 3 === 0 && count % 5 === 0){
		console.log(count);
	}

	count++;
}

//For Loop Version
for(var i = 5; i <= 50; i++){
	if(i % 3 === 0 && i % 5 === 0){
		console.log(i);
	}
}