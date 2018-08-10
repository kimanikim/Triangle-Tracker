function explore() {

var a = parseInt(prompt("Enter side A"));
var b = parseInt(prompt("Enter side B"));
var c = parseInt(prompt("Enter side C"));

if (isNaN(a) ||isNaN(b) ||isNaN(c) ) {
    alert("THIS IS NOT A NUMBER. PLEASE ADD A NUMBER TO CONTINUE EXPLORING.")
}
if (a === b && b === c && c === a) {
    alert("This is an Equilateral Triangle.")
} else if (a === b || b === c || a === c) {
    alert("This is an Isoscles Triangle.")
} else if (a + b <= c || b + c <= a || a + c <= b) {
    alert("Not a Triangle");
}};