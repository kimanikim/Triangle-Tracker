function explore() {

var a = parseInt(prompt("Enter side A"));
var b = parseInt(prompt("Enter side B"));
var c = parseInt(prompt("Enter side C"));

if (isNaN(a) ||isNaN(b) ||isNaN(c) ) {
    alert("THIS IS NOT A NUMBER. PLEASE ADD A NUMBER TO CONTINUE EXPLORING.")
}
if (a === b && b === c && c === a) {
    alert("I AM AN EQUILATERAL TRIANGLE.")
} else if (a === b || b === c || a === c) {
    alert("I AM AN ISOSCELES TRIANGLE.")
} else if (a + b <= c || b + c <= a || a + c <= b) {
    alert("I AM NOT A TRIANGLE");
}};