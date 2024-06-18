/* 
console.log(window);
window.console.log("Hello");
window.alert("Hello");

console.log(window.document);
*/

/* 
console.dir(window);

console.dir(window.document);
console.dir(document);

console.dir(document.body);
console.log(document.body);
*/

/* 
console.dir(document.body.childNodes[1]);
document.body.childNodes[3].innerText = "abcd";
*/

/* 
let heading = document.getElementById("heading"); //h1
console.dir(heading);
*/

/* 
let button = document.getElementById("myId");
console.dir(button);

let headings = document.getElementsByClassName("myClass"); 
console.dir(headings);
console.log(headings);
*/

/* 
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
*/

/* 
let firstEl = document.querySelector("#myId"); //1st element
console.log(firstEl);

let allEl = document.querySelectorAll("p"); // all elements
console.log(allEl);
*/

/* 
let div = document.querySelector("div");
console.dir(div);

let heading = document.querySelector("h1");
*/

/* 
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Student";
*/

let divs = document.querySelectorAll(".box");

for(div of divs) {
    console.log(div.innerText);
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}