//The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. 
//Log on console both arrays.

var A = [1, 2, -5, 3, -8, 0, 11, 6, -12];

console.log("Array A:", A);

var B = A.filter(function(number) {
	return number > 0;
});

var C = A.filter(function(number) {
	return number < 0;
});

console.log(">0:", B);
console.log("<0:", C);