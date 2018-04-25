// Check whether a given number is prime. Log on console true or false
var n = 53;
console.log(n);

var result = true;

for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        result = false;
        break;
    }
}


console.log(result);