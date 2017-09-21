//printReverse()

function printReverse(array){
	for(i = array.length; i >= 0; i--){
		console.log(array[i]);
	}
}

printReverse([1,2,3,4,5,6,7,8]);

//isUniform

// function isUniform(array){
// 		var proof = array[0];
// 		var arrProof = [];
// 	array.forEach(function(item){
// 		if(item === proof){
// 			arrProof.push(item);
// 		};

// 	});

// 	if(array.length === arrProof.length){
// 			return true;
// 		} else {
// 			return false;
// 		}
// };


//REFACTORED isUniform
function isUniform(array){
	var first = array[0];
	for(i = 1; i < array.length; i++){
		if(array[i] !== first){
			return false
		};
	}
	return true;
}

//sumArray

function sumArray(array){
	var sum = 0;
	array.forEach(function(item){
		sum += item;
	});
	return sum;
};

//max()

function max(array){
	var maxNum = 0;
	array.forEach(function(item){
		if(item > maxNum){
			maxNum = item;
		};
	});
	return maxNum;
}