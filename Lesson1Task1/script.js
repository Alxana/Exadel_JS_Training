//Find roots of quadratic equation with the given coefficients a, b, c. Log on console roots or some message, 
//if there are no roots

var a = 1;
var b = 10;
var c = -24;

console.log('a =', a, '| b =', b, '| c =', c);

var D = Math.pow(b, 2) - 4 * a * c;

if (D < 0) {
    console.log('No result')
} else if (D == 0) {
    var x = -1 * b / (2 * a);
    console.log('x =', x);
} else if (D > 0) {
    var x_1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    var x_2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
    console.log('x1 =', x_1);
    console.log('x2 =', x_2);
}