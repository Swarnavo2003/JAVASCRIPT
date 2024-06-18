// strings -> immutable
/* 
str = "hello";
str[0] = 'y';
console.log(str);
*/

/* 
let marks = [97, 82, 75, 64, 36]
console.log(marks);
console.log(marks.length); // property
console.log(typeof marks);
console.log(marks[0]);
marks[0] = 66; // lists -> mutable
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[5]);
console.log(marks[100]);
*/

/* 
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
console.log(heroes);
console.log(typeof heroes);

// for loop
for(let idx = 0; idx<heroes.length; idx++) {
    console.log(heroes[idx]);
}

// for-of
for(let hero of heroes) {
    console.log(hero);
}
*/

/* 
let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for(let city of cities) {
    console.log(city.toUpperCase());
}
*/

// Program 1
/* 
let marks = [ 85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(avg);
*/

// Program 2
/* 
let items = [250, 645, 300, 900, 50];

let i = 0; 
for (let val of items) {
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}

for(let i = 0; i<items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);
*/

// Array Methods

/* 
let fooItems = ["potato", "apple", "litchi", "tomato"];
console.log(fooItems);
fooItems.push("chips","burger","panner");
console.log(fooItems);
fooItems.pop();
fooItems.pop();
fooItems.pop();
console.log(fooItems)
console.log(fooItems.toString());
*/

/* 
let marvelHeroes = ["thor", "spiderman", "ironman"];
marvelHeroes.unshift("antman");
console.log(marvelHeroes);
let val = marvelHeroes.shift();
console.log("deleted : ", val);

let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];
let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);
*/

/* 
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));

let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2,2,101,102);
// console.log(arr);

// arr.splice(2, 0, 101);
// console.log(arr);

arr.splice(3, 1);
console.log(arr);
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);