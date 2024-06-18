// CALLBACKS IN JS

/* 
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000);

console.log("three");
console.log("four");
*/

/* 
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);
});

calculator(1, 2, sum);
*/

/* 
const hello = () => {
    console.log("hello");
};

setTimeout(hello, 3000);
*/

// nesting

/* 
let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}

for(let i=0;i<5;i++) {
    let str = "";
    for(let j=0;j<5;j++){
        str = str + j;
    }
    console.log(i, str, typeof(str));
}
*/

/* 
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// callback hell
getData(1, () => {
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, () => {
            console.log("getting data4 ....");
            getData(4);
        });
    });
});
*/

// PROMISES IN JS
/* 
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("some error occured");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataId);
            // resolve("success");
            reject("error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}
*/

/* 
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
        // reject("network error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
})
promise.catch((err) => {
    console.log("rejected", err);
})
*/

/*  
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1......");
asyncFunc1().then((res) => {
    console.log(res);
    console.log("fetching data2......");
    asyncFunc2().then((res) => {
        console.log(res);
    });
});
*/

// Promise Chain
/* 
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
}

getData(1)
.then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) => {
    console.log(res);
});
*/

// ASYNC AWAIT IN JS
/* 
async function hello() {
    console.log("hello");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); // 1st
    await api(); // 2nd
}
*/

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// Async-await
async function getAllData() {
  console.log("getting data1.....");
  await getData(1);
  console.log("getting data2.....");
  await getData(2);
  console.log("getting data3.....");
  await getData(3);
  console.log("getting data4.....");
  await getData(4);
  console.log("getting data5.....");
  await getData(5);
  console.log("getting data6.....");
  await getData(6);
}

// use of iife function
(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}) ();