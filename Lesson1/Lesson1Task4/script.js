// Reverse a given number n (123 -> 321). Log the result on console.

var n = 123456789;
console.log(n);

var result = 0;

while(n > 0) {
    var last_number = n % 10;

    result = result * 10 + last_number;
    n = (n - last_number) / 10;
}

console.log('number', result);