// Lecture 11 
/* 
const student = {
    fullName: "swarnavo majumder",
    marks: 72.5,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    calcTax2 : function() {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    }
}

karanArjun.__proto__ = employee;
*/

/* 
class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    
    stop() {
        console.log("stop");
    }
    
    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar("fortuner", 10); //constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12); //constructor
console.log(lexus);
*/

/* 
class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child();

*/

/* 
class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name); // to invoke parent constructor
    }
    work() {
        super.eat();
        console.log("Solve Problems, build something");
    }
}

let engObj = new Engineer("swarnavo");
*/


// Practice Questions
/* 
let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
  }
  editData() {
      DATA = "some new value";
    }
}

let student1 = new User("swarnavo", "abc@gamil.com");
let student2 = new User("akansi", "efg@gmail.com");

let teacher1 = new User("Dean", "dean@college.com");

let admin1 = new Admin("admin", "admin@college.com");
*/

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b ", a+b);
try {
    console.log("a+b ", a+c); // error
} catch(err) {
    console.log(err);
}
console.log("a+b ", a+b);
console.log("a+b ", a+b);
console.log("a+b ", a+b);
console.log("a+b ", a+b);
console.log("a+b ", a+b);
