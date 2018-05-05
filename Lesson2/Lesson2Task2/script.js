/* The numeric array is given. You should find amount of reps for each element in the array and log it on
console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] you should log:
1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)*/

var A = [5, 31, 5, -1, 31, -1, -1, 5, 8.5, 8.5, 1];

console.log("Array A:", A);

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