//Algorithms for tasks 1 and 2 implement as functions with one argument. Run both function with the same array in one script.js file.

function t1(A) {

	var B = A.filter(function(number) {
		return number > 0;
	});

	var C = A.filter(function(number) {
		return number < 0;
	});

	console.log(">0:", B);
	console.log("<0:", C);
}

function t2(A) {
	var reps = {};

	A.forEach(function(item) {
		if (reps[item] === undefined) {
			reps[item] = 1;
		} else {
			reps[item] += 1;
		}	
	});

	for (var key in reps) {
		console.log(key, "-", reps[key]);
	}
}

var arr = [1, 2, -5, 3, -8, 0, 11, 6, -12, 1, 3, 3, 0, 2, 1, -5, -12, -12, -12, 6, -8];

console.log("Array:", arr);

t1(arr);
t2(arr);