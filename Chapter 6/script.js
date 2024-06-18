/* 
function myFuction() {
    console.log("Welcome to Apna College!");
    console.log("We are learning JS :)");
}
myFuction();
*/

/* 
function myFuction(msg) { //parameter -> input
    console.log(msg);
}

myFuction("I love JS"); // argument
*/

/* 
function sum(x, y) {
    // local variables -> block scope
    console.log(x);
    console.log(y);
    s = x + y;
    return s;
}

let val = sum(3,4);
console.log(val);
*/

// Arrow Function
/* 
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
};

function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    return a * b;
};

const printHello = () => {
    console.log("Hello");
}
*/

/* 
// Program 1
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
        ) {
            count++;
        }
    }
    return count;
}
let val = countVowels("apnacollege");
console.log(val);
    
// Program 2
const countVow = (str) => {
    let count = 0;
    for (let char of str) {
        if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
        ) {
            count++;
        }
    }
    return count;
}
        
val = countVow("abcd");
console.log(val);
        
*/

/* 
// let arr = [1, 2, 3, 4, 5];
let arr = ["pune", "delhi", "mumbai"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});
*/



// for-each function
/* 
let nums = [1, 2, 3, 4, 5, 6];
nums.forEach((num) => {
    console.log(num*num);
})
*/



// map function
/* 
let nums = [ 67, 52, 39];
let newArr = nums.map((val) => {
    return val*2;
});
console.log(newArr);
*/


// filter function
/* 
let arr = [1,2,3,4,5,6,7];
let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);
*/


// reduce function
/* 
let arr = [1, 2, 3, 4];
const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);

let arr = [5, 6, 2, 1, 101, 3];
const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);
*/



// Program 1
/* 
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);
*/


// Program 2
let n = prompt("Enter a number : ");
let arr = [];
for(let i=0;i<=n;i++) {
    arr[i-1] = i;
}
console.log(arr);

const sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(sum);

const factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log(factorial);