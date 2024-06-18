console.log("Apna College");
console.log("Swarnavo Majumder");
console.log("I love Javascript");

fullName = "Tony Stark";
console.log(fullName);
console.log(typeof(fullName));

age = 24;
console.log(age);
console.log(typeof(age));

price = 99.99;
console.log(price);
console.log(typeof(price));

radius = 14;
x = null;
console.log(x);
console.log(typeof(x));

y = undefined;
console.log(y);
console.log(typeof(y));

isFollow = true;
console.log(isFollow);
console.log(typeof(isFollow));

fullName = 25;
console.log(fullName);

/*
let fullName = "tony stark";
let age = 24;
let totalPrice = 1000;
console.log(fullName);

const PI = 3.14;
console.log(PI);

{
    let a = 5;
    console.log(a);
}
let a =10;
console.log(a); 
*/

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
console.log(student);
console.log(typeof(student));

student["fullName"] = "Rahul Sharma";
console.log(student.fullName);
console.log(student.age);
console.log(student["cgpa"]);

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
}

console.log(product);
console.log(typeof(product));

const profile = {
    username: "@shradhakhapra",
    isFollow: false,
    followers: 123,
    following: 123,
}

console.log(profile);
console.log(typeof(profile));
console.log(typeof profile["username"]);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["following"]);