// Strings
/* 
let str = "ApnaCollege";
console.log(str[0]);
console.log(str[8]);
*/

// Template Literals
/* 
let specialSentence = `This is a template literal ${1 + 2 + 3}`;
console.log(specialSentence);
console.log(typeof specialSentence);

let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price}`;
console.log(output);

console.log("Apna\nCollege");
console.log("Apna\tCollege");
*/

// String Methods
/* 
let str = "ApnaCollege";
let newStr = str.toUpperCase();
let new_Str = newStr.toLowerCase();
console.log(str);
console.log(newStr);
console.log(new_Str);
*/

// let str = "     Apna College   JS     ";
// console.log(str.trim());

// let str = "01234567";
// console.log(str.slice(1,3));
// console.log(str.slice(1,6));

// let str = "Hello";
// console.log(str.slice(0,3));
// console.log(str.slice(1));

// let str1 = "apna";
// let str2 = "college"
// let res = "I am learning JS from " + str1.concat(str2);
// console.log(res);

// let str = "hello";
// console.log(str.replace("h","m"));
// console.log(str.replace("lo","p"));

// let str = "IloveJS";
// console.log(str.charAt(0));
// console.log(str.charAt(3));

// Program 1
let fullName = prompt("Enter full name : ");
let userName = "@" + fullName + fullName.length;
console.log(userName);