//Find the following sum: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n for a given n. Log the result on console
var result =  0;
var n = 3;
console.log(n);

for (var i = 1; i <= n; i++) {
    result += 1/i;
}

console.log(result);