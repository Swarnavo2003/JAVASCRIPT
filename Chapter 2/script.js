/* This is a code that prints 
hello world on our console window */

// console.log("hello world!");

// Arithmetic Operators
/* 
let a = 5;
let b = 2;
console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); 
*/

// Unary Operators
/* 
let a = 5;
let b = 2;
console.log("a = ", a, " & b = ", b);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("++a = ", ++a);
*/

// Assignment Operator
/* 
let a = 5;
let b = 2;

a += 4; 
console.log("a = ", a);

a -= 4; 
console.log("a = ", a);

a *= 4; 
console.log("a = ", a);

a %= 4; 
console.log("a = ", a);

a **= 4; 
console.log("a = ", a);
*/

// Comparison Operator
/* 
let a = 5;
let b = "5";

console.log("a === b", a===b);
console.log("a == b", a==b);
console.log("a != b", a!=b);
console.log("a !== b", a!==b);

a = 5;
b = 3;
console.log("5 < 3", a<b);
console.log("5 <= 3", a<=b);
console.log("5 > 3", a>b);
console.log("5 >= 3", a>=b);
*/

// Logical Operators
/* 
let a = 6;
let b = 5;

console.log("cond1 && cond2 = ", a < b && a === 6);
console.log("cond1 || cond2 = ", a < b || a === 6);
console.log("!(6<5) = ", !(a === 6)); //true
*/

// Conditional Statements
/* 
let mode = "silver";
let color;
if(mode === "dark") {
    color = "black"
} else if (mode === "blue"){
    color = "blue";
} else if(mode === "pink") {
    color = "pink";
} else {
    color = "white";
}
console.log(color);

let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

let num = 10;
if(num%2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
*/

// Question 1 - JS Program
/* 
let num = prompt("Enter a number : ");
if(num % 5 === 0 ){
    console.log(`${num} is a multiple of 5`);
} else {
    console.log(`${num} is NOT a multiple of 5`);
}
*/

// Question 2 - JS Program
let score = 75;
let grade;

if(score >= 90 && score <=100) {
    grade = "A";
} else if(score >= 70 && score <= 89){
    grade = "B";
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else {
    grade = "F";
}

console.log(`According to your scores, your grade was : ${grade}`);
