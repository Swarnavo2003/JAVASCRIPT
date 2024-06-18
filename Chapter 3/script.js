// Printing apna college 5 times
 for(let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}


// Calculate sum of 1 to 100
let sum = 0;
let n = 100;
for(let i=0;i<=100;i++) {
    sum=sum+i;
}
console.log("sum =",sum);


// while loop
let i = 1;
while(i<=5) {
    console.log("Apna College");
    console.log("i = ",i);
    i++;
}


// do-while loop
let j = 20;
do {
    console.log("Apna College");
    j++;
} while(i<=10);


// for-of loop
let str = "JavaScript";
let size = 0;
for(let val of str) {
    console.log("val = ",val);
    size++;
}
console.log("string size = ",size);


// for-in loop
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student) {
    console.log("key = ",key," value = ",student[key]);
}


// Program 1 : Print all even numbers from 0 to 100
for(let i=0;i<=100;i++) {
    if(i%2==0) {
        console.log("i = ",i);
    }
}


// Program 2
let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum!=gameNum) {
    userNum = prompt("You entered wrong number, Guess agaim : ");
}
console.log("Congratulations, you entered the right number");


